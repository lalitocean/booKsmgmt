import React, { useState, useEffect } from 'react'
import axios from "axios"
import { FaUser } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import SeeUserData from './SeeUserData.jsx'

const Allorders = () => {

    const [orderdata, setorderdata] = useState('')
    const [userDiv, setUserDiv] = useState("hidden")
    const [userData, setUserData] = useState()

    const headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
    }

    useEffect(() => {
        const fetchorderdata = async () => {
            const res = await axios.get("http://localhost:8080/api/v1/get-all-order", { headers })
            console.log("response of the order", res.data.data)
            setorderdata(res.data.data)
        }
        fetchorderdata()
    }, [])

    return (
        <>
            {!orderdata && (<div className='h-[100%] p-0 md:p-4'>
                <h1 className='py-2 font-semibold text-3xl text-white grid place-items-center mb-2' >vvnvn</h1>

            </div>)}
            {
                orderdata && orderdata.length > 0 && <div className='h-[100%] p-0 md:p-4 text-zinc-200'>
                    <h1 className='text-white font-semibold text-3xl grid place-items-center mb-2'>All Orders History</h1>
                    <div className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-2'>
                        <div className='w-[3%]'>
                            <h1>Sr.</h1>
                        </div>
                        <div className='w-[22%]'>
                            <h1>Books</h1>
                        </div>
                        <div className='w-[45%]'>
                            <h1>Description</h1>
                        </div>
                        <div className='w-[9%]'>
                            <h1>Price</h1>
                        </div>
                        <div className='w-[20%]'>
                            <h1>Status</h1>
                        </div>
                        <div className='w-[12%] grid place-items-center'>
                            <FaUser />
                        </div>

                    </div>
                    {orderdata?.map((items, i) => (
                        <div className='w-full rounded py-2 px-4   text-zinc-100'>

                            <div className='bg-zinc-800 w-full rounded py-2 px-2 flex gap-2'>
                                <div className='w-[3%]'>
                                    <h1>{i + 1}</h1>
                                </div>
                                <div className='w-[22%] hover:text-blue-400'>
                                    <h1>{items.book.title}</h1>
                                </div>
                                <div className='w-[45%]'>
                                    <h1>{items.book.desc.slice(0, 50)}...</h1>
                                </div>
                                <div className='w-[9%]'>
                                    <h1>{items.book.price}</h1>
                                </div>
                                <div className='w-[20%]'>
                                    <h1 className='font-semibold'>
                                        <button>
                                            {items.status === "order Placed" ? (
                                                <div className='text-yellow-500'>{items.status}</div>
                                            ) : items.status === "cancelled" ? (<div className='text-red-600'>{items.status}</div>) :
                                                (<div className='text-green-500'>{items.status}</div>)}
                                        </button>
                                        <div className='flex '>
                                            <select name="" id="" className='bg-black'>
                                                {
                                                    ["order Placed", "cancelled", "out of delivery", "Delivered"].map((optionitem, i) => (
                                                        <option key={i} value="">{optionitem}</option>
                                                    ))
                                                }
                                            </select>


                                        </div>
                                    </h1>
                                </div>
                                <div className='w-[12%] grid place-items-center'>
                                    <button onClick={() => {
                                        setUserDiv("fixed")
                                        setUserData(items.user)
                                    }} className='text-2xl'>
                                        <IoOpenOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
            {
                userData && (<SeeUserData
                    userData={userData}
                    userDiv={userDiv}
                    setUserDiv={setUserDiv}
                />)

            }
        </>
    )
}

export default Allorders