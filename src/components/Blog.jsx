import React, { useEffect, useState } from 'react';
import Card from './Card';
import waste1 from '../assets/waste1.jpg';
import waste2 from '../assets/waste2.jpg';
import waste3 from '../assets/waste3.jpg';
import waste4 from '../assets/waste4.jpg';
const wastes = [waste1, waste2, waste3, waste4]
import { For } from "million"
import axios from "axios";
export default function Blog() {
    const [isShowMore, setIsShowMore] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(
        axios.get(import.meta.env.VITE_BACKEND_API+"/blogs/").then((res) => {
            setBlogs(res.data.blogs);
        }).catch((err) => {
            console.log(err)
        })
        , []);
    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
    };
    return (
        <>
            <div className="bg-primary w-full min-h-screen p-4 flex flex-wrap justify-center gap-4">
               <For each={blogs}>
                {(item, idx) =>
                    <Card img={wastes[idx]}
                        title={title}
                        text={text}></Card>
               }</For>
            </div>
        </>
    )
}