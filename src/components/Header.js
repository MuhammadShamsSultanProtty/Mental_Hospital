import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="warning" variant="warning" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">Mental Hospital</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/doctorslist">Doctor list</Nav.Link>
            <Nav.Link as={Link} to="/schedule">Appointment section</Nav.Link>
            {user ?
              <Navbar>
                <Navbar.Text>
                  Signed in as : {user}
                </Navbar.Text>
                <button className="btn btn-danger ms-2" onClick={logOut}>Logout</button>
              </Navbar>
              :
              <Nav.Link as={Link} to="/login">Login here</Nav.Link>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Header;
