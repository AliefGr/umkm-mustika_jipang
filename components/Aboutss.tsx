import React from "react";
import Image from "next/image";
import Separator from "./Separator";

const Aboutss = () => {
  return (
    <section id="about" className="">
      <div className="flex">
        {/* 1 */}
        <div className="hidden relative flex-1 xl:flex justify-center items-center">
          <div className="w-full absolute z-40 top-0 h-full bg-black/60" />
          <Image
            alt=""
            src="/assets/about/aboutJip.png"
            fill
            quality={100}
            className="object-cover object-left-top"
          />
        </div>

        {/* 2 */}
        <div className="bg-primary flex-1 mx-auto py-12">
          {/* overlay */}
          {/* <div className='w-full h-full absolute top-0 bg-black/[0.85] z-10'></div> */}
          {/* imgae & image*/}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-2">Tentang kami</h2>
            <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Separator bg="accent" />
            {/* <div>
                <Image src="/public/assets/about/jipangbg.png" fill quality={100} priority alt='' className='object-contain'/> 
              </div> */}
            <div className=" text-justify max-w-xl px-4 text-base lg:text-lg">
              <p className="mb-3">
                Jipang Kacang Mustika telah hadir sejak 2011 sebagai pelopor
                jipang kacang berkualitas tinggi di Kebumen. Didirikan oleh
                Bapak Makhasin di Desa Panggel, kami berkomitmen menghadirkan
                camilan tradisional yang menggugah selera dengan mempertahankan
                resep turun-temurun keluarga.
              </p>
              <p className="">
                Dengan pengalaman lebih dari 13 tahun dalam industri makanan
                ringan, setiap produk jipang kacang kami dibuat menggunakan
                kacang pilihan berkualitas tinggi dan proses produksi yang
                higienis. Berlokasi strategis di Kelurahan Panjer, Kecamatan
                Kebumen, kami melayani kebutuhan jipang kacang untuk seluruh
                wilayah Kabupaten Kebumen dan sekitarnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutss;
