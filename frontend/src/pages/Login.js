import Input from "../components/Input";
import { Button } from "react-bootstrap";
import styles from "./Login.module.css";
import Main from "../layout/Main";
import { Link } from "react-router-dom";
import { useState } from "react";
function Login() {
const access_token = localStorage.getItem('auth-token-access');
console.log(access_token)
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  async function realizarLogin(e) {
    e.preventDefault();
    const usuario = {
      email: username,
      password: password,
    };
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    };
    //   await fetch('http://localhost:8000/teste/', init)
    await fetch("http://localhost:8000/token/", init)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          console.log(response);
          throw new Error("Usuário ou senha inválidos, tente novamente");
        }
      })
      .then((token) => {
        const token_list = JSON.parse(token);
        localStorage.setItem("auth-token-access", token_list["access"]);
        localStorage.setItem("auth-token-refresh", token_list["refresh"]);
        // this.setState({ errorMessage: "", successMessage: "" });
      })
      .catch((error) => {
          console.log('teste')
        // this.setState({ errorMessage: error.message });
      });
  }
  const content = (
    <div className={styles.main}>
      <form
        action=""
        onSubmit={(e) => realizarLogin(e)}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Login</h3>
          </div>
        </div>
        <Input
          name="username"
          id="username"
          placeHolder="Insira seu usuário"
          text="Usuário"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          name="password"
          id="password"
          placeHolder="Insira sua senha"
          text="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="btn btn-primary mt-3 w-25">
          Entrar
        </Button>
        <Link to="/cadastro" className="btn btn-primary mt-3 w-25">
          Criar Conta
        </Link>
      </form>
    </div>
  );
  return (
    <>
      <Main content={content} />
      {/* <main>
            <Container className={styles.main}>
                <form action="" className="d-flex justify-content-center align-items-center flex-column">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>Login</h3>
                        </div>
                    </div>
                    <Input 
                        name="username"
                        id="username"
                        placeHolder="Insira seu usuário"
                        text="Usuário"
                        type="text"
                    />
                    <Input 
                        name="password"
                        id="password"
                        placeHolder="Insira sua senha"
                        text="Senha"
                        type="password"
                    />
                    <Button type="button" className="btn btn-primary mt-3 w-25">Entrar</Button>
                    <Button type="button" className="btn btn-primary mt-3 w-25">Criar Conta</Button>
                </form>
            </Container>
        </main> */}
    </>
  );
}

export default Login;
