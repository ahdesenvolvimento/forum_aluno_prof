import { Container, Navbar as Navigation, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Salas from "../pages/Salas";
import Sala from "../pages/Sala";
function Navbar({ colorBack, logado }) {
  let history = useHistory();
  async function logout(e) {
    e.preventDefault();
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("auth-token-access"),
      },
      body: JSON.stringify({
        refresh: localStorage.getItem("auth-token-refresh"),
      }),
    };
    console.log(init);
    fetch("http://localhost:8000/logout/", init).then((token) => {
      localStorage.removeItem("auth-token-access");
      localStorage.removeItem("auth-token-refresh");
      window.location.href = "/login/";
      // console.log(history)
      // history.push("/login/");
    });
  }

  return (
    <>
      <Router>
        <header style={{ background: colorBack }}>
          <Container>
            <Navigation expand="lg" className="px-3">
              <Navigation.Brand href="/">Home</Navigation.Brand>
              <Navigation.Toggle aria-controls="basic-navbar-nav" />
              <Navigation.Collapse className="justify-content-end">
                <Nav>
                  {logado && logado.length > 0 ? (
                    <>
                      <Nav.Link href="/salas">Salas</Nav.Link>
                      <Nav.Link href="/#" onClick={(e) => logout(e)}>
                        Logout
                      </Nav.Link>
                    </>
                  ) : (
                    <Nav.Link href="/login">Login</Nav.Link>
                  )}
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
          {/* <Route path="/salas/:id/">
            <Sala />
          </Route>
          <Route exact path="/salas">
            <Salas />
          </Route> */}
          {/* <Route path="*" render={Error404} /> */}
          {logado && logado.length > 0 ? (
            <>
              <Route path="/salas/:id/">
                <Sala />
              </Route>
              <Route exact path="/salas">
                <Salas />
              </Route>
              {/* <Route path="*" render={Error404} /> */}
            </>
          ) : (
            <Route path="*">
              <Redirect to="/" />
            </Route>
          )}
          <Route path="*">
            <Redirect to="/" />
            {/* <Error404 /> */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Navbar;
