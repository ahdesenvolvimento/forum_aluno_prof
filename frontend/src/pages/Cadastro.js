import Input from "../components/Input";
import Main from "../layout/Main";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";

function Cadastro() {
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const cadastrarUsuario = async (e) => {
    e.preventDefault();
    const usuario = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      username: email,
      password: password,
    };
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    };
    await fetch("http://localhost:8000/usuario/", init)
      .then((response) => {
        window.location.href = '/login';
      })

  };

  const content = (
    <div>
      <form action="" method="POST" onSubmit={(e) => cadastrarUsuario(e)}>
        <Card>
          <Card.Header>
            <h5>Cadastro de usuário</h5>
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-md-6 mb-3">
                <Input
                  name="first_name"
                  text="Primeiro Nome"
                  id="first_name"
                  placeHolder="Primeiro Nome"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <Input
                  name="last_name"
                  text="Segundo Nome"
                  id="last_name"
                  placeHolder="Segundo Nome"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="col-md-12 mb-3">
                <Input
                  name="email"
                  text="E-mail"
                  id="email"
                  placeHolder="E-mail"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <Input
                  name="senha1"
                  text="Senha"
                  id="senha1"
                  placeHolder="Senha"
                  type="password"
                />
              </div>
              <div className="col-md-6 mb-3">
                <Input
                  name="password"
                  text="Confirme sua senha"
                  id="password"
                  placeHolder="Confirme sua senha"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-md-12 mb-3 text-center">
                <Button type="submit" className="btn btn-primary">
                  Salvar
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </form>
    </div>
  );
  return <Main content={content} />;
}

export default Cadastro;
