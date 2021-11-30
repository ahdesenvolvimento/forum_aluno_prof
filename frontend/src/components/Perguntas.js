import { useEffect, useRef, useState } from "react";
import { Modal, Accordion } from "react-bootstrap";
import TextArea from "./TextArea";
import Button from "./Button";
import Input from "./Input";
function Perguntas({ data, idRoom }) {
  const [color, setColor] = useState();
  const [show, setShow] = useState(false);
  const [idPergunta, setId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [resposta, setResposta] = useState();

  async function alterarStatus(e, idPergunta) {
    e.preventDefault();
    const init = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8000/pergunta/edit/" + idPergunta, init);
    console.log("ops " + idPergunta);
    // handleColor(true);
  }

  async function deletarPergunta(e, idPergunta) {
    e.preventDefault();
    const init = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8000/pergunta/delete/" + idPergunta, init);
    console.log("ops " + idPergunta);
  }

  async function responderPergunta(e, id) {
    // alert(idPergunta);
    e.preventDefault();
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resposta: resposta, usuario: "1" }),
    };
    await fetch("http://localhost:8000/resposta/" + idPergunta, init);
  }

  function handleColor(status) {
    status === true ? setColor("blue") : setColor("red");
    console.log(status);
  }
  return (
    <>
      {data.map((pergunta) => {
        return (
          <div
            className="col-md-12 mb-3"
            key={pergunta.id}
            style={
              pergunta.id_pergunta.status === true
                ? { color: "red" }
                : { color: "blue" }
            }
          >
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {pergunta.id_pergunta.corpo}
                </Accordion.Header>
                <Accordion.Body>{pergunta.id_pergunta.corpo}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div
              className="card"
              style={
                pergunta.id_pergunta.status === true
                  ? { border: "1px solid red" }
                  : { border: "1px solid blue" }
              }
            >
              <div className="card-body">
                <span>
                  <i className="fas fa-user"></i>
                  {pergunta.id}
                </span>
                <p>{pergunta.id_pergunta.corpo}</p>
              </div>
              <div className="card-footer">
                <a
                  href="#/"
                  onClick={(e) => alterarStatus(e, pergunta.id_pergunta.id)}
                  data-id={pergunta.id}
                  className="btn btn-primary mx-2"
                >
                  Marcar como lida
                </a>
                <a
                  onClick={(e) => deletarPergunta(e, pergunta.id_pergunta.id)}
                  type="button"
                  data-id={pergunta.id}
                  className="btn btn-outline-primary mx-2"
                >
                  Excluir
                </a>
                <a
                  onClick={() => {
                    handleShow();
                    setId(pergunta.id);
                  }}
                  data-id={pergunta.id}
                  className="btn btn-outline-primary mx-2"
                >
                  Responder
                </a>
              </div>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <form
                  action="POST"
                  onSubmit={(e) => responderPergunta(e, pergunta.id)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Responder pergunta {pergunta.id}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <TextArea
                      nome="create_room"
                      placeHolder="Senha da sala"
                      id="create_room"
                      cols="30"
                      rows="15"
                      onChange={(e) => setResposta(e.target.value)}
                    />
                    <Input type="text" />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      type="submit"
                      text="Enviar"
                      className="btn btn-primary"
                    />
                    <Button
                      className="btn btn-secondary"
                      type="button"
                      text="Fechar"
                      onClick={handleClose}
                    />
                  </Modal.Footer>
                </form>
              </Modal>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Perguntas;
