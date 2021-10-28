import Input from "../components/Input";
import Main from "../layout/Main";
import { Button } from "react-bootstrap";

function Cadastro(){
    const content = (
        <div>
            <form action="">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <Input 
                            name="nome"
                            text="Nome Completo"
                            id="nome"
                            placeHolder="Nome completo"
                            type="text"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
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
                        <Button 
                            type="submit" 
                            className="btn btn-primary"
                        >Salvar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
    return (
        <Main content={content}/>
    )
}

export default Cadastro