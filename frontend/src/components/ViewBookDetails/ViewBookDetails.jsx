import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from '../Loader/Loader';
const ViewBookDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState()
    const fetchdata = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/get-book-by-id/${id}`)
            console.log("daata is here", res.data.data)
            setData(res.data.data)


        } catch (error) {
            console.log("error ", error)
        }
    }
    useEffect(() => {
        fetchdata()
    }, [])

    console.log(id)
    return (
        <>
            {data && (<div className='px-10 py-8 bg-green-700 flex flex-col md:flex-row gap-6'>

                <div className=' w-full lg:w-3/6 bg-zinc-400 rounded p-4 h-[70vh] lg:h-[85vh] flex justify-center items-center'>
                    <img src={data.url} alt="/image here" className=' h-[65vh] lg:h-[75vh]' />
                </div>
                <div className='w-full lg:w-3/6 bg-zinc-400 rounded p-4'>

                    <p>{data.title}</p>
                    <p>By {data.author}</p>

                    <p className='text-xl'>{data.desc}</p>
                    <p>{data.language}</p>
                    <p className='text-3xl'>{data.price}</p>

                </div>
            </div>)}
            {!data && (<div className='h-screen flex justify-center items-center bg-zinc-600'><Loader /></div>)}
        </>
    )
}

export default ViewBookDetails