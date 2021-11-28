import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import InfoBlock from '../components/custom/InfoBlock'
import Navbar from '../components/custom/Navbar'
import SectionTitle from '../components/custom/SectionTitle'
import Layout from '../components/Layout/Layout'
import { Info } from '../data/infodata'

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col w-4/5">
        <section className="flex flex-row justify-between align-center mt-10">
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
        <section className="flex flex-col justify-between items-center mt-10 w-full" data-aos="fade-up">
          <SectionTitle title="Apa itu Stories From Unud?" subtitle="Apa dan tentang website kami"/>
          <div className="flex flex-row items-center justify-between mt-10 w-full" data-aos="fade-up">
            {Info.map(({picture, title, description}) => {
              return( <InfoBlock picture={picture} title={title} desc={description}/>)
            })}
          </div>
        </section>
        <section>
          <SectionTitle title="Top Article" subtitle="Cerita-cerita paling menarik"/>
          <div className="grid-cols-3 md:grid-cols-1">
            {}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Index
