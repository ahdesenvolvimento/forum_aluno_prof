import { useParams } from "react-router";
import Main from "../layout/Main";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import Perguntas from "../components/Perguntas";
import { useState } from "react";
import { useEffect } from "react";
function Sala(props) {
  const { id } = useParams();
  const [pergunta, setPergunta] = useState();
  const [perguntas, setPerguntas] = useState([]);
  async function cadastrarPergunta(e) {
    e.preventDefault();
    const dados = {
      titulo: "123",
      corpo: pergunta,
      tags: "12312312",
      id: id,
    };
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    };
    const response = await fetch("http://localhost:8000/pergunta/", init);
  }

  window.onload = function(){
    async function getPerguntas() {
      const response = await fetch("http://localhost:8000/pergunta/" + id);
      const data = await response.json();
      setPerguntas(data.perguntas);
    }
    getPerguntas();
  }

  
  const content = (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <form
              action=""
              method="POST"
              onSubmit={(e) => cadastrarPergunta(e)}
            >
              <div className="col-md-12">
                <h4>Faça sua pergunta</h4>
                <TextArea
                  nome="pergunta"
                  id="pergunta"
                  cols="30"
                  rows="10"
                  placeholder="Pergunte o que desejar"
                  className="form-control"
                  onChange={(e) => setPergunta(e.target.value)}
                />
                <Button
                  type="submit"
                  className="btn btn-primary mt-3 mb-3"
                  text="Enviar"
                />
              </div>
            </form>
            <Perguntas data={perguntas} />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Main content={content} />
    </>
  );
}

export default Sala;
