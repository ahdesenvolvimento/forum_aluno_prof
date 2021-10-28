import { Container } from "react-bootstrap"
function Main({content}){
    return (
        <main>
            <Container>
                {content}
            </Container>
        </main>
    )
}

export default Main