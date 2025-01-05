import React, { useEffect, useRef, useState } from 'react'
import bg_section from '../assets/img/bg-section.png'
import { Flat } from '@alptugidin/react-circular-progress-bar';
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { MdOutlineStar } from "react-icons/md";
import { Dropdown } from 'antd';
import { FaBookmark, FaHeart, FaList, FaPlay } from 'react-icons/fa';
import { apiClients } from '../utils/api';

export default function Home() {
    const [activeButton, setActiveButton] = useState(false);
    const [activeButtonTwo, setActiveButtonTwo] = useState(false)
    const [tripleDot, setTripleDot] = useState(false)
    const [tripleDotTwo, setTripleDotTwo] = useState(false)
    const [activeButtonThree,setActiveButtonThree] = useState(false)
    const [films,setFilms] = useState([])
    const [populars,setPopulars] = useState([])
    const film = async ()=>{
        let res = await apiClients.get('/trending/movie/day?language=en-US')
        setFilms(res.data.results)
    }
    let trailer = [
        {
            name:'Title',
            desc:'Description',
            percent:45,
            id:1
        },
        {
            name:'Title',
            desc:'Description',
            percent:20,
            id:2
        },
        {
            name:'Title',
            desc:'Description',
            percent:95,
            id:3
        },
        {
            name:'Title',
            desc:'Description',
            percent:85,
            id:4
        },
        {
            name:'Title',
            desc:'Description',
            percent:73,
            id:5
        },
        {
            name:'Title',
            desc:'Description',
            percent:45,
            id:6
        },
        {
            name:'Title',
            desc:'Description',
            percent:66,
            id:7
        },
        {
            name:'Title',
            desc:'Description',
            percent:35,
            id:8
        },
        {
            name:'Title',
            desc:'Description',
            percent:58,
            id:9
        },
    ]
    const popular = async()=>{
        let res = await apiClients.get('/movie/top_rated?language=en-US&page=1')
        setPopulars(res.data.results)
    } 
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
    useEffect(()=>{
        film()
        popular()
    },[])
    return (
        <div className="font-sans-new caret-lightblue">
            <header className='header_section h-[300px] flex justify-center items-center'>
                <div className="container px-7 text-white flex flex-col gap-10">
                    <div className="">
                        <h1 className='text-5xl font-bold'>Добро пожаловать.</h1>
                        <p className='text-[32px] font-semibold'>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</p>
                    </div>
                    <div className="relative flex items-center">
                        <input type="text" className=' bg-white w-full py-[10px] px-5 rounded-full placeholder:text-[#596169] text-[#596169] outline-none text-lg' placeholder="Найти фильм, сериал, персону......" />
                        <button className='bg-gr-b-gradient absolute right-0 rounded-full py-3 px-7 hover:text-black duration-300 ease-in-out'>Поиск</button>
                    </div>
                </div>
            </header>
            <section className='container pl-7 pt-8'>
                <div className="flex gap-5">
                    <h1 className='text-2xl font-semibold'>В тренде</h1>
                    <div className="border border-darkblue rounded-full inline-block">
                        <div className="flex">
                            <button onClick={() => { setActiveButton(false) }} className={`${activeButton == false ? 'bg-darkblue' : ''} px-5 py-1 rounded-full`}><p className={`${activeButton == false ? 'bg-gr-gradient bg-clip-text text-transparent' : 'text-darkblue'} font-bold`}>Сегодня</p></button>
                            <button onClick={() => { setActiveButton(true) }} className={`${activeButton == true ? 'bg-darkblue' : ''} px-5 py-1 rounded-full`}><p className={`${activeButton == true ? 'bg-gr-gradient bg-clip-text text-transparent' : 'text-darkblue'} font-bold`}>На этой неделе</p></button>
                            <div className={`${activeButton == 'today' ? 'bg-darkblue' : ''} h-[33px]`}></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container relative pt-5 after">
                <div className="cards relative z-10 pl-7">
                    <div className="wrapper scroll-x overflow-x-scroll">
                        <div className="items flex pb-5 gap-4">
                            {films.map((item)=>(
                                <div className="card w-[155px] relative overflow-hidden flex-shrink-0" key={item.id}>
                                <img
                                    src={'https://media.themoviedb.org/t/p/w220_and_h330_face'+item.poster_path}
                                    alt="person"
                                    className="card-img rounded-lg shadow-lg"
                                />
                                <div className="card-content relative px-3 pt-7">
                                    <h1 className="card-title text-base font-bold text-black">{item.title}</h1>
                                    <p className="card-date text-base text-[#00000099]">{item.release_date}</p>
                                    <div className="w-[35px] h-[35px] absolute top-[-20px] z-10 left-3 bg-darkblue rounded-full font-sans-new">
                                        <Flat
                                            progress={Math.round(item.vote_average * 10)}
                                            showMiniCircle={false}
                                            sx={{
                                                strokeColor: Math.round(item.vote_average * 10) > 0 && Math.round(item.vote_average * 10) <= 30 ? '#E33B30' : (Math.round(item.vote_average * 10) > 30 && Math.round(item.vote_average * 10) <= 60 ? '#CDD030' : '#21ce79'),
                                                bgStrokeColor: Math.round(item.vote_average * 10) > 30 && Math.round(item.vote_average * 10) < 60 ? '#413C0F' : '#1f4529',
                                                barWidth: 6,
                                                valueColor: '#fff',
                                                valueFamily: "Source Sans 3",
                                                valueSize: 40
                                            }}
                                        />
                                    </div>
                                </div>
                                <Dropdown menu={{ items }} placement="bottom" arrow={false} trigger={'click'} open={tripleDot == item.id}>
                                    <button onClick={() => {
                                        if (tripleDot == false) {
                                            setTimeout(() => { setTripleDot(item.id)}, 1); setTimeout(() => { setTripleDot(false) }, 3000);
                                        }
                                    }} className={`absolute top-2 right-3 cursor-pointer ${tripleDot == item.id ? 'z-0' : 'z-40'}`}>
                                        <PiDotsThreeCircleFill className={` text-3xl opacity-70 ${!tripleDot == false ? 'text-white cursor-not-allowed': 'text-white hover:text-lightblue hover:opacity-95'}`} />
                                    </button>
                                </Dropdown>
                                <div className={`bl w-[155px] h-full absolute top-0 rounded-lg z-20 ${tripleDot == item.id ? '' : 'translate-y-full'} bg-gradient-to-t from-black/30 via-black/50 to-transparent backdrop-blur-lg`}></div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <img src={bg_section} alt="bg" className='absolute bottom-0 z-0 w-full bg-cover bg-center h-auto' />
            </div>
            <div className="swiper_section relative">
                <div className="container px-7 pt-8 relative z-10">
                    <div className="flex gap-5 items-center">
                        <h1 className='text-white text-2xl font-semibold'>Последние трейлеры</h1>
                        <div className="flex border border-[#1ED5A9] rounded-full">
                            <button className={`${!activeButtonTwo ? 'bg-wh-gr-gradient text-darkblue' : 'text-white'} rounded-full  text-base py-1 px-5 font-semibold`} onClick={() => { setActiveButtonTwo(false) }}>Popular</button>
                            <button className={`${activeButtonTwo ? 'bg-wh-gr-gradient text-darkblue' : 'text-white'} rounded-full  text-base py-1 px-5 font-semibold`} onClick={() => { setActiveButtonTwo(true) }}>В кинотеатрах</button>
                        </div>
                    </div>
                    <div className="cards py-5 flex overflow-hidden px-5 gap-5 overflow-x-scroll wrapper">
                        {trailer.map((item)=>(
                            <div className="card flex flex-col gap-2 flex-shrink-0 text-center pb-7" key={item.id}>
                            <div className="relative bg-gray-400 w-[300px] h-[168px] flex justify-center items-center rounded-lg shadow-md hover:scale-105 duration-300 ease-in-out cursor-pointer group"><FaPlay className='text-4xl text-white group-hover:text-5xl duration-300 ease-in-out drop-shadow-md' />
                                <Dropdown menu={{ items }} placement="bottom" arrow={false} trigger={'click'}>
                                    <div className={`absolute top-2 right-3 z-40 cursor-pointer`}>
                                        <PiDotsThreeCircleFill className='text-white text-3xl opacity-70 hover:text-lightblue hover:opacity-95' />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className="flex flex-col text-white leading-3">
                                <h1 className='text-xl font-semibold'>{item.name}</h1>
                                <p className='text-[16px] font-normal'>{item.desc}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="bg-darkblue absolute w-full h-full opacity-65 top-0 z-0"></div>
            </div>
            <div className="container pt-8">
                <div className="px-10 flex gap-5">
                    <h1 className="text-2xl font-semibold">Что популярно</h1>
                    <div className={`rounded-full border border-darkblue ${activeButtonThree ? 'bg-darkblue':'text-darkblue'}`}><button onClick={()=>{if(activeButtonThree == false){setActiveButtonThree(true)}else{setActiveButtonThree(false)}}} className={`py-1 px-5  text-base font-semibold ${activeButtonThree ? 'bg-gr-gradient bg-clip-text text-transparent':'text-darkblue'}`}>В кинотеатрах</button></div>
                </div>
                <div className="cards relative z-10 py-5">
                    <div className="wrapper scroll-x overflow-x-scroll">
                        <div className="items flex pb-5 gap-4">
                        {populars.map((item)=>(
                                <div className="card w-[155px] relative overflow-hidden flex-shrink-0" key={item.id}>
                                <img
                                    src={'https://media.themoviedb.org/t/p/w220_and_h330_face'+item.poster_path}
                                    alt="film"
                                    className="card-img rounded-lg shadow-lg"
                                />
                                <div className="card-content relative px-3 pt-7">
                                    <h1 className="card-title text-base font-bold text-black">{item.title}</h1>
                                    <p className="card-date text-base text-[#00000099]">{item.release_date}</p>
                                    <div className="w-[35px] h-[35px] absolute top-[-20px] z-10 left-3 bg-darkblue rounded-full font-sans-new">
                                        <Flat
                                            progress={Math.round(item.vote_average * 10)}
                                            showMiniCircle={false}
                                            sx={{
                                                strokeColor: Math.round(item.vote_average * 10) > 0 && Math.round(item.vote_average * 10) <= 30 ? '#E33B30' : (Math.round(item.vote_average * 10) > 30 && Math.round(item.vote_average * 10) <= 60 ? '#CDD030' : '#21ce79'),
                                                bgStrokeColor: Math.round(item.vote_average * 10) > 30 && Math.round(item.vote_average * 10) < 60 ? '#413C0F' : '#1f4529',
                                                barWidth: 6,
                                                valueColor: '#fff',
                                                valueFamily: "Source Sans 3",
                                                valueSize: 40
                                            }}
                                        />
                                    </div>
                                </div>
                                <Dropdown menu={{ items }} placement="bottom" arrow={false} trigger={'click'} open={tripleDotTwo == item.id}>
                                    <button onClick={() => {
                                        if (tripleDotTwo == false) {
                                            setTimeout(() => { setTripleDotTwo(item.id)}, 1); setTimeout(() => { setTripleDotTwo(false) }, 3000);
                                        }
                                    }} className={`absolute top-2 right-3 cursor-pointer ${tripleDotTwo == item.id ? 'z-0' : 'z-40'}`}>
                                        <PiDotsThreeCircleFill className={` text-3xl opacity-70 ${!tripleDotTwo == false ? 'text-white cursor-not-allowed': 'text-white hover:text-lightblue hover:opacity-95'}`} />
                                    </button>
                                </Dropdown>
                                <div className={`bl w-[155px] h-full absolute top-0 rounded-lg z-20 ${tripleDotTwo == item.id ? '' : 'translate-y-full'} bg-gradient-to-t from-black/30 via-black/50 to-transparent backdrop-blur-lg`}></div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-7 py-8 pt-8">
                <div className="flex gap-5 items-center">
                    <h1 className='text-2xl font-semibold'>Доска почёта</h1>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                            <div className="bg-wh-gr-gradient w-2 h-2 rounded-full"></div>
                            <p className='text-black text-base'>Правки за всё время</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-or-red-gradient w-2 h-2 rounded-full"></div>
                            <p className='text-black text-base'>Правки за неделю</p>
                        </div>
                    </div>
                </div>
                <div className="pt-5 ">
                    <div className="users flex flex-wrap flex-row">
                        <div className="user w-6/12 flex justify-between items-center gap-3">
                            <img src="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg" alt="avatar" className='w-14 h-14 rounded-full' />
                            <div className="flex flex-col w-full">
                                <h1 className="text-xl text-black font-semibold hover:text-[#1ED5A9] duration-300 ease-in-out">Shei</h1>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-wh-gr-gradient w-6/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>1,464,333</h1>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-or-red-gradient w-10/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>24,313</h1>
                                </div>
                            </div>
                        </div>
                        <div className="user w-6/12 flex justify-between items-center gap-3">
                            <img src="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg" alt="avatar" className='w-14 h-14 rounded-full' />
                            <div className="flex flex-col w-full">
                                <h1 className="text-xl text-black font-semibold hover:text-[#1ED5A9] duration-300 ease-in-out">Shei</h1>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-wh-gr-gradient w-6/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>1,464,333</h1>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-or-red-gradient w-10/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>24,313</h1>
                                </div>
                            </div>
                        </div>
                        <div className="user w-6/12 flex justify-between items-center gap-3">
                            <img src="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg" alt="avatar" className='w-14 h-14 rounded-full' />
                            <div className="flex flex-col w-full">
                                <h1 className="text-xl text-black font-semibold hover:text-[#1ED5A9] duration-300 ease-in-out">Shei</h1>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-wh-gr-gradient w-6/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>1,464,333</h1>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-or-red-gradient w-10/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>24,313</h1>
                                </div>
                            </div>
                        </div>
                        <div className="user w-6/12 flex justify-between items-center gap-3">
                            <img src="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg" alt="avatar" className='w-14 h-14 rounded-full' />
                            <div className="flex flex-col w-full">
                                <h1 className="text-xl text-black font-semibold hover:text-[#1ED5A9] duration-300 ease-in-out">Shei</h1>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-wh-gr-gradient w-6/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>1,464,333</h1>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-or-red-gradient w-10/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>24,313</h1>
                                </div>
                            </div>
                        </div>
                        <div className="user w-6/12 flex justify-between items-center gap-3">
                            <img src="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg" alt="avatar" className='w-14 h-14 rounded-full' />
                            <div className="flex flex-col w-full">
                                <h1 className="text-xl text-black font-semibold hover:text-[#1ED5A9] duration-300 ease-in-out">Shei</h1>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-wh-gr-gradient w-6/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>1,464,333</h1>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-or-red-gradient w-10/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>24,313</h1>
                                </div>
                            </div>
                        </div>
                        <div className="user w-6/12 flex justify-between items-center gap-3">
                            <img src="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg" alt="avatar" className='w-14 h-14 rounded-full' />
                            <div className="flex flex-col w-full">
                                <h1 className="text-xl text-black font-semibold hover:text-[#1ED5A9] duration-300 ease-in-out">Shei</h1>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-wh-gr-gradient w-6/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>1,464,333</h1>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-or-red-gradient w-10/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>24,313</h1>
                                </div>
                            </div>
                        </div>
                        <div className="user w-6/12 flex justify-between items-center gap-3">
                            <img src="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg" alt="avatar" className='w-14 h-14 rounded-full' />
                            <div className="flex flex-col w-full">
                                <h1 className="text-xl text-black font-semibold hover:text-[#1ED5A9] duration-300 ease-in-out">Shei</h1>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-wh-gr-gradient w-6/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>1,464,333</h1>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-or-red-gradient w-10/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>24,313</h1>
                                </div>
                            </div>
                        </div>
                        <div className="user w-6/12 flex justify-between items-center gap-3">
                            <img src="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg" alt="avatar" className='w-14 h-14 rounded-full' />
                            <div className="flex flex-col w-full">
                                <h1 className="text-xl text-black font-semibold hover:text-[#1ED5A9] duration-300 ease-in-out">Shei</h1>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-wh-gr-gradient w-6/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>1,464,333</h1>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-or-red-gradient w-10/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>24,313</h1>
                                </div>
                            </div>
                        </div>
                        <div className="user w-6/12 flex justify-between items-center gap-3">
                            <img src="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg" alt="avatar" className='w-14 h-14 rounded-full' />
                            <div className="flex flex-col w-full">
                                <h1 className="text-xl text-black font-semibold hover:text-[#1ED5A9] duration-300 ease-in-out">Shei</h1>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-wh-gr-gradient w-6/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>1,464,333</h1>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-or-red-gradient w-10/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>24,313</h1>
                                </div>
                            </div>
                        </div>
                        <div className="user w-6/12 flex justify-between items-center gap-3">
                            <img src="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg" alt="avatar" className='w-14 h-14 rounded-full' />
                            <div className="flex flex-col w-full">
                                <h1 className="text-xl text-black font-semibold hover:text-[#1ED5A9] duration-300 ease-in-out">Shei</h1>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-wh-gr-gradient w-6/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>1,464,333</h1>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <div className="bg-or-red-gradient w-10/12 h-2 rounded-full"></div>
                                    <h1 className='text-sm text-black font-bold'>24,313</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
