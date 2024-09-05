import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const MobileNav = () => {
    const role = useSelector((state) => state.auth.role)
    return (
        <>
            {role === "user" && (
                <div className='w-full flex lg:hidden items-center justify-between my-4 mt-5   '>
                    <Link className='text-2xl font-semibold bg-green-400' to="/profile" >Favourite</Link>
                    <Link className='text-2xl font-semibold bg-green-400' to="/profile/orderHistory">order History</Link>
                    <Link className='text-2xl font-semibold bg-green-400' to="/profile/settings" >Settings</Link>

                </div>
            )}

            {role === "admin" && (
                <div className='w-full flex lg:hidden items-center justify-between my-4 mt-5   '>
                    <Link className='text-2xl font-semibold bg-green-400' to="/profile" >All orders History</Link>
                    <Link className='text-2xl font-semibold bg-green-400' to="/profile/add-book">Add Book</Link>


                </div>
            )}
        </>
    )
}

export default MobileNav