import styles from './Footer.module.css';
import { Container } from 'react-bootstrap';
function Footer(){

    return (
        <>
            <footer className={styles.footer}>
                <Container className="text-center text-white">
                    <h6>Projeto da disciplina de Projeto Integrador 2 do curso de ADS - IFPI</h6>
                    <span>Membros: Antônio Henrique</span>
                </Container>
            </footer>
        </>
    )
}

export default Footer