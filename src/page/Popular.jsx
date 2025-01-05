import React, { useEffect, useState } from 'react'
import { apiClients } from '../utils/api'
import Card from '../components/Card';
import { Link } from 'react-router-dom';

export default function Popular() {
    const [pData, setPData] = useState([])
    const person = async () => {
        let res = await apiClients.get("/person/popular?language=en-US&page=1")
        setPData(res.data.results)
    }
    useEffect(() => {
        person()
    }, [])
    return (
        <div className='container'>
            <h1 className='py-7 text-2xl text-black font-bold'>Популярные люди</h1>
            <div className="grid grid-cols-4 gap-5 pb-7">
                {pData.map((item) => (
                    <Link to={`/person/${item.id}`} key={item.id} className='col-span-1 shadow-[rgba(0,_0,_0,_0.25)_0px_0px_60px_-12px] font-sans-new rounded-t-lg border border-[#00000028]'><Card image={item.profile_path} name={item.name} about={item.known_for} /></Link>
                ))}
            </div>
        </div>
    )
}
