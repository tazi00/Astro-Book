import { AstroPostCard } from "../../../(feed)/page";

function CattegoryPage() {
  return (
    <section className="pt-5 mb-20">
      <div className=" bg-white overflow-hidden flex flex-col md:flex-row border-b border-secondary pb-12">
        {/* Image Section */}
        <div className="md:w-[35%] bg-purple-500 rounded-xl ms-10 overflow-hidden">
          <img
            src="/numerology.jpg" // yahan apna image path daalna
            alt="Numerology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="ps-7 pe-[100px] md:w-[65%]">
          <h1 className="text-[36px] font-bold text-primary leading-[36px] ">
            NUMEROLOGY
          </h1>
          <p className="font-medium leading-[15px] mb-4 text-[15px]">
            For the concept in Ismailism, see Numerology (Ismailism). For the
            wireless communication term, see Numerology (wireless).
          </p>
          <p className="tertiary-text mb-4">
            Number symbolism is an ancient and pervasive aspect of human
            thought, deeply intertwined with religion, philosophy, mysticism,
            and mathematics. Different cultures and traditions have assigned
            specific meanings to numbers, often linking them to divine
            principles, cosmic forces, or natural patterns.[3]
          </p>

          <p className="tertiary-text mb-4">
            The practice of gematria, assigning numerical values to words and
            names and imputing those values with religious meaning, dates back
            to antiquity. An Assyrian inscription from the 8th century BC,
            commissioned by Sargon II declares "the king built the wall of
            Khorsabad 16,283 cubits long to correspond with the numerical value
            of his name".[7] Rabbinic literature used gematria to interpret
            passages in the Hebrew Bible.
          </p>

          <p className="tertiary-text mb-4">
            The practice of using alphabetic letters to represent numbers
            developed in the Greek city of Miletus, and is thus known as the
            Milesian system.[8] Early examples include vase graffiti dating back
            to the 6th century BCE.[9] common use by the reign of Alexander the
            Great (336–323 BCE) and was adopted by other cultures during the
            subsequent Hellenistic period.[8] It was officially adopted in Egypt
            during the reign of Ptolemy II Philadelphus (284–246 BCE).[8]
          </p>
        </div>
      </div>

      <div className="ms-10 mt-5">
        <h4 className="text-[24px] font-normal   text-primary">
          {" "}
          <span className="text-secondary"> Posts on </span> Numerology
        </h4>

        <div className="grid grid-cols-2  gap-5">
          <div className="mt-5">
            <AstroPostCard post={{}} />
          </div>
          <div>
            <NumerologistList />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CattegoryPage;

export function NumerologistList() {
  const data = [
    { id: 1, name: "Suprio Karmakar", type: "Vedic", following: true },
    { id: 2, name: "Suprio Karmakar", type: "Vedic", following: false },
    { id: 3, name: "Suprio Karmakar", type: "Vedic", following: false },
    { id: 4, name: "Suprio Karmakar", type: "Vedic", following: false },
    { id: 5, name: "Suprio Karmakar", type: "Vedic", following: false },
    { id: 6, name: "Suprio Karmakar", type: "Vedic", following: false },
  ];

  return (
    <div className="w-full  bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-gray-400 text-2xl font-normal">
          Top Numerologists for you
        </h2>

        <div className="text-primary text-xl cursor-pointer">🔍</div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-none"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center text-white">
                  👤
                </div>

                {item.following && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>

              <div>
                <p className="font-semibold text-xl text-secondary">
                  {item.name}
                </p>

                <div className="flex  items-center justify-between">
                  <p className="text-sm text-tertiary mt-[-2px]">{item.type}</p>

                  <p
                    className={`text-xs mt-1 ${
                      item.following ? "text-primary" : "text-primary"
                    }`}
                  >
                    {item.following ? "Following" : "Follow +"}
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <button className="bg-primary text-white px-4 py-2 text-xs  hover:opacity-90 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
