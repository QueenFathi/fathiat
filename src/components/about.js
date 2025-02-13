import Layout from "@/components/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <main data-section id="about"
        className={`flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-6 flex flex-col items-start justify-start xl:col-span-8 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium text-lg xs:text-base">
              I am Fathiat Abimbola Odutayo, a passionate Frontend Developer dedicated to crafting responsive, accessible, and user-friendly web applications. With a background in Computer Science and strong skills in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS, I specialize in creating sleek and interactive user interfaces that provide seamless digital experiences. I am driven by my love for clean design, efficient code, and continuous learning.
              </p>
              <p className="my-4 font-mediumn text-lg xs:text-base">
              I enjoy bringing ideas to life through code, paying close attention to performance optimization, scalability, and accessibility. My experience with package management tools like pnpm and version control using Git ensures efficient workflows and high-quality deliverables.
              </p>
              <p className="my-4 font-mediumn text-lg xs:text-base">Beyond coding, I have a background in data analysis, which enhances my problem-solving abilities and attention to detail. I am also an educator, with a talent for breaking down complex technical and scientific concepts to make them easier to understand. My role as a university Senate member showcases my leadership and commitment to knowledge-sharing.</p>
              <p className="my-4 font-mediumn text-lg xs:text-base">
              I am always eager to explore new technologies, collaborate on exciting projects, and contribute to innovative web solutions. In the next few years, I aim to deepen my knowledge of backend technologies and become a more versatile full-stack developer.
              </p>
              <p  className="mt-4 font-mediumn text-lg xs:text-base">Let’s build impactful digital experiences together!</p>
            </div>
            {/* <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl border-2 border-solid border-dark"
                priority={true}
                src={profile}
                alt="Travis Lord"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div> */}
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={1461} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Days of Coding
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={20} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Projects
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={2} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Clients
                </h3>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
