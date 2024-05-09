import { useContext, useState } from "react"
import {postsContext} from '../App'

export default function CreatePostForm() {
    const [postTitle, setPostTitle] = useState('')

    const {posts, setPosts} = useContext(postsContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const postToCreate = {
            id: posts.length + 1,
            title: postTitle
        }

        setPosts([postToCreate, ...posts])
        setPostTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} placeholder="Title"/>
            <button type="submit">Create post</button>
        </form>
    )
}