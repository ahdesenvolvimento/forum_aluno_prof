import Main from "../layout/Main";

function Home() {
  const content = (
    <div className="card">
      <div className="card-body">
        <p>Projeto da matéria de Projeto Integrador II</p>
        <p>
          O projeto consiste em criar uma API, utilizando Django Restframework e
          utilizando React para fazer o consumo desta API.
        </p>
        <p>A ideia inicial era criar a API tanto no DRF quanto no Next, porém não foi possível.</p>
        <p>As funcionalidades implementadas foram:</p>
        <ul>
          <li>Cadastro de usuário</li>
          <li>Criar sala</li>
          <li>Acessar sala</li>
          <li>Criar pergunta</li>
          <li>Marcar pergunta como lida</li>
          <li>Excluir pergunta</li>
          <li>Responder pergunta</li>
        </ul>
        <p>Todo o projeto foi feito pelo aluno Antônio Henrique</p>
        <p>
          <a
            href="https://github.com/ahdesenvolvimento/forum_aluno_prof"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </div>
  );

  return <Main content={content} />;
}

export default Home;
