import Link from 'next/link'
import React from 'react'
import {AdrianKnight, Andre, Manh_Phan, SamuelE} from '../components/UserCard'

const ContributorPage = () => {

  return (
    <div className='h-full w-full'>
      <Link href={"/"}>Return to homepage</Link>
      <h1>Our Contributors</h1>

      <div className='grid grid-cols-3 m-10 h-full bg-gray-300 min-w-[700px]'>
        <AdrianKnight/>
        <Andre />
        <SamuelE/>
        <Manh_Phan/>
      </div>
    </div>
  )
}

export default ContributorPage