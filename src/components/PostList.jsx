import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const PostCard = styled.article`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`

const PostContent = styled.div`
  padding: 1.5rem;
`

const PostTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`

const PostExcerpt = styled.p`
  color: #666;
  font-size: 0.9rem;
`

const PostList = ({ posts }) => {
  return (
    <PostGrid>
      {posts.map(post => (
        <PostCard key={post.id}>
          <Link to={`/post/${post.id}`}>
            <PostContent>
              <PostTitle>{post.title}</PostTitle>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
            </PostContent>
          </Link>
        </PostCard>
      ))}
    </PostGrid>
  )
}

export default PostList
