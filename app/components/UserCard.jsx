import Image from "next/image";
import React from "react";
import Link from "next/link";
import profilePicAdrian from "/app/images/MilkFaceCatGif.gif";
import anotherProfile from "/app/images/dog.jpg";
import profilePicAndre from "/app/images/photoAndre.png";
import profileZiJunW from "/app/images/floatsink.jpg";
import profilePicManh from "app/images/manh.jpeg";
import profilePicShanmukh from "/app/images/profilePicShanmukh.png";
import profilePicShane from "/app/images/doNotEnter.jpg";
import profilePicSrijan from "/app/images/s1.webp";

export const AdrianKnight = ( ) => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-white shadow-contributor max-w-[380px] h-[100px] m-5 border-solid border-2 border-black" >
        <Image className="rounded-[50%] border-indigo-600 border-[4px] -translate-x-[20%] -translate-y-4" src={profilePicAdrian} width={100} height={100} alt="profile picture of Adrian Knight" />
        <div className="text-black text-center w-full self-center mr-5">
          <h3 className="text-2xl  ">
            Adrian Knight
          </h3>
          <div>
            <Link href={"https://github.com/Ajknight121"} target="_blank">@Ajknight121</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Andre = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-white shadow-contributor max-w-[380px] h-[100px] m-5 border-solid border-2 border-black" >
        <Image className="rounded-[50%] border-yellow-500 border-[4px] -translate-x-[20%] -translate-y-4" src={profilePicAndre} width={100} height={100} alt="" />
        <div className="text-black text-center w-full self-center mr-5">
          <h3 className="text-2xl">
          Andre Rimes
          </h3>
          <div>
            <Link href={"https://github.com/voodobard"} target="_blank">@voodobard</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SamuelE = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-white shadow-contributor max-w-[380px] h-[100px] m-5 border-solid border-2 border-black">
        <Image className="rounded-[50%] border-sky-900 border-[4px] -translate-x-[20%] -translate-y-4" src={anotherProfile} width={100} height={100} alt="" />
        <div className="text-black text-center w-full self-center mr-5">
          <h3 className="text-2xl">
          Samuel E
          </h3>
          <div>
            <Link href={"https://github.com/dejazzhands"} target="_blank">@dejazzhands</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Sklimas101 = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-white shadow-contributor max-w-[380px] h-[100px] m-5 border-solid border-2 border-black">
        <Image className="rounded-[50%] border-sky-600 border-[4px] -translate-x-[20%] -translate-y-4" src={profilePicShane} width={100} height={100} alt="" />
        <div className="text-black text-center w-full self-center mr-5">
          <h3 className="text-2xl">
          Shane K
          </h3>
          <div>
            <Link href={"https://github.com/Sklimas101"} target="_blank">@Sklimas101</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export const SrijanS = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-white shadow-contributor max-w-[380px] h-[100px] m-5 border-solid border-2 border-black">
        <Image className="rounded-[50%] border-cyan-400 border-[4px] -translate-x-[20%] -translate-y-4" src={profilePicSrijan} width={100} height={100} alt="" />
        <div className="text-black text-center w-full self-center mr-5">
          <h3 className="text-2xl">
          Srijan Suresh
          </h3>
          <div>
            <Link href={"https://github.com/SrijanSuresh"} target="_blank">@SrijanSuresh</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ZiJunW = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-white shadow-contributor max-w-[380px] h-[100px] m-5 border-solid border-2 border-black">
        <Image className="rounded-[50%] border-orange-900 border-[4px] -translate-x-[20%] -translate-y-4" src={profileZiJunW} width={100} height={100} alt="" />
        <div className="text-black text-center w-full self-center mr-5">
          <h3 className="text-2xl">
          Zi Jun Wang
          </h3>
          <div>
            <Link href={"https://github.com/floatsinkfc"} target="_blank">@floatsinkfc</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Shanmukhche = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-white shadow-contributor max-w-[380px] h-[100px] m-5 border-solid border-2 border-black">
        <Image className="rounded-[50%] border-green-500 border-[4px] -translate-x-[20%] -translate-y-4" src={profilePicShanmukh} width={100} height={100} alt="" />
        <div className="text-black text-center w-full self-center mr-5">
          <h3 className="text-2xl">
          Shanmukh Chebrolu
          </h3>
          <div>
            <Link href={"https://github.com/shanmukhche"} target="_blank">@Shanmukhche</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Manh_Phan = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-white shadow-contributor max-w-[380px] h-[100px] m-5 border-solid border-2 border-black">
        <Image className="rounded-[50%] border-zinc-700 border-[4px] -translate-x-[20%] -translate-y-4" src={profilePicManh} width={100} height={100} alt="" />
        <div className="text-black text-center w-full self-center mr-5">
          <h3 className="text-2xl">
          Manh Phan
          </h3>
          <div>
            <Link href={"https://github.com/Mightymanh"} target="_blank">@Mightymanh</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
