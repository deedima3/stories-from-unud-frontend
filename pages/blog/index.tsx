import axios from 'axios'
import React, { useState } from 'react'
import { useDebounce } from 'react-use'
import { Article } from '../../apis/ArticleInterface'
import BlogArticleApi from '../../apis/BlogArticleApi'
import BlogCard from '../../components/custom/BlogCard'
import SearchBar from '../../components/custom/Form/SearchBar'
import Layout from '../../components/Layout/Layout'

const Blog = () => {

    const [search, setSearch] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    
    const setToAll = async () => {
        setLoading(true)
        const data = await axios.get('/getAll')
        setSearchResult(data.data)
        setLoading(false)
    }

    const setToSearch = async () => {
        setLoading(true)
        const data = await axios.get('/search/?keyword=' + search)
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
            <section className="mt-8 w-full flex items-center">
                <div className="" data-aos="fade-down">
                    <SearchBar setSearch={setSearch} searchState={search}/>
                </div>
                {isLoading ? <Loader/>
                : 
                    <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-1 mt-10" data-aos="fade-up">
                        {searchResult && searchResult.map(({title, imageUrl, article, HashNumber} : Article) => {
                        return (<BlogCard title={title} picture={imageUrl} desc={article} link="/" HashNumber={HashNumber}/>)
                        })}
                    </div>
                }
            </section>
        </Layout>
    )
}

export default Blog
