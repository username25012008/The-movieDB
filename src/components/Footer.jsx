import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='bg-darkblue'>
                <div className="font-sans-new container flex gap-10 justify-center items-center">
                    <div className="">
                        <div className="flex justify-end "><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="logo"  className='w-[130px]'/></div>
                        <h1 className='text-lg text-[#01B4E4] font-bold bg-white rounded-md py-2 px-4 mt-10'>Привет, User_25_01!</h1>
                    </div>
                    <div className="flex gap-10 py-20">
                        <div className="">
                            <h1 className="text-white text-xl font-bold">Главное</h1>
                            <ul className="">
                                <li className="text-white text-lg font-medium">О TMDB</li>
                                <li className="text-white text-lg font-medium">Связаться с нами</li>
                                <li className="text-white text-lg font-medium">Форумы поддержки</li>
                                <li className="text-white text-lg font-medium">API</li>
                                <li className="text-white text-lg font-medium">Статус системы</li>
                            </ul>
                        </div>
                        <div className="">
                            <h1 className="text-white text-xl font-semibold">Участвуйте</h1>
                            <ul className="">
                                <li className="text-white text-lg font-medium">Библия редакторов</li>
                                <li className="text-white text-lg font-medium">Добавить новый фильм</li>
                                <li className="text-white text-lg font-medium">Добавить новый сериал</li>
                            </ul>
                        </div>
                        <div className="">
                            <h1 className="text-white text-xl font-semibold">Сообщество</h1>
                            <ul className="">
                                <li className="text-white text-lg font-medium">Руководства</li>
                                <li className="text-white text-lg font-medium">Обсуждения</li>
                                <li className="text-white text-lg font-medium">Доска почёта</li>
                            </ul>
                        </div>
                        <div className="">
                            <h1 className="text-white text-xl font-semibold">О праве</h1>
                            <ul className="">
                                <li className="text-white text-lg font-medium">Условия использования</li>
                                <li className="text-white text-lg font-medium">API Правила использования</li>
                                <li className="text-white text-lg font-medium">Политика конфиденциальности</li>
                                <li className="text-white text-lg font-medium">DMCA Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
