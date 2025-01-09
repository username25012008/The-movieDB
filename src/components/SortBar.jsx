import React, { useState } from 'react'
import { Collapse } from 'antd';
import { FaChevronRight } from 'react-icons/fa';

export default function SortBar() {
    const [down, setDown] = useState([])
    const items = [
        {
            key: '1',
            label: <h1 className='text-lg font-semibold text-blaсл'>Sort</h1>,
            children: <div className="">Coming Soon!</div>,
        },
        {
            key: '2',
            label: <h1 className='text-lg font-semibold text-blaсл'>Filters</h1>,
            children: <div className="">Coming Soon!</div>,
        }
    ]
    const expandIcon = ({ isActive }) => (<FaChevronRight className={` duration-300 ${isActive ? "rotate-90" : "rotate-0"} my-1`} />)
    return (
        <div className=''>
            <div className="border border-[#00000025] rounded-lg shadow-md">
                <Collapse items={items} expandIcon={expandIcon} expandIconPosition='end' onChange={(keys) => { setDown(keys) }} activeKey={down} />
            </div>
        </div>
    )
}