import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo to="/">Blog</Logo>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
        </NavLinks>
      </Nav>
    </StyledHeader>
  )
}

export default Header
