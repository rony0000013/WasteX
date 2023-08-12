import React from 'react';
import waste1 from '../assets/waste1.jpg';
import waste2 from '../assets/waste2.jpg';
import waste3 from '../assets/waste3.jpg';
import waste4 from '../assets/waste4.jpg';
export default function Blog() {
    return (
        <>
            <div className="bg-primary w-full min-h-screen p-4 flex flex-wrap justify-center gap-4">
            <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
                <figure><img src={waste1} alt="Waste" className="h-[150px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
            <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
                <figure><img src={waste2} alt="Shoes" className="h-[150px]"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
            <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
                <figure><img src={waste3} alt="Shoes" className="h-[150px]"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
            <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
                <figure><img src={waste4} alt="Shoes" className="h-[150px]"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
                
            </div>
        </>
    )
}