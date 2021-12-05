import React, { useContext, useState } from 'react'
import SectionTitle from '../components/custom/SectionTitle'
import Layout from '../components/Layout/Layout'
import { UserContext } from './_app'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { UserData } from '../apis/UserData'

const Login = () => {
    var {user, setUser} = useContext(UserContext)

    //Using form hooks in react to create form, new errors are in formState
    const {register, handleSubmit, setError, formState : { errors }} = useForm()

    const pushData = async (data : UserData) => {
        let response = await fetch("/api/login/", {
            method : "POST",
            body : JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => setUser(user = data.sessionId))
    }

    if(user){
        Router.push("/")
        return null
    }
    else{
        return (
            <Layout>
                <section className="flex justify-center w-4/5 h-screen items-start mt-2" data-aos="fade-up">
                    <div className="flex justify-around w-full items-center">
                        <img src="login.svg" alt="Login Picture" className="w-4/5 md:block hidden"/>
                        <div className="flex flex-col justify-center items-center bg-white shadow-md px-8 pt-8 mb-4 ml-3 w-full max-w-lg">
                            <SectionTitle title="Login" subtitle="Masukkan akun anda"/>
                            <form onSubmit={handleSubmit(pushData)}>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Username
                                    </label>
                                    <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="username" 
                                    type="text" 
                                    placeholder="Username"  
                                    {...register("username", {required : true})}/>
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Password
                                    </label>
                                    <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="passwords" 
                                    type="password" 
                                    placeholder="Password" 
                                    {...register("password" , {required : true})}/>
                                </div>
                                <div className="flex items-center justify-around w-full mt-4 mb-8">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:text-lg text-xs" type="submit">
                                        Sign In
                                    </button>
                                    <button className="border-blue-500 border-2 bg-white-50 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:text-lg text-xs" type="button">
                                        Clear
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Layout>
        ) 
    }
    
}

export default Login
