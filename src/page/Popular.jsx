import React, { useEffect, useState } from 'react'
import { apiClients } from '../utils/api'
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { HashLoader } from 'react-spinners';

export default function Popular() {
    const [pData, setPData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const person = async () => {
        setLoading(true)
        try {
            let res = await apiClients.get(`/person/popular?language=ru-Ru&page=${page}`)
            setPData(res.data)
        } catch (error) {
            alert('Error:' + error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        person()
    }, [page])
    return (
        <div className='container'>
            <h1 className='py-7 text-2xl text-black font-bold'>Популярные люди</h1>
            {loading ? <div className="flex justify-center items-center h-screen">
                <HashLoader color="#032541" size={100} />
            </div> : <div className="grid grid-cols-4 gap-5 pb-7">
                {pData?.results?.map((item) => (
                    <Link to={`/person/${item.id}`} key={item.id} className='col-span-1 shadow-[rgba(0,_0,_0,_0.25)_0px_0px_60px_-12px] font-sans-new rounded-t-lg border border-[#00000028]'><Card image={item.profile_path} name={item.name} about={item.known_for} /></Link>
                ))}
            </div>}
            <div className="flex justify-center my-7">
                <Pagination
                    defaultCurrent={1}
                    total={pData.total_results}
                    showSizeChanger={false}
                    pageSize={20}
                    onChange={(event) => {
                        setPage(event);
                        window.scrollTo({
                            top: 0,
                            left: 0,
                        });
                    }} />
            </div>
        </div>
    )
}
