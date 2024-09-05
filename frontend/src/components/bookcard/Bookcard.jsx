import React from 'react'
import { Link } from "react-router-dom"
import Favourite from '../Profile/Favourite'
import axios from 'axios'
import { FaIndianRupeeSign } from "react-icons/fa6";

const Bookcard = ({ dataprops, favourite }) => {
    const headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        bookid: dataprops._id
    }
    const handleremovebook = async () => {
        const res = await axios.put("http://localhost:8080/api/v1/rem-from-fav", {}, { headers })
        alert(res.data.message)
    }

    return (
        <>

            <div className=' bg-gray-300 p-4 rounded flex flex-col  gap-1'>
                <div> <Link to={`/view-book-details/${dataprops._id}`} >
                    <div className='bg-white flex justify-center items-center rounded'>
                        <img src={dataprops.url} alt="/" className='h-[25vh]' /></div>
                    <h2 className='text-xl font-semibold'>Title:- {dataprops.title}</h2>
                    <p className='font-semibold'>By {dataprops.author} </p>
                    <p className='text-xl font-semibold flex items-center'> <FaIndianRupeeSign />{dataprops.price} </p>
                </Link></div>
                {
                    favourite && (
                        <button className='bg-yellow-100 hover:bg-red-600  hover:cursor-pointer hover:transition ease-in-out duration-900  text-black p-2 ' onClick={handleremovebook} >
                            Remove
                        </button>
                    )
                }
            </div>


        </>
    )
}

export default Bookcard