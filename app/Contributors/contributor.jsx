'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {AdrianKnight, Andre, SamuelE, Shanmukhche, Sklimas101, SrijanS, Manh_Phan, ZiJunW, SathvikL} from '../components/UserCard'

const ContributorPage = ( {isDarkMode, productListRef}) => {

  return (
    <div ref={productListRef} style={{ background: isDarkMode?"#242526":"#FFF" }} className='min-h-screen w-full flex items-center justify-center '>
      <div className='w-[80%] h-full pt-20 '>
        <h2 style={{ color: isDarkMode?"#FFF":"#000000" }} className=' mt-[97px] font-sans underline text-[24px]'>Contributor List:</h2>
        <div className=' mt-8 flex justify-center '>
          <div className='grid grid-cols-3 h-[893px]  w-[1700px]'>
            <AdrianKnight/>
            <Andre />
            <SamuelE/>
            <ZiJunW/>
            <Manh_Phan/>
            <SathvikL/>
            <Shanmukhche/>
            <Sklimas101/>
            <SrijanS/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContributorPage