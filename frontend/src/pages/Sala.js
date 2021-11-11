import { useParams } from "react-router";
import Main from "../layout/Main";
import Input from "../components/Input";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import Perguntas from "../components/Perguntas";
function Sala(props) {
  const { id } = useParams();
  console.log(id);
  const content = (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <h4>Faça sua pergunta</h4>
              <TextArea
                nome="pergunta"
                id="pergunta"
                cols="30"
                rows="10"
                placeholder="Pergunte o que desejar"
                className="form-control"
              />
              <Button
                type="submit"
                className="btn btn-primary mt-3 mb-3"
                text="Enviar"
              />
            </div>
            <Perguntas />
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
