import { useState } from "react"

export default function CreatePostForm({ posts, setPosts }) {
    const [postTitle, setPostTitle] = useState('')

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