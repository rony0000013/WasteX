import React, { useEffect, useState } from 'react';
import Card from './Card';
import waste1 from '../assets/waste1.jpg';
import waste2 from '../assets/waste2.jpg';
import waste3 from '../assets/waste3.jpg';
import waste4 from '../assets/waste4.jpg';
const wastes = [waste1, waste2, waste3, waste4]
import { For, block } from "million/react"
import axios from "axios";



export default function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_API+"/blogs/").then((res) => {
            setBlogs(res.data.blogs);
            console.log(res.data.blogs)
        }).catch((err) => {
            console.log(err)
        })
    },[])


    return (
        <>
            <div className="bg-primary flex  flex-wrap align-middle m-auto p-auto w-[100vw] min-h-screen p-4 justify-center gap-4">
               <For each={blogs}>
                {(item, idx) =>
                    <Card img={wastes[idx]}
                        title={item.title}
                        text={item.text}></Card>
               }</For>
            </div>
        </>
    )
}