import Image from "next/image";
import React from "react";
import profilePic from "/app/images/MilkFaceCatGif.gif";
import Link from "next/link";
import profilePicAndre from "/app/images/photoAndre.png";

export const AdrianKnight = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-violet-500 w-300px h-60px m-5 border-solid border-2 border-indigo-600" >
        <Image src={profilePic} width={60} height={60} alt="profile picture of Adrian Knight"/>
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

export const FakeNamer = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-red-500 w-300px  m-5 border-solid border-2 border-indigo-600" >
        <Image src={profilePic} width={60} height={60} alt="profile picture of Adrian Knight"/>
        <div className="text-white text-center w-full self-center">
          <h3 className="font-2xl">
            Fake Knight
          </h3>
          <div>
            <Link href={"https://github.com/Ajknight121"}>@Ajknight121</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


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
