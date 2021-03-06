import React, { useContext, useState } from 'react'
import SectionTitle from '../components/custom/SectionTitle'
import Layout from '../components/Layout/Layout'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { UserData } from '../apis/UserData'
import { UserContext } from '../lib/context/UserProvider'
import Modals from '../components/custom/Modals/Modals'
import OriginalButton from '../components/custom/button/OriginalButton'
import ErrorMessage from '../components/custom/Form/ErrorMessage'

const Login = () => {
    const {user, setUser, removeUser} = useContext(UserContext)

    const [isLoadingUser, setisLoadingUser] = useState(false)

    const [isError, setisError] = useState(false)

    let errorMessage

    //Using form hooks in react to create form, new errors are in formState
    const {register, handleSubmit, setError, reset, formState : { errors }} = useForm()

    const pushData = async (data : UserData) => {
        setisLoadingUser(true)
        let response = await fetch("/api/login/", {
            method : "POST",
            body : JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if(response.sessionId.message){
                errorMessage = response.sessionId.message
                setisError(true)
            }else{
                setUser(response.sessionId)
                Router.push("/")
            }
        })
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
                        <img src="login.svg" alt="Login Picture" className="transition transform duration-500 hover:scale-110 hover:translate-y+5 w-4/5 md:block hidden"/>
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
                                    {errors.username && <ErrorMessage error="Username is Required"/>}
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
                                    {errors.password && <ErrorMessage error="Password is Required"/>}
                                </div>
                                <div className="flex items-center justify-around w-full mt-4 mb-8">
                                    <button className="transition transform duration-500 hover:scale-110 hover:translate-y+5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:text-lg text-xs" type="submit">
                                        Sign In
                                    </button>
                                    <button className="transition transform duration-500 hover:scale-110 hover:translate-y+5 border-blue-500 border-2 bg-white-50 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:text-lg text-xs" type="button" onClick={() => reset()}>
                                        Clear
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <Modals show={isLoadingUser} onClose={() => setisLoadingUser(false)} isLoading>
                    <p>Loading...</p>
                </Modals>
                <Modals show={isError} onClose={() => setisError(false)}>
                    <>
                        <p>{errorMessage}</p>
                        <OriginalButton onClick={() => setisError(false)} variant="solid">
                            Close
                        </OriginalButton>
                    </>
                </Modals>
            </Layout>
        ) 
    }
    
}

export default Login
