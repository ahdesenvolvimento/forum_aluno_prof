import Input from "../components/Input";
import { Container, Button } from "react-bootstrap";
import styles from './Login.module.css';
function Login(){

    return (
        <>
        <main>
            <Container className={styles.main}>
                <form action="" className="d-flex justify-content-center align-items-center flex-column">
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
                    <Button type="button" class="btn btn-primary">Entrar</Button>
                </form>
            </Container>
        </main>
        </>
    )
}

export default Login