import Image from "next/image";
import React from "react";

const Prodcuts = () => {
  return (
    <section id="menu" className="pt-16 pb-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="lg:text-6xl text-center text-4xl font-bold ">Our Menu</h2>
          {/* <div className="mb-4">
                    <Separator bg="accent" />
                </div> */}
          {/* <p className="text-center max-w-[620px] mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat
                    culpa voluptate nisi, magnam consectetur atque harum laborum maxime
                    voluptatum!
                </p> */}
        </div>

        {/* Menu Products  */}
        <div className="relative lg:max-w-7xl mx-auto">
          <div className="items-center flex justify-center">
            <div className="w-1/2 relative h-40 w-50 md:h-52  lg:h-80 lg:w-[600px]">
              <Image
                src="/assets/menu/jipang2.png"
                alt="gmabar 1"
                fill
                className="object-cover bg-no-repeat object-top"
              />
              {/* Overlay gradient di atas gambar */}
              <div className="absolute inset-0 bg-gradient-to-l from-white  via-white/0 via-55% to-transparent" />
            </div>
            {/* conten */}
            <div className="w-1/2 ">
              <h1 className="font-bold text-2xl lg:text-[45px]">
                Harga Rp 12.000
              </h1>
              <p className="text-sm lg:text-base mt-2 lg:mt-4">
                Bottle of Fine Sushi Tower For 2+ Dessert
              </p>

              <a
                href="https://wa.me/62895606419147"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-50"
              >
                <button className="bg-accent hover:bg-accent-hover md:px-7 md:py-3 text-sm lg:text-base py-2 px-5 text-white mt-4 rounded-md">
                  Pesan
                </button>
              </a>
            </div>
          </div>
          <div className=" items-center flex justify-center">
            {/* conten */}
            <div className="w-1/2">
              <h1 className="font-bold text-2xl lg:text-[45px]">
                Harga Rp 12.000
              </h1>
              <p className="text-sm lg:text-base mt-2 lg:mt-4">
                Bottle of Champagne Fine Sushi Tower For 2+ Dessert
              </p>
              <a
                href="https://wa.me/62895606419147"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-5 py-2 md:px-7 md:py-3  bg-accent hover:bg-accent-hover text-sm lg:text-base text-white mt-4 rounded-md">
                  Pesan
                </button>
              </a>
            </div>
            <div className="relative w-1/2 h-40 w-50 md:h-52 lg:h-80 lg:w-[600px]">
              <Image
                src="/assets/menu/jipang1.png"
                alt="gmabar 1"
                fill
                className=""
              />
              {/* Overlay gradient di atas gambar */}
              <div className="absolute inset-0 bg-gradient-to-r from-white  via-white/0 via-55% to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prodcuts;
