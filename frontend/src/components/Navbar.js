import { Container, Navbar as Navigation, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
function Navbar({colorBack}){

    return (
        <>
         <Router>
            <header style={{background: colorBack}}>
                <Container>
                    <Navigation bg="light" expand="lg" className="px-3">
                        <Navigation.Brand href="/">Home</Navigation.Brand>
                        <Navigation.Toggle aria-controls="basic-navbar-nav" />
                        <Navigation.Collapse className="justify-content-end"> 
                            <Nav>
                                <Nav.Link>
                                    <Link to="/login">Login</Link>
                                </Nav.Link>
                                <Nav.Link href="/">Salas</Nav.Link>
                                <Nav.Link href="/">Perfil</Nav.Link>
                            </Nav>
                        </Navigation.Collapse>
                    </Navigation>
                </Container>
            </header>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default Navbar