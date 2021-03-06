import React from 'react'
import Groupinfo from '../components/custom/GroupInfo'
import Navbar from '../components/custom/Navbar'
import Layout from '../components/Layout/Layout'
import { Anggota } from '../data/groups'

const Our = () => {
    return (
        <Layout>
            <div className="flex lg:flex-row md:flex-col flex-wrap justify-between items-center w-4/5">
                {Anggota.map(({img, nama, nim, desc, ig, github}) => {
                    return (
                        <Groupinfo image={img} nama={nama} nim={nim} desc={desc} ig={ig} github={github} key={nama}/>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Our
