import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [showp, setShowp] = useState(false)
    const [showp2, setShowp2] = useState(false)

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    function handleonchange(e) {
        const { name, value } = e.target;
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }
    async function handlesubmit(e) {
        e.preventDefault()
        await postdata()
    }

    const navigate = useNavigate()

    // * STORE THE DATA IN THE DATABASE 
    const postdata = async () => {
        if (data.password === data.confirmpassword) {
            try {

            } catch (error) {

            }

        } else {

        }

    }


    return (
        <section>
            <div className='container mx-auto p-5 mt-3'>

                <div className='w-full max-w-md bg-white mx-auto p-4 border-2 border-red-800'>
                    <div className='w-20   h-20 mx-auto'>

                    </div>
                    <form action="" onSubmit={handlesubmit} className='flex flex-col gap-2'>
                        <div className='grid '>
                            <label htmlFor="name">Name:</label>
                            <div className='bg-slate-200 p-2 rounded-sm'>
                                <input type="text"
                                    name='name'
                                    placeholder='enter your name'
                                    onChange={handleonchange}
                                    value={data.name}
                                    className='w-full outline-none h-full bg-transparent' />
                            </div>
                        </div>

                        <div className='grid  '>
                            <label htmlFor="email">Email:</label>
                            <div className='bg-slate-200 p-2 rounded-sm'>
                                <input type="email"
                                    name='email'
                                    placeholder='example@gmail.com'
                                    onChange={handleonchange}
                                    value={data.email}
                                    className='w-full outline-none h-full bg-transparent' />
                            </div>
                        </div>
                        <div className='grid '>
                            <label htmlFor="password">Create Password:</label>
                            <div className='bg-slate-200 p-2 flex items-center rounded-sm   '>
                                <input type={showp ? "password" : "text"}
                                    name='password'
                                    placeholder='************'
                                    onChange={handleonchange}
                                    value={data.password}
                                    className='w-full outline-none h-full  bg-transparent ' />
                                <div className='cursor-pointer' onClick={() => setShowp(!showp)}>
                                    <span> {
                                        showp ? < FaRegEyeSlash /> : <FaRegEye />
                                    }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className=' grid'>
                            <label htmlFor="password">Confirm Password:</label>
                            <div className='bg-slate-200 p-2 flex items-center rounded-sm   '>
                                <input type={showp2 ? "password" : "text"}
                                    name='confirmpassword'
                                    placeholder='************'
                                    onChange={handleonchange}
                                    value={data.confirmpassword}
                                    className='w-full outline-none h-full  bg-transparent ' />
                                <div className='cursor-pointer' onClick={() => setShowp2(!showp2)}>
                                    <span> {
                                        showp2 ? < FaRegEyeSlash /> : <FaRegEye />
                                    }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button className='w-full max-w-[150px] rounded-md bg-red-600 text-white py-2 block mx-auto mt-5 hover:bg-red-700 hover:scale-110 hover:transition-all' >SignUp</button>
                    </form>
                    <p className='  py-5'>Already have an account ?<Link to={'/login'} className='hover:underline text-lg ms-3 hover:text-red-500'>Login</Link></p>
                </div>
            </div>
        </section>
    )
}

export default SignUp