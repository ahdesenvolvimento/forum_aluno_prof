import Input from "../components/Input";
import Main from "../layout/Main";
import { Button, Card } from "react-bootstrap";

function Cadastro() {
  const content = (
    <div>
      <form action="">
        <Card>
          <Card.Header>
            <h5>Cadastro de usuário</h5>
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-md-6 mb-3">
                <Input
                  name="nome"
                  text="Primeiro Nome"
                  id="first_name"
                  placeHolder="Primeiro Nome"
                  type="text"
                />
              </div>
              <div className="col-md-6 mb-3">
                <Input
                  name="nome"
                  text="Segundo Nome"
                  id="last_name"
                  placeHolder="Segundo Nome"
                  type="text"
                />
              </div>
              <div className="col-md-12 mb-3">
                <Input
                  name="email"
                  text="E-mail"
                  id="email"
                  placeHolder="E-mail"
                  type="text"
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
