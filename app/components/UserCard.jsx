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
import profilePicEthan from "/app/images/eky2.png";


export const AdrianKnight = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-violet-500 w-300px h-60px m-5 border-solid border-2 border-indigo-600" >
        <Image className="hover:animate-ping delay-1000" src={profilePicAdrian} width={60} height={60} alt="profile picture of Adrian Knight" />
        <div className="text-white text-center w-full self-center">
          <h3 className="font-2xl">
            Adrian Knight
          </h3>
          <div>
            <Link href={"https://github.com/Ajknight121"}>@Ajknight121</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export const Andre = () => {
  return (
    <div >
      <div style={{ height: '68px' }} className="flex justify-center align-middle bg-yellow-500 w-300px  m-5 border-solid border-2 border-black cursor-pointer hover:shadow-xl" >
        <Image src={profilePicAndre} width={60} height={60} alt="" />
        <div className="text-white text-center w-full self-center">
          <h3 className="font-2xl">Andre Rimes</h3>
          <div>
            <Link href={"https://github.com/voodobard"}>@voodobard</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export const SamuelE = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-sky-900 w-300px h-60px m-5 border-solid border-2 border-blue-600" >
        <Image src={anotherProfile} width={60} height={60} alt="profile picture of Samuel E" />
        <div className="text-white text-center w-full self-center">
          <h3 className="font-2xl">
            Samuel E
          </h3>
          <div>
            <Link href={"https://github.com/dejazzhands"}>@dejazzhands</Link>
          </div>
        </div>
      </div>
    </div>
  );

  

}
export const Sklimas101 = () => {
  return (
    <div>
    <div className="flex justify-center align-middle bg-sky-900 w-300px h-60px m-5 border-solid border-2 border-blue-600" >
      <Image src={profilePicShane} width={60} height={60} alt="profile picture of Shane"/>
      <div className="text-white text-center w-full self-center">
        <h3 className="font-2xl">
          Shane K
        </h3>
        <div>
          <Link href={"https://github.com/Sklimas101"}>@Sklimas101</Link>
        </div>
      </div>
    </div>
  </div>
  )
};
export const SrijanS = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-lime-400 w-300px h-60px m-5 border-solid border-2 border-cyan-400">
        <Image src={profilePicSrijan} width={60} height={60} alt="profile picture of Srijan Suresh" />
        <div className="text-blue text-center w-full self-center">
          <h3 className="font-2xl">
            Srijan Suresh
          </h3>
          <div>
            <Link href={"https://github.com/SrijanSuresh"}>@SrijanSuresh</Link>
          </div>
        </div>
      </div>
    </div>
  );

}


export const ZiJunW = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-blue-900 w-300px h-60px m-5 border-solid border-2 border-blue-600" >
        <Image src={profileZiJunW} width={60} height={60} alt="profile picture of Zi Jun W"/>
        <div className="text-white text-center w-full self-center">
          <h3 className="font-2xl">
            Zi Jun Wang
          </h3>
          <div>
            <Link href={"https://github.com/floatsinkfc"}>@floatsinkfc</Link>
          </div>
        </div>
      </div>
    </div>
  );

}

export const Shanmukhche = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-green-500 w-300px h-60px m-5 border-solid border-2 border-green-600" >
        <Image src={profilePicShanmukh} width={60} height={60} alt="profile picture of Shanmukh Chebrolu"/>
        <div className="text-white text-center w-full self-center">
          <h3 className="font-2xl">
            Shanmukh Chebrolu
          </h3>
          <div>
            <Link href={"https://github.com/shanmukhche"}>@Shanmukhche</Link>
          </div>
        </div>
      </div>
    </div>
  );

}

export const Manh_Phan = () => {
  return(
    <div >
    <div  style={{ height: '68px' }}  className="flex justify-center align-middle bg-yellow-500 w-300px  m-5 border-solid border-2 border-black cursor-pointer hover:shadow-xl" >   
      <Image src={profilePicManh} width={60} height={60} alt=""/>
      <div className="text-white text-center w-full self-center">
        <h3 className="font-2xl">Manh Phan</h3>
        <div>
          <Link  href={"https://github.com/Mightymanh"}>@Mightymanh</Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export const Eky2 = () => {
  return(
    <div >
    <div  style={{ height: '68px' }}  className="flex justify-center align-middle bg-cyan-500 w-300px  m-5 border-solid border-2 border-black" >   
      <Image src={profilePicEthan} width={60} height={60} alt=""/>
      <div className="text-black text-center w-full self-center">
        <h3 className="font-2xl">Ethan Ky</h3>
        <div>
          <Link  href={"https://github.com/eky2"}>@eky2</Link>
        </div>
      </div>
    </div>
  </div>
  );
}

