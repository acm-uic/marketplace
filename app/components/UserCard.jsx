import Image from "next/image";
import React from "react";
import Link from "next/link";
import profilePicAdrian from "/app/images/MilkFaceCatGif.gif";
import anotherProfile from "/app/images/dog.jpg";
import profilePicAndre from "/app/images/photoAndre.png";
import profileZiJunW from "/app/images/floatsink.jpg";

export const AdrianKnight = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-violet-500 w-300px h-60px m-5 border-solid border-2 border-indigo-600" >
        <Image className="hover:animate-ping delay-1000" src={profilePicAdrian} width={60} height={60} alt="profile picture of Adrian Knight"/>
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
  return(
    <div >
    <div  style={{ height: '68px' }}  className="flex justify-center align-middle bg-yellow-500 w-300px  m-5 border-solid border-2 border-black cursor-pointer hover:shadow-xl" >   
      <Image src={profilePicAndre} width={60} height={60} alt=""/>
      <div className="text-white text-center w-full self-center">
        <h3 className="font-2xl">Andre Rimes</h3>
        <div>
          <Link  href={"https://github.com/voodobard"}>@voodobard</Link>
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
        <Image src={anotherProfile} width={60} height={60} alt="profile picture of Samuel E"/>
        <div className="text-white text-center w-full self-center">
          <h3 className="font-2xl">
            Samuel E
          </h3>
          <div>
            <Link href={"https://github.com/dejazzhands"}>dejazzhands</Link>
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
            <Link href={"https://github.com/floatsinkfc"}>floatsinkfc</Link>
          </div>
        </div>
      </div>
    </div>
  );

}
