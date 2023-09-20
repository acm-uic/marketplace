import Link from 'next/link'
import React from 'react'
import {AdrianKnight, Andre, SamuelE, Sklimas101} from '../components/UserCard'

const ContributorPage = () => {

  return (
    <div className='h-full w-full'>
      <Link href={"/"}>Return to homepage</Link>
      <h1>Our Contributors</h1>

      <div className='grid grid-cols-3 m-10 h-full bg-gray-300 min-w-[700px]'>
        <AdrianKnight/>
        <Andre />
        <SamuelE/>
        <Sklimas101/>
      </div>
    </div>
  )
}

export default ContributorPage