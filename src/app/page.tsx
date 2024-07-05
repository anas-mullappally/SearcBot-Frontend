import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  const backgroundImageUrl =
    "https://plus.unsplash.com/premium_photo-1682308449346-0d68b4e3f3fe?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex flex-col justify-center items-center w-[50vw]">
        <Input
          type="text"
          placeholder="Search"
          className="outline-none focus:outline-none"
        />

        <div className="w-full mt-5">
          <Card className="h-[20vh] overflow-auto px-10 py-5 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores exercitationem veritatis explicabo? Inventore, nesciunt
              itaque natus magnam veritatis saepe? Praesentium numquam neque
              accusamus, ipsa soluta odit repellat nemo tenetur officia. Eius
              iste rem fuga numquam sapiente voluptatum voluptates architecto,
              voluptate quasi provident nostrum facere temporibus suscipit
              dolore enim qui et vero eos corporis earum id. Iste adipisci
              itaque nihil doloribus. Tempora, officia ex, iure autem debitis
              rem ad culpa dolores similique ullam reiciendis iste aliquam optio
              perspiciatis odit quaerat? Neque ipsa totam nesciunt atque earum
              velit quibusdam, recusandae animi facilis? Ex repellat, tenetur ad
              qui modi, voluptates consectetur ab eius fugit iusto rerum,
              doloribus in natus placeat quam laboriosam repudiandae aspernatur
              sint eligendi distinctio aperiam perspiciatis sit. Sapiente,
              voluptate quam. Harum excepturi quaerat odit ad dolore et itaque
              officiis, eius delectus nisi, ipsum ut exercitationem! Deserunt
              libero ratione eius numquam saepe. Fugiat eos quo inventore
              dolorum minus velit reiciendis voluptate? Dolore, quas porro? Nemo
              expedita pariatur vero illo numquam, necessitatibus sunt.
              Similique eos laborum dolore architecto accusantium quam, ducimus,
              cum eum atque consequuntur ratione aut nihil numquam asperiores
              velit illum! Amet accusamus a debitis possimus accusantium rerum
              excepturi voluptatum molestias velit! Porro assumenda eos
              voluptates. Nemo incidunt quis quo delectus vero cumque
              repellendus accusantium, inventore facere officia tenetur ex
              animi. Incidunt, ex. Quasi inventore atque eligendi deserunt
              quisquam, odit ipsam laudantium aspernatur necessitatibus porro
              tempora iste praesentium distinctio sapiente consequuntur amet
              neque sit autem voluptatem incidunt! Expedita placeat eligendi
              minima! Consequuntur officia impedit vero tempora placeat eaque
              quo debitis iusto, nostrum ipsum, nulla qui ipsam aliquam
              veritatis enim, nobis soluta? Quibusdam fuga iusto hic eligendi
              illo quasi! Modi, perspiciatis porro? Itaque eius amet, nemo iusto
              eveniet repudiandae voluptas, a voluptatibus officia hic voluptate
              sint culpa. Totam, saepe fugiat. Quam facilis sit ab autem
              voluptate quas labore vero magnam ut quis. A nostrum pariatur
              exercitationem ea ab odit tempore, quisquam doloremque quos
              aspernatur eveniet obcaecati laboriosam nam. Quam quae voluptatem
              nesciunt. Atque voluptate dolore rerum debitis quidem libero
              consequuntur molestias natus? Minus eveniet quasi alias eum
              debitis inventore voluptate ducimus labore temporibus molestias
              saepe corporis non harum unde perspiciatis, natus ipsa voluptatem,
              sapiente architecto quos quidem error quam. Dolorem, cupiditate
              mollitia. Unde dignissimos consequuntur minus necessitatibus enim
              earum repudiandae rerum. Sed quae ea laboriosam fugit, corporis
              libero illum fugiat, error perferendis qui nulla. Consectetur
              voluptatibus quasi voluptatum odio rem, quidem consequatur!
              Facilis quas nesciunt explicabo quae? Ipsa unde minima, at fuga,
              blanditiis consectetur consequuntur sunt, et asperiores
              consequatur vel necessitatibus perspiciatis facilis totam dolor
              voluptas enim doloremque odio architecto est dicta? Quaerat
              quibusdam quas facere obcaecati aliquid numquam, tempora ut
              officiis beatae modi? A magnam facere cupiditate similique
              asperiores nisi, aspernatur laborum provident? Ab, excepturi! Modi
              tempore provident quae ratione accusantium! Tempore dolorum itaque
              maiores sunt non, recusandae, veritatis deleniti provident aliquam
              eius laudantium eligendi expedita saepe vitae repellendus
              consequuntur debitis molestiae! Commodi obcaecati consectetur esse
              asperiores quisquam, voluptates dolor veritatis! Id vero, vitae
              harum inventore in tenetur consequatur esse eveniet necessitatibus
              nam ducimus aliquam nobis voluptates quis error aspernatur
              delectus fugit magni. Similique temporibus ut porro, inventore
              quia quidem? Fuga? Accusantium eius veniam ipsum nulla velit
              provident amet eaque laborum est, possimus praesentium ratione
              numquam fuga ea blanditiis quasi, eos rem adipisci iure voluptas
              aut. Voluptates adipisci asperiores necessitatibus quasi. Nihil
              cumque iure enim magnam? Excepturi quasi voluptas sit obcaecati
              quam cupiditate neque aspernatur, alias delectus nemo
              necessitatibus mollitia perspiciatis tempore architecto
              consectetur hic, repudiandae laboriosam nostrum maxime assumenda
              optio. Magni minima corrupti veritatis molestias. Ab magni
              distinctio ipsam expedita consequuntur quae autem veritatis natus
              nulla unde, repellat quasi voluptate reprehenderit inventore
              voluptatibus tenetur earum fugit corrupti. Repudiandae, recusandae
              molestias.
            </p>
          </Card>
        </div>

        {/* ---------- specialty section start -----------------  */}
        <div className="w-full mt-5">
          <Card
            className="h-[20vh] flex justify-center items-center"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-white p-4 bg-opacity-40 rounded text-6xl cursor-default">
              Cardiology
            </div>
          </Card>
        </div>
        {/* ---------- specialty section end -----------------  */}

        {/* ---------- Doctors suggestion section start -----------------  */}
        <div className="w-full mt-5 flex gap-2">
          <Card className="w-1/2 h-[30vh] ">
            <div className="h-3/5	 w-full  flex justify-center ">
              <div className="mt-5 h-4/5	w-9/12 ">
                <Image
                  src="https://images.unsplash.com/photo-1550831106-0994fe8abcfe?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="dr-image"
                  height={1000}
                  width={500}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="h-1/2 flex justify-center mt-3 text-xl">
              Dr. Name
            </div>
          </Card>
          <Card className="w-1/2 h-[30vh]">
            <div className="h-3/5	 w-full  flex justify-center ">
              <div className="mt-5 h-4/5	w-9/12 ">
                <Image
                  src="https://images.unsplash.com/photo-1550831106-0994fe8abcfe?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="dr-image"
                  height={1000}
                  width={500}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="h-1/2 flex justify-center mt-3 text-xl">
              Dr. Name
            </div>
          </Card>
        </div>
        {/* ---------- Doctors suggestion section end -----------------  */}
      </div>
    </div>
  );
}
