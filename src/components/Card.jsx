import { Fragment } from "react";
export default function Card({ image, name, about }) {
  return (
    <Fragment>
      <img src={'https://media.themoviedb.org/t/p/w235_and_h235_face' + image} alt="" className='w-full rounded-t-lg' />
      <div className="p-2">
        <h1 className="text-lg font-semibold text-black">{name}</h1>
        <p className="text-sm text-[#00000099]">
          {about.map((item, index) => (
            <span key={item.id}>
              {item.title || item.name}
              {index < about.length - 1 && ", "}
            </span>
          ))}.
        </p>
      </div>
      </Fragment>
  )
}
