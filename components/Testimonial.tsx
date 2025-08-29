"use client";

import { cn } from "@/lib/utlis";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-blue-500/10 p-1 py-0.5 font-bold text-blue-500",
        className
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role?: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      id="testimonial"
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        // theme styles
        "border-border bg-card/50 border shadow-sm",
        // hover effect
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="text-muted-foreground text-sm font-normal select-none">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <img
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full ring-1 ring-blue-500/20 ring-offset-2"
        />

        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-muted-foreground text-xs font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
}
const testimonials = [
  {
    name: "widaf03",
    role: "",
    img: "https://down-tx-id.img.susercontent.com/e1d709150ff1d0e90e41932175e43879_tn.webp",
    description: (
      <p>
        Tadi sudah coba makan 3 enak, sudah lama tidak menemukan jajan seperti
        ini.
      </p>
    ),
  },
  {
    name: "rinaasror",
    img: "https://down-id.img.susercontent.com/file/id-11134233-7ra0q-md4oe5lekzp44b_tn",
    description: (
      <p>enak si. bm ini udah seminggu akhirnya bisa makan dan nemu yg enak</p>
    ),
  },
  {
    name: "ponirarsyatharakbar",
    img: "https://down-id.img.susercontent.com/file/4fea805113344d0d8cdbbc975d5ce71c_tn",
    description: <p>Oke suka jipang kacang enak</p>,
  },
  {
    name: "ipunk_anis",
    img: "https://down-id.img.susercontent.com/file/7b931e1a292388fbe6647c64aa3affd5_tn",
    description: (
      <p>
        Camilan yang enak dan nikmat, sudah dua kali belanja disini. Terimakasih
      </p>
    ),
  },
  {
    name: "anakkucingjelek",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    description: (
      <p>
        Bagi yang tidak suka manis tapi suka makan kacang ini makanan yg
        rekomendasi.
      </p>
    ),
  },
  {
    name: "p*****a",
    img: "https://marketplace.canva.com/gJly0/MAGDkMgJly0/1/tl/canva-user-profile-icon-vector.-avatar-or-person-icon.-profile-picture%2C-portrait-symbol.-MAGDkMgJly0.png",
    description: (
      <p>
        Langganan sih dr tahun kemaren Jipang nya enak kacang nya renyah Solusi
        no repot2 klo mudik
      </p>
    ),
  },
  {
    name: "b*****s",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    description: (
      <p>
        Rasa kacang nya berasa banget, enak di mulut. Maaf foto nya gx ada udah
        habis duluan. Besok bakal jadi langganan nih.
      </p>
    ),
  },
  {
    name: "neilkrish",
    img: "https://down-id.img.susercontent.com/file/34ada7bccda2d208bca73af4111157d3_tn",
    description: (
      <p>Enak manisnya pas pokoknya good quality biar bintang yg berbicara</p>
    ),
  },
  {
    name: "omendom61",
    img: "https://down-id.img.susercontent.com/file/ccb8a4b11241fd9065d4c31976ec00a9_tn",
    description: (
      <p>mantap rasanya khass ga berubah istri jd puas ngidamnya :D 🫠</p>
    ),
  },
  {
    name: "aryfiana",
    img: "https://down-id.img.susercontent.com/file/5642ef91987c9a70bec4b4af3dc619ea_tn",
    description: <p>Ini aseli recomended, jd ingat masa kecil....</p>,
  },
];

export default function Testimonialss() {
  return (
    <section className="relative  py-12 bg-primary">
      <div className="container lg:max-w-6xl">
        {/* Decorative elements */}
        {/* <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" /> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white  text-center font-bold  lg:text-6xl text-4xl mb-2">
            Testimonial
          </h1>
          <p className="text-center mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          {/* <h3 className="text-muted-foreground mx-auto mb-8 max-w-lg text-center text-lg font-medium tracking-tight text-balance">
            Don&apos;t just take our word for it. Here&apos;s what{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
              real developers
            </span>{" "}
            are saying about{" "}
            <span className="font-semibold text-blue-500">NexaUI</span>
          </h3> */}
        </motion.div>
        {/* Fade bawah */}
        <div className="pointer-events-none absolute inset-x-0 h-32 z-40 w-full bg-gradient-to-t from-primary bottom-10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-30 z-40 h-32 w-full bg-gradient-to-b from-primary to-transparent" />

        <div className="relative mt-6 max-h-screen overflow-hidden">
          <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
            {Array(Math.ceil(testimonials.length / 3))
              .fill(0)
              .map((_, i) => (
                <Marquee
                  vertical
                  key={i}
                  className={cn({
                    "[--duration:60s]": i === 1,
                    "[--duration:30s]": i === 2,
                    "[--duration:70s]": i === 3,
                  })}
                >
                  {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: Math.random() * 0.8,
                        duration: 1.2,
                      }}
                    >
                      <TestimonialCard {...card} />
                    </motion.div>
                  ))}
                </Marquee>
              ))}
          </div>
          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%"></div>
          <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%"></div>
        </div>
      </div>
    </section>
  );
}
