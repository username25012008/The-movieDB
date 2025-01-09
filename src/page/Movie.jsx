import React, { useEffect, useState } from 'react'
import { apiClients } from '../utils/api'
import { useParams } from 'react-router-dom'
import { Pagination } from 'antd'
import MovieCard from '../components/MovieCard'
import SortBar from '../components/SortBar'
import { HashLoader } from 'react-spinners'

export default function Movie() {
    let [movie, setMovie] = useState([])
    let [page, setPage] = useState(1)
    let param = useParams()
    const [loading, setLoading] = useState(true);

    const movieList = async () => {
        setLoading(true)
        try {
            let res = await apiClients.get(`/movie/${param.type}?language=ru-Ru&page=${page}`)
            setMovie(res?.data)
        } catch (error) {
            alert('Error:' + error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        movieList()
    }, [param, page])
    return (
        <div className='container'>
            <h1 className='my-8 text-2xl text-black font-semibold'>Лучшие фильмы</h1>
            <div className="w-full grid gap-10 grid-cols-8">
                <div className="col-span-2 ">
                    <SortBar />
                </div>
                {loading ? <div className="col-span-6 flex justify-center items-center h-screen">
                    <HashLoader color="#032541" size={100} />
                </div> : <div className="col-span-6 grid grid-cols-5 gap-7">
                    {movie?.results?.map((item) => {
                        return <div className="col-span-1 w-[180px] border border-[#00000025] rounded-lg shadow-md" key={item.id}><MovieCard id={item.id} title={item.title} poster_path={item.poster_path} release_date={item.release_date} vote_average={item.vote_average} /></div>
                    })}
                </div>}
            </div>
            <div className="flex justify-center my-7">
                <Pagination
                    defaultCurrent={1}
                    total={movie.total_results}
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
