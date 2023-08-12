import { block, For } from "million/react"
// import blogs from "../store/blogs"
import { useStore } from "@nanostores/react"

// blogs.subscribe((blogs) => {
//     console.log(blogs)
// })


const Showcase = block(() => {
    // const blogs = useStore(blogs);
    //console.log(blogs)

    return (<div className="flex ">
        {/* <For each={}/> */}
    <h1>Hello</h1>
    </div>)
})

export default Showcase