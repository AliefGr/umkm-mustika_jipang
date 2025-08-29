import Image from "next/image";
import ExploreItem from "./ExploreItem";

const Explore = () => {
  return (
    <section className="py-12 xl:py-12 xl:pt-12 xl:h-[80vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center ">
        <div className="w-full flex flex-col lg:flex-row gap-24 xl:gap-20">
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-7 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* item 1 */}
            <ExploreItem
              itemCSS="xl:text-left items-start"
              icon="kacang-icon.svg"
              text={{
                title: "Kacang Pilihan",
                description:
                  "Pilihan kacang tanah terbaik, disangrai hingga harum dan renyah.",
              }}
            />
            {/* item 2 */}
            <ExploreItem
              itemCSS="xl:text-left items-start"
              icon="gula-icon.svg"
              text={{
                title: "Gula Asli",
                description:
                  "Manis dari Gula Merah Alami tanpa pemanis buatan menghasilkan rasa yang enak, legit dan manis",
              }}
            />
          </div>
          {/* <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt=""
                className="object-cover"
                quality={100}
                priority
                data-scroll
                data-scroll-speed="0.1"
              />
            </div>
          </div> */}
          <div className="flex-1  flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-7 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* item 3 */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="no_preservatives.svg"
              text={{
                title: " Tanpa Pengawet",
                description:
                  "Jipang Kacang kami tidak mengandung pengawet kimia. ",
              }}
            />
            {/* item 4 */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="no_color.svg"
              text={{
                title: "Tanpa Pewarna",
                description:
                  "Jipang Kacang kami tidak mengandung pewarna buatan.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
