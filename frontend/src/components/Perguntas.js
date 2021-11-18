import { Link } from "react-router-dom";
import Button from "./Button";

function Perguntas({ data }) {
  console.log(data);
  return (
    <>
      {data.map((pergunta) => (
        <div className="col-md-12" key={pergunta.id}>
          <div className="card">
            <div className="card-body">
              <span>
                <i className="fas fa-user"></i>
              </span>
              <p>{pergunta.corpo}</p>
            </div>
            <div className="card-footer">
              <button type="button" data-id={pergunta.id} className="btn btn-primary mx-2">Marcar como lida</button>
              <button type="button" data-id={pergunta.id} className="btn btn-outline-primary">Excluir</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Perguntas;
