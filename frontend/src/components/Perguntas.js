import { useEffect, useRef, useState } from "react";
import { Modal, Accordion } from "react-bootstrap";
import TextArea from "./TextArea";
import Button from "./Button";
import Input from "./Input";
import Respostas from "./Respostas";
function Perguntas({ data, idRoom }) {
  const [color, setColor] = useState();
  const [show, setShow] = useState(false);
  const [idPergunta, setId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [resposta, setResposta] = useState();
  const [respostas, setRespostas] = useState([]);

  async function alterarStatus(e, idPergunta) {
    e.preventDefault();
    const init = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8000/pergunta/edit/" + idPergunta, init).then((response) => {window.location.href = '/salas/'+idRoom})
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
    fetch("http://localhost:8000/pergunta/delete/" + idPergunta, init).then((response) => {window.location.href = '/salas/'+idRoom})
    console.log("ops " + idPergunta);
  }

  async function responderPergunta(e, id) {
    e.preventDefault();
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resposta: resposta, usuario: "1" }),
    };
    await fetch("http://localhost:8000/resposta/" + idPergunta, init).then((response) => {window.location.href = '/salas/'+idRoom})
  }

  async function buscarRespostas(id) {
    const response = await fetch("http://localhost:8000/get_respostas/" + id);
    const data = await response.json();
    setRespostas(data);
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
            <Accordion
              defaultActiveKey="1"
              onClick={(e) => buscarRespostas(pergunta.id)}
              style={
                pergunta.id_pergunta.status === true
                  ? { border: "1px solid red" }
                  : { border: "1px solid blue" }
              }
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="card">
                    <div className="card-body">
                      {pergunta.id_pergunta.corpo}
                    </div>
                    <div className="card-footer">
                      <a
                        href="#/"
                        onClick={(e) =>
                          alterarStatus(e, pergunta.id_pergunta.id)
                        }
                        data-id={pergunta.id}
                        className="btn btn-primary mx-2"
                      >
                        Marcar como lida
                      </a>
                      <a
                        onClick={(e) =>
                          deletarPergunta(e, pergunta.id_pergunta.id)
                        }
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
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Respostas content={respostas.respostas} idPergunta={pergunta.id}/>
                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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
        );
      })}
    </>
  );
}

export default Perguntas;
