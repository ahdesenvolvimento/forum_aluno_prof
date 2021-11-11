import Main from "../layout/Main";
import Input from "../components/Input";
import Button from "../components/Button";
import { Modal } from "react-bootstrap";
import { useState } from "react";
function Salas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const content = (
    <div>
      <div className="card">
        <div className="card-body" style={{minHeight: '88vh'}}>
          <div className="row">
            <div className="col-md-12 mb-3 d-flex justify-content-center">
              <Input
                name="enter_room"
                placeHolder="Código da sala"
                id="enter_room"
                type="text"
                text="Entrar em uma sala"
              />
            </div>
            <div className="col-md-12 mb-3 d-flex justify-content-center">
              <Button
                type="submit"
                text="Entrar na sala"
                className="btn btn-primary"
              />
            </div>
            <div className="col-md-12 mb-3 text-center">
              <hr />
              <h4>Ou</h4>
              <hr />
            </div>
            <div className="col-md-12 mb-3 text-center">
              <h4>Crie sua própria sala</h4>
              <Button
                type="submit"
                text="Criar sala"
                className="btn btn-outline-primary mt-3"
                onClick={handleShow}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Criar sala</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            name="create_room"
            placeHolder="Senha da sala"
            id="enter_room"
            type="password"
            text="Crie sua própria sala"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" text="Criar" className="btn btn-primary" />
          <Button
            className="btn btn-secondary"
            type="button"
            text="Fechar"
            onClick={handleClose}
          />
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
  return <Main content={content} />;
}

export default Salas;
