import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'
import Post from './components/Post'

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Welcome to the Blog',
      content: 'This is your first blog post. Start writing and sharing your thoughts!',
      excerpt: 'This is your first blog post. Start writing and sharing your thoughts!...'
    }
  ])

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PostList posts={posts} />} />
        <Route path="/create" element={<CreatePost onCreatePost={handleCreatePost} />} />
        <Route 
          path="/post/:id" 
          element={<Post post={posts.find(post => post.id === parseInt(window.location.pathname.split('/')[2]))} />}
        />
      </Routes>
    </>
  )
}

export default App
