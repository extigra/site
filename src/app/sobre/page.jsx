import './styles.sass'

export default function SobrePage() {
  const servicos = [
    'Elaboração de PPCI',
    'Alteração e adequação de PPCI',
    'Regularização de habitação',
    'Habite-se',
    'Execução de projetos',
    'Laudos técnicos',
    'Regularização e aprovação junto ao corpo de bombeiros',
    'Instalação de sistemas de proteção contra incêndios',
    'Consultorias',
    'Testes de mangueira',
    'Cursos de RT15 - Brigada de incêndio'
  ]

  const produtos = [
    'Extintores novos',
    'Recarga de extintores',
    'Acessórios para extintores: Suporte, capas de proteção',
    'Alarme de incêndio',
    'Sinalização de emergência',
    'Iluminação de emergência',
    'Hidrantes',
    'Detectores de incêndio',
    'Barras antipânico',
    'Sprinklers',
    'Porta corta-fogo',
    'Kit residêncial contra incêndio',
    'Fita antiderrapante fotoluminescente'
  ]

  return (
    <main>
      <section className="text-section">
        <h1>QUEM SOMOS</h1>
        <p className="page-description">
          Estamos há mais de 45 anos no mercado, atuando no setor de segurança
          contra indêndio. A Extigra destaca-se pelo comprometimento com seus
          clientes e atendimento personalizado. Nossa empresa conta com
          profissionais altamente capacitados para atender as mais diversas
          demandas de nossos clientes, abrangendo desde a recarga de extintores,
          testes hidrostáticos, projetos de PPCI, laudos técnicos, instalações
          de equipamentos de combate contra incêndios (alarmes de incêndio,
          detectores de fumaça, hidrantes, sprinkler, consultoria técnica e
          demais serviços relacionados a prenveção). Tudo para melhor atender
          nosso cliente e garantir de forma sólida e responsável o maior nível
          de segurança para seu estabelecimento.
        </p>
      </section>

      <section className="servicos-produtos-section">
        <div className="card">
          <h3>Serviços</h3>
          {servicos &&
            servicos.map((element, index) => {
              return <span key={index}>{element}</span>
            })}
        </div>

        <div className="card">
          <h3>Produtos</h3>
          {produtos &&
            produtos.map((element, index) => {
              return <span key={index}>{element}</span>
            })}
        </div>
      </section>
    </main>
  )
}
