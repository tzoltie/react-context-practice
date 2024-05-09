import { useContext } from "react"
import { postsContext } from "../App"

export default function PostList() {
    const {posts} = useContext(postsContext)

    return (
        <>
            <h2>Here be posts!</h2>
            <hr/>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </>
    )
}