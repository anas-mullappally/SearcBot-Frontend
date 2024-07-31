import OpenAI from "openai";
import { NextResponse } from "next/server";
import nlp from "compromise";

const client = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
});

function manipulateJsonObject(originalJson) {
  return {
    reasons:
      originalJson["Potential reasons"] || originalJson["potential_reasons"],
    specialities:
      originalJson["Specialties"] ||
      originalJson["specialities"]?.map((speciality) =>
        speciality?.toLowerCase()
      ),
  };
}

async function getCompletion(prompt) {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",

      messages: [
        {
          role: "system",
          content: `You are a Hospital Search Assistant. When given a user's query describing a symptom, your task is to generate:
1. Potential reasons for the symptom.
2. A list of relevant medical specialties in an array format.

For example, given the query: "I am facing a headache.", your response should be:
Potential reasons: "A headache can be caused by various factors such as stress, tension, sinus issues, or migraines. It's advisable to consult a Neurologist for a thorough evaluation and appropriate treatment."
speciality: ["Neurology", "Ophthalmology"]`,
        },
        {
          role: "system",
          content: "Please provide the response in JSON format.",
        },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
      max_tokens: 150,
    });

    const originalJson = JSON.parse(response.choices[0].message.content.trim());
    const { specialities, reasons } = manipulateJsonObject(originalJson);

    return {
      success: true,
      specialities,
      reasons,
      message: "success",
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
}

export async function POST(req) {
  try {
    const medicalKeywords = [
      "headache",
      "fever",
      "cough",
      "pain",
      "nausea",
      "medicine",
      "doctor",
      "treatment",
      "symptom",
      "stomachache",
      "ache",
      "infection",
      "flu",
      "virus",
      "bacteria",
      "allergy",
      "rash",
      "injury",
      "burn",
      "fracture",
      "sprain",
      "dizziness",
      "fatigue",
      "vomiting",
      "diarrhea",
      "constipation",
      "insomnia",
      "surgery",
      "diagnosis",
      "therapy",
      "cancer",
      "tumor",
      "asthma",
      "diabetes",
      "hypertension",
      "blood pressure",
      "cholesterol",
      "arthritis",
      "migraine",
      "depression",
      "anxiety",
      "mental health",
      "psychology",
      "neurology",
      "cardiology",
      "pediatrics",
      "gynecology",
      "dermatology",
      "orthopedics",
      "urology",
      "gastroenterology",
      "endocrinology",
      "ophthalmology",
      "otolaryngology",
      "pulmonology",
      "rheumatology",
      "immunology",
      "nephrology",
      "hematology",
      "oncology",
      "emergency",
      "paramedic",
      "ambulance",
      "pharmacy",
      "vaccine",
      "immunization",
      "checkup",
      "healthcare",
      "clinic",
      "hospital",
      "urgent care",
      "intensive care",
      "rehabilitation",
      "radiology",
      "x-ray",
      "ultrasound",
      "MRI",
      "CT scan",
      "biopsy",
      "blood test",
      "laboratory",
      "genetics",
      "nutrition",
      "diet",
      "exercise",
      "physical therapy",
      "occupational therapy",
      "speech therapy",
      "audiology",
      "dentistry",
      "oral health",
      "optometry",
      "eyewear",
      "hearing aids",
      "prosthetics",
      "palliative care",
      "hospice",
      "wound care",
      "inflammation",
      "sepsis",
      "anemia",
      "osteoporosis",
      "thyroid",
      "adrenal",
      "pancreas",
      "liver",
      "kidney",
      "bladder",
      "prostate",
      "breast",
      "colon",
      "lung",
      "skin",
      "brain",
      "heart",
      "blood",
      "lymph",
      "muscle",
      "joint",
      "bone",
      "eye",
      "ear",
      "nose",
      "throat",
      "mouth",
      "tooth",
      "gum",
      "hair",
      "nail",
      "foot",
      "hand",
      "back",
      "neck",
      "spine",
      "rib",
      "pelvis",
      "abdomen",
      "chest",
      "pelvic",
      "genital",
      "urinary",
      "digestive",
      "respiratory",
      "circulatory",
      "nervous",
      "immune",
      "endocrine",
      "reproductive",
      "skeletal",
      "muscular",
      "integumentary",
    ];

    let prompt = await req.json();
    prompt = prompt.trim().toLowerCase();
    if (!prompt) {
      return NextResponse.json({ success: false, error: "prompt is required" });
    }
    if (!prompt.split(" ").some((token) => medicalKeywords.includes(token))) {
      return NextResponse.json({
        success: false,
        error: "Query is not medical-related.",
      });
    }

    const { success, message, specialities, reasons } = await getCompletion(
      prompt
    );
    if (success) {
      return NextResponse.json({
        success,
        specialities,
        reasons,
        message: "success",
      });
    } else {
      return NextResponse.json({ success, message });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function GET(req) {
  const { data } = req.query;
  const decodedArray = JSON.parse(decodeURIComponent(data));
}
