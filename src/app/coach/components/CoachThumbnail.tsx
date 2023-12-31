import Link from "next/link";
import { HoverButton } from "../../../components/HoverButton/HoverButton";
import { Anton } from "next/font/google";
const anton = Anton({ weight: "400", subsets: ["latin"] });

export const CoachThumbnail = () => {
  return (
    <>
      <div className="bg-sb-darkblue bg-cover bg-center flex flex-col-reverse lg:flex-row gap-y-12 justify-between w-full lg:px-[50px] py-[100px] lg:py-[200px] items-center">
        <div className="flex flex-col gap-10">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap `}>
            {"THE ULTIMATE\nCOACHING"}
            <span className="text-blue-500"> TOOL.</span>
          </div>
          <ul className="pl-4 list-disc text-[19px]">
            <li className="pb">Analyze in 3D and 2D</li>
            <li className="pb">Stay connected with students</li>
            <li className="pb">Track progress with quantifiable data</li>
          </ul>
          <div className="flex justify-between lg:w-[510px] flex-col lg:flex-row gap-5">
            <Link href="https://meetings.hubspot.com/edwin-fuh/product-demo">
              <HoverButton
                color="bg-sb-blue"
                text="Become a 3D expert"
                width="lg:w-[230px]"
                height="lg:h-[60px]"
              />
            </Link>
            <Link href="https://3dgolf.sportsbox.ai/sign-up">
              <HoverButton
                color="bg-sb-blue"
                text="Start your free trial"
                width="lg:w-[230px]"
                height="lg:h-[60px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex">
          <video autoPlay muted loop className="w-[750px]">
            <source src="videos/coach/Coach_1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
