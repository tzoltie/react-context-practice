import { useState } from 'react'
import './App.css'
import CreatePostForm from './components/CreatePostForm'
import PostList from './components/PostList'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Hello, world :)' },
    { id: 2, title: 'Goodbye, world :('}
  ])

  return (
    <>
      <header>
        <CreatePostForm posts={posts} setPosts={setPosts} />
      </header>
      <main>
        <PostList posts={posts} />
      </main>
    </>
  )
}

export default App
