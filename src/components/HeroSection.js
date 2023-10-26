import { profileData } from "../../data/data";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

export const HeroSection = () => {
  return (
    <section
      id="main"
      className="container m-auto px-5 mt-20 pb-20 border-b border-b-black"
    >
      <div className="flex flex-col items-center gap-4 justify-between sm:flex-row">
        <div className="order-2 sm:order-1 flex flex-col justify-evenly gap-20">
          <div>
            <p className="text-[#C4CFDE] text-xl">Welcome to Digital World</p>
            <p className="text-white text-6xl font-bold mt-4">
              Hi, I am{" "}
              <span className="text-[#FF014F]">{profileData.name}</span>
            </p>
            <p className="text-white text-6xl font-bold mt-6">
              a Software Developer
            </p>
          </div>
          <div>
            <p className="text-[#C4CFDE] text-xl">Find me at</p>
            <div className="flex mt-2 gap-5">
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=100028028992153&mibextid=ZbWKwL"
                }
                target="_blank"
                className="p-4 bg-[#1D2024] shadow-lg shadow-slate-800 "
              >
                <FiFacebook className="text-white h-10 w-10 hover:text-[#FF014F]" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/anus-ali-khan-0077b1207/"}
                target="_blank"
                className="p-4 bg-[#1D2024] shadow-lg shadow-slate-800 "
              >
                <SlSocialLinkedin className="text-white h-10 w-10 hover:text-[#FF014F]" />
              </Link>
              <Link
                href={"https://github.com/Anus-Ali-Khan"}
                target="_blank"
                className="p-4 bg-[#1D2024] shadow-lg shadow-slate-800 "
              >
                <FiGithub className="text-white h-10 w-10 hover:text-[#FF014F]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="order-1 sm:order-2 ">
          <Image src={profileData.image} className="h-[500px] w-[500px]" />
        </div>
      </div>
    </section>
  );
};
