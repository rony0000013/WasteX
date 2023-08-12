import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'


const Card = ({img, title, text}) => {

    const [isShowMore, setIsShowMore] = useState(false);

    return (
        <>
            <div className="card sm:w-[80vw] w-full bg-gray-800 shadow-xl relative">
                <figure><img src={img} alt="Waste" className=" mt-4 rounded-lg h-[150px] w-[150px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><ReactMarkdown>{title}</ReactMarkdown></h2>
                    <p className={!isShowMore ? 'truncate' : ''}><ReactMarkdown>{text}</ReactMarkdown></p>
                    <button onClick={() => setIsShowMore(!isShowMore)} className="btn btn-active btn-success">
                        {isShowMore ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>
        </>
    )
}


export default Card