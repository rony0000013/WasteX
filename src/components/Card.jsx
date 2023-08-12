import React, { useState } from 'react';
// import { block } from "million/react"


const Card = ({img, title, text}) => {

    const [isShowMore, setIsShowMore] = useState(false);

    return (
        <>
            <div className="card sm:w-[80vw] w-full bg-base-100 shadow-xl relative">
                <figure><img src={img} alt="Waste" className="h-[150px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className={!isShowMore ? 'truncate' : ''}>{text}</p>
                    <button onClick={() => setIsShowMore(!isShowMore)} className="btn btn-primary">
                        {isShowMore ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>
        </>
    )
}


export default Card