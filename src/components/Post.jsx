import styled from 'styled-components'

const PostContainer = styled.article`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const PostTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const PostContent = styled.div`
  line-height: 1.8;
`

const Post = ({ post }) => {
  if (!post) return <div>Post not found</div>

  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.content}</PostContent>
    </PostContainer>
  )
}

export default Post
