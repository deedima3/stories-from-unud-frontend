import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ValidatorWrapper from '../components/custom/Validator/ValidatorWrapper'
import ValidatorItem from '../components/custom/Validator/ValidatorItem'
import { UserContext } from '../lib/context/UserProvider'
import { Article } from '../apis/ArticleInterface'
import axios from 'axios'
import AdminApi from '../apis/AdminApi'
import Router from 'next/router'
import Loader from '../components/custom/Loader/Loader'
import SectionTitle from '../components/custom/SectionTitle'

const Validator = () => {

    const {user, setUser, removeUser} = useContext(UserContext)
    const [isLoading, setLoading] = useState(false)
    const [adminArticleData, setAdminArticle] = useState<Article[]>([])

    const handleAccept = async (e : React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        setLoading(true)
        e.preventDefault()
        console.log(e.currentTarget.getAttribute("data-hash"))
        const res = await axios.post('/api/acceptAdmin',{body: {
            "hash" : e.currentTarget.getAttribute("data-hash")!
        }}, {headers : {
            sessionID :  user!
        }})
        const data = await axios.get('/api/getAllAdmin', {headers : {
            sessionID :  user!
        }})
        setAdminArticle(data.data)
        setLoading(false)
    }

    const getAllData = async () => {
        setLoading(true)
        const data = await axios.get('/api/getAllAdmin', {headers : {
            sessionID :  user!
        }})
        setAdminArticle(data.data)
        setLoading(false)
    }

    useLayoutEffect(() => {
        if(user){
            getAllData()
        }
    }, [user])

    return (
        <Layout>
            <SectionTitle title='Article Validator' subtitle='Untuk admin yang memastikan apakah artikel itu aman'/>
            <section className='mt-8 w-full flex flex-col items-center bg-white shadow-md'>
                {isLoading ? 
                    <div className="mt-8 w-full flex justify-center"> 
                        <Loader/> 
                    </div>
                    :   <ValidatorWrapper>
                        <>
                            {adminArticleData && adminArticleData.map(({title, HashNumber} : Article) => {
                                return(<ValidatorItem title={title} hashNumber={HashNumber} acceptHandler={handleAccept} key={HashNumber}/>)
                            })}
                        </>
                        </ValidatorWrapper>
                }
            </section>
        </Layout>
    )
}

export default Validator
