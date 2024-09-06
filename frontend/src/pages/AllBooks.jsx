import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader/Loader'
import axios from 'axios'
import Bookcard from '../components/bookcard/Bookcard'
const AllBooks = () => {

    const [data, setData] = useState()
    const fetchdata = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/v1/get-all-books")
            console.log(data)
            setData(res.data.data)


        } catch (error) {
            console.log("error ", error)
        }
    }
    useEffect(() => {
        fetchdata()

    }, [])
    return (
        <>
            <div className='px-10 py-8 bg-lime-900'>

                <div className='p-4 mt-8 bg-zinc-700'>
                    <h4 className='text-3xl  grid place-items-center font-semibold text-green-200'>All Books</h4>
                    {!data && <div className='flex items-center justify-center my-4 '> <Loader /></div>}
                    <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8'>
                        {data && data.map((items, i) => <div>
                            <Bookcard dataprops={items} key={i} />
                        </div>
                        )}
                    </div>
                </div>
            </div></>
    )
}

export default AllBooks