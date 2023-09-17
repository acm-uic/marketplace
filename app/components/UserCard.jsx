import Image from "next/image";
import React from "react";
import profilePic from "/app/images/MilkFaceCatGif.gif"
import anotherProfile from "/app/images/dog.jpg"
import Link from "next/link";

//TODO set min width
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
      <div className="flex justify-center align-middle bg-red-500 w-300px h-60px m-5 border-solid border-2 border-indigo-600" >
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

export const SamuelE = () => {
  return (
    <div>
      <div className="flex justify-center align-middle bg-sky-900 w-300px h-60px m-5 border-solid border-2 border-blue-600" >
        <Image src={profilePic} width={60} height={60} alt="profile picture of Samuel E"/>
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
