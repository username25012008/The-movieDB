import { Dropdown } from 'antd'
import React, { memo } from 'react'
import { FaBookmark, FaHeart, FaList, FaPlay } from 'react-icons/fa'
import { MdOutlineStar } from 'react-icons/md';
import { PiDotsThreeCircleFill } from 'react-icons/pi'

export default function TrailerCard(props) {
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
        <div className="card flex flex-col gap-2 flex-shrink-0 text-center pb-7">
            <div className="relative bg-gray-400 w-[300px] h-[168px] flex justify-center items-center rounded-lg shadow-md hover:scale-105 duration-300 ease-in-out cursor-pointer group">
                <FaPlay className='text-4xl text-white group-hover:text-5xl duration-300 ease-in-out drop-shadow-md' />
                <Dropdown menu={{ items }} placement="bottom" arrow={false} trigger={'click'}>
                    <div className={`absolute top-2 right-3 z-40 cursor-pointer`}>
                        <PiDotsThreeCircleFill className='text-white text-3xl opacity-70 hover:text-lightblue hover:opacity-95' />
                    </div>
                </Dropdown>
            </div>
            <div className="flex flex-col text-white leading-3">
                <h1 className='text-xl font-semibold'>{props.data.name}</h1>
                <p className='text-[16px] font-normal'>{props.data.desc}</p>
                <span>{props.data.count}</span>
            </div>
        </div>
    )
}