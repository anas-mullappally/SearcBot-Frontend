"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { SetStateAction, useState } from "react";

interface Doctor {
  id: string;
  imageurl: string;
  name: string;
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState({
    reasons: "",
    specialities: [],
    doctors: [],
  });
  const [error, setError] = useState("");
  const [openAiLoading, setOpenAiLoading] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt) {
      setError("Prompt is required");
      return;
    }

    try {
      setOpenAiLoading(true);
      setSecondLoading(true);

      // Fetch response from OpenAI
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prompt),
      });
      // converting to json
      const data = await response.json();

      if (data.success) {
        setResult({
          reasons: data.reasons,
          specialities: data.specialities,
          doctors: [],
        });
        setOpenAiLoading(false);

        // START OF FETCH DOCTORS

        //encoding array (to pass to server)
        const encodedArray = encodeURIComponent(
          JSON.stringify(data.specialities)
        );
        //api call for fetch doctors
        const doctorsResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/doctors?specialities=${encodedArray}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        // converting to json
        const doctorsData = await doctorsResponse.json();

        setResult((prevResult) => ({
          ...prevResult,
          doctors: doctorsData.doctors,
        }));
        setSecondLoading(false);
        // END OF FETCH DOCTORS
      } else {
        setError(data.error);
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setOpenAiLoading(false);
      setSecondLoading(false);
    }
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    if (error) setError("");
    if (result.reasons){
      setResult({ doctors: [], reasons: "", specialities: [] });
    }
    setPrompt(e.target.value);
  };

  const backgroundImageUrl =
    "https://plus.unsplash.com/premium_photo-1682308449346-0d68b4e3f3fe?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex flex-col justify-center items-center w-[50vw]">
        <form onSubmit={handleSubmit} className="w-full">
          <Input
            type="text"
            placeholder="Search"
            className="outline-none focus:outline-none"
            value={prompt}
            onChange={handleChange}
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        <div className="w-full mt-5">
          {openAiLoading ? (
            <>
              <Skeleton className="h-[10vh] w-full px-5 py-2" />
              <Skeleton className="h-[10vh] w-full px-5 py-2" />
            </>
          ) : (
            <Card className="h-[20vh] overflow-auto px-10 py-5 text-justify">
              <p className="whitespace-pre-wrap ">
                {result.reasons ? result.reasons : "Please enter search query"}
              </p>
            </Card>
          )}
        </div>

        {/* ---------- specialty section start -----------------  */}
        <div className="w-full mt-5">
          {openAiLoading ? (
            <Skeleton className="h-[20vh] w-full px-10 py-5 " />
          ) : (
            <Card
              className="h-[20vh] flex justify-center items-center"
              style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-white p-4 bg-opacity-40 rounded text-xl cursor-default">
                {result?.specialities &&
                  result.specialities.map((item, i) => (
                    <span key={item}>
                      {i !== result.specialities.length - 1
                        ? `${item}, `
                        : item}
                    </span>
                  ))}
              </div>
            </Card>
          )}
        </div>
        {/* ---------- specialty section end -----------------  */}

        {/* ---------- Doctors suggestion section start -----------------  */}
        <div className="w-full mt-5 flex gap-2">
          {secondLoading ? (
            <>
              <Skeleton className="w-1/2 h-[30vh]" />
              <Skeleton className="w-1/2 h-[30vh]" />
            </>
          ) : (
            <>
              {result.doctors.length > 0 ? (
                result.doctors.map((item: Doctor) => (
                  <Card className="w-1/2 h-[30vh] " key={item.id}>
                    <div className="h-3/5	 w-full  flex justify-center ">
                      <div className="mt-5 h-4/5	w-9/12 ">
                        <Image
                          src={item.imageurl}
                          alt="dr-image"
                          height={1000}
                          width={500}
                          className="h-full w-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="h-1/2 flex justify-center mt-3 text-xl">
                      {item.name}
                    </div>
                  </Card>
                ))
              ) : (
                <>
                  <Card className="w-1/2 h-[30vh] flex items-center justify-center">
                    Doctor details
                  </Card>
                  <Card className="w-1/2 h-[30vh] flex items-center justify-center">
                    Doctor details
                  </Card>
                </>
              )}
            </>
          )}
        </div>
        {/* ---------- Doctors suggestion section end -----------------  */}
      </div>
    </div>
  );
}
