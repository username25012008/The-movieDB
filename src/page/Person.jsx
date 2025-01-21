import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { apiClients } from '../utils/api';

export default function Person() {
    let [actor, setActor] = useState([])
    let [job, setJob] = useState([])
    let [movies, setMovies] = useState([])
    let param = useParams()
    let date = new Date();
    let age
    if (actor.birthday) age = date.getFullYear() - Number(actor.birthday.split('-')[0])
    const activity = async () => {
        let res = await apiClients.get('/person/popular?language=en-US&page=1')
        res = res.data.results.find((item) => { return item.id == param.id })
        setJob(res)
    }
    const person = async () => {
        let res = await apiClients.get(`/person/${param.id}?language=en-US`)
        setActor(res.data);
    }
    const movie = async () => {
        let res = await apiClients.get(`/person/${param.id}/combined_credits?language=en-US`)
        setMovies(res.data.cast)
    }
    useEffect(() => {
        activity()
        person()
        movie()
    }, [])
    return (
        <div className='container flex py-8 justify-between  gap-7'>
            <div className="w-3/12">
                <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2' + actor.profile_path} alt="person" className='rounded-lg w-full' />
                <ul className='text-black'>
                    <li className=""><h1 className='text-xl font-semibold pt-5 pb-2'>Personal Info</h1></li>
                    <li className=""><h1 className='text-base font-semibold'>Known For</h1></li>
                    <li className="mb-5">{job?.known_for_department || '-'}</li>
                    <li className=""><h1 className='text-base font-semibold'>Gender</h1></li>
                    <li className="mb-5">{actor.gender == 2 ? 'Male' : 'Female'}</li>
                    <li className=""><h1 className='text-base font-semibold'>Birthday</h1></li>
                    <li className="mb-5">{actor.birthday ? `${actor.birthday} (${age} years old)` : '-'}</li>
                    <li className=""><h1 className='text-base font-semibold'>Place of Birth</h1></li>
                    <li className="mb-5">{actor.place_of_birth ? `${actor.place_of_birth}` : '-'}</li>
                    <li className=""><h1 className="text-base font-semibold">Also Known As</h1></li>
                    <li className=''>{actor.also_known_as && actor.also_known_as.length > 0 ? actor.also_known_as.join(", ") : '-'}</li>
                </ul>
            </div>

            <div className="w-9/12 text-black">
                <h1 className='text-4xl font-semibold'>{actor?.name}</h1>
                <h3 className='text-xl font-semibold mt-5 mb-2'>Biography</h3>
                <p className='text-base'>{actor.biography ? actor.biography : '-'}</p>
                <h3 className='text-xl font-semibold mt-5 mb-2'>Known For</h3>
                <div className="flex overflow-hidden w-full after overflow-x-auto wrapper gap-3">
                    {movies.map((item, index) => (
                        <Link key={`${item.id}-${index}`}>
                            <div className="flex-shrink-0 text-center w-[130px]">
                                {item.poster_path ? (
                                    <>
                                        <img src={`https://media.themoviedb.org/t/p/w150_and_h225_bestv2${item.poster_path}`} alt='Film' className="rounded-lg w-full" />
                                        <h1 className="text-sm pt-2 pb-1">{item.title || item.name}</h1>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center justify-center bg-gray-200 rounded-lg w-full h-[195px]">
                                            <p className="text-xs text-gray-500">No Image</p>
                                        </div>
                                        <h1 className="text-sm pt-2 pb-1">{item?.title || item?.name }</h1>
                                    </>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
