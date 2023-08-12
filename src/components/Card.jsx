import React, { useState } from 'react';
export default function Card({img,title,text}) {
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
    };
    return (
        <>
            <div className="card w-full sm:w-96 bg-base-100 shadow-xl relative">
                <figure><img src={img} alt="Waste" className="h-[150px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className={!isShowMore ? 'truncate' : ''}>{text}</p>
                    <button onClick={toggleReadMoreLess} className="btn btn-primary">
                        {isShowMore ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>
        </>
    )
}