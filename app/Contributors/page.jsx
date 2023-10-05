"use client"
import Link from 'next/link'
import React from 'react'
import {AdrianKnight, Andre, SamuelE, Shanmukhche, Sklimas101, SrijanS, Manh_Phan, ZiJunW} from '../components/UserCard'
import Header from '../components/header'
import { useState } from 'react'
import Footer from '../components/footer'

const ContributorPage = ( ) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className='min-h-screen w-full flex flex-col' style={{ background: isDarkMode? "#FFF":"#FFF" }}>
        <Header invertedColor={true} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <h2 className=' mt-[97px] mx-auto font-bold underline text-[28px]'>Contributors</h2>
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
        <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default ContributorPage