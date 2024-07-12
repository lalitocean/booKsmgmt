import React from 'react'
import { Link } from "react-router-dom"

const Bookcard = ({ dataprops }) => {

    return (
        <>
            <Link to={`/view-book-details/${dataprops._id}`} >
                <div className=' bg-blue-300 p-4 rounded flex flex-col  gap-1'>
                    <div className='bg-pink-200 flex justify-center items-center rounded'> <img src={dataprops.url} alt="/" className='h-[25vh]' /></div>
                    <h2 className='text-xl font-semibold'>Title:- {dataprops.title}</h2>
                    <p className='font-semibold'>By {dataprops.author} </p>
                    <p className='text-xl font-semibold'> {dataprops.price} </p>

                </div>
            </Link>
        </>
    )
}

export default Bookcard