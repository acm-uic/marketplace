import Link from "next/link";
import React from "react";
import Image from "next/image";
import discordlogo from "../images/DiscordLogo.png";
import githublogo from "../images/github.png";
import youtubelogo from "../images/youtubeLogo.png";
import linkedinlogo from "../images/linkedin.png";
import instagramlogo from "../images/instaLogo.png";



export default function Footer( {isDarkMode}) {
  return (
    <footer style={{ background: isDarkMode ? '#242526' : '#34A3D9' }} className="h-48 block w-full overflow-hidden mb-0">
      <div className=" float-left w-6/12 h-full">
        <p className="align-top mt-8 ml-8 font-bold ">Association for Computing Machinery</p>
        <p className="mt-3 ml-8 leading-5">SEL-E 2264</p>
        <p className="ml-8 leading-5">950 S Halsted St </p>
        <p className="ml-8 leading-5">Chicago, IL 60607</p>
      </div>
      <div className="w-6/12 flex flex-col mt-9 items-end h-full">
        <div className="mr-8 ">
          <div>
            <Link href="https://discord.gg/Afy6gf4" target="_blank" >
              <Image src={discordlogo} alt="DiscordACM" width={17} height={17} />
            </Link>
          </div>
          <div className="mt-3">
            <Link href="https://github.com/acm-uic" target="_blank" >
              <Image src={githublogo} alt="githubACM" width={17} height={17} />
            </Link>
          </div>
          <div className="mt-3">
            <Link href="https://www.youtube.com/channel/UCZ0uPmRjJrl6XEMU2CtYH5w" target="_blank" >
              <Image src={youtubelogo} alt="youtubeACM" width={17} height={17} />
            </Link>
          </div>
          <div className="mt-3">
            <Link href="https://www.linkedin.com/company/acm-cs-uic/" target="_blank" >
              <Image src={linkedinlogo} alt="linkedinACM" width={17} height={17} />
            </Link>
          </div>
          <div className="mt-3">
            <Link href="https://www.instagram.com/acmatuic/" target="_blank" >
              <Image src={instagramlogo} alt="instaACM" width={17} height={17} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
