import React from 'react'
import { donorsList } from '../assets/donorsList'
export default function Donors() {
  return (
    <div id= 'donors' className='bg-[#D9D9D9] text-center'>
        <div className='px-6 py-10 md:px-16 lg:px-40 mb-10'>
        <h1 className='md:text-5xl text-3xl text-center  mb-6 mt-5'> Meet our donors </h1>   
        <h3 className='md:text-3xl text-lg text-center  mb-6 mt-5'> "Thank you for consideration. Every contribution brings us closer to our goals" </h3>  


<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Donor Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount (INR)
                </th>
            </tr>
        </thead>
        <tbody>
        {
                donorsList.length>0 && donorsList.map((src, index) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key= {index}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {src.name}
                </th>
                <td className="px-6 py-4">
                    {src.amount}
                </td>
            </tr>
                ))

                
            }
        </tbody>
    </table>
</div>
</div>
    </div>
  )
}
