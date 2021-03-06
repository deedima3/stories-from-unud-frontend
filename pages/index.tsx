import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { ArrayArticle, Article } from '../apis/ArticleInterface'
import BlogArticleApi from '../apis/BlogArticleApi'
import BlogCard from '../components/custom/BlogCard'
import InfoBlock from '../components/custom/InfoBlock'
import SectionTitle from '../components/custom/SectionTitle'
import Layout from '../components/Layout/Layout'
import { Info } from '../data/infodata'

const Index = ({ data } : ArrayArticle) => {
  
  return (
    <Layout>
      <div className="flex flex-col w-4/5">
        <section className="flex flex-row justify-between align-center mt-10">
          <div className="mt-10 text-center md:text-left flex flex-col items-center md:items-start" data-aos="fade-up">
            <h1 className="text-blue-500 font-bold text-5xl font-Inter">Stories From Udayana</h1>
            <h6 className="text-gray-300 font-bold text-md font-Inter">Ceritakan apa saja tentang perkuliahan di Udayana</h6>
            <div className="">
              <Link href="/new">
              <button className="transition transform duration-500 hover:scale-105 hover:translate-y+5 hover:shadow-2xl mt-2 bg-blue-700 hover:bg-blue-800 text-white font-bold p-3 rounded-full text-sm flex flex-row items-center">
                <FontAwesomeIcon icon={faComment} size="1x"/>
                  <p className="ml-2 font-Inter">Tulis Cerita Anda</p>
              </button>
              </Link>
            </div>
          </div>
          <div className="md:block hidden" data-aos="fade-left">
            <img src="/headerPhoto.png" alt="Foto Unud" className="transform duration-500 hover:scale-110 hover:-translate-x-5" />
          </div>
        </section>
        <section className="flex flex-col justify-between items-center mt-10 w-full" data-aos="fade-up">
          <SectionTitle title="Apa itu Stories From Unud?" subtitle="Apa dan tentang website kami"/>
          <div className="flex lg:flex-row items-center justify-between mt-10 w-full flex-col" data-aos="fade-up">
            {Info.map(({picture, title, description}) => {
              return( <InfoBlock picture={picture} title={title} desc={description} key={title}/>)
            })}
          </div>
        </section>
        <section className="mt-10" data-aos="fade-up">
          <SectionTitle title="Top Article" subtitle="Cerita-cerita paling menarik"/>
          <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-1 mt-10" data-aos="fade-up">
            {data && data.map(({title, imageUrl, article, HashNumber} : Article) => {
              return (<BlogCard title={title} picture={imageUrl} desc={article} link="/" HashNumber={HashNumber} key={HashNumber}/>)
            })}
          </div>
        </section>
      </div>
    </Layout>
  )

}

export async function getStaticProps(){
  const response = await BlogArticleApi.getAllArticle()
  if(response){
    return {
      props : {data : response},
      revalidate : 10
    }
  }
}





export default Index
