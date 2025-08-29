import React from "react";
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutgoingMail, MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { TbLocation } from "react-icons/tb";


const Contactt = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=-7.676782479172385,109.6696846642689";
  return (
    <section id="contact" className="container py-16">
      {/*  */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="lg:text-6xl text-4xl font-bold mb-3">Hubungi Kami</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
        {/* Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hubungi Kami */}
          <div className="flex flex-col space-y-3">
            {/* Lokasi */}
            <div className="flex items-center gap-4">
              <div className="bg-accent/40 p-2 rounded-full text-accent">
                <IoLocationOutline className="text-3xl" />
              </div>
              <div>
                <p className="font-bold">Alamat</p>
                <p>
                  Desa Panggel RT 03/07, Kelurahan Panjer, Kecamatan Kebumen,
                  Kabupaten Kebumen
                </p>
              </div>
            </div>
            {/* Telephone */}
            <div className="flex items-center gap-4">
              <div className="bg-accent/40 p-2 rounded-full text-accent">
                <MdOutlineMail className="text-3xl" />
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p> jipangkacangmustika@gmail.com</p>
              </div>
            </div>
            {/* Telephone */}
            <div className="flex items-center gap-4">
              <div className="bg-accent/40 p-2 rounded-full text-accent">
                <IoPhonePortraitOutline className="text-3xl" />
              </div>
              <div>
                <p className="font-bold">Telepone</p>
                <p> +62 895-6064-19147</p>
              </div>
            </div>
            {/* Buton */}
            <div className="border-t border-t-gray-300 py-4">
              <a href={googleMapsUrl} target="_blank">
                <button className="btn text-white w-full rounded-lg py-3 lg:py-4 font-semibold">
                     Lihat Rute
                </button>
              </a>
            </div>
          </div>
          {/* Map */}
          <div className="bg-blue-300 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.25743089774534!2d109.66961090351896!3d-7.676758555646845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ac9c0b53983df%3A0x3655bc8e655dfb81!2sUMKM%20JIPANG%20MUSTIKA!5e0!3m2!1sid!2sid!4v1756087001668!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen={true}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactt;
