import { Container, Navbar as Navigation, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Salas from "../pages/Salas";
import Sala from "../pages/Sala";
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
                                <Nav.Link href="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link href="/salas">Salas</Nav.Link>
                                <Nav.Link href="/">Perfil</Nav.Link>
                            </Nav>
                        </Navigation.Collapse>
                    </Navigation>
                </Container>
            </header>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/cadastro">
                    <Cadastro />
                </Route>
                <Route path="/salas/:id/">
                    <Sala />
                </Route>
                <Route path="/salas">
                    <Salas />
                </Route>
                
                <Route path="*">
                    <Error404 />
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default Navbar