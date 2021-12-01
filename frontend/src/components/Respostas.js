export default function Respostas({ content, idPergunta }) {
    return (
        <div className="card">
          <div className="card-body">
            {content !== undefined ? (
              content.map((resp) => (
                // <h1>{resp.id_pergunta} {pergunta.id}</h1>
                <p key={resp.id_pergunta}>
                  {resp.id_pergunta === idPergunta ? resp.id_resposta.resposta : " "}
                </p>
              ))
            ) : (
              <h1>Nao tem</h1>
            )}
          </div>
        </div>
    )
}
