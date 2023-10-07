'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {AdrianKnight, Andre, SamuelE, Shanmukhche, Sklimas101, SrijanS, Manh_Phan, ZiJunW} from '../components/UserCard'
import { useTheme } from '../components/ThemeContext';

const ContributorPage = () => {
  const { setInvertColors, isDarkMode } = useTheme();

  useEffect(() => {
    setInvertColors(true); 
  }, [setInvertColors]);

  return (
    <div style={{ background: isDarkMode?"#FFF":"#FFF" }} className='min-h-screen w-full flex flex-col'>
        <h2 className=' mt-[97px] mx-auto font-bold underline text-black text-[28px]'>Contributors</h2>
        <div className=' mt-8 flex justify-center '>
          <div className='grid grid-cols-3 h-[893px]  w-[1700px]'>

            <AdrianKnight/>
            <Andre />
            <SamuelE/>
            <ZiJunW/>
            <Manh_Phan/>
            <Shanmukhche/>
            <Sklimas101/>
            <SrijanS/>
          </div>
        </div>
    </div>
  )
}

export default ContributorPage