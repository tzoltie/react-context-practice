export default function PostList({ posts }) {
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