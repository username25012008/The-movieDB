import React, { useState } from 'react'
import { Flat } from '@alptugidin/react-circular-progress-bar';
import { Dropdown } from 'antd';
import { PiDotsThreeCircleFill } from 'react-icons/pi';
import { FaBookmark, FaHeart, FaList } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';
import useDateFormatter from '../hooks/useDateFormatter';
import { Link } from 'react-router-dom';

export default function HomeCard({ id, title, poster_path, release_date, vote_average }) {
    const [tripleDot, setTripleDot] = useState(false)
    vote_average = Math.round(vote_average * 10)
    let { formatDate } = useDateFormatter(release_date)
    const items = [
        {
            key: '1',
            label: (
                <div className="flex items-center gap-1 hover:bg-darkblue w-full group px-2">
                    <FaList className="text-base mt-[2px] text-black group-hover:text-white" />
                    <h1 className="text-base font-semibold text-[#00000099] group-hover:text-white">Добавить в список</h1>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className="flex items-center gap-1 hover:bg-darkblue w-full group px-2">
                    <FaHeart className='text-base mt-[2px] text-black group-hover:text-white' />
                    <h1 className="text-base font-semibold text-[#00000099] group-hover:text-white">Избранное</h1>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div className="flex items-center gap-1 hover:bg-darkblue w-full group px-2">
                    <FaBookmark className='text-base mt-[2px] text-black group-hover:text-white' />
                    <h1 className="text-base font-semibold text-[#00000099] group-hover:text-white">Список отслеживания</h1>
                </div>
            ),
        },
        {
            key: '4',
            label: (
                <div className="flex items-center gap-1 hover:bg-darkblue w-full group px-2">
                    <MdOutlineStar className='text-lg mt-[2px] text-black group-hover:text-white' />
                    <h1 className="text-base font-semibold text-[#00000099] group-hover:text-white">Ваш рейтинг</h1>
                </div>
            ),
        },
    ];
    return (
        <Link to={`/mtv/${id}`}>
            <div className="card relative overflow-hidden">
                <img
                    src={'https://media.themoviedb.org/t/p/w220_and_h330_face' + poster_path}
                    alt={`${title}`}
                    className="card-img rounded-t-lg shadow-lg w-full"
                />
                <div className="card-content relative px-3 py-7">
                    <h1 className="card-title text-base font-bold text-black">{title}</h1>
                    <p className="card-date text-base text-[#00000099]">{formatDate(release_date)}</p>
                    <div className="w-[35px] h-[35px] absolute top-[-20px] z-10 left-3 bg-darkblue rounded-full ">
                        <Flat
                            progress={vote_average}
                            showMiniCircle={false}
                            sx={{
                                strokeColor: vote_average > 0 && vote_average <= 30 ? '#E33B30' : (vote_average > 30 && vote_average <= 70 ? '#CDD030' : '#21ce79'),
                                bgStrokeColor: vote_average > 30 && vote_average < 70 ? '#413C0F' : (vote_average >= 0 && vote_average <= 30 ? '#551435' : '#1f4529'),
                                barWidth: 7,
                                valueColor: '#fff',
                                valueFamily: "Source Sans 3",
                                valueSize: 40,
                                valueWeight: 600,
                                size: 80
                            }}
                        />
                    </div>
                </div>
                <Dropdown menu={{ items }} placement="bottom" arrow={false} trigger={'click'} open={tripleDot == id}>
                    <button onClick={() => {
                        if (tripleDot == false) {
                            setTimeout(() => { setTripleDot(id) }, 1); setTimeout(() => { setTripleDot(false) }, 3000);
                        }
                    }} className={`absolute top-2 right-3 cursor-pointer ${tripleDot == id ? 'z-0' : 'z-40'}`}>
                        <PiDotsThreeCircleFill className={` text-3xl opacity-70 ${!tripleDot == false ? 'text-white cursor-not-allowed' : 'text-white hover:text-lightblue hover:opacity-95'}`} />
                    </button>
                </Dropdown>
                <div className={`bl w-[180px] h-full absolute top-0 rounded-lg z-20 ${tripleDot == id ? '' : 'translate-y-full'} bg-gradient-to-t from-black/30 via-black/50 to-transparent backdrop-blur-lg`}></div>
            </div>
        </Link>
    )
}
