import axios from 'axios'
import React, { useState } from 'react'
import { useDebounce } from 'react-use'
import { Article } from '../../apis/ArticleInterface'
import BlogArticleApi from '../../apis/BlogArticleApi'
import BlogCard from '../../components/custom/BlogCard'
import SearchBar from '../../components/custom/Form/SearchBar'
import Loader from '../../components/custom/Loader/Loader'
import Layout from '../../components/Layout/Layout'

const Blog = () => {

    const [search, setSearch] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    
    const setToAll = async () => {
        setLoading(true)
        const data = await axios.get('api/getAll')
        setSearchResult(data.data)
        setLoading(false)
    }

    const setToSearch = async () => {
        setLoading(true)
        const data = await axios.get('api/search/?keyword=' + search)
        setSearchResult(data.data)
        setLoading(false)
    }

    useDebounce( async () =>{
        if(search){
            setToSearch()
        }else{
            setToAll()
        }
    }, 2000, [search])
    
    return (
        <Layout>
            <section className="mt-8 w-full flex flex-col items-center">
                <div className="mt-8 flex justify-center w-3/6">
                    <SearchBar setSearch={setSearch} searchState={search}/>
                </div>
                {isLoading ? 
                <div className="mt-8 w-full flex justify-center"> 
                    <Loader/> 
                </div>
                : 
                <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-1 mt-10">
                    {searchResult && searchResult.map(({title, imageUrl, article, HashNumber} : Article) => {
                    return (<BlogCard title={title} picture={imageUrl} desc={article} link="/" HashNumber={HashNumber} key={HashNumber} />)
                    })}
                </div>

                }
            </section>
        </Layout>
    )
}

export default Blog
