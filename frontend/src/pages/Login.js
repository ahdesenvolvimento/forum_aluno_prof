import Input from "../components/Input";
import { Button } from "react-bootstrap";
import styles from './Login.module.css';
import Main from "../layout/Main";
import { Link } from "react-router-dom";
function Login(){
    const content = (
        <div className={styles.main}>
            <form action="" className="d-flex justify-content-center align-items-center flex-column">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>Login</h3>
                    </div>
                </div>
                <Input 
                    name="username"
                    id="username"
                    placeHolder="Insira seu usuário"
                    text="Usuário"
                    type="text"
                />
                <Input 
                    name="password"
                    id="password"
                    placeHolder="Insira sua senha"
                    text="Senha"
                    type="password"
                />
                <Button type="button" className="btn btn-primary mt-3 w-25">Entrar</Button>
                <Link to="/cadastro" className="btn btn-primary mt-3 w-25">Criar Conta</Link>
            </form>
        </div>
    )
    return (
        <>
        <Main content={content}/>
        {/* <main>
            <Container className={styles.main}>
                <form action="" className="d-flex justify-content-center align-items-center flex-column">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>Login</h3>
                        </div>
                    </div>
                    <Input 
                        name="username"
                        id="username"
                        placeHolder="Insira seu usuário"
                        text="Usuário"
                        type="text"
                    />
                    <Input 
                        name="password"
                        id="password"
                        placeHolder="Insira sua senha"
                        text="Senha"
                        type="password"
                    />
                    <Button type="button" className="btn btn-primary mt-3 w-25">Entrar</Button>
                    <Button type="button" className="btn btn-primary mt-3 w-25">Criar Conta</Button>
                </form>
            </Container>
        </main> */}
        </>
    )
}

export default Login