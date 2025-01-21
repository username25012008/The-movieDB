import React from "react";
import logo from "../assets/img/logo.svg";
import { Dropdown, Popover, Space } from "antd";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    const menuItems = [
        {
            key: "1",
            title: "Фильмы",
            items: [
                {
                    key: "1",
                    label: <Link to="/movie/popular">Популярные</Link>,
                },
                {
                    key: "2",
                    label: <Link to="/movie/now_playing">Смотрят сейчаc</Link>,
                },
                {
                    key: "3",
                    label: <Link to="/movie/upcoming">Ожидаемые</Link>,
                },
                {
                    key: "4",
                    label: <Link to="/movie/top_rated">Лучшие</Link>,
                },
            ],
        },
        {
            key: "2",
            title: "Сериалы",
            items: [
                {
                    key: "1",
                    label: <Link to="/tv/popular">Популярные</Link>,
                },
                {
                    key: "2",
                    label: <Link to="/tv/airing_today">В эфире сегодня</Link>,
                },
                {
                    key: "3",
                    label: <Link to="/tv/on_the_air">По телевидению</Link>,
                },
                {
                    key: "4",
                    label: <Link to="/tv/top_rated">Лучшие</Link>,
                },
            ],
        },
        {
            key: "3",
            title: "Люди",
            items: [
                {
                    key: "1",
                    label: <Link to="/popular">Популярные люди</Link>,
                },
            ],
        },
        {
            key: "4",
            title: "Ещё",
            items: [
                {
                    key: "1",
                    label: <Link>Обсуждения</Link>,
                },
                {
                    key: "2",
                    label: <Link>Доска почёта</Link>,
                },
                {
                    key: "3",
                    label: <Link>Поддержка</Link>,
                },
                {
                    key: "4",
                    label: <Link>Api</Link>,
                },
            ],
        },
    ];

    return (
        <>
            <nav className="bg-darkblue flex  sticky z-[999] top-0 shadow-lg">
                <div className="container py-1 flex justify-between items-center">
                    <div className="left_bar flex justify-between items-center gap-5">
                        <Link to="/">
                            <img src={logo} alt="logotip" className="w-[154px] h-[20px]" />
                        </Link>
                        <ul className="py-2 flex gap-2">
                            {menuItems.map((item) => (
                                <Dropdown menu={{ items: item.items }} key={item.key}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space className="text-white p-2 text-base font-semibold cursor-pointer">
                                            {item.title}
                                        </Space>
                                    </a>
                                </Dropdown>
                            ))}
                        </ul>
                    </div>
                    <div className="right_bar flex justify-between items-center text-white gap-8">
                        <Popover
                            content="Не можете найти фильм или сериал? Войдите на сайт, чтобы добавить его."
                            trigger="click"
                        >
                            <Space>
                                <FaPlus className="text-xl cursor-pointer" />
                            </Space>
                        </Popover>
                        <select className="appearance-none bg-transparent text-center rounded-[3px] border border-white text-base font-semibold cursor-pointer hover:bg-white hover:text-darkblue outline-none">
                            <option value="RU">RU</option>
                            <option value="UZ">UZ</option>
                            <option value="ENG">ENG</option>
                        </select>
                        <button className="text-base font-semibold">Войти</button>
                        <button className="text-base font-semibold">
                            Присоединиться к TMDB
                        </button>
                        <button className="text-lightblue text-[22px]">
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
