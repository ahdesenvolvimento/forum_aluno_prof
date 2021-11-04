import { useParams } from "react-router";
import Main from "../layout/Main";
import Input from "../components/Input";
import Button from "../components/Button";
function Sala(props){
    const { id } = useParams();
    console.log(id);
    const content = (
        <div>
            <Input 
                name="pergunta"
                id="pergunta"
                type="text"
                placeHolder="Pergunte o que desejar"
            />
            <Button 
                type="submit"
                className="btn btn-primary"
                text="Salvar"
            />
        </div>
    )
    // const id = props.match.params.id;
    // console.log(id);
    return (
        <>
            <Main content={content} />
        </>
    )
}

export default Sala