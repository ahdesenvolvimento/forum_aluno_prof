import { useRef, useState } from "react";
import { Modal } from 'react-bootstrap'
import TextArea from "./TextArea";
import Button from './Button';
function Perguntas({ data, idRoom }) {
  const [color, setColor] = useState();
  const [show, setShow] = useState(false);
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

  async function responderPergunta(e, id){
    e.preventDefault();
    const init = {
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({resposta:resposta, usuario:'1'})
    }
    await fetch('http://localhost:8000/resposta/'+id, init);
  }

  function handleColor(status) {
    status === true ? setColor("blue") : setColor("red");
    console.log(status);
  }
  return (
    <>
      {data.map((pergunta) => {
        return (
          <div className="col-md-12 mb-3" key={pergunta.id}>
            <div
              className="card"
              style={
                pergunta.id_pergunta.status === true
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "blue" }
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
                  onClick={handleShow}
                  data-id={pergunta.id}
                  className="btn btn-outline-primary mx-2"
                >
                  Responder
                </a>
              </div>
            </div>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <form action="POST" onSubmit={(e) => responderPergunta(e, pergunta.id)}>
                <Modal.Header closeButton>
                  <Modal.Title>Responder pergunta</Modal.Title>
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
