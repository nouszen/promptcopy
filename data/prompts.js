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
    },
    {
      id: 7,
      titulo: "Pitch de Vendas",
      descricao: "Crie um discurso de vendas convincente",
      texto: "Desenvolva um pitch de vendas de 30 segundos para [produto/serviço] que: 1) Identifique claramente a dor do cliente, 2) Apresente a solução de forma impactante, 3) Destaque os 3 principais benefícios, 4) Inclua uma chamada para ação urgente. Adapte para o público [descreva o público-alvo].",
      categoria: "negócios",
      favorito: true
    },
    {
      id: 16,
      titulo: "Modelo Canvas",
      descricao: "Gere um Business Model Canvas completo",
      texto: "Preencha um Business Model Canvas para [nome da empresa] incluindo: 1) Segmentos de clientes, 2) Proposta de valor, 3) Canais, 4) Relacionamento com clientes, 5) Fontes de receita, 6) Recursos principais, 7) Atividades-chave, 8) Parcerias, 9) Estrutura de custos. Forneça exemplos concretos para cada bloco.",
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
    },
    {
      id: 8,
      titulo: "Estratégia de Mídia Social",
      descricao: "Planejamento completo para redes sociais",
      texto: "Elabore uma estratégia de mídia social para [marca/empresa] incluindo: 1) Plataformas prioritárias (justifique), 2) Tom de voz recomendado, 3) Frequência de postagem ideal, 4) Tipos de conteúdo (ex: educacional, entretenimento), 5) Métricas de sucesso. Considere o público [descreva o público-alvo].",
      categoria: "marketing",
      favorito: true
    },
    {
      id: 17,
      titulo: "Análise de Concorrência",
      descricao: "Compare estratégias de marketing concorrentes",
      texto: "Analise 3 concorrentes diretos de [marca/empresa] no setor de [setor], focando em: 1) Posicionamento de marca, 2) Estratégia de conteúdo, 3) Engajamento nas redes, 4) Diferenciais competitivos. Apresente insights e recomendações de oportunidades não exploradas.",
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
    },
    {
      id: 9,
      titulo: "Estrutura de E-book",
      descricao: "Crie o esqueleto completo para um e-book",
      texto: "Gere a estrutura detalhada para um e-book sobre [tema] com aproximadamente 10 capítulos. Para cada capítulo: 1) Forneça um título sugestivo, 2) Descreva em 2-3 frases o conteúdo principal, 3) Indique 3 subtópicos importantes. Inclua também introdução e conclusão impactantes.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 18,
      titulo: "Tradução Criativa",
      descricao: "Traduza preservando tom e estilo",
      texto: "Traduza o seguinte texto para [idioma] mantendo: 1) O tom original [formal/informal], 2) Jogos de palavras e expressões idiomáticas (adaptando quando necessário), 3) Contexto cultural. Explique suas escolhas de tradução para termos complexos:\n\n[cole o texto aqui]",
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
    },
    {
      id: 10,
      titulo: "Podcast Convidado",
      descricao: "Roteiro para entrevistas em podcast",
      texto: "Elabore um roteiro para um episódio de podcast entrevistando um especialista em [área]. Inclua: 1) Introdução do host e convidado (30 seg), 2) 5 perguntas principais com sub-perguntas, 3) Transições naturais entre tópicos, 4) Segmento de perguntas dos ouvintes, 5) Encerramento com call-to-action. Mantenha um tom [formal/descontraído].",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 19,
      titulo: "Storyboard Publicitário",
      descricao: "Visualize cenas para comerciais",
      texto: "Crie um storyboard para um comercial de 30s sobre [produto/serviço]. Inclua: 1) 6-8 cenas principais, 2) Descrição visual de cada cena, 3) Diálogo/narração, 4) Transições, 5) Emoções a serem transmitidas. Formato: [Cena 1: Visual | Áudio | Duração].",
      categoria: "roteiros",
      favorito: true
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
    },
    {
      id: 11,
      titulo: "Análise de UX",
      descricao: "Avaliação de experiência do usuário",
      texto: "Atue como especialista em UX. Analise a [página/aplicação] [descreva ou cole link] identificando: 1) 3 pontos fortes na experiência do usuário, 2) 3 problemas principais, 3) Sugestões de melhoria com exemplos concretos, 4) Recomendações para testes A/B. Foque na jornada do usuário [descreva persona se aplicável].",
      categoria: "design",
      favorito: true
    },
    {
      id: 20,
      titulo: "Guia de Estilo Visual",
      descricao: "Crie sistemas de design consistentes",
      texto: "Desenvolva um guia de estilo completo para [marca/produto] incluindo: 1) Paleta de cores (primárias, secundárias), 2) Tipografia (hierarquia), 3) Estilo de iconografia, 4) Diretrizes para fotos/ilustrações, 5) Espaçamento e grid, 6) Componentes UI principais. Apresente em formato de documentação clara.",
      categoria: "design",
      favorito: false
    }
  ],
  programação: [
    {
      id: 12,
      titulo: "Documentação de Código",
      descricao: "Gere documentação técnica para funções",
      texto: "Documente a seguinte função/projeto de código seguindo padrões profissionais: 1) Descrição clara do propósito, 2) Parâmetros de entrada (tipo e descrição), 3) Valor de retorno, 4) Exemplo de uso, 5) Possíveis erros/exceções. Use formato Markdown.\n\n[cole o código aqui]",
      categoria: "programação",
      favorito: false
    },
    {
      id: 13,
      titulo: "Otimização de Consulta SQL",
      descricao: "Melhore o desempenho de consultas SQL",
      texto: "Analise a seguinte consulta SQL identificando: 1) Possíveis gargalos de performance, 2) Sugestões de otimização (indexação, reestruturação), 3) Versão otimizada da consulta, 4) Estimativa de ganho de performance. Considere um banco de dados com [descreva volume de dados e estrutura se conhecido].\n\n[cole a consulta SQL aqui]",
      categoria: "programação",
      favorito: true
    },
    {
      id: 21,
      titulo: "Revisão de Arquitetura",
      descricao: "Analise estrutura de sistemas",
      texto: "Revise a arquitetura de [sistema/aplicação] descrita abaixo: 1) Identifique pontos fracos na escalabilidade, 2) Sugira melhorias na modularização, 3) Avalie escolhas tecnológicas, 4) Recomende padrões de design apropriados. Considere os requisitos: [listar requisitos importantes].\n\n[descreva a arquitetura atual]",
      categoria: "programação",
      favorito: false
    }
  ],
  educação: [
    {
      id: 14,
      titulo: "Plano de Aula",
      descricao: "Estrutura completa para aulas",
      texto: "Crie um plano de aula detalhado sobre [tema] para [nível de ensino]. Inclua: 1) Objetivos de aprendizagem, 2) Duração estimada, 3) Materiais necessários, 4) Atividades (introdução, desenvolvimento, conclusão), 5) Métodos de avaliação. Adapte para [presencial/online].",
      categoria: "educação",
      favorito: false
    },
    {
      id: 15,
      titulo: "Quiz Educacional",
      descricao: "Gere perguntas de múltipla escolha",
      texto: "Crie um quiz de 10 perguntas sobre [tema] com: 1) 4 alternativas cada (uma correta), 2) Nível de dificuldade [básico/intermediário/avançado], 3) Explicação breve para cada resposta correta. Formate em JSON com campos para pergunta, opções, resposta_correta e explicação.",
      categoria: "educação",
      favorito: true
    },
    {
      id: 22,
      titulo: "Jogo Educativo",
      descricao: "Desenhe conceitos de gamificação",
      texto: "Projete um jogo educativo para ensinar [conceito] para [faixa etária]. Inclua: 1) Mecânicas principais, 2) Sistema de progressão, 3) Elementos de feedback, 4) Adaptação para diferentes níveis, 5) Métricas de aprendizagem. Descreva 3 fases do jogo como exemplo.",
      categoria: "educação",
      favorito: false
    }
  ],
  saúde: [
    {
      id: 23,
      titulo: "Plano de Treino Personalizado",
      descricao: "Rotina de exercícios sob medida",
      texto: "Crie um plano de treino de [4 semanas] para um [perfil: iniciante/intermediário/avançado] com objetivos de [emagrecimento/hipertrofia/condicionamento]. Inclua: 1) Frequência semanal, 2) Divisão de grupos musculares, 3) Descrição dos exercícios, 4) Progressão de carga, 5) Recomendações de descanso.",
      categoria: "saúde",
      favorito: true
    },
    {
      id: 24,
      titulo: "Plano Alimentar Saudável",
      descricao: "Dieta balanceada personalizada",
      texto: "Desenvolva um plano alimentar de [7 dias] para [perfil] com restrições de [listar se houver]. Inclua: 1) 3 refeições principais + 2 lanches diários, 2) Opções de substituição, 3) Lista de compras organizada, 4) Preparo rápido (máx 30min), 5) Valores nutricionais aproximados.",
      categoria: "saúde",
      favorito: false
    }
  ],
  tecnologia: [
    {
      id: 25,
      titulo: "Comparativo de Tecnologias",
      descricao: "Análise prós e contras de ferramentas",
      texto: "Compare [Tecnologia A] e [Tecnologia B] para uso em [cenário específico]. Analise: 1) Curva de aprendizagem, 2) Performance, 3) Comunidade/suporte, 4) Custo, 5) Casos de uso ideais. Conclua com recomendação baseada em [critérios: startup/empresa grande/projeto pessoal].",
      categoria: "tecnologia",
      favorito: false
    },
    {
      id: 26,
      titulo: "Tutorial Passo a Passo",
      descricao: "Guia detalhado para tarefas técnicas",
      texto: "Crie um tutorial completo para [tarefa técnica] em [ferramenta/linguagem]. Inclua: 1) Pré-requisitos, 2) Configuração inicial, 3) Passos numerados com comandos/códigos, 4) Screenshots/exemplos (descreva o que mostrar), 5) Solução de problemas comuns. Adapte para usuários [iniciantes/avançados].",
      categoria: "tecnologia",
      favorito: true
    }
  ]
};