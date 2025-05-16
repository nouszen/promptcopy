export const prompts = {
  negócios: [
    {
      id: 1,
      titulo: "Plano de Negócios",
      descricao: "Gere um plano de negócios completo para startups",
      texto: "Atue como consultor de negócios experiente. Gere um plano de negócios detalhado para uma startup de [insira o setor] que inclua: 1) Resumo executivo, 2) Análise de mercado, 3) Modelo de negócios, 4) Estratégia de marketing, 5) Projeções financeiras para os primeiros 3 anos. Formate em tópicos claros com explicações concisas.",
      categoria: "negócios",
      favorito: false
    },
    {
      id: 2,
      titulo: "Análise SWOT",
      descricao: "Crie uma análise SWOT para qualquer empresa",
      texto: "Realize uma análise SWOT detalhada para a empresa [nome da empresa] do setor de [setor]. Liste pelo menos 3 pontos fortes, 3 pontos fracos, 3 oportunidades e 3 ameaças. Para cada item, forneça uma breve explicação de 1-2 frases sobre seu impacto no negócio.",
      categoria: "negócios",
      favorito: false
    }
  ],
  marketing: [
    {
      id: 3,
      titulo: "Copywriting para Anúncios",
      descricao: "Gere textos persuasivos para campanhas publicitárias",
      texto: "Crie 5 variações de copy para anúncios de [produto/serviço] direcionados a [público-alvo]. Cada variação deve: 1) Ter no máximo 30 palavras, 2) Destaque um benefício único, 3) Inclua uma chamada para ação clara, 4) Use técnicas de persuasão como escassez ou prova social.",
      categoria: "marketing",
      favorito: false
    }
  ],
  escrita: [
    {
      id: 4,
      titulo: "Correção de Texto",
      descricao: "Melhore a clareza e coesão de qualquer texto",
      texto: "Atue como editor profissional. Revise o seguinte texto para melhorar sua clareza, fluidez e correção gramatical, mantendo o tom e estilo original. Faça alterações diretas no texto e explique brevemente cada mudança importante:\n\n[cole o texto aqui]",
      categoria: "escrita",
      favorito: true
    }
  ],
  roteiros: [
    {
      id: 5,
      titulo: "Roteiro para Vídeos",
      descricao: "Estrutura completa para vídeos do YouTube",
      texto: "Crie um roteiro detalhado para um vídeo do YouTube sobre [tema]. Inclua: 1) Introdução cativante (15-30 segundos), 2) Apresentação do problema ou tema principal, 3) Três pontos principais com exemplos, 4) Chamada para ação (inscreva-se, like, etc.). Formate com indicações de cena e falas do apresentador.",
      categoria: "roteiros",
      favorito: false
    }
  ],
  design: [
    {
      id: 6,
      titulo: "Briefing de Design",
      descricao: "Prompt para criar briefings completos para designers",
      texto: "Gere um briefing detalhado para um projeto de design de [tipo: logo, site, app, etc.] para a marca [nome]. Inclua: 1) Objetivos do projeto, 2) Público-alvo, 3) Estilo visual desejado (cores, fontes, referências), 4) Requisitos técnicos, 5) Prazo e orçamento disponível.",
      categoria: "design",
      favorito: false
    }
  ]
};