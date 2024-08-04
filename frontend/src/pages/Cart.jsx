import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader/Loader'
import axios from 'axios'
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const [cart, setCart] = useState()
    const headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
    }
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get("http://localhost:8080/api/v1/get-cart-item", { headers })
            setCart(res.data.data)
        }
        fetch()
    }, [])

    const deleteitem = async (bookid) => {
        const res = await axios.put(`http://localhost:8080/api/v1/rem-from-cart/${bookid}`, {}, { headers })
        alert(res.data.message);
    }


    return (

        <div className='px-12 py-8'>
            {!cart && (
                <><Loader /></>
            )}
            {cart?.length === 0 && cart && (<>
                <div><h3>no itmes in the cart</h3></div>
            </>)}
            {cart &&
                (<>
                    <h1 className='text-5xl font-semibold text-zinc-500'>your cart</h1>
                    {cart.map((items, i) => (
                        <div className='flex my-4 p-4 bg-red-600 flex-col md:flex-row justify-between items-center gap-6' key={i}>
                            <img src={items.url} alt="" className='h-[20vh] md:h-[10vh] object-cover' />
                            <div className='w-full md:w-auto'>
                                <h1 className='text-2xl font-semibold text-start'>{items.title}</h1>
                                <p className='text-normal hidden lg:block'>{items.desc.slice(0, 100)}</p>
                                <p className='text-normal hidden md:block lg:hidden'>{items.desc.slice(0, 65)}</p>
                                <p className='text-normal block md:hidden  '>{items.desc.slice(0, 65)}</p>

                            </div>
                            <div className='flex mt-4 w-full md:w-auto items-center gap-4 justify-between'>
                                <h2 className='text-3xl font-semibold'>₹ {items.price}</h2>
                                <button className='rounded p-2 bg-red-400' onClick={() => { deleteitem(items._id) }}>
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    ))}
                </>)
            }
            <div></div>
        </div>
    )
}

export default Cart