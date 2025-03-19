import { Navbar, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'
import useIsClient from '@/hooks/useIsClient'

const Header = () => {
  const isClient = useIsClient()
  return (
    <>
      {isClient && (
        <>
          <Navbar bg='dark' data-bs-theme='dark'>
            <Container>
              <Navbar.Brand href='/'>NextJS + Express Starter Kit</Navbar.Brand>
              <Nav className='ms-auto'>
                <Nav.Link as={Link} href='/'>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} href='/features'>
                  Features
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      )}
    </>
  )
}

export default Header
