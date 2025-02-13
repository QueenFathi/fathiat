import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/Riley.png";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Fathiat's Portfolio"
        />
      </Head>

      <article data-section id="home"
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-48 md:!pt-32 sm:!pt-44 xs:!pt-24">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
            <div className="w-1/2 lg:hidden md:flex flex self-center max-h-fit">
              {
                <Image
                  priority={true}
                  src={profilePic}
                  alt="image"
                  className="h-auto w-100"
                  height={340}
                  width={340}
                  sizes="33vw"
                />
              }
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi, my name is Fathiat Abimbola Odutayo"
                className="!text-left lg:!text-center sm:!text-3xl md:!text-4xl lg:!text-5xl xl:!text-6xl 2xl:!text-6xl"
              />
              <div className="flex w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                  I create engaging web experiences.
                </h2>
              </div>

              <p className="my-4 text-lg font-medium md:text-base sm:!text-base">
                I'm a freelance front-end web developer passionate
                about creating dynamic and user-friendly web experiences. With a
                keen eye for design and a robust understanding of front-end technologies.
              </p>
              <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                <Link
                  href="/#about"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Get To Know Me
                </Link>
                <Link
                  href="/#project"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
                >
                  projects
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <div className="fixed right-8 bottom-8 inline-block md:hidden">
          <iframe
            className="iframe"
            title="Noongar Seasonal Calendar"
            width="280"
            height="120"
            src="https://seasonal-au.netlify.app/"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div> */}
      </article>

      <About />
      <Projects />
      <Contact />
    </>
  );
}
