import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Navbar from '../components/custom/Navbar'
import Layout from '../components/Layout/Layout'

const Index = () => {
  return (
    <Layout>
      <section className="flex w-4/5 flex-row justify-between align-center mt-10">
        <div className="mt-10" data-aos="fade-up">
          <h1 className="text-blue-500 font-bold text-5xl font-Inter">Stories From Udayana</h1>
          <h6 className="text-gray-300 font-bold text-md font-Inter">Ceritakan apa saja tentang perkuliahan di Udayana</h6>
          <button className="mt-2 bg-blue-700 hover:bg-blue-800 text-white font-bold p-3 rounded-full text-sm flex flex-row items-center">
            <FontAwesomeIcon icon={["far", "comment"]} size="2x"/>
              <p className="ml-2 font-Inter">Tulis Cerita Anda</p>
            </button>
        </div>
        <div className="" data-aos="fade-left">
          <img src="/headerPhoto.png" alt="Foto Unud" />
        </div>
      </section>
      <section className="flex flex-row justify-between items-center mt-10">
        <div className="flex flex-col items-center justify-center">

        </div>
      </section>
    </Layout>
  )
}

export default Index
