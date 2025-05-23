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
      favorito: false
    },
    {
      id: 16,
      titulo: "Modelo Canvas",
      descricao: "Gere um Business Model Canvas completo",
      texto: "Preencha um Business Model Canvas para [nome da empresa] incluindo: 1) Segmentos de clientes, 2) Proposta de valor, 3) Canais, 4) Relacionamento com clientes, 5) Fontes de receita, 6) Recursos principais, 7) Atividades-chave, 8) Parcerias, 9) Estrutura de custos. Forneça exemplos concretos para cada bloco.",
      categoria: "negócios",
      favorito: false
    },
    {
    id: 3,
    titulo: "Estratégia de Precificação",
    descricao: "Desenvolva uma estratégia de precificação para um produto/serviço",
    texto: "Crie uma estratégia de precificação detalhada para [produto/serviço] considerando: 1) Custos de produção, 2) Concorrência no mercado de [setor], 3) Percepção de valor pelo cliente, 4) Objetivos de lucro. Inclua pelo menos três diferentes abordagens (premium, penetração, etc.) com vantagens e desvantagens de cada.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 4,
    titulo: "Análise de Concorrentes",
    descricao: "Realize uma análise competitiva detalhada",
    texto: "Faça uma análise detalhada dos 3 principais concorrentes de [nome da empresa] no setor de [setor]. Para cada um, avalie: 1) Posicionamento de mercado, 2) Pontos fortes e fracos, 3) Estratégias de marketing, 4) Diferenciais competitivos. Conclua com oportunidades identificadas para diferenciação.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 5,
    titulo: "Plano de Expansão",
    descricao: "Crie um plano de expansão para novos mercados",
    texto: "Desenvolva um plano de expansão para [nome da empresa] entrar no mercado [país/região]. Inclua: 1) Análise de viabilidade, 2) Adaptações necessárias ao produto/serviço, 3) Estratégia de entrada (parcerias, aquisição, etc.), 4) Cronograma de implementação em 12 meses, 5) Orçamento estimado.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 6,
    titulo: "Proposta de Parceria",
    descricao: "Elabore uma proposta de parceria comercial",
    texto: "Redija uma proposta profissional de parceria entre [sua empresa] e [empresa parceira] para [objetivo da parceria]. Estruture com: 1) Benefícios mútuos, 2) Escopo da colaboração, 3) Responsabilidades de cada parte, 4) Termos financeiros, 5) Duração e métricas de sucesso.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 8,
    titulo: "Análise de ROI",
    descricao: "Calcule o retorno sobre investimento para um projeto",
    texto: "Realize uma análise de ROI para o projeto [descreva o projeto] considerando: 1) Investimento inicial total, 2) Custos operacionais mensais, 3) Receitas projetadas, 4) Período de payback, 5) Taxa interna de retorno. Apresente em formato de tabela com cálculos detalhados e cenários otimista/pessimista.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 9,
    titulo: "Plano de Sucessão",
    descricao: "Desenvolva um plano de sucessão para uma empresa",
    texto: "Crie um plano de sucessão para [nome da empresa] incluindo: 1) Identificação de possíveis sucessores (internos/externos), 2) Plano de desenvolvimento de liderança, 3) Cronograma de transição, 4) Estrutura de governança durante a transição, 5) Comunicação aos stakeholders.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 10,
    titulo: "Estratégia de Branding",
    descricao: "Desenvolva uma estratégia de marca completa",
    texto: "Elabore uma estratégia de branding para [nome da marca] contendo: 1) Posicionamento de marca, 2) Arquitetura de marca, 3) Identidade visual (elementos-chave), 4) Voz e tom da comunicação, 5) Plano de consistência de marca em todos os pontos de contato.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 11,
    titulo: "Plano de Contingência",
    descricao: "Crie um plano de continuidade de negócios",
    texto: "Desenvolva um plano de contingência para [nome da empresa] abordando: 1) Principais riscos identificados (financeiros, operacionais, etc.), 2) Protocolos de resposta para cada cenário, 3) Cadeia de comando e comunicação, 4) Recursos alternativos, 5) Plano de recuperação. Seja específico para o setor de [setor].",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 12,
    titulo: "Pesquisa de Mercado",
    descricao: "Desenhe uma pesquisa de mercado eficaz",
    texto: "Crie um plano de pesquisa de mercado para validar [produto/serviço/ideia] incluindo: 1) Objetivos da pesquisa, 2) Metodologia (qualitativa/quantitativa), 3) Perfil do público-alvo, 4) Questionário com 10 perguntas-chave, 5) Análise de dados proposta. Foque no setor de [setor].",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 13,
    titulo: "Estratégia de Conteúdo",
    descricao: "Desenvolva uma estratégia de marketing de conteúdo",
    texto: "Elabore uma estratégia trimestral de marketing de conteúdo para [nome da empresa] com: 1) Personas de público-alvo, 2) Canais prioritários, 3) Tipos de conteúdo (blog, vídeo, etc.), 4) Calendário editorial, 5) Métricas de desempenho. Adapte para o setor de [setor].",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 14,
    titulo: "Análise de Customer Journey",
    descricao: "Mapeie a jornada do cliente",
    texto: "Mapeie a jornada completa do cliente para [produto/serviço] desde a conscientização até a fidelização. Inclua: 1) Estágios da jornada, 2) Pontos de contato, 3) Dores e necessidades em cada fase, 4) Oportunidades de melhoria, 5) Momentos decisivos. Apresente em formato visual descritivo.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 15,
    titulo: "Plano de Fidelização",
    descricao: "Crie um programa de fidelização de clientes",
    texto: "Desenvolva um programa de fidelização para [nome da empresa] contendo: 1) Benefícios exclusivos, 2) Estrutura de níveis ou pontos, 3) Comunicação do programa, 4) Integração com CRM, 5) Métricas de sucesso. Considere o perfil do cliente [descreva o perfil].",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 17,
    titulo: "Estratégia de Vendas B2B",
    descricao: "Desenvolva uma estratégia de vendas para negócios",
    texto: "Crie uma estratégia de vendas B2B para [produto/serviço] incluindo: 1) Identificação de leads qualificados, 2) Processo de vendas em etapas, 3) Argumentário comercial, 4) Gestão de objeções, 5) Follow-up pós-venda. Adapte para o setor de [setor].",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 18,
    titulo: "Plano de Redução de Custos",
    descricao: "Identifique oportunidades de redução de custos",
    texto: "Analise a estrutura de custos de [nome da empresa] e proponha um plano com: 1) Análise de custos fixos e variáveis, 2) 5 oportunidades de redução sem prejudicar qualidade, 3) Estimativa de economia anual, 4) Plano de implementação em 6 meses, 5) Métricas de acompanhamento.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 19,
    titulo: "Estratégia de Diversificação",
    descricao: "Desenvolva um plano de diversificação de produtos",
    texto: "Crie uma estratégia de diversificação para [nome da empresa] expandir sua linha de produtos/serviços. Inclua: 1) Análise de oportunidades no mercado [setor], 2) Avaliação de competências internas, 3) 3 opções viáveis com análise SWOT para cada, 4) Roadmap de implementação da melhor opção.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 20,
    titulo: "Plano de Internacionalização",
    descricao: "Desenvolva uma estratégia para entrar em mercados globais",
    texto: "Elabore um plano de internacionalização para [nome da empresa] expandir para [país/região]. Aborde: 1) Análise de mercado local, 2) Adaptações necessárias, 3) Estratégia de entrada (exportação, joint venture, etc.), 4) Considerações legais e culturais, 5) Cronograma de 18 meses.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 21,
    titulo: "Análise de Viabilidade",
    descricao: "Avalie a viabilidade de um novo negócio",
    texto: "Conduza uma análise de viabilidade completa para um negócio de [descreva o negócio] incluindo: 1) Análise de mercado, 2) Requisitos legais, 3) Necessidades de capital, 4) Projeções financeiras em 3 anos, 5) Principais riscos e mitigação. Conclua com recomendação sobre viabilidade.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 22,
    titulo: "Estratégia de Omnichannel",
    descricao: "Desenvolva uma estratégia de vendas integrada",
    texto: "Crie uma estratégia omnichannel para [nome da empresa] integrando: 1) Loja física (se aplicável), 2) E-commerce, 3) Redes sociais, 4) Marketplace. Inclua: fluxo de cliente entre canais, consistência de experiência, tecnologia necessária e KPIs para medir sucesso.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 23,
    titulo: "Plano de Turnaround",
    descricao: "Desenvolva um plano para recuperar empresa em crise",
    texto: "Elabore um plano de turnaround para [nome da empresa] enfrentando [descreva a crise]. Inclua: 1) Diagnóstico dos problemas, 2) Reestruturação financeira, 3) Reorganização operacional, 4) Mudanças na gestão, 5) Comunicação com stakeholders, 6) Cronograma de 12 meses.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 24,
    titulo: "Estratégia de Upselling",
    descricao: "Desenvolva técnicas para aumentar valor médio de venda",
    texto: "Crie uma estratégia de upselling/cross-selling para [produto/serviço principal] incluindo: 1) Combinações lógicas de produtos, 2) Momentos ideais na jornada do cliente, 3) Scripts para equipe de vendas, 4) Treinamento necessário, 5) Incentivos para equipe, 6) Métricas de acompanhamento.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 25,
    titulo: "Plano de Governança Corporativa",
    descricao: "Estabeleça estrutura de governança para empresa",
    texto: "Desenvolva um framework de governança corporativa para [nome da empresa] incluindo: 1) Estrutura do conselho, 2) Políticas de transparência, 3) Gestão de riscos, 4) Relação com acionistas, 5) Compliance e ética. Adapte para o porte da empresa [pequena/média/grande].",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 26,
    titulo: "Estratégia de SaaS",
    descricao: "Desenvolva plano para negócio baseado em assinatura",
    texto: "Crie uma estratégia de negócio SaaS para [produto/serviço] incluindo: 1) Modelo de precificação (mensal/anual, tiers), 2) Estratégia de aquisição de clientes, 3) Redução de churn, 4) Upselling de features, 5) Cálculo de LTV (Lifetime Value).",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 27,
    titulo: "Plano de Suporte ao Cliente",
    descricao: "Desenvolva estratégia de atendimento ao cliente",
    texto: "Elabore um plano completo de suporte ao cliente para [nome da empresa] com: 1) Canais de atendimento (chat, email, etc.), 2) SLA para cada canal, 3) Fluxo de escalonamento, 4) Treinamento da equipe, 5) Coleta e análise de feedback, 6) KPIs de qualidade.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 28,
    titulo: "Estratégia de Liquidação",
    descricao: "Planeje saída estratégica de negócio",
    texto: "Desenvolva um plano de liquidação ou saída para [nome da empresa] considerando: 1) Avaliação do negócio, 2) Opções (venda, IPO, etc.), 3) Preparação da empresa, 4) Cronograma ideal, 5) Maximização de valor para acionistas. Inclua checklist de preparação.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 29,
    titulo: "Plano de Treinamento",
    descricao: "Desenvolva programa de capacitação para equipe",
    texto: "Crie um plano de treinamento para [área/função] em [nome da empresa] incluindo: 1) Objetivos de aprendizagem, 2) Conteúdo programático, 3) Metodologia (EAD, presencial, etc.), 4) Avaliação de eficácia, 5) Orçamento e cronograma para 6 meses.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 30,
    titulo: "Estratégia de Franchising",
    descricao: "Desenvolva modelo de franquias para negócio",
    texto: "Elabore um modelo de franchising para [nome da empresa] contendo: 1) Manual de operações, 2) Estrutura de fees (inicial, royalties), 3) Perfil de franqueado ideal, 4) Suporte oferecido, 5) Plano de expansão territorial, 6) Contrato-tipo.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 31,
    titulo: "Plano de Compliance",
    descricao: "Desenvolva programa de conformidade regulatória",
    texto: "Crie um plano de compliance para [nome da empresa] no setor de [setor] incluindo: 1) Mapeamento de regulamentações aplicáveis, 2) Políticas e procedimentos, 3) Treinamentos obrigatórios, 4) Monitoramento contínuo, 5) Canal de denúncias, 6) Plano de resposta a incidentes.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 32,
    titulo: "Estratégia de Influenciadores",
    descricao: "Desenvolva plano de marketing com influenciadores",
    texto: "Elabore uma estratégia de parceria com influenciadores para [produto/marca] incluindo: 1) Critérios de seleção, 2) Tipos de colaboração (posts, takeovers, etc.), 3) Briefing para criadores de conteúdo, 4) Métricas de ROI, 5) Gestão de contratos e relacionamento.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 33,
    titulo: "Plano de Logística",
    descricao: "Otimize cadeia de suprimentos e distribuição",
    texto: "Desenvolva um plano de logística para [nome da empresa] considerando: 1) Gestão de estoque, 2) Canais de distribuição, 3) Parcerias com transportadoras, 4) Tecnologias de rastreamento, 5) Redução de custos, 6) SLA para entregas. Adapte para produto [descreva produto].",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 34,
    titulo: "Estratégia de Nicho",
    descricao: "Identifique e explore nichos de mercado",
    texto: "Analise o mercado de [setor amplo] e identifique 3 nichos não explorados. Para cada um: 1) Descreva o perfil do cliente, 2) Potencial de mercado, 3) Adaptações necessárias ao produto/serviço, 4) Estratégia de entrada, 5) Riscos e barreiras.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 35,
    titulo: "Plano de Fusão/Aquisição",
    descricao: "Desenvolva estratégia para M&A",
    texto: "Elabore um plano para [nome da empresa] adquirir/fundir-se com [outra empresa] incluindo: 1) Justificativa estratégica, 2) Due diligence, 3) Avaliação financeira, 4) Integração de operações, 5) Gestão de cultura organizacional, 6) Comunicação aos stakeholders.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 36,
    titulo: "Estratégia de Trade Marketing",
    descricao: "Desenvolva plano para parcerias no varejo",
    texto: "Crie uma estratégia de trade marketing para [produto] em parceria com [varejista] incluindo: 1) Posicionamento no PDV, 2) Promoções e descontos, 3) Materiais de ponto-de-venda, 4) Treinamento de equipe do varejo, 5) Incentivos para vendedores, 6) Métricas de desempenho.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 37,
    titulo: "Plano de CRM",
    descricao: "Implemente estratégia de gestão de relacionamento",
    texto: "Desenvolva um plano de implementação de CRM para [nome da empresa] com: 1) Seleção de plataforma (critérios), 2) Integração com sistemas existentes, 3) Segmentação de clientes, 4) Fluxos de automação, 5) Treinamento de usuários, 6) KPIs de sucesso em 6 meses.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 38,
    titulo: "Estratégia de Cobrança",
    descricao: "Otimize processo de recebimentos",
    texto: "Elabore uma estratégia para melhorar a eficiência de cobrança de [nome da empresa] incluindo: 1) Política de crédito revisada, 2) Processo de follow-up, 3) Incentivos para pagamento antecipado, 4) Gestão de inadimplência, 5) Uso de tecnologia, 6) Redução de DSO (Days Sales Outstanding).",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 39,
    titulo: "Plano de Inovação",
    descricao: "Desenvolva cultura e processos de inovação",
    texto: "Crie um plano para fomentar inovação em [nome da empresa] com: 1) Processo de ideação, 2) Critérios de avaliação de ideias, 3) Prototipagem rápida, 4) Alocação de recursos, 5) Métricas de desempenho, 6) Programa de reconhecimento. Inclua case studies de sucesso.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 40,
    titulo: "Estratégia de B2G",
    descricao: "Desenvolva plano para vender ao governo",
    texto: "Elabore uma estratégia para [nome da empresa] vender para órgãos governamentais incluindo: 1) Análise de editais, 2) Requisitos de habilitação, 3) Parcerias estratégicas, 4) Precificação competitiva, 5) Prazos e processos burocráticos, 6) Gestão de contratos.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 41,
    titulo: "Plano de ESG",
    descricao: "Desenvolva estratégia de sustentabilidade corporativa",
    texto: "Crie um plano ESG (Environmental, Social, Governance) para [nome da empresa] incluindo: 1) Diagnóstico atual, 2) Objetivos em cada pilar, 3) Iniciativas concretas, 4) Parcerias necessárias, 5) Métricas de acompanhamento, 6) Comunicação transparente.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 42,
    titulo: "Estratégia de Relações Públicas",
    descricao: "Desenvolva plano de comunicação corporativa",
    texto: "Desenvolva uma estratégia de RP para [nome da empresa] com: 1) Mensagens-chave, 2) Públicos-alvo, 3) Táticas de mídia (conquistada/paga), 4) Gestão de crises, 5) Calendário de eventos, 6) Parcerias com mídia. Inclua plano para 12 meses.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 43,
    titulo: "Plano de Sucesso do Cliente",
    descricao: "Implemente programa de customer success",
    texto: "Elabore um plano de Customer Success para [produto/serviço] incluindo: 1) Onboarding estruturado, 2) Checkpoints de adoção, 3) Identificação de riscos de churn, 4) Programa de advocacy, 5) Métricas de NPS e saúde do cliente, 6) Alinhamento entre equipes.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 44,
    titulo: "Estratégia de Licenciamento",
    descricao: "Desenvolva modelo de licenciamento de marca",
    texto: "Crie uma estratégia de licenciamento para [marca/propriedade intelectual] incluindo: 1) Tipos de licenças (produto, conteúdo, etc.), 2) Critérios para licenciados, 3) Estrutura de royalties, 4) Controle de qualidade, 5) Duração dos contratos, 6) Expansão internacional.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 45,
    titulo: "Plano de Digitalização",
    descricao: "Transforme negócio tradicional em digital",
    texto: "Desenvolva um plano de transformação digital para [nome da empresa] incluindo: 1) Diagnóstico de maturidade digital, 2) Priorização de iniciativas, 3) Tecnologias necessárias, 4) Mudança organizacional, 5) Capacitação de equipes, 6) ROI esperado em 24 meses.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 46,
    titulo: "Estratégia de Associações",
    descricao: "Desenvolva parcerias com associações do setor",
    texto: "Elabore um plano para [nome da empresa] se beneficiar de associações do setor [setor] incluindo: 1) Mapeamento de associações relevantes, 2) Níveis de participação, 3) Benefícios esperados (networking, advocacy), 4) Investimento necessário, 5) Métricas de retorno.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 47,
    titulo: "Plano de Qualidade",
    descricao: "Implemente sistema de gestão da qualidade",
    texto: "Crie um plano para implementar um sistema de gestão da qualidade (ISO 9001 ou similar) em [nome da empresa] incluindo: 1) Análise de lacunas, 2) Documentação necessária, 3) Treinamentos, 4) Auditorias internas, 5) Processo de certificação, 6) Manutenção contínua.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 48,
    titulo: "Estratégia de White Label",
    descricao: "Desenvolva modelo de produtos de marca própria",
    texto: "Elabore uma estratégia de white label para [nome da empresa] oferecer produtos sob marca de terceiros incluindo: 1) Seleção de produtos/serviços, 2) Modelo operacional, 3) Precificação, 4) Acordos contratuais, 5) Controle de qualidade, 6) Expansão do modelo.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 49,
    titulo: "Plano de Inteligência Competitiva",
    descricao: "Implemente sistema de monitoramento competitivo",
    texto: "Desenvolva um plano de inteligência competitiva para [nome da empresa] monitorar: 1) Concorrentes diretos, 2) Novos entrantes, 3) Mudanças regulatórias, 4) Tendências do setor [setor], 5) Tecnologias emergentes. Inclua fontes de dados e frequência de atualização.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 50,
    titulo: "Estratégia de Patrocínios",
    descricao: "Desenvolva plano de patrocínios e apoios culturais",
    texto: "Crie uma estratégia de patrocínios para [nome da empresa] alinhada à sua marca incluindo: 1) Critérios de seleção (eventos, causas, etc.), 2) Níveis de investimento, 3) Benefícios de branding, 4) Mensuração de ROI, 5) Contratos e cláusulas, 6) Plano de ativação.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 51,
    titulo: "Plano de Privacidade de Dados",
    descricao: "Implemente conformidade com LGPD/GDPR",
    texto: "Elabore um plano de privacidade de dados para [nome da empresa] conforme [LGPD/GDPR] incluindo: 1) Mapeamento de dados pessoais, 2) Políticas de tratamento, 3) Adaptações tecnológicas, 4) Treinamento de equipes, 5) Processo para titulares, 6) DPO (Data Protection Officer).",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 52,
    titulo: "Estratégia de Terceirização",
    descricao: "Identifique processos para terceirizar",
    texto: "Analise as operações de [nome da empresa] e desenvolva um plano de terceirização incluindo: 1) Processos candidatos (TI, limpeza, etc.), 2) Critérios de seleção de fornecedores, 3) Modelo de contratação, 4) Gestão de SLA, 5) Transição gradual, 6) Economia esperada.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 53,
    titulo: "Plano de Endomarketing",
    descricao: "Desenvolva estratégia para engajar colaboradores",
    texto: "Crie um plano de endomarketing para [nome da empresa] focando em: 1) Comunicação interna eficaz, 2) Programas de reconhecimento, 3) Pesquisa de clima organizacional, 4) Eventos corporativos, 5) Alinhamento à cultura da empresa, 6) Métricas de engajamento.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 54,
    titulo: "Estratégia de Pricing Dinâmico",
    descricao: "Implemente modelo de precificação flexível",
    texto: "Desenvolva uma estratégia de pricing dinâmico para [produto/serviço] considerando: 1) Fatores de variação (demanda, estoque, etc.), 2) Limites mínimos/máximos, 3) Tecnologia necessária, 4) Comunicação ao cliente, 5) Testes controlados, 6) Ajustes contínuos.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 55,
    titulo: "Plano de Gestão de Riscos",
    descricao: "Identifique e mitigue riscos empresariais",
    texto: "Elabore um plano de gestão de riscos para [nome da empresa] incluindo: 1) Identificação de riscos (operacionais, financeiros, etc.), 2) Avaliação de impacto e probabilidade, 3) Planos de mitigação, 4) Monitoramento contínuo, 5) Plano de crise, 6) Seguros recomendados.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 56,
    titulo: "Estratégia de E-commerce",
    descricao: "Desenvolva plano para vendas online",
    texto: "Crie uma estratégia completa de e-commerce para [nome da empresa] incluindo: 1) Plataforma escolhida, 2) Experiência do usuário, 3) Logística de entregas, 4) Atendimento ao cliente, 5) Marketing digital integrado, 6) KPIs de desempenho em 6 meses.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 57,
    titulo: "Plano de Auditoria Interna",
    descricao: "Implemente programa de auditorias regulares",
    texto: "Desenvolva um plano de auditoria interna para [nome da empresa] cobrindo: 1) Áreas prioritárias (financeira, operacional, etc.), 2) Frequência das auditorias, 3) Checklists personalizados, 4) Relatórios e acompanhamento, 5) Treinamento de auditores, 6) Melhoria contínua.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 58,
    titulo: "Estratégia de Coworking",
    descricao: "Desenvolva modelo de espaços compartilhados",
    texto: "Elabore um modelo de negócio de coworking para [público-alvo] incluindo: 1) Proposta de valor diferenciada, 2) Espaço físico e amenities, 3) Modelo de assinaturas, 4) Comunidade e networking, 5) Parcerias estratégicas, 6) Projeção financeira em 3 anos.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 59,
    titulo: "Plano de Rebranding",
    descricao: "Reposicione marca no mercado",
    texto: "Crie um plano de rebranding para [nome da marca] incluindo: 1) Razões para mudança, 2) Nova identidade visual, 3) Posicionamento atualizado, 4) Comunicação da transição, 5) Adaptação de materiais, 6) Mensuração de impacto pós-implementação.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 60,
    titulo: "Estratégia de Subscrição",
    descricao: "Desenvolva modelo baseado em assinaturas",
    texto: "Desenvolva um modelo de negócio por subscrição para [produto/serviço] incluindo: 1) Níveis de assinatura, 2) Benefícios exclusivos, 3) Preços e ciclos, 4) Retenção de assinantes, 5) Gestão de cancelamentos, 6) Upsell de planos.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 61,
    titulo: "Plano de Desinvestimento",
    descricao: "Identifique ativos para venda ou encerramento",
    texto: "Elabore um plano de desinvestimento para [nome da empresa] avaliando: 1) Unidades/linhas de negócio com baixo desempenho, 2) Oportunidades de venda, 3) Processo de wind down, 4) Impacto financeiro, 5) Comunicação aos stakeholders, 6) Reinvestimento de recursos.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 62,
    titulo: "Estratégia de Pop-up Stores",
    descricao: "Desenvolva plano para lojas temporárias",
    texto: "Crie uma estratégia de pop-up stores para [marca/produto] incluindo: 1) Locais estratégicos, 2) Duração ideal, 3) Design e experiência, 4) Eventos especiais, 5) Integração com online, 6) Conversão para lojas permanentes. Inclua orçamento estimado.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 63,
    titulo: "Plano de Customer Advocacy",
    descricao: "Desenvolva programa de clientes defensores",
    texto: "Desenvolva um programa de advocacy para [nome da empresa] transformando clientes em promotores incluindo: 1) Critérios de seleção, 2) Benefícios oferecidos, 3) Ativações (depoimentos, cases), 4) Gestão do relacionamento, 5) Mensuração de impacto no negócio.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 64,
    titulo: "Estratégia de Licitações",
    descricao: "Desenvolva plano para participar de licitações",
    texto: "Elabore uma estratégia para [nome da empresa] vencer licitações públicas incluindo: 1) Análise de editais, 2) Habilitação jurídica, 3) Parcerias estratégicas, 4) Precificação competitiva, 5) Documentação necessária, 6) Pós-venda em contratos.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 65,
    titulo: "Plano de Employer Branding",
    descricao: "Desenvolva marca empregadora forte",
    texto: "Crie uma estratégia de employer branding para [nome da empresa] atrair e reter talentos incluindo: 1) Proposta de valor ao empregado, 2) Canais de recrutamento, 3) Programa de indicação, 4) Glassdoor e avaliações, 5) Eventos de carreira, 6) Métricas de sucesso.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 66,
    titulo: "Estratégia de Marketplace",
    descricao: "Desenvolva modelo de plataforma multi-vendedores",
    texto: "Desenvolva um modelo de marketplace para [segmento] conectando [compradores] e [vendedores] incluindo: 1) Proposta de valor, 2) Modelo de receita, 3) Gestão da qualidade, 4) Tecnologia necessária, 5) Aquisição de ambos os lados, 6) Expansão gradual.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 67,
    titulo: "Plano de Spin-off",
    descricao: "Desenvolva estratégia para separar unidade de negócio",
    texto: "Elabore um plano para criar um spin-off de [unidade de negócio] de [nome da empresa] incluindo: 1) Justificativa estratégica, 2) Estrutura legal, 3) Transferência de ativos, 4) Governança, 5) Plano de negócios independente, 6) Relacionamento com matriz.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 68,
    titulo: "Estratégia de Revenue Share",
    descricao: "Desenvolva modelo de compartilhamento de receita",
    texto: "Crie um modelo de revenue sharing para parceria entre [empresa A] e [empresa B] incluindo: 1) Bases de cálculo, 2) Periodicidade de pagamentos, 3) Relatórios de transparência, 4) Duração do acordo, 5) Cláusulas de revisão, 6) Resolução de disputas.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 69,
    titulo: "Plano de Testes A/B",
    descricao: "Implemente cultura de experimentação",
    texto: "Desenvolva um plano para implementar testes A/B em [área: marketing, produto, etc.] de [nome da empresa] incluindo: 1) Ferramentas necessárias, 2) Processo de criação de hipóteses, 3) Tamanho de amostra, 4) Duração dos testes, 5) Análise estatística, 6) Implementação de resultados.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 70,
    titulo: "Estratégia de Barreira à Entrada",
    descricao: "Proteja negócio da concorrência",
    texto: "Elabore estratégias para criar barreiras à entrada de concorrentes no mercado de [setor] incluindo: 1) Vantagens de escala, 2) Patentes e propriedade intelectual, 3) Relacionamento com clientes, 4) Custo de mudança, 5) Acesso a canais, 6) Regulamentações.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 71,
    titulo: "Plano de Verticalização",
    descricao: "Integre cadeia de suprimentos",
    texto: "Desenvolva um plano para [nome da empresa] verticalizar sua operação em [direção: upstream/downstream] incluindo: 1) Análise de viabilidade, 2) Aquisição vs. desenvolvimento interno, 3) Investimentos necessários, 4) Integração operacional, 5) Economias esperadas.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 72,
    titulo: "Estratégia de Consórcio",
    descricao: "Desenvolva modelo de parceria entre concorrentes",
    texto: "Crie uma estratégia para formar um consórcio entre empresas do setor [setor] para [objetivo comum] incluindo: 1) Governança do grupo, 2) Contribuições de cada membro, 3) Divisão de resultados, 4) Proteção de know-how, 5) Duração, 6) Resolução de conflitos.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 73,
    titulo: "Plano de Lean Startup",
    descricao: "Aplique metodologia ágil para novos negócios",
    texto: "Desenvolva um plano usando metodologia Lean Startup para validar [ideia de negócio] incluindo: 1) Hipóteses a testar, 2) MVP (Minimum Viable Product), 3) Métricas fundamentais, 4) Ciclos de pivotagem, 5) Fontes de feedback, 6) Transição para escala.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 74,
    titulo: "Estratégia de Cobranding",
    descricao: "Desenvolva parcerias de marca compartilhada",
    texto: "Elabore uma estratégia de cobranding entre [marca A] e [marca B] incluindo: 1) Sinergias identificadas, 2) Público-alvo conjunto, 3) Ativações planejadas, 4) Divisão de investimentos, 5) Diretrizes de uso das marcas, 6) Mensuração de resultados.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 75,
    titulo: "Plano de Growth Hacking",
    descricao: "Implemente técnicas de crescimento acelerado",
    texto: "Crie um plano de growth hacking para [produto/startup] focando em: 1) Aquisição viral de usuários, 2) Otimização de conversão, 3) Retenção e engajamento, 4) Táticas específicas para [setor], 5) Experimentação contínua, 6) Escalonamento de sucessos.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 76,
    titulo: "Estratégia de Outsourcing",
    descricao: "Terceirize funções não essenciais",
    texto: "Desenvolva um plano de outsourcing para [função: TI, RH, etc.] em [nome da empresa] incluindo: 1) Escopo do serviço, 2) Critérios de seleção de fornecedor, 3) Transição de atividades, 4) Gestão do contrato, 5) KPIs de desempenho, 6) Plano B.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 77,
    titulo: "Plano de Data-Driven",
    descricao: "Implemente cultura orientada por dados",
    texto: "Elabore um plano para transformar [nome da empresa] em data-driven incluindo: 1) Infraestrutura de analytics, 2) Fontes de dados, 3) Dashboard de KPIs, 4) Treinamento de equipes, 5) Processos decisórios baseados em dados, 6) Casos de uso por departamento.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 78,
    titulo: "Estratégia de Monetização",
    descricao: "Desenvolva fluxos de receita alternativos",
    texto: "Crie estratégias de monetização para [produto/serviço] além do modelo atual incluindo: 1) Análise de valor percebido, 2) Modelos freemium/premium, 3) Venda de dados anonimizados, 4) Publicidade nativa, 5) Assinaturas, 6) Implementação gradual.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 79,
    titulo: "Plano de Joint Venture",
    descricao: "Desenvolva parceria estratégica com outra empresa",
    texto: "Desenvolva um plano para criar uma joint venture entre [empresa A] e [empresa B] para [objetivo] incluindo: 1) Estrutura legal, 2) Contribuições de cada parte, 3) Governança, 4) Divisão de lucros, 5) Saída de sócios, 6) Plano de negócios da JV.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 80,
    titulo: "Estratégia de Blue Ocean",
    descricao: "Identifique mercados não explorados",
    texto: "Aplique a estratégia do Oceano Azul para [setor] identificando: 1) Fatores que podem ser eliminados, 2) Fatores que podem ser reduzidos, 3) Fatores que podem ser elevados, 4) Fatores que podem ser criados, 5) Nova proposta de valor, 6) Protótipo do modelo.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 81,
    titulo: "Plano de Customer Centricity",
    descricao: "Transforme empresa para focar no cliente",
    texto: "Elabore um plano para tornar [nome da empresa] verdadeiramente customer-centric incluindo: 1) Pesquisas de satisfação, 2) Journey mapping, 3) Redesenho de processos, 4) Métricas de sucesso, 5) Treinamento de equipes, 6) Histórias de sucesso para replicar.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 82,
    titulo: "Estratégia de Plataforma",
    descricao: "Transforme produto em plataforma",
    texto: "Desenvolva uma estratégia para transformar [produto] em uma plataforma incluindo: 1) APIs para desenvolvedores, 2) Ecossistema de parceiros, 3) Modelo de monetização, 4) Governança da plataforma, 5) Aquisição de ambos os lados, 6) Casos de uso iniciais.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 83,
    titulo: "Plano de Intrapreneurship",
    descricao: "Incentive inovação interna",
    texto: "Crie um programa de intrapreneurship para [nome da empresa] incluindo: 1) Processo de submissão de ideias, 2) Recursos alocados, 3) Acompanhamento de projetos, 4) Incentivos para equipes, 5) Ligação com estratégia corporativa, 6) Histórico de sucessos.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 84,
    titulo: "Estratégia de Freemium",
    descricao: "Implemente modelo gratuito/pago",
    texto: "Elabore uma estratégia freemium para [produto/serviço] definindo: 1) Recursos gratuitos vs. premium, 2) Limitações da versão free, 3) Gatilhos de conversão, 4) Precificação dos planos, 5) Retenção de usuários free, 6) Otimização contínua do modelo.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 85,
    titulo: "Plano de CX (Customer Experience)",
    descricao: "Melhore experiência do cliente em todos os pontos",
    texto: "Desenvolva um plano abrangente para melhorar a experiência do cliente em [nome da empresa] mapeando: 1) Todos os pontos de contato, 2) Dores atuais, 3) Oportunidades de melhoria, 4) Tecnologia necessária, 5) Treinamento de equipes, 6) Métricas de satisfação.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 86,
    titulo: "Estratégia de Scalability",
    descricao: "Prepare negócio para crescimento rápido",
    texto: "Crie uma estratégia para escalar [nome da empresa/startup] incluindo: 1) Infraestrutura necessária, 2) Processos replicáveis, 3) Automação, 4) Gestão de equipe em crescimento, 5) Requisitos de capital, 6) Riscos de crescimento acelerado e mitigação.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 87,
    titulo: "Plano de Loyalty 3.0",
    descricao: "Atualize programa de fidelidade para era digital",
    texto: "Reinvente o programa de fidelidade de [nome da empresa] para a era digital incluindo: 1) Benefícios personalizados, 2) Gamificação, 3) Integração com apps/smartphones, 4) Parcerias com outras marcas, 5) Experiências exclusivas, 6) Dados para personalização.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 88,
    titulo: "Estratégia de Subscription Box",
    descricao: "Desenvolva modelo de caixas assinatura",
    texto: "Elabore um modelo de subscription box para [público-alvo] oferecendo [tipo de produtos] incluindo: 1) Curadoria de produtos, 2) Frequência de envio, 3) Níveis de assinatura, 4) Experiência de unboxing, 5) Personalização, 6) Retenção de assinantes.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 89,
    titulo: "Plano de Green Business",
    descricao: "Transforme negócio em modelo sustentável",
    texto: "Desenvolva um plano para tornar [nome da empresa] um negócio verde incluindo: 1) Análise de impacto ambiental atual, 2) Redução de desperdícios, 3) Matérias-primas sustentáveis, 4) Logística reversa, 5) Certificações, 6) Comunicação das iniciativas.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 90,
    titulo: "Estratégia de Microfranquias",
    descricao: "Desenvolva modelo de franquias acessíveis",
    texto: "Crie um modelo de microfranquias para [nome da empresa] com: 1) Investimento inicial reduzido, 2) Operação simplificada, 3) Suporte centralizado, 4) Perfil de franqueado, 5) Territórios exclusivos, 6) ROI atrativo em 12 meses. Inclua estudo de caso.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 91,
    titulo: "Plano de Smart Retail",
    descricao: "Implemente tecnologias inteligentes no varejo",
    texto: "Elabore um plano para transformar [nome da loja] em smart retail usando: 1) IoT para gestão de estoque, 2) Checkout automatizado, 3) Personalização com IA, 4) Analytics em tempo real, 5) Experiências omnichannel, 6) ROI esperado em 18 meses.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 92,
    titulo: "Estratégia de Dropshipping",
    descricao: "Implemente modelo sem estoque próprio",
    texto: "Desenvolva uma estratégia de dropshipping para [nome da empresa] vendendo [categoria de produtos] incluindo: 1) Seleção de fornecedores, 2) Integração com e-commerce, 3) Gestão de prazos de entrega, 4) Política de devoluções, 5) Margens de lucro, 6) Escalonamento.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 93,
    titulo: "Plano de HR Tech",
    descricao: "Implemente tecnologias para gestão de pessoas",
    texto: "Crie um plano para modernizar a área de RH de [nome da empresa] com: 1) Ferramentas de recrutamento digital, 2) Plataforma de treinamentos online, 3) Gestão de desempenho, 4) Bem-estar digital, 5) People analytics, 6) Integração de sistemas.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 94,
    titulo: "Estratégia de Voice Commerce",
    descricao: "Prepare negócio para vendas por assistentes de voz",
    texto: "Elabore uma estratégia para [nome da empresa] participar do voice commerce através de: 1) Otimização para buscas por voz, 2) Skills para Alexa/Google Assistant, 3) Pagamentos por voz, 4) Integração com sistemas existentes, 5) Métricas de conversão, 6) Roadmap de 12 meses.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 95,
    titulo: "Plano de Dark Stores",
    descricao: "Implemente lojas escuras para entregas rápidas",
    texto: "Desenvolva um plano para [nome da empresa] operar dark stores incluindo: 1) Localização estratégica, 2) Layout otimizado para picking, 3) Integração com apps de delivery, 4) Frota própria vs. terceirizada, 5) SLA de entrega, 6) Expansão gradual.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 96,
    titulo: "Estratégia de Fintech",
    descricao: "Desenvolva soluções financeiras inovadoras",
    texto: "Crie uma estratégia para lançar um produto/serviço fintech no segmento [segmento] incluindo: 1) Proposta de valor, 2) Regulamentações aplicáveis, 3) Parcerias com instituições financeiras, 4) Tecnologia necessária, 5) Roadmap de lançamento, 6) Modelo de receita.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 97,
    titulo: "Plano de Smart Office",
    descricao: "Implemente escritório inteligente pós-pandemia",
    texto: "Elabore um plano para transformar os escritórios de [nome da empresa] em smart offices com: 1) Reserva inteligente de espaços, 2) Controle de ocupação, 3) IoT para eficiência energética, 4) Experiência híbrida, 5) Segurança sanitária, 6) ROI esperado.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 98,
    titulo: "Estratégia de Phygital",
    descricao: "Integre experiências físicas e digitais",
    texto: "Desenvolva uma estratégia phygital para [nome da empresa] integrando: 1) Loja física com app mobile, 2) Realidade aumentada, 3) Checkout unificado, 4) Dados do cliente entre canais, 5) Eventos híbridos, 6) KPIs de engajamento cruzado.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 99,
    titulo: "Plano de Web3",
    descricao: "Prepare negócio para descentralização",
    texto: "Crie um plano para [nome da empresa] explorar oportunidades Web3 incluindo: 1) Tokens não fungíveis (NFTs), 2) Comunidades DAO, 3) Criptomoedas e pagamentos, 4) Metaverso, 5) Propriedade descentralizada, 6) Roadmap de implementação gradual.",
    categoria: "negócios",
    favorito: false
  },
  {
    id: 100,
    titulo: "Estratégia de AI First",
    descricao: "Transforme negócio com inteligência artificial",
    texto: "Elabore uma estratégia para tornar [nome da empresa] AI-first incluindo: 1) Casos de uso prioritários, 2) Parcerias com startups de AI, 3) Aquisição de talentos, 4) Infraestrutura de dados, 5) Implementação em produtos, 6) Governança ética de AI.",
    categoria: "negócios",
    favorito: false
  }
  ],
  marketing: [
   
  {
    id: 101,
    titulo: "Geração de Ideias para Posts",
    descricao: "Crie ideias engajadoras para redes sociais",
    texto: "Gere 10 ideias criativas de posts para [marca/empresa] no [plataforma]. Cada ideia deve incluir: 1) Formato (vídeo, carrossel etc), 2) Tema principal, 3) Possível call-to-action, 4) Hashtags relevantes. Foco no público [descrição do público].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 102,
    titulo: "Otimização de Landing Page",
    descricao: "Melhore taxas de conversão de páginas",
    texto: "Analise esta landing page para [produto/serviço] e sugira 5 melhorias específicas para aumentar conversões, considerando: 1) Cabeçalho, 2) Formulário, 3) Elementos visuais, 4) Prova social, 5) Chamadas para ação. URL: [insira URL ou descrição]",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 103,
    titulo: "Roteiro para Vídeo Marketing",
    descricao: "Estrutura completa para vídeos promocionais",
    texto: "Crie um roteiro detalhado para um vídeo de [tipo: tutorial, depoimento etc] de [duração] segundos promovendo [produto/serviço]. Inclua: 1) Storyboard básico, 2) Diálogo/narração, 3) Elementos visuais, 4) Música/efeitos sugeridos, 5) Mensagem principal.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 104,
    titulo: "Estratégia de Email Marketing",
    descricao: "Planejamento para campanhas por email",
    texto: "Desenvolva uma estratégia de email marketing para [empresa] com: 1) Segmentação de público, 2) Cronograma de envios, 3) Tipos de emails (nutrição, promoção etc), 4) Métricas-chave, 5) Exemplos de linhas de assunto. Objetivo: [gerar leads, aumentar vendas etc].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 105,
    titulo: "Pesquisa de Personas",
    descricao: "Desenvolva personas detalhadas para segmentação",
    texto: "Crie 3 personas detalhadas para [produto/serviço] incluindo: 1) Dados demográficos, 2) Desafios/painéis, 3) Comportamento de compra, 4) Canais preferidos, 5) Objeções comuns. Baseie-se em dados reais do setor [insira setor].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 106,
    titulo: "Análise SWOT de Marketing",
    descricao: "Avalie forças e oportunidades de estratégias",
    texto: "Conduza uma análise SWOT completa da estratégia de marketing de [empresa], considerando: 1) Forças internas, 2) Fraquezas internas, 3) Oportunidades externas, 4) Ameaças externas. Foco no [produto/linha de serviço] no mercado [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 107,
    titulo: "Guia de SEO On-Page",
    descricao: "Otimize conteúdo para mecanismos de busca",
    texto: "Forneça recomendações detalhadas de SEO on-page para a página [URL/título] sobre [tema]. Cubra: 1) Otimização de título/meta, 2) Estrutura de cabeçalhos, 3) Uso de palavras-chave, 4) Links internos/externos, 5) Otimização para mobile. Palavra-chave principal: [insira].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 108,
    titulo: "Briefing para Campanha",
    descricao: "Modelo completo para briefing de marketing",
    texto: "Crie um briefing detalhado para uma campanha de [tipo] da marca [nome] com: 1) Objetivos SMART, 2) Público-alvo, 3) Tom de voz, 4) Canais prioritários, 5) KPI's, 6) Orçamento estimado, 7) Cronograma. Contexto: [descreva contexto].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 109,
    titulo: "Análise de Dados Google Analytics",
    descricao: "Extraia insights de dados de tráfego",
    texto: "Analise os seguintes dados do Google Analytics para [site] e identifique: 1) 3 oportunidades de crescimento, 2) 2 problemas principais, 3) Recomendações acionáveis. Dados: [insira dados ou descreva padrões observados].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 110,
    titulo: "Estratégia de Conteúdo para Blog",
    descricao: "Plano editorial para conteúdo orgânico",
    texto: "Desenvolva um calendário editorial de 1 mês para o blog da [empresa] no setor [setor], incluindo: 1) 8 tópicos otimizados para SEO, 2) Palavras-chave principais, 3) Formato ideal para cada post, 4) Sugestões de promoção. Público: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 111,
    titulo: "Script para Podcast Branded",
    descricao: "Roteiro para conteúdo em áudio",
    texto: "Escreva um script de [minutos] minutos para um podcast promovendo [marca/produto] de forma indireta. Inclua: 1) Introdução cativante, 2) Tópicos principais, 3) Transições naturais, 4) Menção orgânica à marca, 5) Chamada para ação discreta. Tema: [insira].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 112,
    titulo: "Estratégia de Influenciadores",
    descricao: "Plano de parcerias com criadores de conteúdo",
    texto: "Desenvolva uma estratégia de marketing de influenciadores para [marca] incluindo: 1) Perfil ideal de influenciador, 2) Plataformas prioritárias, 3) Tipos de colaboração, 4) Métricas de sucesso, 5) Exemplo de brief para influenciador. Nicho: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 113,
    titulo: "Otimização de Perfil LinkedIn",
    descricao: "Melhore perfis para negócios B2B",
    texto: "Recomende melhorias específicas para o perfil LinkedIn da [empresa/pessoa] considerando: 1) Cabeçalho otimizado, 2) Seção 'Sobre', 3) Palavras-chave estratégicas, 4) Apelo visual, 5) Chamadas para ação. Objetivo: [gerar leads, recrutamento etc].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 114,
    titulo: "Análise de Campanha Paga",
    descricao: "Avalie desempenho de anúncios pagos",
    texto: "Analise os resultados desta campanha paga na [plataforma] para [produto]. Destaque: 1) Métricas-chave (CTR, CPA etc), 2) Públicos com melhor desempenho, 3) Criativos mais eficazes, 4) Sugestões para otimização. Dados: [insira ou descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 115,
    titulo: "Estratégia de Relançamento",
    descricao: "Plano para revitalizar produtos existentes",
    texto: "Crie uma estratégia de relançamento para [produto] incluindo: 1) Reposicionamento de marca, 2) Atualizações sugeridas, 3) Campanha de remarketing, 4) Parcerias potenciais, 5) Cronograma de 90 dias. Motivo do relançamento: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 116,
    titulo: "Guia de Community Management",
    descricao: "Melhore engajamento em redes sociais",
    texto: "Desenvolva um manual de community management para [empresa] com: 1) Diretrizes de resposta, 2) Tom de voz por cenário, 3) Protocolo para crises, 4) Estratégia de engajamento proativo, 5) Métricas de comunidade saudável. Plataformas: [liste].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 117,
    titulo: "Estratégia de Growth Hacking",
    descricao: "Táticas criativas para crescimento rápido",
    texto: "Proponha 5 táticas de growth hacking para [startup/empresa] no setor [setor], considerando: 1) Recursos atuais, 2) Público-alvo, 3) Métricas a impactar, 4) Implementação passo a passo, 5) Ferramentas necessárias. Estágio atual: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 118,
    titulo: "Análise de Sazonalidade",
    descricao: "Prepare campanhas para períodos sazonais",
    texto: "Identifique 3 oportunidades sazonais para [empresa] no calendário [ano], com: 1) Datas relevantes, 2) Ideias de campanhas, 3) Preparação necessária, 4) Exemplo de promoção, 5) Cronograma de execução. Produto: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 119,
    titulo: "Otimização de Carrinho Abandonado",
    descricao: "Reduza abandono com estratégias comprovadas",
    texto: "Sugira 5 melhorias para a sequência de emails de carrinho abandonado da [loja], incluindo: 1) Timing dos emails, 2) Conteúdo de cada mensagem, 3) Ofertas/incentivos, 4) Testes A/B recomendados. Taxa atual: [% se conhecida].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 120,
    titulo: "Estratégia de Marketing B2B",
    descricao: "Plano para negócios entre empresas",
    texto: "Desenvolva uma estratégia de marketing B2B para [empresa] vendendo [produto/serviço] incluindo: 1) Jornada do cliente, 2) Conteúdo por estágio, 3) Canais prioritários, 4) Métricas de sucesso, 5) Ferramentas recomendadas. Setor-alvo: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 121,
    titulo: "Guia de UGC (Conteúdo Gerado por Usuários)",
    descricao: "Incentive clientes a criar conteúdo",
    texto: "Crie um plano para aproveitar UGC para [marca] com: 1) Estratégias de incentivo, 2) Diretrizes para participação, 3) Formas de moderar/conhecer, 4) Exemplos de campanhas bem-sucedidas, 5) Métricas para acompanhar. Plataforma-alvo: [insira].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 122,
    titulo: "Estratégia de Marketing Multicanal",
    descricao: "Integre diversos canais de marketing",
    texto: "Desenvolva uma estratégia multicanal para [produto] incluindo: 1) Canais online/offline, 2) Mensagem central adaptada por canal, 3) Orçamento sugerido, 4) Cronograma integrado, 5) Métricas cruzadas. Público principal: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 123,
    titulo: "Análise de Ticket Médio",
    descricao: "Aumente valor médio por compra",
    texto: "Analise o ticket médio atual de [R$X] para [empresa] e sugira 5 estratégias para aumentá-lo, considerando: 1) Upselling/cross-selling, 2) Bundles/pacotes, 3) Programas de fidelidade, 4) Incentivos comprovados, 5) Melhorias na experiência.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 124,
    titulo: "Estratégia de Marketing de Conteúdo",
    descricao: "Plano completo para atração por conteúdo",
    texto: "Crie uma estratégia de marketing de conteúdo para [empresa] com: 1) Mapa de jornada do cliente, 2) Formatos de conteúdo por estágio, 3) Distribuição, 4) Métricas, 5) Ferramentas recomendadas. Objetivo principal: [atração, conversão etc].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 125,
    titulo: "Otimização de Meta Tags",
    descricao: "Melhore CTR em resultados de busca",
    texto: "Reescreva as meta tags (título e descrição) para estas 5 páginas do site [site], considerando: 1) Palavras-chave alvo [liste], 2) Apelo emocional, 3) Chamadas para ação, 4) Limites de caracteres. URLs: [liste].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 126,
    titulo: "Estratégia de Remarketing",
    descricao: "Recapture visitantes não convertidos",
    texto: "Desenvolva uma estratégia de remarketing para [produto] com: 1) Segmentação de públicos, 2) Sequência de anúncios, 3) Mensagens personalizadas, 4) Ofertas específicas, 5) Limites de frequência. Canais: [Google Ads, Facebook etc].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 127,
    titulo: "Análise de Concorrência em SEO",
    descricao: "Identifique oportunidades de busca orgânica",
    texto: "Analise os 3 principais concorrentes de [empresa] em SEO para a palavra-chave [palavra-chave] e identifique: 1) Pontos fortes deles, 2) Lacunas exploráveis, 3) Estratégias de backlink, 4) Recomendações para superá-los.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 128,
    titulo: "Estratégia de Lançamento em Fases",
    descricao: "Planeje lançamentos de produtos escalonados",
    texto: "Crie um cronograma de lançamento em 3 fases para [novo produto], incluindo: 1) Pré-lançamento (teasers), 2) Lançamento oficial, 3) Pós-lançamento. Para cada fase: objetivos, táticas, canais e métricas. Público-alvo: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 129,
    titulo: "Guia de Marketing Visual",
    descricao: "Diretrizes para uso de imagens/vídeos",
    texto: "Desenvolva um guia de estilo visual para [marca] incluindo: 1) Paleta de cores, 2) Tipografia, 3) Estilo de fotografia, 4) Diretrizes para infográficos, 5) Templates para stories. Exemplos de uso e não uso.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 130,
    titulo: "Estratégia para Google My Business",
    descricao: "Otimize presença local",
    texto: "Crie um plano de otimização para o perfil Google My Business de [empresa local] com: 1) Melhorias no perfil, 2) Estratégia de posts regulares, 3) Gestão de avaliações, 4) Uso de fotos/vídeos, 5) Métricas para acompanhar.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 131,
    titulo: "Análise de Tráfego Orgânico",
    descricao: "Identifique fontes e oportunidades",
    texto: "Analise as fontes de tráfego orgânico para [site] e sugira: 1) 3 oportunidades de crescimento, 2) 2 páginas para otimizar, 3) Estratégia para palavras-chave emergentes, 4) Recomendações de conteúdo. Dados atuais: [descreva].",
    categoria: "marketing",
    favorito: false
  },
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
      favorito: false
    },
    {
      id: 17,
      titulo: "Análise de Concorrência",
      descricao: "Compare estratégias de marketing concorrentes",
      texto: "Analise 3 concorrentes diretos de [marca/empresa] no setor de [setor], focando em: 1) Posicionamento de marca, 2) Estratégia de conteúdo, 3) Engajamento nas redes, 4) Diferenciais competitivos. Apresente insights e recomendações de oportunidades não exploradas.",
      categoria: "marketing",
      favorito: false
    },
    {
  
    id: 153,
    titulo: "Otimização de Campanhas no TikTok",
    descricao: "Melhore desempenho na plataforma",
    texto: "Analise a presença da [marca] no TikTok e sugira: 1) Tipos de conteúdo com maior potencial, 2) Hashtags estratégicas, 3) Colaborações com criadores, 4) Timing de postagem, 5) Estratégia de trends. Dados atuais: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 154,
    titulo: "Estratégia de Marketing para Gamers",
    descricao: "Engaje público gamer",
    texto: "Desenvolva uma estratégia para posicionar [marca] junto a gamers incluindo: 1) Plataformas prioritárias, 2) Tipos de conteúdo, 3) Parcerias com streamers, 4) Eventos relevantes, 5) Linguagem apropriada. Gênero de jogos: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 155,
    titulo: "Guia de Marketing para SaaS",
    descricao: "Estratégias para software como serviço",
    texto: "Crie um plano de marketing para [SaaS] incluindo: 1) Jornada do usuário, 2) Testes gratuitos vs demos, 3) Estratégia de preços, 4) Conteúdo educativo, 5) Redução de churn. Modelo: B2B/B2C [especifique].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 156,
    titulo: "Análise de Campanhas Cross-Selling",
    descricao: "Aumente vendas complementares",
    texto: "Analise as oportunidades de cross-selling para [produto principal] e sugira: 1) Combinações naturais, 2) Momentos ideais na jornada, 3) Incentivos eficazes, 4) Personalização, 5) Métricas de sucesso.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 157,
    titulo: "Estratégia de Marketing para Gen Z",
    descricao: "Engaje a geração Z",
    texto: "Desenvolva uma estratégia para conectar [marca] com a Gen Z incluindo: 1) Plataformas preferidas, 2) Valores importantes, 3) Formatos de conteúdo, 4) Tom de voz, 5) Exemplos de campanhas bem-sucedidas.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 158,
    titulo: "Otimização de Campanhas no Pinterest",
    descricao: "Melhore resultados na plataforma",
    texto: "Analise a conta Pinterest da [marca] e sugira: 1) Tipos de pins estratégicos, 2) Palavras-chave para SEO, 3) Organização de boards, 4) Frequência ideal, 5) Integração com e-commerce.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 159,
    titulo: "Estratégia de Marketing para Millennials",
    descricao: "Conecte-se com essa geração",
    texto: "Crie uma estratégia para engajar millennials com [produto] incluindo: 1) Valores a destacar, 2) Canais prioritários, 3) Formatos de conteúdo, 4) Enfoque em experiências, 5) Exemplos de mensagens.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 160,
    titulo: "Guia de Marketing para E-commerce",
    descricao: "Estratégias para lojas virtuais",
    texto: "Desenvolva um plano completo para [loja online] incluindo: 1) Pré-lançamento, 2) Aquisição de tráfego, 3) Conversão, 4) Retenção, 5) Fidelização. Produto principal: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 161,
    titulo: "Análise de Campanhas de Retenção",
    descricao: "Reduza taxa de churn",
    texto: "Analise a estratégia atual de retenção da [empresa] e sugira melhorias em: 1) Comunicação pós-venda, 2) Programas de fidelidade, 3) Reengajamento, 4) Valor percebido, 5) Experiência do cliente.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 162,
    titulo: "Estratégia de Marketing para Baby Boomers",
    descricao: "Conecte-se com essa geração",
    texto: "Desenvolva uma abordagem para engajar baby boomers com [produto] incluindo: 1) Canais preferidos, 2) Objeções comuns, 3) Benefícios a destacar, 4) Tom de voz, 5) Exemplos de mensagens eficazes.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 163,
    titulo: "Otimização de Campanhas no LinkedIn",
    descricao: "Melhore desempenho B2B",
    texto: "Analise as campanhas da [empresa] no LinkedIn e sugira: 1) Tipos de conteúdo com melhor desempenho, 2) Segmentação refinada, 3) Copy otimizada, 4) Estratégia de remarketing, 5) Testes A/B prioritários.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 164,
    titulo: "Estratégia de Marketing para Saúde",
    descricao: "Conformidade e engajamento",
    texto: "Desenvolva uma estratégia para [produto/serviço de saúde] considerando: 1) Regulamentações, 2) Jornada do paciente, 3) Canais aprovados, 4) Educação do público, 5) Construção de confiança.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 165,
    titulo: "Guia de Marketing para Franchising",
    descricao: "Estratégias para redes de franquias",
    texto: "Crie um manual de marketing para franqueados da [rede] incluindo: 1) Diretrizes de marca, 2) Campanhas locais, 3) Orçamento sugerido, 4) Ferramentas centralizadas, 5) Métricas de desempenho.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 166,
    titulo: "Análise de Campanhas SA",
    descricao: "Avalie anúncios de pesquisa",
    texto: "Analise a estrutura de campanhas SA para [empresa] e sugira: 1) Novos grupos de anúncios, 2) Palavras-chave negativas, 3) Melhorias em copy, 4) Extensões relevantes, 5) Estratégia de lances.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 167,
    titulo: "Estratégia de Marketing para Imóveis",
    descricao: "Venda propriedades eficazmente",
    texto: "Desenvolva um plano para [imobiliária/corretor] incluindo: 1) Diferenciação, 2) Conteúdo visual, 3) Segmentação geográfica, 4) Geração de leads, 5) Follow-up eficaz. Tipo de propriedade: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 168,
    titulo: "Otimização de Campanhas no Twitter",
    descricao: "Melhore engajamento",
    texto: "Analise a conta Twitter da [marca] e sugira: 1) Tipos de tweets estratégicos, 2) Hashtags relevantes, 3) Interação com influenciadores, 4) Timing ideal, 5) Estratégia de threads.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 169,
    titulo: "Estratégia de Marketing para Serviços",
    descricao: "Destaque intangíveis",
    texto: "Crie uma estratégia para promover [serviço] incluindo: 1) Diferenciais, 2) Prova social, 3) Processo claro, 4) Objeções comuns, 5) Cases de sucesso. Setor: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 170,
    titulo: "Guia de Marketing para Restaurantes",
    descricao: "Atraia mais clientes",
    texto: "Desenvolva um plano completo para [restaurante] incluindo: 1) Presença online, 2) Promoções sazonais, 3) Experiência do cliente, 4) Programas de fidelidade, 5) Parcerias locais. Tipo de culinária: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 171,
    titulo: "Análise de Campanhas de Relacionamento",
    descricao: "Fidelize clientes",
    texto: "Analise a estratégia atual de CRM da [empresa] e sugira melhorias em: 1) Segmentação, 2) Personalização, 3) Frequência, 4) Conteúdo relevante, 5) Programas de recompensas.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 172,
    titulo: "Estratégia de Marketing para Moda",
    descricao: "Destaque coleções",
    texto: "Desenvolva um plano sazonal para [marca de moda] incluindo: 1) Lançamento de coleção, 2) Fotografia estratégica, 3) Parcerias com influenciadores, 4) Eventos, 5) E-commerce integrado.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 173,
    titulo: "Otimização de Campanhas no YouTube",
    descricao: "Aumente views e engajamento",
    texto: "Analise o canal YouTube da [marca] e sugira: 1) Tipos de vídeos estratégicos, 2) SEO para títulos/descrições, 3) Cards/end screens, 4) Estratégia de thumbnails, 5) Interação com comentários.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 174,
    titulo: "Estratégia de Marketing para Educação",
    descricao: "Promova cursos e formações",
    texto: "Crie um plano para [instituição/curso] incluindo: 1) Jornada do aluno, 2) Diferenciais acadêmicos, 3) Depoimentos, 4) Eventos de captação, 5) Follow-up de leads. Área: [descreva].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 175,
    titulo: "Guia de Marketing para Viagens",
    descricao: "Promova destinos turísticos",
    texto: "Desenvolva uma estratégia para [destino/hotel] incluindo: 1) Temporadas altas/baixas, 2) Conteúdo visual, 3) Parcerias com agências, 4) Pacotes promocionais, 5) Experiências únicas.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 176,
    titulo: "Análise de Campanhas de Branding",
    descricao: "Avalie percepção da marca",
    texto: "Analise as campanhas de branding da [empresa] e sugira: 1) Consistência de mensagem, 2) Conexão emocional, 3) Diferenciação, 4) Alcance vs profundidade, 5) Métricas qualitativas.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 177,
    titulo: "Estratégia de Marketing para Tecnologia",
    descricao: "Explique produtos complexos",
    texto: "Desenvolva uma abordagem para [produto tech] incluindo: 1) Simplificação de benefícios, 2) Demonstrações, 3) Comparativos, 4) Linguagem acessível, 5) Educação do mercado.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 178,
    titulo: "Otimização de Campanhas no Reddit",
    descricao: "Engaje comunidades nichadas",
    texto: "Analise oportunidades para [marca] no Reddit incluindo: 1) Subreddits relevantes, 2) Formatos de anúncio, 3) Participação orgânica, 4) Tom adequado, 5) Métricas de engajamento.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 179,
    titulo: "Estratégia de Marketing para Finanças",
    descricao: "Construa confiança no setor",
    texto: "Crie um plano para [produto/serviço financeiro] considerando: 1) Regulamentações, 2) Educação financeira, 3) Segurança, 4) Comparativos transparentes, 5) Cases de sucesso.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 180,
    titulo: "Guia de Marketing para Beleza",
    descricao: "Destaque produtos de beleza",
    texto: "Desenvolva uma estratégia para [marca de beleza] incluindo: 1) Demonstrações de produto, 2) Parcerias com maquiadores, 3) Before/after, 4) User-generated content, 5) Lançamentos sazonais.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 181,
    titulo: "Análise de Campanhas de Ativação",
    descricao: "Avalie eventos e experiências",
    texto: "Analise as ativações ao vivo da [marca] e sugira: 1) Locais estratégicos, 2) Elementos interativos, 3) Integração digital, 4) Follow-up pós-evento, 5) Mensuração de ROI.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 182,
    titulo: "Estratégia de Marketing para Automotivo",
    descricao: "Promova veículos e serviços",
    texto: "Desenvolva um plano para [marca/concessionária] incluindo: 1) Test drives virtuais, 2) Especificações técnicas simplificadas, 3) Manutenção preventiva, 4) Eventos temáticos, 5) Fidelização.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 183,
    titulo: "Otimização de Campanhas no WhatsApp",
    descricao: "Melhore comunicação direta",
    texto: "Analise o uso do WhatsApp Business por [empresa] e sugira: 1) Tipos de mensagens, 2) Automações úteis, 3) Catálogo de produtos, 4) Respostas rápidas, 5) Integração com CRM.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 184,
    titulo: "Estratégia de Marketing para Bebidas",
    descricao: "Promova marcas de drinks",
    texto: "Crie um plano para [marca de bebida] incluindo: 1) Eventos de degustação, 2) Receitas criativas, 3) Parcerias com bares, 4) Merchandising, 5) Campanhas sazonais. Tipo: [alcóolica/não].",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 185,
    titulo: "Guia de Marketing para Pets",
    descricao: "Engaje donos de animais",
    texto: "Desenvolva uma estratégia para [marca pet] incluindo: 1) Conteúdo educativo, 2) Parcerias com veterinários, 3) Comunidade de tutores, 4) Campanhas emocionais, 5) Produtos sazonais.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 186,
    titulo: "Análise de Campanhas Comparativas",
    descricao: "Avalie anúncios competitivos",
    texto: "Analise a estratégia de marketing comparativo da [empresa] e sugira: 1) Pontos de comparação válidos, 2) Tom adequado, 3) Evidências necessárias, 4) Canais ideais, 5) Riscos e benefícios.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 187,
    titulo: "Estratégia de Marketing para Esportes",
    descricao: "Conecte-se com fãs",
    texto: "Desenvolva um plano para [marca/equipe esportiva] incluindo: 1) Conteúdo por trás das cenas, 2) Jogos interativos, 3) Parcerias com atletas, 4) Merchandising, 5) Engajamento pós-jogo.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 188,
    titulo: "Otimização de Campanhas no Telegram",
    descricao: "Aproveite comunidades",
    texto: "Analise oportunidades para [marca] no Telegram incluindo: 1) Canais vs grupos, 2) Conteúdo exclusivo, 3) Bots úteis, 4) Segmentação, 5) Integração com outras plataformas.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 189,
    titulo: "Estratégia de Marketing para Jurídico",
    descricao: "Conquiste clientes com discrição",
    texto: "Crie uma abordagem para [escritório/advogado] incluindo: 1) Ética profissional, 2) Casos genéricos (sem confidencialidade), 3) Educação legal, 4) Depoimentos, 5) Networking estratégico.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 190,
    titulo: "Guia de Marketing para Música",
    descricao: "Promova artistas e eventos",
    texto: "Desenvolva uma estratégia para [artista/evento musical] incluindo: 1) Lançamento de singles, 2) Merchandising, 3) Experiências VIP, 4) Plataformas de streaming, 5) Parcerias com marcas.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 191,
    titulo: "Análise de Campanhas de Reengajamento",
    descricao: "Recupere clientes inativos",
    texto: "Analise a estratégia de reengajamento da [empresa] e sugira: 1) Segmentação por motivo de inatividade, 2) Incentivos personalizados, 3) Sequência ideal, 4) Canais mais eficazes, 5) Métricas de sucesso.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 192,
    titulo: "Estratégia de Marketing para Agricultura",
    descricao: "Conecte-se com produtores rurais",
    texto: "Desenvolva um plano para [produto agrícola] incluindo: 1) Feiras do setor, 2) Demonstrações práticas, 3) Cases de sucesso, 4) Assistência técnica, 5) Canais especializados.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 193,
    titulo: "Otimização de Campanhas no Snapchat",
    descricao: "Engaje público jovem",
    texto: "Analise oportunidades para [marca] no Snapchat incluindo: 1) Filtros patrocinados, 2) Conteúdo efêmero, 3) Takeovers, 4) Anúncios nativos, 5) Métricas exclusivas da plataforma.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 194,
    titulo: "Estratégia de Marketing para Luxo",
    descricao: "Posicione marcas premium",
    texto: "Crie uma abordagem para [marca de luxo] incluindo: 1) Exclusividade, 2) Experiências VIP, 3) Materiais premium, 4) Parcerias seletivas, 5) Narrativa de herança.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 195,
    titulo: "Guia de Marketing para Consultoria",
    descricao: "Venda serviços intangíveis",
    texto: "Desenvolva uma estratégia para [empresa de consultoria] incluindo: 1) Posicionamento de expertise, 2) Conteúdo thought leadership, 3) Networking estratégico, 4) Cases com métricas, 5) Processo de vendas.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 196,
    titulo: "Análise de Campanhas de Pré-lançamento",
    descricao: "Gere expectativa para novos produtos",
    texto: "Analise a estratégia de pré-lançamento da [empresa] e sugira: 1) Teaser eficaz, 2) Lista de espera, 3) Vazamentos controlados, 4) Influenciadores early adopters, 5) Métricas de antecipação.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 197,
    titulo: "Estratégia de Marketing para Varejo",
    descricao: "Impulsione vendas físicas",
    texto: "Desenvolva um plano para [varejista] incluindo: 1) Experiência omnicanal, 2) Eventos in-store, 3) Vitrines estratégicas, 4) Programas de fidelidade, 5) Integração online-offline.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 198,
    titulo: "Otimização de Campanhas no Clubhouse",
    descricao: "Aproveite áudio social",
    texto: "Analise oportunidades para [marca] no Clubhouse incluindo: 1) Salas temáticas, 2) Parcerias com moderadores, 3) Eventos recorrentes, 4) Networking estratégico, 5) Follow-up pós-eventos.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 199,
    titulo: "Estratégia de Marketing para B2G",
    descricao: "Venda para governo",
    texto: "Crie uma abordagem para [empresa B2G] incluindo: 1) Licitações estratégicas, 2) Relacionamento institucional, 3) Cases setoriais, 4) Eventos do setor público, 5) Conformidade legal.",
    categoria: "marketing",
    favorito: false
  },
  {
    id: 200,
    titulo: "Guia Completo de Marketing Digital",
    descricao: "Plano integrado para 2024",
    texto: "Desenvolva um plano abrangente para [empresa] incluindo: 1) Análise SWOT digital, 2) Estratégia por canal, 3) Orçamento alocado, 4) KPIs principais, 5) Cronograma anual. Setor: [insira].",
    categoria: "marketing",
    favorito: false
  }
],
  escrita: [
    
    {
      id: 101,
      titulo: "Reescrita com Estilo",
      descricao: "Reescreva um texto alterando o estilo literário",
      texto: "Reescreva o seguinte texto no estilo [gótico/cyberpunk/realismo mágico], mantendo o conteúdo original mas transformando completamente a atmosfera e escolha vocabular:\n\n[cole o texto aqui]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 102,
      titulo: "Diálogos Realistas",
      descricao: "Melhore a naturalidade de diálogos",
      texto: "Analise estes diálogos e sugira melhorias para torná-los mais naturais e característicos, considerando: 1) Cadência da fala, 2) Vocabulário adequado aos personagens, 3) Mostrar em vez de contar:\n\n[cole os diálogos aqui]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 103,
      titulo: "Microcontos",
      descricao: "Crie histórias completas em 50 palavras",
      texto: "Gere 3 microcontos de exatamente 50 palavras cada, com: 1) Um twist final impactante, 2) Personagem identificável, 3) Ambientação clara. Os temas devem ser: [insira 3 temas ou palavras-chave]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 104,
      titulo: "Poesia Formal",
      descricao: "Componha poemas com estrutura métrica",
      texto: "Crie um poema de 14 versos sobre [tema] utilizando: 1) Versos decassílabos, 2) Rima alternada ABAB, 3) Uma volta temática no terceto final. Inclua metáforas visuais e aliterações.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 105,
      titulo: "Show, Don't Tell",
      descricao: "Transforme descrições explicativas em cenas vivas",
      texto: "Converta estas informações 'contadas' em cenas 'mostradas' através de: 1) Ações físicas, 2) Diálogos reveladores, 3) Detalhes sensoriais:\n\n[exemplo: 'Era uma pessoa nervosa' → 'Seus dedos tamborilavam incessantes na mesa...']\n\n[cole o texto a ser transformado]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 106,
      titulo: "Vozes Narrativas",
      descricao: "Reescreva uma cena em diferentes perspectivas",
      texto: "Reescreva esta cena em três vozes narrativas distintas: 1) Primeira pessoa subjetiva, 2) Terceira pessoa onisciente, 3) Segunda pessoa imersiva. Compare os efeitos de cada abordagem:\n\n[cole a cena original]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 107,
      titulo: "Arco de Personagem",
      descricao: "Desenvolva transformação psicológica",
      texto: "Para o personagem [nome], crie: 1) 3 falhas iniciais cruciais, 2) 3 eventos catalisadores de mudança, 3) 3 virtudes desenvolvidas ao final. Mostre como cada etapa se reflete em suas ações e diálogos.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 108,
      titulo: "Worldbuilding Literário",
      descricao: "Construa mundos através da narrativa",
      texto: "Descreva [mundo fantástico] sem infodump, revelando detalhes através de: 1) Objetos cotidianos incomuns, 2) Leis sociais implícitas em diálogos, 3) Paisagens que refletem o sistema político. Máximo 300 palavras.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 109,
      titulo: "Efeito Kuleshov",
      descricao: "Crie significado através de justaposição",
      texto: "Combine estas três imagens aparentemente desconexas em uma narrativa coerente, usando transições suaves e detalhes ponte:\n\n1) [Imagem 1 descrição]\n2) [Imagem 2 descrição]\n3) [Imagem 3 descrição]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 110,
      titulo: "Elogio à Restrição",
      descricao: "Escreva sob limitações criativas",
      texto: "Crie um conto usando apenas: 1) Frases de 7 palavras ou menos, 2) Palavras monossílabas, 3) Cores como únicos adjetivos. Tema: [insira tema]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 111,
      titulo: "Subtexto em Diálogos",
      descricao: "Escreva conversas com camadas ocultas",
      texto: "Crie um diálogo de 10 linhas onde os personagens aparentemente discutem [tema superficial] mas na verdade estão comunicando [tema real]. Use pausas, mudanças de assunto e palavras com duplo sentido.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 112,
      titulo: "Flash Fiction",
      descricao: "Histórias completas em 100 palavras",
      texto: "Escreva uma história completa em exatamente 100 palavras contendo: 1) Um conflito claro, 2) Três sentidos evocados, 3) Um objeto simbólico recorrente. Gênero: [insira gênero]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 113,
      titulo: "Estrutura em 3 Atos",
      descricao: "Desenvolva enredo com base em jornada clássica",
      texto: "Para a história sobre [premissa], defina: 1) Incidente incitador (Ato 1), 2) Ponto de viagem sem retorno (Ato 2), 3) Crises ascendentes até o clímax (Ato 3). Inclua um momento de 'dark night of the soul' antes da resolução.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 114,
      titulo: "Ekphrasis",
      descricao: "Transforme arte visual em narrativa",
      texto: "Escolha uma obra de arte famosa e: 1) Descreva-a objetivamente em 50 palavras, 2) Interprete seu significado subjetivo em 100 palavras, 3) Crie uma história por trás de sua criação em 200 palavras.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 115,
      titulo: "Monólogo Interior",
      descricao: "Capture o fluxo de consciência",
      texto: "Escreva um monólogo interior de [personagem] durante [evento crucial], mostrando: 1) Associações livres de ideias, 2) Memórias intercaladas, 3) Conflito não resolvido. Use pontuação experimental quando apropriado.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 116,
      titulo: "Cartas Ficcionais",
      descricao: "Escreva correspondência narrativa",
      texto: "Componha três cartas trocadas entre [personagem A] e [personagem B] que: 1) Revelam um segredo gradualmente, 2) Mostram mudança no tom conforme a relação evolui, 3) Contêm elementos não ditos (manchas, rasuras, itens não enviados).",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 117,
      titulo: "Décima",
      descricao: "Poema com estrutura fixa de 10 versos",
      texto: "Crie uma décima (10 versos de 8 sílabas) com esquema de rimas ABBAACCDDC sobre [tema]. Inclua: 1) Uma imagem central poderosa, 2) Uma virada no nono verso, 3) Uso de sinestesia.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 118,
      titulo: "Biografia Ficcional",
      descricao: "Crie histórias de vida convincentes",
      texto: "Para [personagem], escreva: 1) Um evento formativo da infância (100 palavras), 2) Um segredo adulto nunca revelado (50 palavras), 3) Um objeto pessoal carregado de significado (descrição detalhada). Mostre, não conte.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 119,
      titulo: "Descrição Polissensorial",
      descricao: "Crie cenas que envolvam todos os sentidos",
      texto: "Descreva [cenário] em 150 palavras usando: 1) 2 imagens visuais inusuais, 2) 1 textura tátil importante, 3) 1 som ambiente revelador, 4) 1 cheiro memorável, 5) 1 gosto associado (literal ou metafórico).",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 120,
      titulo: "Conto Circular",
      descricao: "Narrativa que termina onde começou",
      texto: "Escreva um conto de 500 palavras onde: 1) A última frase ecoa a primeira com novo significado, 2) Um objeto comum aparece em três momentos-chave, 3) O protagonista permanece igual apesar das aparentes mudanças.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 121,
      titulo: "Aforismos",
      descricao: "Máximas literárias condensadas",
      texto: "Crie 5 aforismos originais sobre [tema] que: 1) Tenham estrutura paradoxal, 2) Usem imagens concretas para verdades abstratas, 3) Sejam memoráveis em 12 palavras ou menos. Exemplo: 'A luz mais brilhante projeta as sombras mais densas'.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 122,
      titulo: "Palíndromo Criativo",
      descricao: "Frases que funcionam nos dois sentidos",
      texto: "Componha: 1) Um palíndromo de 5 palavras com significado coerente, 2) Um micropoema palindrômico de 3 linhas, 3) Um título de livro fictício que funcione como palíndromo e sugira enredo.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 123,
      titulo: "Zoom In/Zoom Out",
      descricao: "Jogue com escalas narrativas",
      texto: "Descreva [evento importante] em três parágrafos: 1) Perspectiva cósmica (galáxias/tempo geológico), 2) Vista aérea humana (cidade/ano), 3) Close-up íntimo (um gesto/fração de segundo). Mantenha tom consistente.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 124,
      titulo: "Estrutura Não Linear",
      descricao: "Narrativa fora de ordem cronológica",
      texto: "Reorganize esta cena linear em ordem não cronológica, usando: 1) Um objeto como fio condutor, 2) Três marcos temporais distintos, 3) Revelação progressiva de informação:\n\n[cole a cena original]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 125,
      titulo: "Metáforas Estendidas",
      descricao: "Desenvolva comparações complexas",
      texto: "Tome a metáfora '[base] é como [comparação]' e desenvolva-a em 3 parágrafos, explorando: 1) Correspondências literais, 2) Limitações da comparação, 3) Surpresas na extensão da analogia.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 126,
      titulo: "Dicionário Ficcional",
      descricao: "Invente palavras com significado literário",
      texto: "Crie 5 entradas para um dicionário de mundo ficcional, incluindo: 1) Etimologia inventada, 2) Definição literal, 3) Uso em contexto narrativo, 4) Conotação cultural. Exemplo: 'Lunosia (n.): A melancolia de nunca conhecer quem seríamos sob diferentes luas'.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 127,
      titulo: "Pastiche",
      descricao: "Imitação estilística de autores famosos",
      texto: "Escreva um parágrafo sobre [tema mundano] no estilo de [autor], replicando: 1) Padrões de frase típicos, 2) Tiques linguísticos, 3) Temas recorrentes. Depois, analise quais elementos criam essa 'assinatura' estilística.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 128,
      titulo: "Obituário Ficcional",
      descricao: "Resuma uma vida inventada",
      texto: "Escreva um obituário de 150 palavras para [personagem] que: 1) Sugira mais do que declara, 2) Inclua um detalhe aparentemente trivial mas revelador, 3) Use eufemismos que escondam verdades inconvenientes.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 129,
      titulo: "Instruções Absurdas",
      descricao: "Guias para tarefas impossíveis",
      texto: "Escreva um manual passo-a-passo para [tarefa impossível] usando: 1) Linguagem técnica precisa, 2) Diagramas imaginários, 3) Advertências paradoxais, 4) Materiais inexistentes. Exemplo: 'Como esquecer uma memória em 5 etapas'.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 130,
      titulo: "Cadáver Exquisito",
      descricao: "Colaboração criativa com coerência",
      texto: "Comece uma história com: 1) Uma primeira linha surreal, 2) Desenvolva por 3 parágrafos mantendo lógica interna, 3) Termine com uma reviravolta que recontextualize o início. Gênero: [insira gênero]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 131,
      titulo: "Anúncio de Mundo Alternativo",
      descricao: "Propaganda para realidades ficcionais",
      texto: "Crie um anúncio de jornal para [item/evento de mundo ficcional] usando: 1) Jargões desse universo, 2) Problemas específicos desse contexto, 3) Testemunhos in-world. Formato: Classificado de jornal antigo.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 132,
      titulo: "Haikai Moderno",
      descricao: "Poesia minimalista com toque contemporâneo",
      texto: "Componha 3 haikais (5-7-5 sílabas) sobre [tema urbano/moderno] que: 1) Quebrem expectativas no verso final, 2) Usem juxtaposição inesperada, 3) Incluam um detalhe tecnológico ou contemporâneo.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 133,
      titulo: "Catálogo de Personagens",
      descricao: "Descreva pessoas através de inventários",
      texto: "Descreva [personagem] apenas listando: 1) Conteúdo de sua bolsa/mochila, 2) Histórico de navegação na internet, 3) Playlist mais ouvida, 4) Manias noturnas. Sem interpretação explícita.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 134,
      titulo: "Ficção em Formulários",
      descricao: "Narrativa através de documentos burocráticos",
      texto: "Conte uma história apenas usando: 1) Formulário de reclamação preenchido, 2) Lista de compras, 3) Bilhete rabiscado, 4) Registro médico. Implique eventos maiores entre as linhas.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 135,
      titulo: "Tradução Cultural",
      descricao: "Adapte conceitos entre realidades distintas",
      texto: "Explique [conceito moderno] para um [personagem histórico/alienígena] usando: 1) Analogias apropriadas ao seu contexto, 2) Valores culturais compartilhados, 3) Limitações linguísticas criativas. Formato: diálogo com mal-entendidos produtivos.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 136,
      titulo: "Ponto de Virada",
      descricao: "Identifique momentos cruciais em narrativas",
      texto: "Para esta passagem, analise: 1) O momento exato de virada emocional, 2) A palavra/frase que melhor encapsula a mudança, 3) Como preparou esse momento em elementos anteriores:\n\n[cole o texto]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 137,
      titulo: "Elegia",
      descricao: "Poema de luto com toque pessoal",
      texto: "Escreva uma elegia para [pessoa/conceito perdido] que: 1) Comece com uma imagem natural, 2) Inclua um defeito ou contradição do tema, 3) Termine com consolo ambíguo. Use estrutura livre mas com ritmo marcante.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 138,
      titulo: "Crônica do Cotidiano",
      descricao: "Transforme eventos banais em literatura",
      texto: "Narre um evento mundano ([esperar em fila]/[perder chaves]/[trocar lâmpada]) como se fosse epopeia, usando: 1) Hipérboles estratégicas, 2) Digressões filosóficas, 3) Suspense desproporcional. Mantenha verossimilhança emocional.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 139,
      titulo: "Cartografia Ficcional",
      descricao: "Descreva lugares através de mapas narrativos",
      texto: "Crie a descrição de um [lugar] como se fosse um mapa literário, destacando: 1) 3 pontos de interesse com histórias, 2) Rotas perigosas/seguras, 3) Áreas em branco (desconhecidas). Use convenções de mapas antigos.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 140,
      titulo: "Monólogo Dramático",
      descricao: "Voz de personagem com tensão implícita",
      texto: "Escreva um monólogo onde [personagem] tenta convencer [ouvinte] de [algo simples], mas revele: 1) Um segredo não dito, 2) Uma relação de poder complexa, 3) Uma mentira óbvia para o público. Dica: use justificativas contraditórias.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 141,
      titulo: "Limerique",
      descricao: "Poema humorístico de cinco linhas",
      texto: "Crie 3 limeriques sobre [profissão/tema] com: 1) Rimas AABBA, 2) Nome de lugar inventado, 3) Twist final absurdo, 4) Ritmo anapéstico. Exemplo: 'Havia um jovem de Niterói...'",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 142,
      titulo: "Verbete Enciclopédico Ficcional",
      descricao: "Crie entradas para realidades alternativas",
      texto: "Escreva um verbete de enciclopédia para [conceito/animal/evento fictício] com: 1) Tom acadêmico sério, 2) Referências cruzadas inventadas, 3) Dados precisos mas impossíveis, 4) Nota de rodapé com controvérsia acadêmica fictícia.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 143,
      titulo: "Cena Mudra",
      descricao: "Narrativa sem diálogos explícitos",
      texto: "Descreva uma cena emocionalmente carregada entre dois personagens sem usar diálogos diretos, apenas: 1) Ações físicas detalhadas, 2) Objetos intermediários, 3) Ambiente reativo. Dica: transforme sentimentos em gestos.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 144,
      titulo: "Palimpsesto",
      descricao: "História em camadas de significado",
      texto: "Escreva um texto de 200 palavras que funcione em dois níveis: 1) Superfície literal (história simples), 2) Subtexto simbólico (alegoria política/psicológica). Dica: use vocabulário com duplo sentido.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 145,
      titulo: "Questionário Revelador",
      descricao: "Desvende personagens através de perguntas",
      texto: "Crie 10 perguntas aparentemente banais cujas respostas revelariam profundidade sobre [personagem]. Inclua: 1) 3 perguntas sobre rotinas, 2) 3 sobre preferências inexplicáveis, 3) 3 sobre memórias específicas, 4) 1 pergunta que o personagem recusaria responder.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 146,
      titulo: "Sátira de Gênero",
      descricao: "Exagere convenções até o absurdo",
      texto: "Escreva uma cena que parodie [gênero literário] através de: 1) Clichês levados ao extremo, 2) Metáforas literais, 3) Explicações desnecessárias. Exemplo: romance gótico onde o protagonista literalmente 'carrega o peso de seu passado' nas costas.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 147,
      titulo: "Narrativa Ergódica",
      descricao: "Texto que exige esforço físico do leitor",
      texto: "Projete um trecho que: 1) Requera virar o livro para ler, 2) Use formatação caótica para transmitir confusão, 3) Inclua instruções interativas. Contexto: [insira situação onde a forma reforça o conteúdo].",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 148,
      titulo: "Dramatis Personae",
      descricao: "Lista de personagens com conflitos implícitos",
      texto: "Crie elenco para uma peça através de mini-biografias que: 1) Cada uma omita informação crucial, 2) Relações cruzadas criem tensão dramática, 3) Um detalhe banal prenuncie seu destino. Máximo 3 linhas por personagem.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 149,
      titulo: "Profecias Ambíguas",
      descricao: "Previsões que permitam múltiplas leituras",
      texto: "Escreva 3 profecias aparentemente claras mas que: 1) Contenham trocadilhos em línguas mortas, 2) Referências a eventos cíclicos, 3) Condições não declaradas. Formato: tríades métricas com refrão.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 150,
      titulo: "Epístola Inacabada",
      descricao: "Carta que revela mais pelo que não diz",
      texto: "Componha uma carta onde: 1) A caligrafia muda progressivamente, 2) Manchas substituem palavras-chave, 3) O verso contém esboços reveladores. Contexto: [insira situação dramática].",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 151,
      titulo: "Catálogo de Biblioteca Impossível",
      descricao: "Invente títulos de livros ficcionais",
      texto: "Liste 5 títulos de livros inexistentes que: 1) Sugiram todo um gênero, 2) Autores paradoxais, 3) Datas de publicação impossíveis. Inclua notas de catalogação bizarras. Exemplo: 'Sobre a Translucidez dos Sonetos Geológicos' pela Duquesa de V____ (publicado em 1842 e 1967 simultaneamente).",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 152,
      titulo: "Glossário de Fenômenos Inexplicáveis",
      descricao: "Descreva o indescritível com precisão",
      texto: "Defina 3 fenômenos sobrenaturais como entradas de manual científico, incluindo: 1) Sintomas físicos mensuráveis, 2) Procedimentos de contenção, 3) Casos documentados fictícios. Tom: relatório burocrático.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 153,
      titulo: "Narrativa por Exclusão",
      descricao: "História construída pelo que é omitido",
      texto: "Escreva um conto onde o evento central nunca é descrito, apenas: 1) Suas consequências físicas, 2) Reações de terceiros, 3) Objetos residual. Dica: use vozes indiretas e espaços vazios.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 154,
      titulo: "Poema Objeto",
      descricao: "Texto que assume forma visual",
      texto: "Crie um poema curto sobre [tema] onde: 1) A disposição das palavras na página ilustre o conteúdo, 2) Uso estratégico de espaços em branco, 3) Tipografia variada como elemento semântico.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 155,
      titulo: "Registro Arqueológico Ficcional",
      descricao: "Descreva artefatos de civilizações imaginárias",
      texto: "Documente 3 objetos de [cultura fictícia] com: 1) Descrição física precisa, 2) Funções hipotéticas contraditórias, 3) Notas de escavação problemáticas. Formato: catálogo de museu com números de inventário.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 156,
      titulo: "Teorema Poético",
      descricao: "Combine matemática e lirismo",
      texto: "Escreva um 'teorema literário' com: 1) Premissas emocionais, 2) Provas em forma de metáforas, 3) Corolários que sugerem aplicações práticas para o amor/ódio/saudade. Estrutura: Axioma → Lema → Demonstração → QED.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 157,
      titulo: "Narrativa por Hashtags",
      descricao: "Conte histórias através de tags",
      texto: "Reconstrua um evento dramático usando apenas 7 hashtags que: 1) Progressão emocional, 2) Referências culturais oblíquas, 3) Uma tag enganosa. Contexto: [insira situação].",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 158,
      titulo: "Entrevista Impossível",
      descricao: "Diálogo com entidade inefável",
      texto: "Escreva uma entrevista com [conceito abstrato/entidade mitológica] onde: 1) As respostas são metáforas literais, 2) O entrevistador fica progressivamente perturbado, 3) O meio de comunicação se altera durante a conversa.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 159,
      titulo: "Receita com Subtexto",
      descricao: "Instruções culinárias que contam histórias",
      texto: "Escreva uma receita para '[prato fictício]' que: 1) Ingredientes revelem um segredo familiar, 2) Modo de preparo descreva um ritual arcaico, 3) Notas finais contenham uma advertência sinistra. Formato: caderno de receitas antigo.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 160,
      titulo: "Relatório de Incidente Sobrenatural",
      descricao: "Documente o inexplicável com rigor",
      texto: "Preencha um formulário de 'Relatório de Ocorrência Anômala' incluindo: 1) Depoimentos contraditórios, 2) Evidências materiais perturbadoras, 3) Ações recomendadas inúteis. Use linguagem burocrática para eventos fantásticos.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 161,
      titulo: "Microdrama",
      descricao: "Peça teatral em uma página",
      texto: "Escreva uma cena única contendo: 1) Conflito estabelecido nas didascálias, 2) Diálogo onde cada personagem tem objetivo oposto, 3) Um objeto simbólico central. Regra: nenhuma fala com mais de 10 palavras.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 162,
      titulo: "Narrativa por Exemplo",
      descricao: "Ensino através de histórias ficcionais",
      texto: "Ilustre o conceito '[abstrato]' através de: 1) Uma fábula original, 2) Um caso de estudo fictício, 3) Uma analogia inesperada. Exemplo: 'Teoria dos Jogos explicada através de regras de jogos de tabuleiro alternativos'.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 163,
      titulo: "Diário de Viagem Imaginária",
      descricao: "Documente jornadas por lugares inexistentes",
      texto: "Escreva 3 entradas de diário sobre explorar [lugar fictício], destacando: 1) Descobertas científicas impossíveis, 2) Encontros culturais paradoxais, 3) Adaptações corporais necessárias. Tom: relato de naturalista do século XIX.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 164,
      titulo: "Instruções para Performance",
      descricao: "Roteiro para arte conceitual",
      texto: "Descreva uma 'performance artística' impossível contendo: 1) Materiais absurdos, 2) Duração variável, 3) Participação do público involuntária, 4) Efeitos colaterais inexplicáveis. Formato: manual técnico.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 165,
      titulo: "Definição de Neologismo",
      descricao: "Invente palavras para conceitos inexistentes",
      texto: "Crie 3 novas palavras com: 1) Etimologia plausível mas inventada, 2) Definição precisa para emoções/sensações não nomeadas, 3) Exemplo de uso em contexto literário. Exemplo: 'Solepismo: a solidão compartilhada entre estranhos em estações de trem noturnas'.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 166,
      titulo: "Cena de Transição",
      descricao: "Momento de mudança sutil",
      texto: "Escreva uma cena aparentemente banal onde: 1) Um detalhe mínimo prenuncia virada importante, 2) O clima emocional muda imperceptivelmente, 3) Um objeto comum adquire novo significado. Mostre, não conte a transformação.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 167,
      titulo: "Narrativa por Restrição",
      descricao: "Escreva sob limites criativos",
      texto: "Conte uma história usando apenas: 1) Palavras de uma sílaba, 2) Frases de 5 palavras ou menos, 3) Nenhum adjetivo. Tema: [insira tema desafiador].",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 168,
      titulo: "Epígrafe Profética",
      descricao: "Crie citações de obras fictícias",
      texto: "Escreva 3 epígrafes que: 1) Pareçam vir de livros inexistentes, 2) Sugiram todo um contexto literário, 3) Sejam atribuídas a autores fictícios com datas anacrônicas. Exemplo: 'Do tratado perdido 'Sobre a Anatomia das Nuvens' de Dr. L___ (1893)'.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 169,
      titulo: "Análise de Texto Ficcional",
      descricao: "Escreva crítica sobre obra inexistente",
      texto: "Produza uma análise acadêmica de '[obra fictícia]' discutindo: 1) Suas influências não-canônicas, 2) Leituras contraditórias possíveis, 3) O paradoxo central não resolvido. Cite manuscritos perdidos e correspondências do autor.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 170,
      titulo: "Narrativa por Exemplos",
      descricao: "Ilustre conceitos abstratos",
      texto: "Explique '[conceito complexo]' através de: 1) Uma parábola original, 2) Um caso de estudo fictício, 3) Uma analogia inesperada. Exemplo: 'Teoria do Caos ilustrada por uma lavanderia automática em Marte'.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 171,
      titulo: "Caderno de Anotações",
      descricao: "Revele personagem por fragmentos",
      texto: "Componha páginas de um caderno perdido que revelem: 1) 3 projetos abandonados, 2) Listas aparentemente desconexas, 3) Rabiscos marginais reveladores. Mostre a mente do dono sem descrevê-la diretamente.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 172,
      titulo: "Telegrama Narrativo",
      descricao: "Conte histórias por mensagens curtas",
      texto: "Escreva uma sequência de 5 telegramas que: 1) Avancem uma trama complexa, 2) Mostrem mudança de tom pela economia de palavras, 3) Incluam um telegrama interceptado/censurado. Contexto histórico: [insira período].",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 173,
      titulo: "Catálogo de Exposição Imaginária",
      descricao: "Descreva obras de arte ficcionais",
      texto: "Crie entradas para 3 peças de uma exposição de arte conceitual inexistente, incluindo: 1) Títulos enigmáticos, 2) Materiais impossíveis, 3) Declarações do artista fictício, 4) Reações do público documentadas.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 174,
      titulo: "Narrativa por Omissão",
      descricao: "Conte excluindo informação crucial",
      texto: "Descreva [evento traumático/importante] sem nunca mencioná-lo diretamente, usando apenas: 1) Reações periféricas, 2) Objetos residual, 3) Mudanças de ambiente. Dica: focalize em consequências, não no evento.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 175,
      titulo: "Relato de Experimento Falhado",
      descricao: "Documente ciência ficcional",
      texto: "Preencha um 'Relatório de Experimento Nº [X]' incluindo: 1) Objetivos ambiciosos, 2) Procedimentos inadequados, 3) Resultados catastróficos não intencionais, 4) Conclusões otimistas apesar de tudo. Tom: documento científico formal.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 176,
      titulo: "Dicionário de Lugares Imaginários",
      descricao: "Defina geografias ficcionais",
      texto: "Crie 3 entradas para um dicionário geográfico fictício descrevendo: 1) Topografia impossível, 2) Costumes absurdos, 3) Fenômenos naturais inexplicáveis. Inclua coordenadas lat/long fictícias e referências cruzadas a outras entradas.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 177,
      titulo: "Narrativa por Metonímia",
      descricao: "Conte através de partes representativas",
      texto: "Descreva [cenário complexo] mencionando apenas: 1) 3 objetos periféricos, 2) 2 sons ambientais, 3) 1 textura tátil. O leitor deve inferir o todo pelas partes.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 178,
      titulo: "Registro de Caso Psiquiátrico Ficcional",
      descricao: "Documente patologias imaginárias",
      texto: "Preencha um prontuário psiquiátrico para [paciente] detalhando: 1) Sintomas linguisticamente criativos, 2) Tratamentos absurdos já tentados, 3) Progresso paradoxal. Inclua citações diretas do paciente que sugerem sabedoria oculta.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 179,
      titulo: "Instruções para Ritual",
      descricao: "Descreva cerimônias inventadas",
      texto: "Escreva um manual passo-a-passo para realizar '[ritual fictício]' incluindo: 1) Materiais arcanos, 2) Precauções sinistras, 3) Sinais de sucesso/falha ambíguos. Formato: manuscrito antigo com anotações de donos anteriores.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 180,
      titulo: "Narrativa por Contração",
      descricao: "Conte histórias cada vez mais curtas",
      texto: "Reescreva esta cena em 4 versões progressivamente mais curtas (200 → 100 → 50 → 10 palavras), mantendo o cerne emocional. Analise quais elementos sobrevivem à redução:\n\n[cole a cena original]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 181,
      titulo: "Epitáfios Paradoxais",
      descricao: "Crie lápides literárias",
      texto: "Escreva 3 epitáfios que: 1) Contenham contradições reveladoras, 2) Refiram-se a eventos desconhecidos, 3) Sugiram toda uma vida em uma linha. Exemplo: 'Aqui jaz quem nunca esteve presente, mesmo quando estava'.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 182,
      titulo: "Notas de Rodapé Narrativas",
      descricao: "Conte histórias nas margens",
      texto: "Escreva um texto principal banal acompanhado de notas de rodapé que: 1) Contenham uma trama paralela, 2) Revelem informação crucial, 3) Mostrem conflito entre autor e editor fictício. Tema central: [insira assunto].",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 183,
      titulo: "Correspondência Acadêmica Ficcional",
      descricao: "Crie cartas entre estudiosos",
      texto: "Escreva 2 cartas trocadas entre [especialista A] e [especialista B] sobre [descoberta fictícia], mostrando: 1) Disputa acadêmica velada, 2) Dados alterados sutilmente, 3) Referências a trabalhos inexistentes. Formato: correspondência do século XIX.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 184,
      titulo: "Catálogo de Colecionador",
      descricao: "Descreva objetos com histórias implícitas",
      texto: "Liste 5 itens de uma coleção excêntrica incluindo: 1) Procedência duvidosa, 2) Defeitos característicos, 3) Valor emocional não declarado. Contexto: [insira tipo de colecionador].",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 185,
      titulo: "Narrativa por Excesso",
      descricao: "Escreva acumulando detalhes",
      texto: "Descreva [cena simples] com riqueza excessiva de detalhes até que: 1) O trivial pareça importante, 2) O importante seja obscurecido, 3) Emerja um padrão inesperado. Exemplo: descrever um aperto de mão por 3 parágrafos.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 186,
      titulo: "Relato de Sonho",
      descricao: "Documente o onírico com precisão",
      texto: "Registre um sonho fictício mantendo: 1) Lógica onírica incoerente mas convincente, 2) Transições abruptas sem explicação, 3) Um objeto transformacional. Formato: diário com data ambígua.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 187,
      titulo: "Instruções para Desaprender",
      descricao: "Guia para esquecer",
      texto: "Escreva um manual em 5 passos para 'desaprender [habilidade/conceito]' incluindo: 1) Exercícios contraproducentes, 2) Dieta cognitiva, 3) Rituais de esquecimento. Tom: sério mas com contradições internas.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 188,
      titulo: "Narrativa por Negação",
      descricao: "Conte afirmando o oposto",
      texto: "Descreva [evento emocional] listando apenas coisas que NÃO aconteceram, criando por omissão: 1) O verdadeiro evento, 2) As emoções envolvidas, 3) As consequências não mencionadas.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 189,
      titulo: "Relatório Meteorológico Ficcional",
      descricao: "Descreva climas impossíveis",
      texto: "Produza um boletim meteorológico para [local fictício] prevendo: 1) Fenômenos atmosféricos inventados, 2) Efeitos na população local, 3) Adaptações necessárias. Inclua mapa com símbolos não convencionais.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 190,
      titulo: "Narrativa por Fragmentos",
      descricao: "Conte através de cacos",
      texto: "Escreva 7 fragmentos (máx. 15 palavras cada) que: 1) Juntos sugerem uma história maior, 2) Tenham conexões subterrâneas, 3) Um elemento recorrente misterioso. Formato: fichas perdidas reorganizadas.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 191,
      titulo: "Diário de Bordo Alternativo",
      descricao: "Registro de viagem impossível",
      texto: "Escreva entradas de diário de bordo para [meio de transporte fantástico] documentando: 1) Coordenadas não euclidianas, 2) Encontros com fenômenos inexplicáveis, 3) Modificações na própria nave. Tom: misto de técnico e confessional.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 192,
      titulo: "Guia de Campo Ficcional",
      descricao: "Descreva fauna imaginária",
      texto: "Crie entradas para 3 criaturas inexistentes em formato de guia de campo, incluindo: 1) Hábitos alimentares absurdos, 2) Táticas de camuflagem impossíveis, 3) Folclore local relacionado. Ilustrações com anotações de campo.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 193,
      titulo: "Narrativa por Interrupção",
      descricao: "Conte através do que é cortado",
      texto: "Escreva um texto onde: 1) Cada parágrafo é interrompido abruptamente, 2) As frases finais completam pensamentos anteriores, 3) O tema só aparece nas pausas. Tema central: [insira assunto].",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 194,
      titulo: "Receituário Médico Ficcional",
      descricao: "Prescrições para males imaginários",
      texto: "Preencha uma receita médica para tratar '[condição fictícia]' com: 1) Medicamentos inventados, 2) Posologias absurdas, 3) Efeitos colaterais poéticos. Formato: receituário antigo com carimbo ilegível.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 195,
      titulo: "Narrativa por Exclusão",
      descricao: "Conte omitindo elementos-chave",
      texto: "Reescreva esta cena removendo: 1) Todos os adjetivos, 2) Todas as ações físicas, 3) Todo diálogo direto. Mantenha a tensão emocional apenas com ambiente e subtexto:\n\n[cole a cena original]",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 196,
      titulo: "Anúncio Classificado Enigmático",
      descricao: "Crie propagandas para o inexplicável",
      texto: "Redija 3 anúncios de jornal que: 1) Ofereçam serviços impossíveis, 2) Usem linguagem codificada, 3) Sugiram toda uma trama. Exemplo: 'Vende-se relógios que marcam horas de vidas passadas. Só interessados sérios. Perguntar por Sr. Lobo'.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 197,
      titulo: "Relato de Primeiro Contato",
      descricao: "Documente encontro intercultural",
      texto: "Escreva o relatório de [explorador] sobre encontrar [cultura fictícia] destacando: 1) Equívocos fundamentais, 2) Objetos mal interpretados, 3) Cerimônias registradas sem compreensão. Tom: misto de maravilhamento e preconceito.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 198,
      titulo: "Narrativa por Distorção",
      descricao: "Conte através de versões contraditórias",
      texto: "Escreva 3 versões do mesmo evento onde: 1) Cada relato contradiz os anteriores, 2) Detalhes objetivos mudam sutilmente, 3) O narrador nunca é explícito sobre qual versão é 'verdadeira'.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 199,
      titulo: "Manual de Sobrevivência Fantástico",
      descricao: "Instruções para cenários impossíveis",
      texto: "Escreva um guia de 'Como sobreviver a [evento fantástico]' com: 1) Táticas contra-intuitivas, 2) Materiais improváveis, 3) Avisos enigmáticos. Formato: folheto militar desgastado.",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 200,
      titulo: "Última Entrada de Diário",
      descricao: "Final aberto com peso emocional",
      texto: "Escreva a última entrada do diário de [personagem] que: 1) Sugira eventos futuros sem descrevê-los, 2) Tenham uma frase interrompida, 3) Inclua um detalhe cotidiano perturbador pelo contexto. Data: [insira data significativa].",
      categoria: "escrita",
      favorito: false
    },
    {
      id: 4,
      titulo: "Correção de Texto",
      descricao: "Melhore a clareza e coesão de qualquer texto",
      texto: "Atue como editor profissional. Revise o seguinte texto para melhorar sua clareza, fluidez e correção gramatical, mantendo o tom e estilo original. Faça alterações diretas no texto e explique brevemente cada mudança importante:\n\n[cole o texto aqui]",
      categoria: "escrita",
      favorito: false
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
      favorito: false
    }
  ],

  roteiros: [
    
    {
      id: 21,
      titulo: "Roteiro de Documentário",
      descricao: "Estrutura para documentário curto",
      texto: "Desenvolva um roteiro para um documentário de 15 minutos sobre [tema histórico/ambiental]. Inclua: 1) Abertura impactante, 2) Contexto histórico, 3) Entrevistas com especialistas (3 perguntas cada), 4) Sequências de arquivo/reconstituição, 5) Conclusão reflexiva.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 22,
      titulo: "Roteiro de Animação",
      descricao: "Para curta-metragem animado",
      texto: "Crie um roteiro de 5 minutos para uma animação sobre [tema]. Detalhe: 1) Personagens principais e suas características, 2) Diálogos-chave, 3) Transições de cena, 4) Efeitos sonoros essenciais, 5) Clímax emocional.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 23,
      titulo: "Roteiro Educacional",
      descricao: "Para vídeo-aulas",
      texto: "Elabore um roteiro para uma vídeo-aula de 10 minutos sobre [matéria/tópico]. Inclua: 1) Objetivos de aprendizagem, 2) Exemplo prático, 3) 3 pontos-chave, 4) Resumo visual, 5) Exercício para o espectador.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 24,
      titulo: "Roteiro de Reality Show",
      descricao: "Estrutura para episódio",
      texto: "Desenvolva o roteiro de um episódio de reality show sobre [tema]. Detalhe: 1) Introdução do conflito, 2) Desafio principal, 3) Momentos de tensão, 4) Reações dos participantes, 5) Eliminação/premiação.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 25,
      titulo: "Roteiro de Videoclipe",
      descricao: "Narrativa visual para música",
      texto: "Crie um roteiro de videoclipe para a música [gênero/tema]. Inclua: 1) Conceito visual central, 2) 5 cenas sincronizadas com letras específicas, 3) Transições criativas, 4) Figurinos e paleta de cores, 5) Simbologia a ser destacada.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 26,
      titulo: "Roteiro de Gameplay",
      descricao: "Para canais de gaming",
      texto: "Elabore um roteiro para vídeo de gameplay de [jogo]. Inclua: 1) Introdução energética, 2) 3 momentos estratégicos para comentar, 3) Reações planejadas, 4) Interação com viewers, 5) Encerramento com desafio.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 27,
      titulo: "Roteiro de Unboxing",
      descricao: "Para vídeos de produtos",
      texto: "Crie um roteiro detalhado para vídeo de unboxing de [produto]. Detalhe: 1) Expectativas antes de abrir, 2) Reação ao primeiro contato, 3) 3 características para destacar, 4) Demonstração prática, 5) Opinião final.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 28,
      titulo: "Roteiro de Tutorial",
      descricao: "Passo a passo detalhado",
      texto: "Desenvolva um roteiro para tutorial de [habilidade/tarefa]. Inclua: 1) Lista de materiais necessários, 2) 5 passos principais com demonstração, 3) Erros comuns a evitar, 4) Dicas extras, 5) Encerramento motivacional.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 29,
      titulo: "Roteiro de Vlog",
      descricao: "Estrutura para dia a dia",
      texto: "Elabore um roteiro para vlog sobre [atividade/dia temático]. Detalhe: 1) Introdução do dia, 2) 3 momentos-chave a registrar, 3) Transições criativas, 4) Reflexão pessoal, 5) Pergunta para os espectadores.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 30,
      titulo: "Roteiro de Live",
      descricao: "Estrutura para transmissão ao vivo",
      texto: "Crie um roteiro para live sobre [tema]. Inclua: 1) Saudação inicial, 2) 3 tópicos principais, 3) Momentos para interação, 4) Chamadas para like/compartilhamento, 5) Encerramento com preview da próxima.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 31,
      titulo: "Roteiro de Testemunhal",
      descricao: "Para depoimentos de clientes",
      texto: "Desenvolva um roteiro para vídeo testemunhal sobre [produto/serviço]. Detalhe: 1) Contexto antes de usar, 2) Processo de descoberta, 3) 3 benefícios experimentados, 4) Comparação antes/depois, 5) Recomendação final.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 32,
      titulo: "Roteiro de VT",
      descricao: "Para reportagens televisivas",
      texto: "Elabore um roteiro de VT de 2 minutos sobre [evento/tema]. Inclua: 1) Lead informativo, 2) 3 fontes de entrevista (perguntas), 3) Imagens B-roll necessárias, 4) Dados estatísticos, 5) Closing com perspectiva.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 33,
      titulo: "Roteiro de Esquetes",
      descricao: "Para cenas cômicas",
      texto: "Crie um roteiro de esquetes cômico de 3 minutos sobre [situação]. Detalhe: 1) Contexto inicial, 2) 3 reviravoltas engraçadas, 3) Diálogos ágeis, 4) Expressões exageradas, 5) Final surpreendente.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 34,
      titulo: "Roteiro de Telejornal",
      descricao: "Estrutura de noticiário",
      texto: "Desenvolva um roteiro de 5 minutos para telejornal sobre [editoria]. Inclua: 1) Manchete principal, 2) 3 notícias com imagens correspondentes, 3) Transição meteorológica, 4) Nota leve para fechar, 5) Despedida.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 35,
      titulo: "Roteiro de ASMR",
      descricao: "Para vídeos sensoriais",
      texto: "Elabore um roteiro para vídeo ASMR com tema [som/atividade]. Detalhe: 1) Introdução sussurrada, 2) Sequência de 5 sons/gestos, 3) Duração de cada estímulo, 4) Variações de intensidade, 5) Fechamento relaxante.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 36,
      titulo: "Roteiro de Audioguia",
      descricao: "Para tours museus/cidades",
      texto: "Crie um roteiro de audioguia de 10 minutos sobre [local]. Inclua: 1) Introdução histórica, 2) 5 pontos de interesse com descrições, 3) Curiosidades, 4) Transições geográficas, 5) Conclusão com direções.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 37,
      titulo: "Roteiro de Reação",
      descricao: "Para vídeos de reação",
      texto: "Desenvolva um roteiro para vídeo de reação a [conteúdo]. Detalhe: 1) Expectativas pré-visualização, 2) 3 momentos-chave para pausar e comentar, 3) Escala de avaliação, 4) Comparações, 5) Convite para debates.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 38,
      titulo: "Roteiro de Evento",
      descricao: "Para cerimônias/ações",
      texto: "Elabore um roteiro detalhado para evento de [tipo]. Inclua: 1) Abertura, 2) Ordem de falas, 3) Momentos interativos, 4) Logística de transições, 5) Encerramento com fotos.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 39,
      titulo: "Roteiro de Treinamento",
      descricao: "Para vídeos corporativos",
      texto: "Crie um roteiro para vídeo de treinamento sobre [tema]. Detalhe: 1) Objetivos, 2) 3 cenários exemplos, 3) Perguntas para reflexão, 4) Checklist de ações, 5) Recapitulação visual.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 40,
      titulo: "Roteiro de Debate",
      descricao: "Estrutura para mesas redondas",
      texto: "Desenvolva um roteiro para debate de 30min sobre [tema polêmico]. Inclua: 1) Regras básicas, 2) 5 perguntas mediadoras, 3) Tempo por participante, 4) Momentos para contra-argumentos, 5) Conclusão consensual.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 41,
      titulo: "Roteiro de Lançamento",
      descricao: "Para produtos/serviços",
      texto: "Elabore um roteiro para vídeo de lançamento de [produto]. Detalhe: 1) História por trás da criação, 2) 3 inovações, 3) Demonstração, 4) Depoimentos, 5) Oferta especial.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 42,
      titulo: "Roteiro de Paródia",
      descricao: "Para vídeos humorísticos",
      texto: "Crie um roteiro de paródia de 2 minutos baseado em [filme/série]. Inclua: 1) Cena icônica recriada, 2) 3 trocas cômicas, 3) Referências atuais, 4) Final inesperado, 5) Créditos engraçados.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 43,
      titulo: "Roteiro de Mini-Doc",
      descricao: "Para séries documentais",
      texto: "Desenvolva um roteiro de mini-doc de 8min sobre [fenômeno]. Detalhe: 1) Tese central, 2) 3 evidências, 3) Entrevista breve, 4) Gráficos explicativos, 5) Perguntas não respondidas.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 44,
      titulo: "Roteiro de Quiz",
      descricao: "Para jogos interativos",
      texto: "Elabore um roteiro para vídeo-quiz sobre [tema]. Inclua: 1) Introdução animada, 2) 5 perguntas com 3 opções, 3) Tempo para resposta, 4) Explicações curtas, 5) Níveis de premiação.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 45,
      titulo: "Roteiro de Contação",
      descricao: "Para histórias infantis",
      texto: "Crie um roteiro para contação de história sobre [moral]. Detalhe: 1) Ambientação, 2) 3 personagens principais, 3) Conflito, 4) Solução, 5) Pergunta moral.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 46,
      titulo: "Roteiro de Comparação",
      descricao: "Para vídeos analíticos",
      texto: "Desenvolva um roteiro comparando [produto A] e [produto B]. Inclua: 1) Critérios de avaliação, 2) 3 vantagens de cada, 3) Teste prático, 4) Público-alvo ideal, 5) Veredito final.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 47,
      titulo: "Roteiro de Transição",
      descricao: "Para vídeos de metamorfose",
      texto: "Elabore um roteiro para vídeo de transformação de [antes/depois]. Detalhe: 1) Estado inicial, 2) Processo passo a passo, 3) Momentos chave, 4) Revelação final, 5) Dicas de manutenção.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 48,
      titulo: "Roteiro de FAQ",
      descricao: "Para vídeos de perguntas",
      texto: "Crie um roteiro respondendo 5 FAQs sobre [tema]. Inclua: 1) Introdução, 2) Perguntas com exemplos, 3) Mitos desmentidos, 4) Recursos extras, 5) Convite para novas perguntas.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 49,
      titulo: "Roteiro de Desafio",
      descricao: "Para vídeos interativos",
      texto: "Desenvolva um roteiro para desafio de 24h sobre [tema]. Detalhe: 1) Regras, 2) 3 etapas, 3) Reações esperadas, 4) Lições aprendidas, 5) Repasse do desafio.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 50,
      titulo: "Roteiro de Retrospectiva",
      descricao: "Para compilações anuais",
      texto: "Elabore um roteiro para vídeo retrospectiva de [ano/tema]. Inclua: 1) Abertura nostálgica, 2) 5 momentos marcantes, 3) Lições, 4) Agradecimentos, 5) Expectativas futuras.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 51,
      titulo: "Roteiro de Unboxing Misterioso",
      descricao: "Para caixas surpresa",
      texto: "Crie um roteiro para unboxing de caixa misteriosa sobre [tema]. Detalhe: 1) Hipóteses, 2) Reação a cada item, 3) 3 usos criativos, 4) Avaliação geral, 5) Desafio para viewers.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 52,
      titulo: "Roteiro de Viagem",
      descricao: "Para vlogs de turismo",
      texto: "Desenvolva um roteiro para vlog de viagem a [local]. Inclua: 1) Preparativos, 2) 3 atrações principais, 3) Comidas típicas, 4) Dicas logísticas, 5) Momentos espontâneos.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 53,
      titulo: "Roteiro de Resenha",
      descricao: "Para críticas detalhadas",
      texto: "Elabore um roteiro para resenha de [obra]. Detalhe: 1) Contexto, 2) 3 pontos fortes, 3) 2 pontos fracos, 4) Comparações, 5) Recomendação personalizada.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 54,
      titulo: "Roteiro de Mesa Redonda",
      descricao: "Para discussões em grupo",
      texto: "Crie um roteiro para mesa redonda com 4 participantes sobre [tema]. Inclua: 1) Apresentações, 2) 5 tópicos guia, 3) Tempos de fala, 4) Mediação de conflitos, 5) Síntese final.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 55,
      titulo: "Roteiro de Flip Through",
      descricao: "Para vídeos de cadernos",
      texto: "Desenvolva um roteiro para flip through de [tipo de caderno]. Detalhe: 1) Introdução do projeto, 2) 5 páginas destacadas, 3) Técnicas usadas, 4) Materiais preferidos, 5) Dicas para iniciantes.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 56,
      titulo: "Roteiro de Speed Art",
      descricao: "Para vídeos de criação",
      texto: "Elabore um roteiro para speed art de [arte]. Inclua: 1) Conceito inicial, 2) 3 etapas de criação, 3) Ferramentas usadas, 4) Desafios, 5) Versão final em destaque.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 57,
      titulo: "Roteiro de Haul",
      descricao: "Para mostras de compras",
      texto: "Crie um roteiro para haul de [tipo de produto]. Detalhe: 1) Origem dos itens, 2) 5 produtos com avaliações, 3) Surpresas, 4) Arrependimentos, 5) Favorito absoluto.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 58,
      titulo: "Roteiro de Desenho",
      descricao: "Para tutoriais artísticos",
      texto: "Desenvolva um roteiro para tutorial de desenho de [objeto]. Inclua: 1) Materiais, 2) 5 passos fundamentais, 3) Proporções, 4) Sombreamento, 5) Toques finais.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 59,
      titulo: "Roteiro de Unhaul",
      descricao: "Para desapego de itens",
      texto: "Elabore um roteiro para vídeo de unhaul de [categoria]. Detalhe: 1) Critérios de seleção, 2) 5 itens descartados, 3) Motivos, 4) Destino, 5) Lições sobre consumo.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 60,
      titulo: "Roteiro de Experimentos",
      descricao: "Para vídeos científicos",
      texto: "Crie um roteiro para experimento de [área científica]. Inclua: 1) Hipótese, 2) Materiais, 3) 5 passos metodológicos, 4) Resultados esperados, 5) Aplicações práticas.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 61,
      titulo: "Roteiro de Flipbook",
      descricao: "Para animações manuais",
      texto: "Desenvolva um roteiro para criação de flipbook sobre [cena]. Detalhe: 1) Conceito, 2) 5 quadros-chave, 3) Movimento principal, 4) Transições, 5) Revelação final.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 62,
      titulo: "Roteiro de Restauração",
      descricao: "Para renovação de itens",
      texto: "Elabore um roteiro para vídeo de restauração de [objeto]. Inclua: 1) Estado inicial, 2) 3 processos principais, 3) Desafios, 4) Materiais especiais, 5) Comparação final.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 63,
      titulo: "Roteiro de Coleção",
      descricao: "Para mostras temáticas",
      texto: "Crie um roteiro para vídeo mostrando coleção de [itens]. Detalhe: 1) História da coleção, 2) 5 peças especiais, 3) Organização, 4) Curiosidades, 5) Planos futuros.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 64,
      titulo: "Roteiro de DIY",
      descricao: "Para projetos manuais",
      texto: "Desenvolva um roteiro para DIY de [projeto]. Inclua: 1) Inspiração, 2) Lista de materiais, 3) 5 passos essenciais, 4) Variações, 5) Dicas de personalização.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 65,
      titulo: "Roteiro de Room Tour",
      descricao: "Para tours de ambientação",
      texto: "Elabore um roteiro para tour de [espaço]. Detalhe: 1) Conceito geral, 2) 5 zonas com função, 3) Itens favoritos, 4) Dicas de organização, 5) Planos de reforma.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 66,
      titulo: "Roteiro de Desafio Culinário",
      descricao: "Para provas gastronômicas",
      texto: "Crie um roteiro para desafio culinário com [restrição]. Inclua: 1) Regras, 2) 3 pratos a preparar, 3) Critérios de avaliação, 4) Reações, 5) Dicas para replicar.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 67,
      titulo: "Roteiro de Hack",
      descricao: "Para dicas de otimização",
      texto: "Desenvolva um roteiro com 5 hacks para [atividade]. Detalhe: 1) Problema comum, 2) Solução criativa, 3) Materiais alternativos, 4) Passo a passo visual, 5) Benefícios.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 68,
      titulo: "Roteiro de Meta",
      descricao: "Para planos futuros",
      texto: "Elabore um roteiro para vídeo de metas [temporalidade]. Inclua: 1) Contexto atual, 2) 3 objetivos SMART, 3) Planos de ação, 4) Métricas, 5) Motivação final.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 69,
      titulo: "Roteiro de Reflexão",
      descricao: "Para vídeos filosóficos",
      texto: "Crie um roteiro para vídeo reflexivo sobre [questão]. Detalhe: 1) Contextualização, 2) 3 perspectivas, 3) Experiência pessoal, 4) Paradoxos, 5) Perguntas abertas.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 70,
      titulo: "Roteiro de Reconstituição",
      descricao: "Para fatos históricos",
      texto: "Desenvolva um roteiro para reconstituição de [evento histórico]. Inclua: 1) Contexto, 2) 3 momentos cruciais, 3) Falas emblemáticas, 4) Figurinos, 5) Legado atual.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 71,
      titulo: "Roteiro de Descompactação",
      descricao: "Para setups/unboxing",
      texto: "Elabore um roteiro para vídeo de setup de [equipamento]. Detalhe: 1) Expectativas, 2) 5 componentes principais, 3) Processo de montagem, 4) Dicas de configuração, 5) Primeiros testes.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 72,
      titulo: "Roteiro de Mistério",
      descricao: "Para histórias intrigantes",
      texto: "Crie um roteiro para vídeo de mistério sobre [caso]. Inclua: 1) Apresentação do enigma, 2) 3 teorias, 3) Evidências, 4) Contradições, 5) Possível solução.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 73,
      titulo: "Roteiro de Transição de Carreira",
      descricao: "Para relatos profissionais",
      texto: "Desenvolva um roteiro para vídeo sobre transição de [área A] para [área B]. Detalhe: 1) Motivação, 2) 3 desafios, 3) Habilidades transferíveis, 4) Momentos decisivos, 5) Conselhos.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 74,
      titulo: "Roteiro de Superação",
      descricao: "Para jornadas pessoais",
      texto: "Elabore um roteiro para vídeo de superação de [desafio]. Inclua: 1) Contexto difícil, 2) 3 etapas da jornada, 3) Apoios, 4) Lições, 5) Mensagem motivacional.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 75,
      titulo: "Roteiro de Microdocumentário",
      descricao: "Para histórias curtas",
      texto: "Crie um roteiro de 5min sobre [personagem local]. Detalhe: 1) Contexto, 2) 3 contribuições, 3) Entrevista breve, 4) Impacto, 5) Chamada para conhecer.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 76,
      titulo: "Roteiro de Revisão",
      descricao: "Para análise de produtos",
      texto: "Desenvolva um roteiro para revisão aprofundada de [produto]. Inclua: 1) Unboxing inicial, 2) 5 critérios de avaliação, 3) Testes realizados, 4) Prós/Contras, 5) Conclusão segmentada.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 77,
      titulo: "Roteiro de Escrita Criativa",
      descricao: "Para processos literários",
      texto: "Elabore um roteiro sobre criação de [obra literária]. Detalhe: 1) Inspiração, 2) 3 técnicas usadas, 3) Desafios, 4) Personagens principais, 5) Conselhos para escritores.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 78,
      titulo: "Roteiro de Rotina",
      descricao: "Para day in the life",
      texto: "Crie um roteiro para vídeo de rotina de [profissão]. Inclua: 1) Preparação, 2) 5 momentos típicos, 3) Surpresas, 4) Reflexão final, 5) Variações sazonais.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 79,
      titulo: "Roteiro de Exploração",
      descricao: "Para lugares abandonados",
      texto: "Desenvolva um roteiro para exploração urbana em [local]. Detalhe: 1) Histórico, 2) 3 áreas de interesse, 3) Sensações, 4) Precauções, 5) Reflexão preservacionista.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 80,
      titulo: "Roteiro de Debate Polêmico",
      descricao: "Para temas divisivos",
      texto: "Elabore um roteiro para debate sobre [tema polêmico]. Inclua: 1) Regras de convivência, 2) 3 argumentos por lado, 3) Dados estatísticos, 4) Mediação, 5) Conclusão respeitosa.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 81,
      titulo: "Roteiro de Retorno",
      descricao: "Para começar de novo",
      texto: "Crie um roteiro para vídeo de retorno após [hiato]. Detalhe: 1) Motivos da pausa, 2) 3 aprendizados, 3) Novas direções, 4) Expectativas, 5) Agradecimentos.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 82,
      titulo: "Roteiro de Homenagem",
      descricao: "Para tributos emocionais",
      texto: "Desenvolva um roteiro para homenagem a [pessoa/obra]. Inclua: 1) Contexto, 2) 3 contribuições memoráveis, 3) Impacto pessoal, 4) Legado, 5) Chamada para memórias.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 83,
      titulo: "Roteiro de Desafio de 30 Dias",
      descricao: "Para transformações",
      texto: "Elabore um roteiro para desafio de 30 dias de [hábito]. Detalhe: 1) Metas, 2) 3 fases, 3) Métricas diárias, 4) Dificuldades, 5) Resultados finais.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 84,
      titulo: "Roteiro de Investigação",
      descricao: "Para reportagens especiais",
      texto: "Crie um roteiro para investigação sobre [caso]. Inclua: 1) Pergunta central, 2) 3 fontes consultadas, 3) Evidências, 4) Contradições, 5) Conclusões parciais.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 85,
      titulo: "Roteiro de Premiação",
      descricao: "Para cerimônias",
      texto: "Desenvolva um roteiro para premiação de [categoria]. Detalhe: 1) Abertura, 2) 3 categorias com finalistas, 3) Anúncio de vencedores, 4) Discursos, 5) Encerramento.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 86,
      titulo: "Roteiro de Conserto",
      descricao: "Para reparos técnicos",
      texto: "Elabore um roteiro para vídeo de conserto de [equipamento]. Inclua: 1) Diagnóstico, 2) 5 passos do reparo, 3) Ferramentas necessárias, 4) Alternativas, 5) Teste final.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 87,
      titulo: "Roteiro de Reenactment",
      descricao: "Para recriações históricas",
      texto: "Crie um roteiro para recriação de [evento]. Detalhe: 1) Contexto, 2) 3 cenas essenciais, 3) Figurinos, 4) Falas originais, 5) Licenças artísticas.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 88,
      titulo: "Roteiro de Progresso",
      descricao: "Para evolução de projetos",
      texto: "Desenvolva um roteiro para vídeo de progresso de [projeto]. Inclua: 1) Estado inicial, 2) 3 melhorias, 3) Obstáculos, 4) Aprendizados, 5) Próximos passos.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 89,
      titulo: "Roteiro de Unboxing Coletivo",
      descricao: "Para vários produtos",
      texto: "Elabore um roteiro para unboxing de 5 [itens similares]. Detalhe: 1) Critério de seleção, 2) Comparação lado a lado, 3) Surpresas, 4) Ranking, 5) Veredito final.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 90,
      titulo: "Roteiro de Aula",
      descricao: "Para conteúdo educacional",
      texto: "Crie um roteiro para aula de [disciplina]. Inclua: 1) Objetivos, 2) 3 conceitos-chave, 3) Exemplos práticos, 4) Exercícios, 5) Material complementar.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 91,
      titulo: "Roteiro de Revisão Mensal",
      descricao: "Para balanços periódicos",
      texto: "Desenvolva um roteiro para revisão mensal de [área]. Detalhe: 1) Metas iniciais, 2) 3 conquistas, 3) Lições, 4) Dificuldades, 5) Ajustes para próximo mês.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 92,
      titulo: "Roteiro de Demonstração",
      descricao: "Para funcionalidades",
      texto: "Elabore um roteiro para demonstração de [software/ferramenta]. Inclua: 1) Propósito, 2) 5 funções principais, 3) Caso prático, 4) Integrações, 5) Comparativo.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 93,
      titulo: "Roteiro de Maratona",
      descricao: "Para desafios de consumo",
      texto: "Crie um roteiro para maratona de [série/filmes]. Detalhe: 1) Critério de seleção, 2) 3 destaques, 3) Reações, 4) Rankings, 5) Lições da experiência.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 94,
      titulo: "Roteiro de Transição Profissional",
      descricao: "Para mudanças de carreira",
      texto: "Desenvolva um roteiro sobre transição de [área] para [área]. Inclua: 1) Motivação, 2) 3 passos preparatórios, 3) Transferência de habilidades, 4) Desafios, 5) Conselhos.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 95,
      titulo: "Roteiro de Análise de Tendências",
      descricao: "Para relatórios setoriais",
      texto: "Elabore um roteiro para análise de tendências em [mercado]. Detalhe: 1) Contexto atual, 2) 3 tendências emergentes, 3) Casos de estudo, 4) Projeções, 5) Recomendações.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 96,
      titulo: "Roteiro de Workshop",
      descricao: "Para eventos educativos",
      texto: "Crie um roteiro para workshop de 2h sobre [tema]. Inclua: 1) Objetivos, 2) 4 atividades práticas, 3) Materiais necessários, 4) Dinâmicas, 5) Avaliação.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 97,
      titulo: "Roteiro de Compilação",
      descricao: "Para melhores momentos",
      texto: "Desenvolva um roteiro para compilação de [evento/período]. Detalhe: 1) Contexto, 2) 5 momentos marcantes, 3) Transições criativas, 4) Narração, 5) Encerramento.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 98,
      titulo: "Roteiro de Relato Pessoal",
      descricao: "Para experiências íntimas",
      texto: "Elabore um roteiro para relato sobre [experiência]. Inclua: 1) Contexto, 2) 3 fases emocionais, 3) Virada, 4) Impacto atual, 5) Mensagem final.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 99,
      titulo: "Roteiro de Guia",
      descricao: "Para tutoriais completos",
      texto: "Crie um roteiro para guia definitivo sobre [tema]. Detalhe: 1) Introdução, 2) 5 seções essenciais, 3) Exemplos práticos, 4) Ferramentas recomendadas, 5) Recursos extras.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 100,
      titulo: "Roteiro de Sessão de Perguntas",
      descricao: "Para Q&A interativo",
      texto: "Desenvolva um roteiro para sessão de perguntas sobre [tema]. Inclua: 1) Regras, 2) 5 perguntas frequentes, 3) Tempo para respostas, 4) Perguntas da audiência, 5) Encerramento.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 101,
      titulo: "Roteiro de Análise de Dados",
      descricao: "Para relatórios visuais",
      texto: "Elabore um roteiro para análise de dados sobre [dataset]. Detalhe: 1) Origem dos dados, 2) 3 insights principais, 3) Visualizações, 4) Limitações, 5) Recomendações.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 102,
      titulo: "Roteiro de Microficção",
      descricao: "Para histórias ultra-curtas",
      texto: "Crie um roteiro para microficção de 1min sobre [tema]. Inclua: 1) Ambientação sucinta, 2) Personagem principal, 3) Conflito mínimo, 4) Virada, 5) Final aberto.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 103,
      titulo: "Roteiro de Reação a Notícias",
      descricao: "Para comentários atualizados",
      texto: "Desenvolva um roteiro para reação a [notícia recente]. Detalhe: 1) Contexto, 2) 3 pontos de análise, 3) Opinião fundamentada, 4) Implicações, 5) Fontes consultadas.",
      categoria: "roteiros",
      favorito: false
    },
    {
      id: 104,
      titulo: "Roteiro de Tour Virtual",
      descricao: "Para passeios imersivos",
      texto: "Elabore um roteiro para tour virtual em [local]. Inclua: 1) Introdução, 2) 5 pontos de interesse, 3) Curiosidades, 4) Navegação, 5) Encerramento convidativo.",
      categoria: "roteiros",
      favorito: false
    },
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
    },
    {
      id: 11,
      titulo: "Análise de UX",
      descricao: "Avaliação de experiência do usuário",
      texto: "Atue como especialista em UX. Analise a [página/aplicação] [descreva ou cole link] identificando: 1) 3 pontos fortes na experiência do usuário, 2) 3 problemas principais, 3) Sugestões de melhoria com exemplos concretos, 4) Recomendações para testes A/B. Foque na jornada do usuário [descreva persona se aplicável].",
      categoria: "design",
      favorito: false
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
  design: [

  {
    id: 1,
    titulo: "Moodboard Digital",
    descricao: "Criação de moodboards visuais",
    texto: "Gere um moodboard digital para o projeto [nome] com base nas seguintes palavras-chave: [palavras]. Inclua: 1) Paleta de cores sugerida, 2) Referências de texturas, 3) Estilos tipográficos, 4) Elementos de composição, 5) Exemplos de peças existentes que inspirem a direção criativa.",
    categoria: "design",
    favorito: false
  },
  {
    id: 2,
    titulo: "Wireframe Responsivo",
    descricao: "Estrutura básica para interfaces",
    texto: "Crie wireframes detalhados para um [tipo de site/app] com foco em [objetivo principal]. Inclua: 1) Versão desktop, 2) Versão mobile, 3) Fluxo de navegação principal, 4) Elementos UI essenciais, 5) Anotações sobre comportamento responsivo. Use padrões de design modernos.",
    categoria: "design",
    favorito: false
  },
  {
    id: 3,
    titulo: "Microinterações",
    descricao: "Design de pequenas animações",
    texto: "Proponha 5 microinterações inovadoras para um [tipo de aplicativo] que melhorem a UX nas seguintes situações: 1) Carregamento de conteúdo, 2) Confirmação de ação, 3) Erros, 4) Transições entre telas, 5) Feedback de toque. Descreva a animação e seu propósito.",
    categoria: "design",
    favorito: false
  },
  {
    id: 4,
    titulo: "Redesign de Logo",
    descricao: "Modernização de identidade visual",
    texto: "Sugira 3 direções criativas para redesenhar o logo da marca [nome] mantendo seu reconhecimento. Para cada versão: 1) Explique o conceito, 2) Mostre variações de cor, 3) Aplique em mockups, 4) Descreva como evolui a identidade atual, 5) Liste aplicações em diferentes mídias.",
    categoria: "design",
    favorito: false
  },
  {
    id: 5,
    titulo: "Teste de Usabilidade",
    descricao: "Roteiro para avaliação de UX",
    texto: "Elabore um plano de teste de usabilidade para [produto digital] com: 1) Perfil dos participantes, 2) Tarefas a serem executadas, 3) Métricas a avaliar, 4) Perguntas pós-teste, 5) Formato do relatório final. Inclua cenários reais de uso.",
    categoria: "design",
    favorito: false
  },
  {
    id: 7,
    titulo: "Design de Ícones",
    descricao: "Criação de conjuntos iconográficos",
    texto: "Desenvolva um conjunto de 10 ícones para [contexto de uso] com: 1) Estilo visual coerente, 2) Variações de tamanho, 3) Versões para estados diferentes (ativo/inativo), 4) Guia de exportação, 5) Princípios de acessibilidade aplicados. Use metáforas visuais claras.",
    categoria: "design",
    favorito: false
  },
  {
    id: 8,
    titulo: "Landing Page High-Conversion",
    descricao: "Design focado em conversões",
    texto: "Projete a estrutura ideal para uma landing page que converte em [objetivo]. Inclua: 1) Hierarquia visual, 2) Elementos persuasivos, 3) Chamadas para ação estratégicas, 4) Testimonials integrados, 5) Formulário otimizado, 6) Indicadores de confiança. Justifique cada decisão.",
    categoria: "design",
    favorito: false
  },
  {
    id: 9,
    titulo: "Sistema de Design Atomic",
    descricao: "Metodologia para design systems",
    texto: "Crie um framework de Atomic Design para [produto] contendo: 1) Átomos (cores, tipografia), 2) Moléculas (botões, inputs), 3) Organismos (headers, cards), 4) Templates, 5) Páginas. Especifique regras de combinação e documentação.",
    categoria: "design",
    favorito: false
  },
  {
    id: 10,
    titulo: "Motion Branding",
    descricao: "Identidade em movimento",
    texto: "Desenvolva um conceito de motion branding para [marca] incluindo: 1) Animação do logo, 2) Transições características, 3) Estilo de movimento (suave/dinâmico), 4) Aplicações em vídeo, 5) Diretrizes de duração e easing. Mostre storyboards e referências.",
    categoria: "design",
    favorito: false
  },
  {
    id: 12,
    titulo: "Design de Embalagem",
    descricao: "Criação de packaging",
    texto: "Proponha 3 conceitos de embalagem para [produto] considerando: 1) Sustentabilidade, 2) Experiência de desempacotar, 3) Informações regulatórias, 4) Diferenciação em prateleira, 5) Versões para diferentes tamanhos. Inclua mockups 3D.",
    categoria: "design",
    favorito: false
  },
  {
    id: 13,
    titulo: "Dashboard Data-Viz",
    descricao: "Visualização de dados complexos",
    texto: "Projete um dashboard para [tipo de dados] com: 1) Layout informativo, 2) Tipos de gráficos adequados, 3) Hierarquia visual, 4) Filtros interativos, 5) Estados vazios/erro, 6) Versão mobile. Priorize clareza e insights acionáveis.",
    categoria: "design",
    favorito: false
  },
  {
    id: 14,
    titulo: "Design de Persona",
    descricao: "Representação visual de usuários",
    texto: "Crie 3 personas visuais para [produto/serviço] incluindo: 1) Ilustração estilizada, 2) Atributos demográficos, 3) Necessidades principais, 4) Comportamentos online, 5) Frases típicas, 6) Objetivos e frustrações. Use cores e elementos que representem cada perfil.",
    categoria: "design",
    favorito: false
  },
  {
    id: 15,
    titulo: "UI para Voice Apps",
    descricao: "Interfaces para assistentes virtuais",
    texto: "Desenvolva diretrizes de UI para um aplicativo de voz em [domínio] considerando: 1) Feedback auditivo, 2) Estados de escuta, 3) Mensagens de erro, 4) Personalização vocal, 5) Integração com interface visual quando aplicável. Mostre fluxos de conversação.",
    categoria: "design",
    favorito: false
  },
  {
    id: 16,
    titulo: "Design de Newsletter",
    descricao: "Layouts para email marketing",
    texto: "Crie um template de newsletter para [segmento] com: 1) Estrutura responsiva, 2) Hierarquia de conteúdo, 3) Botões CTAs otimizados, 4) Versão dark mode, 5) Compatibilidade com clientes de email. Inclua versão HTML e imagens.",
    categoria: "design",
    favorito: false
  },
  {
    id: 17,
    titulo: "Onboarding Digital",
    descricao: "Fluxos de primeira experiência",
    texto: "Projete um fluxo de onboarding para [app] que: 1) Reduza atrito inicial, 2) Demonstre valor rápido, 3) Personalize com base no tipo de usuário, 4) Inclua progresso visível, 5) Ofereça ajuda contextual. Mostre telas e transições.",
    categoria: "design",
    favorito: false
  },
  {
    id: 18,
    titulo: "Design para Realidade Aumentada",
    descricao: "Interfaces AR",
    texto: "Desenvolva princípios de design para uma experiência AR em [contexto] considerando: 1) Integração com ambiente real, 2) Interações gestuais, 3) Posicionamento de UI 3D, 4) Feedback visual, 5) Acessibilidade em movimento. Inclua exemplos.",
    categoria: "design",
    favorito: false
  },
  {
    id: 19,
    titulo: "Design de Infográfico",
    descricao: "Visualização de informação",
    texto: "Transforme os dados sobre [tópico] em um infográfico atraente com: 1) Narrativa visual clara, 2) Hierarquia de informação, 3) Elementos gráficos explicativos, 4) Balanço entre texto e visual, 5) Versões para web e impresso.",
    categoria: "design",
    favorito: false
  },
  {
    id: 21,
    titulo: "Redesign de Formulários",
    descricao: "Otimização de inputs",
    texto: "Reimagine o formulário de [finalidade] aplicando: 1) Agrupamento lógico, 2) Labels flutuantes, 3) Validação em tempo real, 4) Progresso visível, 5) Exemplos contextuais, 6) Redução de campos. Mostre antes/depois.",
    categoria: "design",
    favorito: false
  },
  {
    id: 22,
    titulo: "Design de Cartão de Visita",
    descricao: "Identidade em formato físico",
    texto: "Crie 3 conceitos de cartão de visita para [profissão/empresa] com: 1) Informações essenciais, 2) Elementos de marca, 3) Opções de acabamento, 4) Versão digital scannable, 5) Alinhamento com identidade visual existente.",
    categoria: "design",
    favorito: false
  },
  {
    id: 23,
    titulo: "UI para Smartwatch",
    descricao: "Design para telas pequenas",
    texto: "Projete a interface de um app para smartwatch que [função principal] considerando: 1) Gestos principais, 2) Informação glanceable, 3) Notificações, 4) Integração com smartphone, 5) Modo sempre visível. Mostre fluxos principais.",
    categoria: "design",
    favorito: false
  },
  {
    id: 24,
    titulo: "Design de Merchandising",
    descricao: "Produtos de marca",
    texto: "Desenvolva uma linha de merchandising para [marca] incluindo: 1) 5 itens coerentes, 2) Aplicação da identidade visual, 3) Materiais sustentáveis, 4) Versões premium e acessíveis, 5) Embalagem apresentável. Mostre em mockups 3D.",
    categoria: "design",
    favorito: false
  },
  {
    id: 25,
    titulo: "Microcopy Eficaz",
    descricao: "Textos de interface",
    texto: "Escreva microcopy para um [tipo de aplicativo] que: 1) Guie o usuário naturalmente, 2) Reduza ansiedade em erros, 3) Use tom de voz adequado, 4) Seja inclusivo, 5) Otimize conversões. Forneça alternativas para diferentes cenários.",
    categoria: "design",
    favorito: false
  },
  {
    id: 26,
    titulo: "Design de Capa de Livro",
    descricao: "Atração visual para publicações",
    texto: "Crie 3 conceitos de capa para o livro [título/gênero] com: 1) Tipografia expressiva, 2) Elementos visuais simbólicos, 3) Versões para ebook e físico, 4) Adequação ao público-alvo, 5) Destaque em thumbnails. Justifique as escolhas.",
    categoria: "design",
    favorito: false
  },
  {
    id: 27,
    titulo: "UI para Kiosques",
    descricao: "Interfaces de autoatendimento",
    texto: "Projete a interface de um kiosque para [finalidade] considerando: 1) Toque preciso, 2) Visibilidade em ambientes públicos, 3) Fluxos simplificados, 4) Acessibilidade, 5) Integração com dispositivos pessoais. Mostre telas principais.",
    categoria: "design",
    favorito: false
  },
  {
    id: 28,
    titulo: "Design de Exposição",
    descricao: "Ambientes físicos imersivos",
    texto: "Desenvolva um conceito de exposição sobre [tema] com: 1) Fluxo de visita, 2) Elementos interativos, 3) Sinalização, 4) Iluminação, 5) Integração digital-física. Inclua plantas e visualizações 3D.",
    categoria: "design",
    favorito: false
  },
  {
    id: 29,
    titulo: "Gamificação em UI",
    descricao: "Elementos lúdicos em interfaces",
    texto: "Proponha mecânicas de gamificação para um app de [tipo] incluindo: 1) Sistema de progresso, 2) Recompensas visuais, 3) Feedback positivo, 4) Elementos de competição colaborativa, 5) Personalização de avatar. Mostre componentes UI.",
    categoria: "design",
    favorito: false
  },
  {
    id: 30,
    titulo: "Design de Filtros AR",
    descricao: "Efeitos para redes sociais",
    texto: "Crie conceitos para 5 filtros AR no estilo [estética] com: 1) Temática coerente, 2) Interatividade facial, 3) Elementos 3D/2D, 4) Personalização, 5) Marcas d'água discretas. Descreva a experiência de uso.",
    categoria: "design",
    favorito: false
  },
  {
    id: 31,
    titulo: "UI para Carros",
    descricao: "Interfaces para veículos",
    texto: "Projete a interface de um sistema de infoentretenimento considerando: 1) Distração mínima, 2) Controle por voz/gestos, 3) Integração com apps mobile, 4) Personalização, 5) Modo noturno. Mostre fluxos principais.",
    categoria: "design",
    favorito: false
  },
  {
    id: 32,
    titulo: "Design de Selo",
    descricao: "Emblemas e certificações visuais",
    texto: "Crie um selo de qualidade/aprovação para [indústria] com: 1) Significado claro, 2) Escalabilidade, 3) Versões coloridas e monocromáticas, 4) Diretrizes de aplicação, 5) Elementos anti-fraude. Mostre em contextos reais.",
    categoria: "design",
    favorito: false
  },
  {
    id: 33,
    titulo: "Naming Visual",
    descricao: "Representação gráfica de nomes",
    texto: "Desenvolva 3 conceitos visuais para o nome [nome] como identidade pessoal/marca, usando: 1) Tipografia customizada, 2) Monograma, 3) Símbolo abstrato, 4) Combinações cor+forma, 5) Aplicações em diferentes mídias.",
    categoria: "design",
    favorito: false
  },
  {
    id: 34,
    titulo: "Design para Idosos",
    descricao: "UX para terceira idade",
    texto: "Proponha melhorias de UX para um app de [tipo] focado em usuários idosos, abordando: 1) Tamanho de toque, 2) Contraste visual, 3) Simplificação de fluxos, 4) Feedback claro, 5) Suporte contextual. Mostre telas redesenhadas.",
    categoria: "design",
    favorito: false
  },
  {
    id: 35,
    titulo: "Sinalização Wayfinding",
    descricao: "Navegação em espaços físicos",
    texto: "Desenvolva um sistema de sinalização para [local] incluindo: 1) Tipografia legível à distância, 2) Ícones universais, 3) Hierarquia informacional, 4) Materiais duráveis, 5) Integração com mapas digitais. Mostre planta com posicionamento.",
    categoria: "design",
    favorito: false
  },
  {
    id: 36,
    titulo: "Design de Etiqueta",
    descricao: "Informação de produto físico",
    texto: "Crie o design de etiqueta para [produto] contendo: 1) Informações obrigatórias, 2) Hierarquia visual, 3) Códigos de barras/QR, 4) Variantes de tamanho, 5) Elementos de branding. Considere regulamentações do setor.",
    categoria: "design",
    favorito: false
  },
  {
    id: 37,
    titulo: "UI para TV",
    descricao: "Design para telas grandes",
    texto: "Projete a interface de um app de streaming para TV com: 1) Navegação por controle remoto, 2) Grade de conteúdo, 3) Player de vídeo, 4) Busca por voz, 5) Perfis de usuário. Foque em legibilidade à distância.",
    categoria: "design",
    favorito: false
  },
  {
    id: 38,
    titulo: "Design de Timbre",
    descricao: "Identidade para correspondência",
    texto: "Desenvolva um timbre profissional para [empresa/instituição] incluindo: 1) Layout para papel carta, 2) Versão digital, 3) Informações essenciais, 4) Integração com logo, 5) Variantes para diferentes departamentos.",
    categoria: "design",
    favorito: false
  },
  {
    id: 39,
    titulo: "UI para Saúde",
    descricao: "Design para aplicativos médicos",
    texto: "Projete telas para um app de saúde que gerencia [condição] considerando: 1) Clareza de informações, 2) Emergências, 3) Privacidade de dados, 4) Acompanhamento de progresso, 5) Comunicação com profissionais. Use cores apropriadas.",
    categoria: "design",
    favorito: false
  },
  {
    id: 40,
    titulo: "Design de Filtro Fotográfico",
    descricao: "Presets de edição visual",
    texto: "Crie 5 filtros fotográficos com estilos distintos para [tipo de conteúdo], definindo: 1) Ajustes de cor, 2) Tratamento de pele, 3) Efeitos de luz, 4) Opções personalizáveis, 5) Aplicação em diferentes cenários. Mostre antes/depois.",
    categoria: "design",
    favorito: false
  },
  {
    id: 41,
    titulo: "UI para Educação",
    descricao: "Interfaces para e-learning",
    texto: "Desenvolva o design de uma plataforma de ensino sobre [matéria] com: 1) Progresso visual, 2) Interatividade em lições, 3) Gamificação, 4) Acessibilidade, 5) Ferramentas de colaboração. Mostre fluxo completo.",
    categoria: "design",
    favorito: false
  },
  {
    id: 42,
    titulo: "Design de Adesivo",
    descricao: "Vinhetas visuais adesiváveis",
    texto: "Crie uma coleção de 10 adesivos no estilo [estilo] para [público-alvo] com: 1) Temas variados, 2) Frases impactantes, 3) Formas criativas, 4) Aplicação em diferentes superfícies, 5) Kit para redes sociais.",
    categoria: "design",
    favorito: false
  },
  {
    id: 43,
    titulo: "UI para IoT",
    descricao: "Interfaces para dispositivos conectados",
    texto: "Projete o painel de controle de um dispositivo IoT de [função] com: 1) Status claro, 2) Controles intuitivos, 3) Alertas, 4) Integração com ecossistema, 5) Modo offline. Mostre app + interface física se aplicável.",
    categoria: "design",
    favorito: false
  },
  {
    id: 44,
    titulo: "Design de Capa de Disco",
    descricao: "Identidade visual para álbuns",
    texto: "Desenvolva 3 conceitos de capa para o álbum [nome/gênero] refletindo: 1) Temática musical, 2) Estética do artista, 3) Versões física/digital, 4) Elementos de colecionador, 5) Continuidade com singles anteriores.",
    categoria: "design",
    favorito: false
  },
  {
    id: 45,
    titulo: "UI para Finanças",
    descricao: "Design para apps bancários",
    texto: "Redesenhe a experiência de um app bancário focando em: 1) Segurança visível, 2) Operações frequentes, 3) Visualização de gastos, 4) Atendimento digital, 5) Educação financeira. Otimize fluxos complexos.",
    categoria: "design",
    favorito: false
  },
  {
    id: 46,
    titulo: "Design de Uniforme",
    descricao: "Identidade vestível",
    texto: "Crie uma linha de uniformes para [empresa/equipe] incluindo: 1) Variantes por função, 2) Aplicação de marca, 3) Tecidos adequados, 4) Personalização individual, 5) Itens complementares (jaquetas, acessórios).",
    categoria: "design",
    favorito: false
  },
  {
    id: 47,
    titulo: "UI para Eventos",
    descricao: "Aplicativos para conferências",
    texto: "Projete o app para o evento [tipo] com: 1) Agenda personalizável, 2) Mapa interativo, 3) Networking facilitado, 4) Notificações relevantes, 5) Materiais pós-evento. Destaque features únicas.",
    categoria: "design",
    favorito: false
  },
  {
    id: 48,
    titulo: "Design de Emoji",
    descricao: "Criação de ícones emocionais",
    texto: "Desenvolva um conjunto de 15 emojis temáticos sobre [tema] com: 1) Expressividade clara, 2) Estilo consistente, 3) Variações de skin tone, 4) Detalhes em alta resolução, 5) Versões estáticas e animadas.",
    categoria: "design",
    favorito: false
  },
  {
    id: 49,
    titulo: "UI para Realidade Virtual",
    descricao: "Interfaces imersivas",
    texto: "Projete a UI para uma experiência VR de [tipo] considerando: 1) Comfort visual, 2) Navegação 3D, 3) Interação natural, 4) Feedback imediato, 5) Acessibilidade em movimento. Mostre elementos flutuantes.",
    categoria: "design",
    favorito: false
  },
  {
    id: 50,
    titulo: "Design de Tatuagem",
    descricao: "Arte corporal personalizada",
    texto: "Crie 3 conceitos de tatuagem baseados em [elementos inspiradores] para [parte do corpo] com: 1) Significado pessoal, 2) Estilo definido, 3) Escala adequada, 4) Versões simplificadas, 5) Longevidade do design.",
    categoria: "design",
    favorito: false
  },
  {
    id: 51,
    titulo: "UI para Restaurantes",
    descricao: "Experiência digital gastronômica",
    texto: "Desenvolva o design de um app para [tipo de restaurante] com: 1) Menu visual, 2) Reservas integradas, 3) Recomendações personalizadas, 4) Pagamento rápido, 5) Fidelidade digital. Mostre jornada completa.",
    categoria: "design",
    favorito: false
  },
  {
    id: 52,
    titulo: "Design de Papelaria",
    descricao: "Kits de identidade corporativa",
    texto: "Crie uma linha de papelaria para [empresa] incluindo: 1) Cartão de visita, 2) Papel carta, 3) Envelope, 4) Nota fiscal, 5) Apresentação digital. Mantenha consistência de marca.",
    categoria: "design",
    favorito: false
  },
  {
    id: 53,
    titulo: "UI para Moda",
    descricao: "E-commerce de vestuário",
    texto: "Redesenhe a experiência de um app de moda focando em: 1) Descoberta visual, 2) Fitting virtual, 3) Combinações, 4) Reviews com fotos reais, 5) Sustentabilidade dos produtos. Inove na navegação.",
    categoria: "design",
    favorito: false
  },
  {
    id: 54,
    titulo: "Design de Selo Postal",
    descricao: "Arte para correspondência",
    texto: "Proponha um design de selo postal comemorativo sobre [tema] considerando: 1) Restrições técnicas, 2) Elementos nacionais, 3) Valor facial visível, 4) Versões colecionáveis, 5) Série temática.",
    categoria: "design",
    favorito: false
  },
  {
    id: 55,
    titulo: "UI para Música",
    descricao: "Players e descoberta musical",
    texto: "Projete um player de música inovador com: 1) Visualização de letras, 2) Modos de escuta, 3) Descoberta por humor, 4) Listas colaborativas, 5) Integração com artistas. Reinvente elementos clássicos.",
    categoria: "design",
    favorito: false
  },
  {
    id: 56,
    titulo: "Design de Quebra-Cabeça",
    descricao: "Jogos físicos ilustrados",
    texto: "Crie a arte para um quebra-cabeça de [número] peças sobre [tema] com: 1) Ilustração detalhada, 2) Dificuldade balanceada, 3) Elementos de borda identificáveis, 4) Referência visual, 5) Embalagem atraente.",
    categoria: "design",
    favorito: false
  },
  {
    id: 57,
    titulo: "UI para Beleza",
    descricao: "Tecnologia para cosméticos",
    texto: "Desenvolva a interface de um app de beleza que: 1) Teste produtos virtualmente, 2) Recomende rotinas, 3) Acompanhe progresso, 4) Conecte com profissionais, 5) Eduque sobre ingredientes. Mostre AR integrado.",
    categoria: "design",
    favorito: false
  },
  {
    id: 58,
    titulo: "Design de Queima de Arquivo",
    descricao: "Identidade para eventos efêmeros",
    texto: "Crie a identidade visual para o evento [nome] com duração de [tempo] incluindo: 1) Logo temporário, 2) Materiais descartáveis, 3) Sinalização removível, 4) Documentação pós-evento, 5) Elementos de legacy.",
    categoria: "design",
    favorito: false
  },
  {
    id: 59,
    titulo: "UI para Pets",
    descricao: "Experiência para tutores",
    texto: "Projete um app completo para tutores de [animal] com: 1) Saúde monitorada, 2) Lembretes, 3) Rede social pet, 4) Encontros, 5) Emergências veterinárias. Use tom de voz adequado.",
    categoria: "design",
    favorito: false
  },
  {
    id: 60,
    titulo: "Design de Queijaria",
    descricao: "Embalagem para alimentos premium",
    texto: "Desenvolva a identidade visual para uma linha de queijos artesanais com: 1) Tipografia rústica, 2) Elementos regionais, 3) Informações regulatórias, 4) Variantes por tipo, 5) Experiência de desembalar.",
    categoria: "design",
    favorito: false
  },
  {
    id: 61,
    titulo: "UI para Agricultura",
    descricao: "Tecnologia para o campo",
    texto: "Crie a interface de um app agrícola que auxilie em: 1) Monitoramento de plantio, 2) Controle de pragas, 3) Previsão climática, 4) Gestão de recursos, 5) Conexão com especialistas. Considere uso offline.",
    categoria: "design",
    favorito: false
  },
  {
    id: 62,
    titulo: "Design de Jogo de Tabuleiro",
    descricao: "Arte para boardgames",
    texto: "Desenvolva os componentes visuais para um jogo sobre [tema] incluindo: 1) Tabuleiro, 2) Cartas, 3) Peças, 4) Embalagem, 5) Manual ilustrado. Mantenha coerência temática.",
    categoria: "design",
    favorito: false
  },
  {
    id: 63,
    titulo: "UI para Seguros",
    descricao: "Experiência digital em seguros",
    texto: "Redesenhe o app de uma seguradora focando em: 1) Simulação intuitiva, 2) Gestão de apólices, 3) Sinistros digitais, 4) Prevenção de riscos, 5) Atendimento humanizado digital.",
    categoria: "design",
    favorito: false
  },
  {
    id: 64,
    titulo: "Design de Vinil",
    descricao: "Arte para discos de vinil",
    texto: "Crie a arte completa para um lançamento em vinil incluindo: 1) Capa frontal/traseira, 2) Encarte, 3) Rótulo central, 4) Variantes especiais, 5) Elementos de colecionador. Considere formato circular.",
    categoria: "design",
    favorito: false
  },
  {
    id: 65,
    titulo: "UI para Bibliotecas",
    descricao: "Digitalização de acervos",
    texto: "Projete a interface de um app de biblioteca com: 1) Busca avançada, 2) Reservas, 3) Recomendações, 4) Clubes de leitura, 5) Integração com e-readers. Valorize descoberta literária.",
    categoria: "design",
    favorito: false
  },
  {
    id: 66,
    titulo: "Design de Tarô",
    descricao: "Baralhos ilustrados",
    texto: "Desenvolva um conjunto de 5 cartas de tarô no estilo [estilo] com: 1) Simbolismo tradicional, 2) Interpretação visual, 3) Cores significativas, 4) Reversos diferenciados, 5) Embalagem temática.",
    categoria: "design",
    favorito: false
  },
  {
    id: 67,
    titulo: "UI para Recrutamento",
    descricao: "Experiência candidato-empresa",
    texto: "Crie o design de uma plataforma de recrutamento com: 1) Perfil visual, 2) Match inteligente, 3) Processos transparentes, 4) Feedback construtivo, 5) Preparação para entrevistas. Humanize a jornada.",
    categoria: "design",
    favorito: false
  },
  {
    id: 68,
    titulo: "Design de Caligrafia",
    descricao: "Tipografia manuscrita",
    texto: "Desenvolva um alfabeto caligráfico no estilo [estilo] com: 1) Maiúsculas/minúsculas, 2) Números, 3) Pontuação, 4) Ligaturas, 5) Variações contextuais. Inclua guia de aplicação.",
    categoria: "design",
    favorito: false
  },
  {
    id: 69,
    titulo: "UI para Cidades Inteligentes",
    descricao: "Serviços urbanos digitais",
    texto: "Projete o app de uma smart city integrando: 1) Transporte, 2) Eventos locais, 3) Serviços públicos, 4) Comércio, 5) Participação cidadã. Priorize inclusão digital.",
    categoria: "design",
    favorito: false
  },
  {
    id: 70,
    titulo: "Design de Azulejaria",
    descricao: "Padrões para revestimento",
    texto: "Crie uma coleção de padrões para azulejos com: 1) Motivos históricos modernizados, 2) Cores coordenadas, 3) Aplicações contextuais, 4) Combinações possíveis, 5) Inspiração cultural.",
    categoria: "design",
    favorito: false
  },
  {
    id: 71,
    titulo: "UI para Psicologia",
    descricao: "Saúde mental digital",
    texto: "Desenvolva uma interface sensível para app de terapia com: 1) Diário emocional, 2) Exercícios guiados, 3) Conexão com profissionais, 4) Progresso visual, 5) Recursos de crise. Use psicologia das cores.",
    categoria: "design",
    favorito: false
  },
  {
    id: 72,
    titulo: "Design de Vitrine",
    descricao: "Montagens comerciais atraentes",
    texto: "Proponha 3 conceitos de vitrine para [tipo de loja] com temas: 1) Sazonal, 2) Promocional, 3) Conceitual. Inclua: disposição de produtos, iluminação, elementos interativos e call-to-action.",
    categoria: "design",
    favorito: false
  },
  {
    id: 73,
    titulo: "UI para Artistas",
    descricao: "Portfólios digitais",
    texto: "Crie um template de portfólio digital para [tipo de artista] com: 1) Galeria imersiva, 2) Biografia visual, 3) Processo criativo, 4) Contato integrado, 5) Loja de obras. Destaque a arte.",
    categoria: "design",
    favorito: false
  },
  {
    id: 74,
    titulo: "Design de Queimador",
    descricao: "Estampas para produtos pirotécnicos",
    texto: "Desenvolva estampas para uma linha de fogos de artifício com: 1) Temas festivos, 2) Nomes criativos, 3) Informações de segurança, 4) Sistema de cores por efeito, 5) Embalagem coletável.",
    categoria: "design",
    favorito: false
  },
  {
    id: 75,
    titulo: "UI para ONGs",
    descricao: "Experiência para causas sociais",
    texto: "Projete o site/app de uma ONG focando em: 1) Transparência, 2) Storytelling impactante, 3) Doações simplificadas, 4) Voluntariado, 5) Resultados mensuráveis. Conecte emocionalmente.",
    categoria: "design",
    favorito: false
  },
  {
    id: 76,
    titulo: "Design de Livro Infantil",
    descricao: "Ilustração e tipografia para crianças",
    texto: "Crie o layout completo para um livro infantil sobre [tema] com: 1) Ilustrações página-a-página, 2) Tipografia lúdica, 3) Interatividade, 4) Guia para pais, 5) Capa atraente. Considere faixa etária.",
    categoria: "design",
    favorito: false
  },
  {
    id: 77,
    titulo: "UI para Esportes",
    descricao: "Tecnologia para atletas",
    texto: "Desenvolva a interface de um app esportivo para [modalidade] com: 1) Tracking de performance, 2) Análise de movimentos, 3) Treinos personalizados, 4) Comunidade, 5) Competições. Use dinamismo visual.",
    categoria: "design",
    favorito: false
  },
  {
    id: 78,
    titulo: "Design de Enciclopédia",
    descricao: "Organização visual de conhecimento",
    texto: "Proponha um sistema de design para uma enciclopédia digital sobre [área] com: 1) Hierarquia de informação, 2) Elementos gráficos explicativos, 3) Navegação temática, 4) Linha do tempo interativa, 5) Referências cruzadas.",
    categoria: "design",
    favorito: false
  },
  {
    id: 79,
    titulo: "UI para Varejo",
    descricao: "Experiência omnicanal",
    texto: "Integre a jornada digital-física para uma loja de [segmento] com: 1) Check-in no app, 2) Navegação na loja, 3) Informações de produto ampliadas, 4) Pagamento sem filas, 5) Fidelidade conectada.",
    categoria: "design",
    favorito: false
  },
  {
    id: 80,
    titulo: "Design de Instrumento Musical",
    descricao: "Estética de ferramentas sonoras",
    texto: "Reimagine o design visual de um [instrumento] com: 1) Ergonomia melhorada, 2) Elementos personalizáveis, 3) Materiais inovadores, 4) Identidade visual forte, 5) Versões para diferentes níveis.",
    categoria: "design",
    favorito: false
  },
  {
    id: 81,
    titulo: "UI para Jardinagem",
    descricao: "Tecnologia para jardineiros",
    texto: "Crie um app que auxilie em: 1) Identificação de plantas, 2) Cronograma de cuidados, 3) Solução de problemas, 4) Design de jardins, 5) Compartilhamento com comunidade. Use referências naturais.",
    categoria: "design",
    favorito: false
  },
  {
    id: 82,
    titulo: "Design de Gibi",
    descricao: "Arte sequencial estilizada",
    texto: "Desenvolva o estilo visual para uma HQ sobre [tema] com: 1) Personagens marcantes, 2) Narrativa visual clara, 3) Balões expressivos, 4) Onomatopeias integradas, 5) Capa impactante.",
    categoria: "design",
    favorito: false
  },
  {
    id: 83,
    titulo: "UI para Imóveis",
    descricao: "Tecnologia para o mercado imobiliário",
    texto: "Projete uma plataforma imobiliária com: 1) Buscas avançadas, 2) Tours virtuais, 3) Comparação lado-a-lado, 4) Documentação digital, 5) Simulação financiamento. Humanize a experiência.",
    categoria: "design",
    favorito: false
  },
  {
    id: 84,
    titulo: "Design de Brinquedo",
    descricao: "Produtos lúdicos inovadores",
    texto: "Crie o conceito visual para um brinquedo educativo sobre [tema] com: 1) Segurança visível, 2) Elementos interativos, 3) Escalabilidade, 4) Embalagem atraente, 5) Versões por faixa etária.",
    categoria: "design",
    favorito: false
  },
  {
    id: 85,
    titulo: "UI para Logística",
    descricao: "Rastreamento e gestão",
    texto: "Desenvolva um painel de logística que mostre: 1) Status em tempo real, 2) Rotas otimizadas, 3) Alertas proativos, 4) Documentação digital, 5) Comunicação integrada. Priorize clareza.",
    categoria: "design",
    favorito: false
  },
  {
    id: 86,
    titulo: "Design de Mosaico",
    descricao: "Arte com peças modulares",
    texto: "Proponha um padrão de mosaico para [espaço] usando: 1) Cores coordenadas, 2) Texturas variadas, 3) Transições graduais, 4) Elementos simbólicos, 5) Integração arquitetônica. Mostre detalhes.",
    categoria: "design",
    favorito: false
  },
  {
    id: 87,
    titulo: "UI para Podcasts",
    descricao: "Descoberta e consumo de áudio",
    texto: "Redesenhe a experiência de um app de podcasts com: 1) Recomendações contextuais, 2) Playlists inteligentes, 3) Transcrições sincronizadas, 4) Controles de velocidade, 5) Comunidade de ouvintes.",
    categoria: "design",
    favorito: false
  },
  {
    id: 88,
    titulo: "Design de Instrumental Cirúrgico",
    descricao: "Ergonomia médica",
    texto: "Reimagine o design de um [instrumento médico] focando em: 1) Segurança, 2) Feedback tátil, 3) Esterilização, 4) Armazenamento, 5) Identificação rápida. Consulte profissionais.",
    categoria: "design",
    favorito: false
  },
  {
    id: 89,
    titulo: "UI para Energia",
    descricao: "Monitoramento de consumo",
    texto: "Crie um painel de energia residencial/comercial mostrando: 1) Dados em tempo real, 2) Histórico, 3) Comparativos, 4) Metas, 5) Dicas personalizadas. Traduza dados complexos.",
    categoria: "design",
    favorito: false
  },
  {
    id: 90,
    titulo: "Design de Aquário",
    descricao: "Ambientes aquáticos imersivos",
    texto: "Projete um aquário público/privado com: 1) Sinalização educativa, 2) Iluminação cenográfica, 3) Fluxo de visitantes, 4) Tanques temáticos, 5) Interatividade. Balanceie beleza e funcionalidade.",
    categoria: "design",
    favorito: false
  },
  {
    id: 91,
    titulo: "UI para Culinária",
    descricao: "Assistente de cozinha digital",
    texto: "Desenvolva um app que: 1) Converta medidas, 2) Ajuste receitas por porções, 3) Cronometre etapas, 4) Sugira substituições, 5) Organize lista de compras. Integre com assistentes de voz.",
    categoria: "design",
    favorito: false
  },
  {
    id: 92,
    titulo: "Design de Relógio",
    descricao: "Mostradores e interfaces temporais",
    texto: "Crie 5 conceitos de mostrador para smartwatch/relógio analógico com temas: 1) Minimalista, 2) Retro, 3) Futurista, 4) Baseado em dados, 5) Artístico. Considere legibilidade em vários tamanhos.",
    categoria: "design",
    favorito: false
  },
  {
    id: 93,
    titulo: "UI para Astronomia",
    descricao: "Exploração estelar digital",
    texto: "Projete um app de observação astronômica com: 1) Mapa celeste em tempo real, 2) Identificação de corpos, 3) Notificações de eventos, 4) Fotografia integrada, 5) Comunidade de entusiastas.",
    categoria: "design",
    favorito: false
  },
  {
    id: 94,
    titulo: "Design de Ferramenta",
    descricao: "Ergonomia e segurança visual",
    texto: "Redesenhe uma [ferramenta comum] melhorando: 1) Pegada ergonômica, 2) Indicadores de uso, 3) Armazenamento, 4) Segurança, 5) Sistema de cores para diferentes tamanhos. Mostre em contexto.",
    categoria: "design",
    favorito: false
  },
  {
    id: 95,
    titulo: "UI para Meditação",
    descricao: "Experiência de mindfulness digital",
    texto: "Crie uma interface calmante para app de meditação com: 1) Sessões guiadas, 2) Acompanhamento de progresso, 3) Sons ambientais, 4) Lembretes gentis, 5) Modo desconexão. Use psicologia das cores.",
    categoria: "design",
    favorito: false
  },
  {
    id: 96,
    titulo: "Design de Brinquedo Inflável",
    descricao: "Produtos recreativos temporários",
    texto: "Desenvolva conceitos para brinquedos infláveis de [contexto] com: 1) Formas inovadoras, 2) Segurança visível, 3) Padrões de cores, 4) Embalagem compacta, 5) Instruções pictóricas.",
    categoria: "design",
    favorito: false
  },
  {
    id: 97,
    titulo: "UI para Criptomoedas",
    descricao: "Gestão de ativos digitais",
    texto: "Projete um wallet de criptomoedas com: 1) Segurança visível, 2) Transações simplificadas, 3) Gráficos claros, 4) Educação, 5) Integração com exchanges. Traduza complexidade técnica.",
    categoria: "design",
    favorito: false
  },
  {
    id: 98,
    titulo: "Design de Queijo",
    descricao: "Identidade visual para laticínios",
    texto: "Crie a identidade para uma linha de queijos artesanais com: 1) Nomenclatura criativa, 2) Rótulos diferenciados, 3) Elementos regionais, 4) Informações de maturação, 5) Experiência de desembalar.",
    categoria: "design",
    favorito: false
  },
  {
    id: 99,
    titulo: "UI para Voluntariado",
    descricao: "Conexão entre causas e voluntários",
    texto: "Desenvolva uma plataforma que: 1) Match por habilidades, 2) Mostre impacto, 3) Facilite agendamento, 4) Reconheça contribuições, 5) Crie comunidade. Humanize a experiência digital.",
    categoria: "design",
    favorito: false
  },
  {
    id: 100,
    titulo: "Design de Queimador de Incenso",
    descricao: "Objetos ritualísticos contemporâneos",
    texto: "Reimagine um queimador de incenso para uso moderno com: 1) Segurança, 2) Facilidade de limpeza, 3) Estética minimalista, 4) Personalização, 5) Experiência sensorial ampliada. Mostre em uso.",
    categoria: "design",
    favorito: false
  },
  {
    id: 101,
    titulo: "UI para Colecionadores",
    descricao: "Gestão de acervos pessoais",
    texto: "Projete um app para catalogar coleções de [item] com: 1) Banco de dados visual, 2) Valor de mercado, 3) Troca/comunidade, 4) Exposição virtual, 5) Alertas de eventos. Celebre a paixão colecionista.",
    categoria: "design",
    favorito: false
  },
  {
    id: 102,
    titulo: "Design de Ferramentas Agrícolas",
    descricao: "Ergonomia para o campo",
    texto: "Redesenhe uma [ferramenta agrícola] melhorando: 1) Ajuste para diferentes usuários, 2) Redução de esforço, 3) Indicadores de desgaste, 4) Armazenamento, 5) Segurança. Consulte trabalhadores rurais.",
    categoria: "design",
    favorito: false
  },
  {
    id: 103,
    titulo: "UI para Plantas",
    descricao: "Identificação e cuidados",
    texto: "Crie um app que: 1) Identifique plantas por foto, 2) Monitore rega, 3) Diagnostique problemas, 4) Sugira companheiras, 5) Conecte com jardineiros. Use referências naturais na interface.",
    categoria: "design",
    favorito: false
  },
  {
    id: 104,
    titulo: "Design de Instrumentos Científicos",
    descricao: "Precisão visual",
    texto: "Reimagine o design de um [instrumento de laboratório] focando em: 1) Legibilidade, 2) Prevenção de erros, 3) Limpeza, 4) Armazenamento, 5) Identificação rápida. Consulte profissionais.",
    categoria: "design",
    favorito: false
  },
  {
    id: 105,
    titulo: "UI para Artesanato",
    descricao: "Tecnologia para makers",
    texto: "Desenvolva uma plataforma para artesãos venderem obras com: 1) Histórias por trás das peças, 2) Processo criativo, 3) Encomendas, 4) Oficinas, 5) Comunidade. Celebre o trabalho manual.",
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
      favorito: false
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
  programação: [
  {
    id: 1,
    titulo: "Refatoração de Código",
    descricao: "Sugira melhorias para limpeza de código",
    texto: "Analise o seguinte trecho de código e sugira: 1) Melhores nomes para variáveis/funções, 2) Extração de métodos quando aplicável, 3) Simplificação de estruturas condicionais, 4) Padrões de design que poderiam ser aplicados. Mantenha a mesma funcionalidade.\n\n[cole o código aqui]",
    categoria: "programação",
    favorito: false
  },
  {
    id: 2,
    titulo: "Geração de Casos de Teste",
    descricao: "Crie testes unitários abrangentes",
    texto: "Para a seguinte função/classe, gere: 1) Casos de teste para caminhos felizes, 2) Casos de teste para valores extremos, 3) Testes de erro/exceção esperados, 4) Dados mock quando necessário. Use [Jest/Mocha/JUnit/etc.] como framework.\n\n[cole a assinatura da função/classe]",
    categoria: "programação",
    favorito: true
  },
  {
    id: 3,
    titulo: "Migração de Versão",
    descricao: "Planeje atualização de framework/linguagem",
    texto: "Para um projeto usando [versão antiga] de [tecnologia], liste: 1) Mudanças críticas na nova versão, 2) Passo a passo para migração segura, 3) Ferramentas de automação disponíveis, 4) Estimativa de esforço para um projeto de [tamanho].",
    categoria: "programação",
    favorito: false
  },
  {
    id: 4,
    titulo: "Análise de Complexidade",
    descricao: "Calcule Big-O de algoritmos",
    texto: "Para o seguinte algoritmo, determine: 1) Complexidade temporal no pior caso, 2) Complexidade espacial, 3) Possíveis otimizações, 4) Compare com abordagens alternativas conhecidas.\n\n[cole o pseudocódigo ou código]",
    categoria: "programação",
    favorito: false
  },
  {
    id: 5,
    titulo: "Conversão entre Linguagens",
    descricao: "Traduza código entre linguagens",
    texto: "Converta o seguinte código de [linguagem origem] para [linguagem destino]: 1) Mantenha a mesma lógica, 2) Aproveite idiomas da nova linguagem, 3) Trate diferenças de biblioteca padrão, 4) Comente sobre trade-offs na implementação.\n\n[cole o código original]",
    categoria: "programação",
    favorito: true
  },
  {
    id: 6,
    titulo: "Debug Remoto",
    descricao: "Diagnostique problemas em ambiente produtivo",
    texto: "Para o seguinte erro em produção: [descreva sintomas/logs], sugira: 1) Possíveis causas raiz, 2) Comandos para coletar mais dados, 3) Workaround imediato, 4) Solução definitiva com monitoramento preventivo.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 7,
    titulo: "Design de API REST",
    descricao: "Crie endpoints bem estruturados",
    texto: "Para o recurso [nome do recurso], projete: 1) Modelo de dados completo, 2) Endpoints RESTful (GET/POST/PUT/DELETE), 3) Códigos de status HTTP apropriados, 4) Esquemas de request/response em JSON.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 8,
    titulo: "Configuração de CI/CD",
    descricao: "Configure pipeline de entrega contínua",
    texto: "Para um projeto [stack tecnológica], crie: 1) Arquivo de configuração YAML para [GitHub Actions/GitLab CI], 2) Passos para teste, build e deploy, 3) Gatilhos apropriados, 4) Tratamento de ambientes múltiplos.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 9,
    titulo: "Protótipo Rápido",
    descricao: "Gere código inicial para funcionalidade",
    texto: "Crie um protótipo para [funcionalidade] usando [tecnologia]: 1) Estrutura básica de arquivos, 2) Implementação mínima viável, 3) Configurações essenciais, 4) Dependências necessárias.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 10,
    titulo: "Análise de Segurança",
    descricao: "Identifique vulnerabilidades em código",
    texto: "Revise o seguinte código procurando: 1) Vulnerabilidades OWASP Top 10, 2) Problemas de sanitização de input, 3) Más práticas de segurança, 4) Sugestões de hardening.\n\n[cole o código suspeito]",
    categoria: "programação",
    favorito: true
  },
  {
    id: 11,
    titulo: "Normalização de Banco de Dados",
    descricao: "Otimize estrutura de tabelas",
    texto: "Para o seguinte esquema relacional: [descreva tabelas], avalie: 1) Forma normal atual, 2) Possibilidade de normalização adicional, 3) Trade-offs de desempenho, 4) Sugestões de índices.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 14,
    titulo: "Diagrama de Sequência",
    descricao: "Gere representação visual de fluxo",
    texto: "Crie um diagrama de sequência para: 1) Interação entre componentes [lista], 2) Mensagens trocadas, 3) Retornos esperados, 4) Tratamento de erros. Use sintaxe Mermaid ou PlantUML.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 15,
    titulo: "Benchmark de Algoritmos",
    descricao: "Compare desempenho de implementações",
    texto: "Para resolver [problema], implemente: 1) Versão ingênua, 2) Versão otimizada, 3) Script para medir tempo de execução, 4) Análise de resultados com diferentes tamanhos de entrada.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 16,
    titulo: "Padronização de Commit",
    descricao: "Melhore mensagens de versionamento",
    texto: "Revise estas mensagens de commit: [lista] e: 1) Aplique Conventional Commits, 2) Separe sujeito do corpo, 3) Adicione contexto relevante, 4) Relacione com issues quando existir.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 17,
    titulo: "Configuração de Linter",
    descricao: "Crie regras de análise estática",
    texto: "Para um projeto [linguagem], configure: 1) Arquivo de regras para [ESLint/RuboCop], 2) Padrão de código baseado em [Airbnb/Google Style], 3) Regras customizadas para [requisitos], 4) Integração com pre-commit.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 18,
    titulo: "Tradução de Erros",
    descricao: "Converta mensagens técnicas para usuários",
    texto: "Transforme estes erros técnicos em mensagens amigáveis: [lista], mantendo: 1) Clareza do problema, 2) Ações corretivas possíveis, 3) Tom apropriado, 4) Localização para [idioma].",
    categoria: "programação",
    favorito: false
  },
  {
    id: 19,
    titulo: "Sugestão de Bibliotecas",
    descricao: "Recomende pacotes para resolver problema",
    texto: "Para [necessidade específica] em [linguagem/ecossistema], sugira: 1) Bibliotecas maduras, 2) Comparativo de features, 3) Estatísticas de manutenção, 4) Exemplo mínimo de uso.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 20,
    titulo: "Modelagem de Dados NoSQL",
    descricao: "Desenhe estrutura para banco não-relacional",
    texto: "Para uma aplicação de [domínio], modele: 1) Documentos/coleções para MongoDB, 2) Chaves/valores para Redis, 3) Estratégia de sharding, 4) Padrões de consulta frequente.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 22,
    titulo: "Geração de Changelog",
    descricao: "Crie registro de mudanças entre versões",
    texto: "Com base nestes commits [intervalo/versões], gere: 1) Changelog organizado por tipo de mudança, 2) Destaque breaking changes, 3) Inclua referências a issues, 4) Formato para Markdown.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 23,
    titulo: "Automação de Deploy",
    descricao: "Script para implantação em servidor",
    texto: "Crie um script [Bash/Python] para: 1) Parar serviço, 2) Fazer backup, 3) Atualizar arquivos, 4) Reiniciar dependências, 5) Validar instalação. Considere [ambiente específico].",
    categoria: "programação",
    favorito: false
  },
  {
    id: 24,
    titulo: "Análise de Cobertura",
    descricao: "Identifique código não testado",
    texto: "Com base neste relatório de cobertura: [dados], aponte: 1) Arquivos com baixa cobertura, 2) Métodos críticos não testados, 3) Sugestões de testes adicionais, 4) Meta de cobertura ideal.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 25,
    titulo: "Configuração de Load Balancer",
    descricao: "Otimize distribuição de tráfego",
    texto: "Para uma aplicação [tipo] com [N] instâncias, configure: 1) Regras de balanceamento, 2) Health checks apropriados, 3) Estratégia de session persistence, 4) Failover automático.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 26,
    titulo: "Migração Cloud",
    descricao: "Planeje transição para nuvem",
    texto: "Para uma infraestrutura on-premise com [características], proponha: 1) Estratégia lift-and-shift vs. nativo, 2) Serviços cloud equivalentes, 3) Estimativa de custos, 4) Roteiro de migração em fases.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 27,
    titulo: "Monitoramento de Aplicação",
    descricao: "Configure alertas e métricas",
    texto: "Para um serviço [tipo], defina: 1) KPIs essenciais, 2) Limites para alertas, 3) Dashboard inicial, 4) Integração com [Prometheus/New Relic]. Considere [SLA requerido].",
    categoria: "programação",
    favorito: false
  },
  {
    id: 28,
    titulo: "Solução de Problemas Concorrentes",
    descricao: "Lide com race conditions",
    texto: "Para o seguinte cenário concorrente: [descrição], proponha: 1) Padrão de sincronização adequado, 2) Implementação thread-safe, 3) Testes de estresse, 4) Alternativas lock-free se aplicável.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 29,
    titulo: "Compilação Cross-Platform",
    descricao: "Configure build para múltiplas plataformas",
    texto: "Para um projeto [linguagem], configure: 1) Build para Windows/Linux/macOS, 2) Tratamento de dependências específicas, 3) Geração de executáveis, 4) Inclusão de assets.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 30,
    titulo: "Análise de Logs",
    descricao: "Extraia insights de arquivos de log",
    texto: "Para estes logs [amostra], identifique: 1) Padrões de erro, 2) Métricas de desempenho, 3) Sugestões de otimização, 4) Script para análise automatizada usando [AWK/Grep].",
    categoria: "programação",
    favorito: false
  },
  {
    id: 31,
    titulo: "Design de CLI",
    descricao: "Crie interface de linha de comando",
    texto: "Para uma ferramenta que [propósito], projete: 1) Estrutura de comandos/subcomandos, 2) Opções e flags, 3) Mensagens de ajuda, 4) Output formatado. Use [biblioteca CLI].",
    categoria: "programação",
    favorito: false
  },
  {
    id: 32,
    titulo: "Versionamento de API",
    descricao: "Estruture evolução de endpoints",
    texto: "Para uma API [tipo], planeje: 1) Estratégia de versionamento (URL/header), 2) Depreciação de versões, 3) Documentação paralela, 4) Comunicação de breaking changes.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 33,
    titulo: "Cache Estratégico",
    descricao: "Implemente camada de cache eficiente",
    texto: "Para uma aplicação com [padrão de acesso], sugira: 1) Estratégia de cache (LRU/TTL), 2) Níveis apropriados (CDN/backend/browser), 3) Invalidação eficiente, 4) Monitoramento de hit rate.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 34,
    titulo: "Compressão de Dados",
    descricao: "Otimize tamanho de payloads",
    texto: "Para dados do tipo [tipo], avalie: 1) Algoritmos de compressão adequados, 2) Trade-off CPU/tamanho, 3) Configuração de servidor web, 4) Tratamento no cliente.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 35,
    titulo: "Deploy Blue-Green",
    descricao: "Implemente atualização sem downtime",
    texto: "Para um serviço [tipo], descreva: 1) Configuração de ambiente paralelo, 2) Troca de tráfego, 3) Rollback automático, 4) Testes pós-implantação. Considere [restrições].",
    categoria: "programação",
    favorito: false
  },
  {
    id: 36,
    titulo: "Feature Flags",
    descricao: "Gerencie lançamento progressivo",
    texto: "Para a feature [nome], implemente: 1) Sistema de toggle, 2) Controle por usuário/percentual, 3) Monitoramento de impacto, 4) Remoção limpa do código legacy.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 37,
    titulo: "Serialização Eficiente",
    descricao: "Escolha formato de transferência",
    texto: "Para dados com [características], compare: 1) JSON vs. Protocol Buffers vs. MessagePack, 2) Tamanho serializado, 3) Velocidade de processamento, 4) Suporte a esquemas.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 38,
    titulo: "Autenticação Segura",
    descricao: "Implemente fluxo de login robusto",
    texto: "Para um sistema [tipo], projete: 1) Fluxo OAuth2/JWT, 2) Armazenamento de tokens, 3) Rotação de credenciais, 4) Proteção contra ataques comuns.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 39,
    titulo: "Processamento Assíncrono",
    descricao: "Desenhe arquitetura baseada em eventos",
    texto: "Para a operação [descrição], implemente: 1) Filas com [RabbitMQ/Kafka], 2) Workers escaláveis, 3) Retry com backoff, 4) Monitoramento de dead letter queue.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 40,
    titulo: "Análise de Dependências",
    descricao: "Identifique pacotes problemáticos",
    texto: "Para o arquivo [package.json/pom.xml], analise: 1) Dependências não utilizadas, 2) Versões desatualizadas, 3) Possíveis conflitos, 4) Sugestões de atualização segura.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 41,
    titulo: "Configuração de Proxy Reverso",
    descricao: "Otimize roteamento de requisições",
    texto: "Configure [Nginx/Apache] para: 1) Balanceamento de carga, 2) Terminação SSL, 3) Cache de conteúdo estático, 4) Redirecionamentos condicionais.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 42,
    titulo: "Testes de Integração",
    descricao: "Automatize cenários end-to-end",
    texto: "Para o fluxo [descrição], crie: 1) Ambiente isolado com containers, 2) Cenários críticos de negócio, 3) Dados de teste realistas, 4) Assertivas completas.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 43,
    titulo: "Padrões de Microserviços",
    descricao: "Aplique soluções comuns",
    texto: "Para o problema [descrição], sugira: 1) Padrão adequado (Circuit Breaker, Saga), 2) Implementação de referência, 3) Bibliotecas suportadas, 4) Configuração de resiliência.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 44,
    titulo: "Gerenciamento de Secrets",
    descricao: "Armazene credenciais com segurança",
    texto: "Para um ambiente [tipo], configure: 1) Vault/Parameter Store, 2) Rotação automática, 3) Controle de acesso, 4) Integração com aplicações.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 45,
    titulo: "Autoscaling Configurável",
    descricao: "Ajuste escala baseado em métricas",
    texto: "Para um serviço em [nuvem], defina: 1) Métricas de scaling (CPU/request count), 2) Limites mínimos/máximos, 3) Períodos de cooldown, 4) Notificações de eventos.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 46,
    titulo: "Conversão de Protocolos",
    descricao: "Ponte entre sistemas heterogêneos",
    texto: "Crie um adaptador para converter: 1) REST para gRPC, 2) SOAP para GraphQL, 3) Formato de mensagens, 4) Tratamento de erros equivalentes.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 47,
    titulo: "Análise de Código Legado",
    descricao: "Documente sistema herdado",
    texto: "Para o código [linguagem/versão], gere: 1) Diagrama de dependências, 2) Fluxos principais, 3) Pontos de extensão, 4) Riscos conhecidos.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 48,
    titulo: "Sincronização de Dados Offline",
    descricao: "Implemente funcionalidade offline-first",
    texto: "Para um app móvel, projete: 1) Armazenamento local, 2) Detecção de conectividade, 3) Resolução de conflitos, 4) Sincronização incremental.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 49,
    titulo: "Canary Release",
    descricao: "Implante versões para subconjunto",
    texto: "Planeje um canary release para: 1) Seleção de usuários, 2) Coleta de métricas, 3) Critérios de rollback, 4) Expansão progressiva.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 50,
    titulo: "Query GraphQL Otimizada",
    descricao: "Melhore desempenho de consultas",
    texto: "Para o schema GraphQL [descrição], otimize: 1) N+1 queries, 2) Depth limiting, 3) Caching de respostas, 4) Persisted queries.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 51,
    titulo: "Configuração de WebSockets",
    descricao: "Implemente comunicação bidirecional",
    texto: "Para um chat em tempo real, configure: 1) Handshake inicial, 2) Broadcast de mensagens, 3) Tratamento de desconexão, 4) Escalabilidade horizontal.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 52,
    titulo: "Análise de Código Estático",
    descricao: "Identifique problemas sem execução",
    texto: "Execute análise estática em [projeto] para: 1) Código morto, 2) Complexidade ciclomática alta, 3) Violações de padrões, 4) Sugestões de simplificação.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 53,
    titulo: "Gerenciamento de Estado Global",
    descricao: "Centralize dados da aplicação",
    texto: "Para um app [framework], implemente: 1) Store centralizada, 2) Ações e mutações, 3) Integração com componentes, 4) Persistência local.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 54,
    titulo: "Testes de Carga",
    descricao: "Avalie limites do sistema",
    texto: "Para a URL/endpoint [detalhes], crie: 1) Plano de teste com [Locust/JMeter], 2) Cenários de carga crescente, 3) Coleta de métricas, 4) Relatório de gargalos.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 55,
    titulo: "Configuração de VPN",
    descricao: "Conecte redes privadas com segurança",
    texto: "Para conectar [local1] e [local2], configure: 1) Túnel IPSec/WireGuard, 2) Autenticação mútua, 3) Rotas específicas, 4) Monitoramento de conexão.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 56,
    titulo: "Padronização de Microfrontends",
    descricao: "Integre aplicações frontend independentes",
    texto: "Para os módulos [lista], defina: 1) API de comunicação, 2) Shared dependencies, 3) Estilo visual consistente, 4) Estratégia de deploy independente.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 57,
    titulo: "Gerenciamento de Sessão Distribuída",
    descricao: "Compartilhe estado entre instâncias",
    texto: "Implemente armazenamento de sessão usando: 1) Redis cluster, 2) Serialização eficiente, 3) Timeout configurável, 4) Invalidação explícita.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 58,
    titulo: "Análise de Qualidade de Código",
    descricao: "Avalie métricas de manutenibilidade",
    texto: "Execute SonarQube/Codacy no projeto: 1) Identifique code smells, 2) Sugira refatorações, 3) Acompanhe débito técnico, 4) Defina padrões de qualidade.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 59,
    titulo: "Configuração de CDN",
    descricao: "Otimize entrega de conteúdo estático",
    texto: "Para o domínio [exemplo.com], configure: 1) Cache headers apropriados, 2) Purge seletivo, 3) Fallback para origem, 4) Otimização de imagens sob demanda.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 60,
    titulo: "Implementação de Webhooks",
    descricao: "Notifique sistemas externos",
    texto: "Para o evento [tipo], crie: 1) Assinatura segura, 2) Retry com backoff, 3) Dashboard de status, 4) Logging completo de payloads.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 61,
    titulo: "Tuning de JVM",
    descricao: "Otimize aplicação Java",
    texto: "Para a aplicação [descrição], ajuste: 1) Heap size inicial/máximo, 2) Garbage collector, 3) JIT compiler, 4) Opções de runtime baseado em [carga].",
    categoria: "programação",
    favorito: false
  },
  {
    id: 62,
    titulo: "Modelagem de Eventos",
    descricao: "Desenhe estrutura de eventos",
    texto: "Para o domínio [nome], modele: 1) Eventos significativos, 2) Schema de payloads, 3) Versionamento de eventos, 4) Consumidores típicos.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 63,
    titulo: "Automatização de Pull Requests",
    descricao: "Padronize revisões de código",
    texto: "Configure templates para: 1) Descrição de mudanças, 2) Checklist de requisitos, 3) Revisores automáticos, 4) Gates de qualidade.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 64,
    titulo: "Conversão de Schema",
    descricao: "Transforme modelos de dados",
    texto: "Converta o schema de [formato origem] para [formato destino]: 1) Mapeamento de tipos, 2) Tratamento de constraints, 3) Valores default, 4) Documentação embutida.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 65,
    titulo: "Configuração de Firewall",
    descricao: "Proteja rede com regras precisas",
    texto: "Para o serviço [tipo], defina: 1) Regras de entrada/saída, 2) Zoneamento lógico, 3) Logging de tentativas, 4) Atualização automatizada de IPs confiáveis.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 66,
    titulo: "Geração de Mock Data",
    descricao: "Crie dados realistas para testes",
    texto: "Para o modelo [descrição], gere: 1) Dataset variado, 2) Relacionamentos válidos, 3) Valores edge case, 4) Formatos para [ferramenta de teste].",
    categoria: "programação",
    favorito: false
  },
  {
    id: 67,
    titulo: "Implementação de Circuit Breaker",
    descricao: "Aumente resiliência em chamadas remotas",
    texto: "Para a integração com [serviço], configure: 1) Limiar de falhas, 2) Timeout adequado, 3) Fallback behavior, 4) Métricas de saúde.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 68,
    titulo: "Otimização de Dockerfile",
    descricao: "Crie imagens eficientes",
    texto: "Analise o Dockerfile: 1) Reduza tamanho final, 2) Organize camadas, 3) Segurança (non-root user), 4) Build multi-stage se aplicável.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 69,
    titulo: "Configuração de Rate Limiting",
    descricao: "Controle acesso a API",
    texto: "Implemente: 1) Limites por cliente/endpoint, 2) Headers de informação, 3) Estratégia de throttling, 4) Integração com autenticação.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 70,
    titulo: "Migração de Monolito para Microserviços",
    descricao: "Estratre módulos progressivamente",
    texto: "Para o monolito [descrição], identifique: 1) Candidatos a extração, 2) APIs de fronteira, 3) Estratégia de decomposição, 4) Coordenação de transações.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 71,
    titulo: "Implementação de Full-Text Search",
    descricao: "Adicione busca eficiente",
    texto: "Para dados [tipo], configure: 1) Elasticsearch/Solr, 2) Schema de índices, 3) Analisadores customizados, 4) Query DSL para casos comuns.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 72,
    titulo: "Automatização de Tarefas DevOps",
    descricao: "Script para operações comuns",
    texto: "Crie script para: 1) Rotação de logs, 2) Backup de banco, 3) Deploy canário, 4) Rollback emergencial. Use [linguagem] e tratamento de erros robusto.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 73,
    titulo: "Configuração de High Availability",
    descricao: "Garanta uptime elevado",
    texto: "Para o serviço [tipo], implemente: 1) Failover automático, 2) Load balancing, 3) Health checks, 4) Recuperação de desastres em [tempo].",
    categoria: "programação",
    favorito: true
  },
  {
    id: 74,
    titulo: "Análise de Ameaças",
    descricao: "Identifique riscos de segurança",
    texto: "Para a arquitetura [descrição], documente: 1) Vetores de ataque possíveis, 2) Superfície de exposição, 3) Contramedidas recomendadas, 4) Priorização por risco.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 75,
    titulo: "Gerenciamento de Feature Branches",
    descricao: "Organize fluxo Git complexo",
    texto: "Para o time com [N] desenvolvedores, defina: 1) Estratégia de branching, 2) Convenção de nomes, 3) Política de rebase/merge, 4) Integração contínua.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 76,
    titulo: "Implementação de Dark Mode",
    descricao: "Adicione tema escuro à aplicação",
    texto: "Para o app [framework], implemente: 1) CSS variables/theming, 2) Toggle persistente, 3) Ícones/assets alternativos, 4) Detecção de preferência do sistema.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 77,
    titulo: "Configuração de Service Worker",
    descricao: "Habilite funcionalidades offline",
    texto: "Implemente: 1) Cache estratégico, 2) Atualização em background, 3) Push notifications, 4) Fallback para conexão lenta.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 78,
    titulo: "Análise de Dados de Logs",
    descricao: "Extraia métricas de arquivos de log",
    texto: "Para logs [tipo], crie: 1) Pipeline de processamento, 2) Agregações relevantes, 3) Visualizações temporais, 4) Alertas anômalos.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 79,
    titulo: "Implementação de Blockchain Básico",
    descricao: "Crie cadeia de blocos simplificada",
    texto: "Implemente: 1) Estrutura de blocos, 2) Proof-of-work, 3) Validação de cadeia, 4) API para transações. Use [linguagem] para fins educacionais.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 80,
    titulo: "Configuração de Zero-Downtime Deploys",
    descricao: "Atualize sem interrupção",
    texto: "Para [tecnologia], configure: 1) Health checks, 2) Drain de conexões, 3) Deploy rolling, 4) Verificação pós-implantação.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 81,
    titulo: "Otimização de Webpack",
    descricao: "Reduza bundle size",
    texto: "Analise configuração: 1) Code splitting, 2) Tree shaking, 3) Minificação, 4) Cache busting. Gere relatório de análise de bundle.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 82,
    titulo: "Implementação de Chatbot",
    descricao: "Crie assistente virtual",
    texto: "Para o domínio [área], desenvolva: 1) Intents básicos, 2) Fluxo de diálogo, 3) Integração com backend, 4) Fallback para humano.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 83,
    titulo: "Configuração de Multi-Tenancy",
    descricao: "Suporte a múltiplos clientes",
    texto: "Implemente: 1) Isolamento de dados, 2) Customização por tenant, 3) Onboarding automatizado, 4) Modelo de cobrança.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 84,
    titulo: "Geração de PDF Dinâmico",
    descricao: "Crie documentos programaticamente",
    texto: "Para dados [tipo], gere: 1) Template com placeholders, 2) Estilo consistente, 3) Metadados, 4) Versão para impressão/digital.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 85,
    titulo: "Implementação de Real-Time Updates",
    descricao: "Atualize interface sem refresh",
    texto: "Use [Socket.io/GraphQL Subscriptions] para: 1) Notificar mudanças, 2) Sincronizar estado, 3) Tratar conflitos, 4) Otimizar desempenho.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 86,
    titulo: "Configuração de A/B Testing",
    descricao: "Compare variações de features",
    texto: "Implemente: 1) Divisão de tráfego, 2) Coleta de métricas, 3) Significância estatística, 4) Rollout progressivo.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 87,
    titulo: "Análise de Custo Cloud",
    descricao: "Otimize gastos com infraestrutura",
    texto: "Para a conta [provedor], identifique: 1) Serviços subutilizados, 2) Opções de reserva, 3) Right-sizing, 4) Alertas de orçamento.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 88,
    titulo: "Implementação de Payment Gateway",
    descricao: "Integre processamento de pagamentos",
    texto: "Para [Stripe/PayPal], configure: 1) Checkout seguro, 2) Webhooks, 3) Reconciliação, 4) Fallback para outros métodos.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 89,
    titulo: "Configuração de Serverless Functions",
    descricao: "Implante lógica sem servidor",
    texto: "Para [AWS Lambda/Cloud Functions], implemente: 1) Handler eficiente, 2) Variáveis de ambiente, 3) Logging, 4) Versionamento.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 90,
    titulo: "Conversão de Excel para Aplicação",
    descricao: "Migre planilhas para sistema",
    texto: "Para a planilha [descrição], crie: 1) Modelo de dados, 2) Interface equivalente, 3) Import/export, 4) Validação de negócio.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 91,
    titulo: "Implementação de Geolocalização",
    descricao: "Adicione features baseadas em local",
    texto: "Use [Google Maps/Mapbox] para: 1) Exibir pontos, 2) Calcular rotas, 3) Geofencing, 4) Otimizar offline usage.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 92,
    titulo: "Configuração de Disaster Recovery",
    descricao: "Prepare para falhas catastróficas",
    texto: "Documente: 1) RPO/RTO, 2) Backup strategy, 3) Procedimentos de restauração, 4) Testes regulares.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 93,
    titulo: "Análise de Adoção de Framework",
    descricao: "Avalie novo framework para projeto",
    texto: "Compare [opção1] e [opção2] em: 1) Curva de aprendizado, 2) Ecossistema, 3) Performance, 4) Suporte a longo prazo.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 94,
    titulo: "Implementação de Two-Factor Auth",
    descricao: "Adicione camada extra de segurança",
    texto: "Integre [Authy/Google Authenticator] com: 1) Geração de QR code, 2) Validação de tokens, 3) Recovery codes, 4) Controle de dispositivos.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 95,
    titulo: "Configuração de Data Warehouse",
    descricao: "Prepare ambiente analítico",
    texto: "Para dados [fonte], configure: 1) ETL pipeline, 2) Modelo dimensional, 3) Agregações, 4) Ferramenta de BI.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 96,
    titulo: "Implementação de Voice Interface",
    descricao: "Adicione controle por voz",
    texto: "Use [Web Speech API/Amazon Lex] para: 1) Comandos básicos, 2) Processamento de NLU, 3) Feedback auditivo, 4) Fallback para UI.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 97,
    titulo: "Configuração de Feature Store",
    descricao: "Centralize features para ML",
    texto: "Implemente: 1) Versionamento, 2) Metadados, 3) Acesso cross-team, 4) Monitoring de data drift.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 98,
    titulo: "Análise de Tech Debt",
    descricao: "Documente e priorize débito",
    texto: "Para o projeto [nome], liste: 1) Itens de dívida, 2) Impacto, 3) Esforço de correção, 4) Plano de pagamento.",
    categoria: "programação",
    favorito: true
  },
  {
    id: 99,
    titulo: "Implementação de AR Filters",
    descricao: "Crie efeitos de realidade aumentada",
    texto: "Use [SparkAR/ARCore] para: 1) Face tracking, 2) Overlays interativos, 3) Animação, 4) Compartilhamento.",
    categoria: "programação",
    favorito: false
  },
  {
    id: 100,
    titulo: "Configuração de IoT Hub",
    descricao: "Conecte dispositivos inteligentes",
    texto: "Para dispositivos [tipo], implemente: 1) Autenticação, 2) Telemetria, 3) Comandos remotos, 4) Atualização OTA.",
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
      favorito: false
    },
    {
      id: 22,
      titulo: "Jogo Educativo",
      descricao: "Desenhe conceitos de gamificação",
      texto: "Projete um jogo educativo para ensinar [conceito] para [faixa etária]. Inclua: 1) Mecânicas principais, 2) Sistema de progressão, 3) Elementos de feedback, 4) Adaptação para diferentes níveis, 5) Métricas de aprendizagem. Descreva 3 fases do jogo como exemplo.",
      categoria: "educação",
      favorito: false
    },
    {
     id: 1,
     titulo: "Roteiro de Aula Invertida",
     descricao: "Estrutura para metodologia flipped classroom",
     texto: "Desenvolva um roteiro de aula invertida sobre [tema] para [nível de ensino]. Inclua: 1) Materiais pré-aula (vídeos, textos), 2) Atividades de verificação de compreensão, 3) Dinâmicas para aula presencial, 4) Mecanismos de acompanhamento.",
     categoria: "educação",
     favorito: false
   },
   {
    id: 1,
    titulo: "Mapa Mental Educativo",
    descricao: "Estrutura visual para organizar conceitos",
    texto: "Crie um mapa mental detalhado sobre [tema] para [nível de ensino]. Inclua: 1) Conceito central, 2) Subtópicos principais, 3) Conexões entre ideias, 4) Exemplos práticos, 5) Elementos visuais para melhor compreensão.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 2,
    titulo: "Rubrica de Avaliação",
    descricao: "Critérios claros para avaliação de trabalhos",
    texto: "Desenvolva uma rubrica de avaliação para [tipo de trabalho] com: 1) 4 critérios de avaliação, 2) Escala de desempenho (0-5), 3) Descrição de cada nível, 4) Espaço para feedback qualitativo. Adapte para [disciplina/área].",
    categoria: "educação",
    favorito: false
  },
  {
    id: 3,
    titulo: "Projeto Interdisciplinar",
    descricao: "Integração de múltiplas disciplinas",
    texto: "Elabore um projeto interdisciplinar conectando [disciplina 1] e [disciplina 2] sobre [tema]. Inclua: 1) Objetivos, 2) Atividades para cada disciplina, 3) Produto final, 4) Critérios de avaliação, 5) Duração estimada.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 4,
    titulo: "Contrato de Aprendizagem",
    descricao: "Acordo entre professor e aluno",
    texto: "Crie um modelo de contrato de aprendizagem para [nível de ensino] com: 1) Metas do aluno, 2) Compromissos do professor, 3) Prazos, 4) Critérios de sucesso, 5) Espaço para assinaturas.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 5,
    titulo: "Portfólio Digital",
    descricao: "Estrutura para avaliação contínua",
    texto: "Projete um modelo de portfólio digital para [disciplina] incluindo: 1) Seções essenciais, 2) Tipos de evidências, 3) Critérios de seleção, 4) Reflexões do aluno, 5) Ferramentas digitais recomendadas.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 6,
    titulo: "Estudo de Caso Educacional",
    descricao: "Análise de situações reais",
    texto: "Desenvolva um estudo de caso sobre [tema educacional] com: 1) Contexto, 2) Problema central, 3) Dados relevantes, 4) Questões para discussão, 5) Possíveis soluções.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 7,
    titulo: "Template de Diário de Aprendizagem",
    descricao: "Registro reflexivo do aluno",
    texto: "Crie um template de diário de aprendizagem com: 1) Data, 2) Tópicos estudados, 3) Dificuldades encontradas, 4) Conquistas, 5) Metas para próxima sessão. Adapte para [idade/nível].",
    categoria: "educação",
    favorito: false
  },
  {
    id: 8,
    titulo: "Atividade de Aprendizagem Baseada em Problemas",
    descricao: "Metodologia PBL",
    texto: "Elabore uma atividade PBL sobre [tema] para [número] alunos. Inclua: 1) Cenário realista, 2) Questões norteadoras, 3) Etapas de investigação, 4) Produto final esperado, 5) Critérios de avaliação.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 9,
    titulo: "Template de Plano de AEE",
    descricao: "Atendimento Educacional Especializado",
    texto: "Desenvolva um template de plano de AEE para [tipo de necessidade] incluindo: 1) Dados do aluno, 2) Objetivos específicos, 3) Recursos necessários, 4) Adaptações curriculares, 5) Avaliação do processo.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 10,
    titulo: "Jornada de Aprendizagem Personalizada",
    descricao: "Roteiro individualizado",
    texto: "Crie uma jornada de aprendizagem personalizada para [área do conhecimento] com: 1) Diagnóstico inicial, 2) Módulos adaptáveis, 3) Checkpoints, 4) Recursos complementares, 5) Avaliação formativa.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 11,
    titulo: "Guia de Metodologias Ativas",
    descricao: "Técnicas inovadoras de ensino",
    texto: "Elabore um guia comparativo de 5 metodologias ativas incluindo: 1) Descrição, 2) Quando usar, 3) Vantagens, 4) Desafios, 5) Exemplo de aplicação em [disciplina].",
    categoria: "educação",
    favorito: false
  },
  {
    id: 12,
    titulo: "Template de Plano de Aula STEAM",
    descricao: "Abordagem integrada",
    texto: "Desenvolva um template de plano de aula STEAM sobre [tema] com: 1) Conexões entre as disciplinas, 2) Atividades mão na massa, 3) Materiais necessários, 4) Avaliação por competências, 5) Extensões possíveis.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 13,
    titulo: "Checklist de Acessibilidade em Materiais Didáticos",
    descricao: "Inclusão na educação",
    texto: "Crie uma checklist para avaliar acessibilidade em materiais didáticos considerando: 1) Visão, 2) Audição, 3) Mobilidade, 4) Cognição, 5) Adaptações específicas para [tipo de conteúdo].",
    categoria: "educação",
    favorito: false
  },
  {
    id: 14,
    titulo: "Roteiro de Debate Acadêmico",
    descricao: "Estrutura para discussões formais",
    texto: "Elabore um roteiro para debate sobre [tema polêmico] incluindo: 1) Regras, 2) Papéis dos participantes, 3) Critérios de avaliação, 4) Tempos de fala, 5) Fontes para pesquisa prévia.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 15,
    titulo: "Template de Plano de Aula para EAD",
    descricao: "Educação a Distância",
    texto: "Desenvolva um template de plano de aula para EAD com: 1) Objetivos claros, 2) Recursos digitais, 3) Interações síncronas/assíncronas, 4) Atividades interativas, 5) Formas de acompanhamento.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 16,
    titulo: "Manual de Boas Práticas em Sala de Aula",
    descricao: "Gestão do ambiente educacional",
    texto: "Crie um manual de boas práticas para [nível de ensino] incluindo: 1) Rotinas, 2) Gestão de conflitos, 3) Estratégias de engajamento, 4) Comunicação com famílias, 5) Adaptações para diferentes contextos.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 17,
    titulo: "Template de Projeto de Pesquisa Escolar",
    descricao: "Estrutura para trabalhos científicos",
    texto: "Desenvolva um template para projetos de pesquisa escolar com: 1) Tema e problema, 2) Hipóteses, 3) Metodologia, 4) Cronograma, 5) Formas de apresentação. Adapte para [nível de ensino].",
    categoria: "educação",
    favorito: false
  },
  {
    id: 18,
    titulo: "Guia de Ferramentas Digitais para Educação",
    descricao: "Tecnologias educacionais",
    texto: "Elabore um guia comparativo de 10 ferramentas digitais para [objetivo educacional] incluindo: 1) Descrição, 2) Vantagens, 3) Limitações, 4) Casos de uso, 5) Nível de dificuldade.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 19,
    titulo: "Roteiro de Aula Experimental",
    descricao: "Atividades práticas em laboratório",
    texto: "Crie um roteiro detalhado para aula experimental sobre [tema científico] com: 1) Objetivos, 2) Materiais, 3) Procedimentos passo-a-passo, 4) Questões para observação, 5) Formas de registro.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 20,
    titulo: "Template de Plano de Aula para Educação Infantil",
    descricao: "Abordagem lúdica",
    texto: "Desenvolva um template de plano de aula para educação infantil com: 1) Objetivos desenvolvimentais, 2) Atividades sensoriais, 3) Rotina flexível, 4) Materiais não estruturados, 5) Avaliação observacional.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 21,
    titulo: "Guia de Avaliação por Competências",
    descricao: "Abordagem contemporânea",
    texto: "Crie um guia para avaliação por competências em [área] incluindo: 1) Matriz de competências, 2) Indicadores de desempenho, 3) Instrumentos de avaliação, 4) Registro de progresso, 5) Feedback eficaz.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 22,
    titulo: "Template de Plano de Intervenção Pedagógica",
    descricao: "Apoio a dificuldades específicas",
    texto: "Elabore um template de plano de intervenção para [dificuldade de aprendizagem] com: 1) Diagnóstico, 2) Objetivos, 3) Estratégias, 4) Prazos, 5) Indicadores de progresso.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 23,
    titulo: "Kit de Atividades para Alfabetização",
    descricao: "Recursos para ensino fundamental",
    texto: "Desenvolva um kit com 10 atividades para alfabetização em [língua] incluindo: 1) Objetivos, 2) Materiais, 3) Instruções, 4) Adaptações, 5) Formas de avaliação.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 24,
    titulo: "Manual de Mediação de Conflitos Escolares",
    descricao: "Gestão de relacionamentos",
    texto: "Crie um manual para mediação de conflitos em [nível escolar] com: 1) Técnicas de comunicação, 2) Etapas do processo, 3) Papel do mediador, 4) Registro de casos, 5) Acompanhamento pós-conflito.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 25,
    titulo: "Template de Plano de Aula para Educação Especial",
    descricao: "Abordagem inclusiva",
    texto: "Desenvolva um template de plano de aula inclusivo com: 1) Adaptações universais, 2) Diferenciações, 3) Recursos de acessibilidade, 4) Parcerias com outros profissionais, 5) Avaliação adaptada.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 26,
    titulo: "Guia de Aprendizagem Baseada em Projetos",
    descricao: "Metodologia PjBL",
    texto: "Elabore um guia passo-a-passo para implementar PjBL sobre [tema] incluindo: 1) Definição do problema, 2) Pesquisa, 3) Prototipagem, 4) Apresentação, 5) Avaliação do processo.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 27,
    titulo: "Template de Plano de Aula Maker",
    descricao: "Cultura 'faça você mesmo'",
    texto: "Crie um template de plano de aula maker com: 1) Desafio central, 2) Materiais disponíveis, 3) Tempo para prototipagem, 4) Compartilhamento de soluções, 5) Reflexão sobre o processo.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 28,
    titulo: "Kit de Jogos Matemáticos",
    descricao: "Aprendizagem lúdica",
    texto: "Desenvolva um kit com 5 jogos para ensinar [conceito matemático] para [faixa etária] incluindo: 1) Regras, 2) Materiais, 3) Variações de dificuldade, 4) Conexão curricular, 5) Formas de avaliação.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 29,
    titulo: "Manual de Implementação de Sala de Aula Invertida",
    descricao: "Flipped classroom",
    texto: "Crie um manual para implementar sala de aula invertida em [disciplina] com: 1) Seleção de materiais pré-aula, 2) Estratégias de engajamento, 3) Atividades presenciais, 4) Avaliação contínua, 5) Solução de problemas comuns.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 30,
    titulo: "Template de Plano de Aula para Ensino Híbrido",
    descricao: "Combinação de presencial e online",
    texto: "Desenvolva um template de plano de aula híbrido com: 1) Componentes online e offline, 2) Rotações de estações, 3) Atividades síncronas e assíncronas, 4) Ferramentas digitais, 5) Avaliação integrada.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 31,
    titulo: "Guia de Aprendizagem Socioemocional",
    descricao: "Desenvolvimento de habilidades não-cognitivas",
    texto: "Elabore um guia para implementar SEL (Social-Emotional Learning) em [nível escolar] com: 1) Competências-chave, 2) Atividades por faixa etária, 3) Integração curricular, 4) Avaliação qualitativa, 5) Engajamento familiar.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 32,
    titulo: "Template de Plano de Aula para Educação de Jovens e Adultos",
    descricao: "Abordagem andragógica",
    texto: "Crie um template de plano de aula para EJA considerando: 1) Experiências prévias, 2) Contextos dos alunos, 3) Aplicação prática, 4) Flexibilidade, 5) Avaliação formativa.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 33,
    titulo: "Kit de Atividades para Educação Ambiental",
    descricao: "Conscientização ecológica",
    texto: "Desenvolva um kit com 7 atividades práticas de educação ambiental sobre [tema] incluindo: 1) Objetivos, 2) Materiais, 3) Duração, 4) Adaptações, 5) Extensões comunitárias.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 34,
    titulo: "Manual de Uso Seguro de Tecnologia na Educação",
    descricao: "Cidadania digital",
    texto: "Elabore um manual para uso seguro de tecnologia em [nível escolar] com: 1) Boas práticas, 2) Riscos comuns, 3) Configurações de privacidade, 4) Casos de estudo, 5) Protocolos para problemas.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 35,
    titulo: "Template de Plano de Aula com Realidade Aumentada",
    descricao: "Tecnologias imersivas",
    texto: "Crie um template de plano de aula utilizando RA para ensinar [conteúdo] com: 1) Aplicativos recomendados, 2) Atividades prévias, 3) Experiência imersiva, 4) Consolidação, 5) Avaliação da experiência.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 36,
    titulo: "Guia de Scaffolding Educacional",
    descricao: "Apoio temporário à aprendizagem",
    texto: "Desenvolva um guia para implementar scaffolding em [disciplina] com: 1) Diagnóstico de ZPD, 2) Estratégias de apoio, 3) Gradual release of responsibility, 4) Exemplos por nível, 5) Sinais para remoção de suportes.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 37,
    titulo: "Template de Plano de Aula com Storytelling",
    descricao: "Narrativas educativas",
    texto: "Elabore um template de plano de aula usando storytelling para ensinar [conteúdo] com: 1) Estrutura narrativa, 2) Personagens relevantes, 3) Conflito/conceito central, 4) Resolução/aplicação, 5) Atividades de extensão.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 38,
    titulo: "Kit de Experimentos Científicos para Crianças",
    descricao: "Investigações seguras",
    texto: "Crie um kit com 5 experimentos científicos seguros para [faixa etária] sobre [tema] incluindo: 1) Perguntas investigáveis, 2) Materiais acessíveis, 3) Passo-a-passo, 4) Explicações científicas, 5) Extensões.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 39,
    titulo: "Manual de Educação Financeira para Escolas",
    descricao: "Alfabetização econômica",
    texto: "Desenvolva um manual para implementar educação financeira em [nível escolar] com: 1) Conceitos-chave por idade, 2) Atividades práticas, 3) Simulações, 4) Avaliação, 5) Recursos para famílias.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 40,
    titulo: "Template de Plano de Aula com Aprendizagem Baseada em Jogos",
    descricao: "Gamificação educacional",
    texto: "Crie um template de plano de aula usando GBJ (Game-Based Learning) para [conteúdo] com: 1) Jogo selecionado/desenvolvido, 2) Objetivos de aprendizagem, 3) Regras adaptadas, 4) Reflexão pós-jogo, 5) Avaliação.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 41,
    titulo: "Guia de Feedback Eficaz na Educação",
    descricao: "Orientação para melhor desempenho",
    texto: "Elabore um guia para fornecer feedback eficaz em [contexto educacional] com: 1) Tipos de feedback, 2) Estrutura (Situation-Behavior-Impact), 3) Timing, 4) Linguagem apropriada, 5) Follow-up.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 42,
    titulo: "Template de Plano de Aula para Pensamento Computacional",
    descricao: "Habilidades do século XXI",
    texto: "Desenvolva um template de plano de aula para desenvolver pensamento computacional em [nível] com: 1) Desafios de decomposição, 2) Padrões e abstrações, 3) Algoritmos, 4) Atividades desplugadas, 5) Avaliação.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 43,
    titulo: "Kit de Atividades para Educação Emocional",
    descricao: "Inteligência emocional",
    texto: "Crie um kit com 8 atividades para desenvolver educação emocional em [faixa etária] incluindo: 1) Identificação de emoções, 2) Regulação, 3) Empatia, 4) Habilidades sociais, 5) Diário emocional.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 44,
    titulo: "Manual de Mediação de Leitura",
    descricao: "Formação de leitores",
    texto: "Elabore um manual para mediação de leitura em [nível] com: 1) Seleção de textos, 2) Estratégias pré-leitura, 3) Durante a leitura, 4) Pós-leitura, 5) Avaliação de compreensão e apreciação.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 45,
    titulo: "Template de Plano de Aula com Design Thinking",
    descricao: "Solução criativa de problemas",
    texto: "Desenvolva um template de plano de aula usando Design Thinking para [desafio] com: 1) Fase de empatia, 2) Definição, 3) Ideação, 4) Prototipagem, 5) Teste e feedback.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 46,
    titulo: "Guia de Aprendizagem Baseada em Competências",
    descricao: "Abordagem por domínios",
    texto: "Crie um guia para implementar ABC em [área] com: 1) Mapeamento de competências, 2) Indicadores de domínio, 3) Caminhos personalizados, 4) Avaliação contínua, 5) Certificação de competências.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 47,
    titulo: "Template de Plano de Aula para Educação Patrimonial",
    descricao: "Valorização cultural",
    texto: "Elabore um template de plano de aula para educação patrimonial sobre [tema] com: 1) Contextualização, 2) Pesquisa local, 3) Documentação, 4) Ações de preservação, 5) Divulgação.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 48,
    titulo: "Kit de Atividades para Consciência Fonológica",
    descricao: "Base para alfabetização",
    texto: "Desenvolva um kit com 10 atividades para desenvolver consciência fonológica em [idade] incluindo: 1) Rimas, 2) Aliteração, 3) Segmentação, 4) Manipulação de fonemas, 5) Jogos orais.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 49,
    titulo: "Manual de Educação em Direitos Humanos",
    descricao: "Formação cidadã",
    texto: "Crie um manual para implementar EDH em [nível escolar] com: 1) Conceitos-chave, 2) Casos reais, 3) Atividades reflexivas, 4) Projetos de ação, 5) Avaliação de impacto.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 50,
    titulo: "Template de Plano de Aula com Aprendizagem Serviço",
    descricao: "Integração com comunidade",
    texto: "Elabore um template de plano de aula usando aprendizagem serviço para [tema] com: 1) Diagnóstico comunitário, 2) Planejamento colaborativo, 3) Ação, 4) Reflexão, 5) Avaliação de impacto.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 51,
    titulo: "Guia de Diferenciação Curricular",
    descricao: "Atendimento à diversidade",
    texto: "Desenvolva um guia para diferenciação curricular em [disciplina] com: 1) Diagnóstico de perfis, 2) Adaptação de conteúdo, 3) Processo, 4) Produto, 5) Ambiente de aprendizagem.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 52,
    titulo: "Template de Plano de Aula para Educação Midática",
    descricao: "Análise crítica de mídia",
    texto: "Crie um template de plano de aula para educação midática com: 1) Análise de mensagens, 2) Produção midática, 3) Questões de representação, 4) Fontes e credibilidade, 5) Projetos de criação.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 53,
    titulo: "Kit de Atividades para Geometria Concreta",
    descricao: "Aprendizagem manipulativa",
    texto: "Elabore um kit com 5 atividades práticas para ensinar geometria para [nível] usando: 1) Materiais concretos, 2) Representações 2D-3D, 3) Medições reais, 4) Aplicações cotidianas, 5) Registros.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 54,
    titulo: "Manual de Educação para o Consumo Consciente",
    descricao: "Consumo responsável",
    texto: "Desenvolva um manual para educação consumerista com: 1) Análise de publicidade, 2) Pegada ecológica, 3) Orçamento pessoal, 4) Direitos do consumidor, 5) Projetos de intervenção.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 55,
    titulo: "Template de Plano de Aula com Peer Instruction",
    descricao: "Ensino entre pares",
    texto: "Crie um template de plano de aula usando peer instruction para [tema] com: 1) Conceito-test, 2) Discussão em pares, 3) Votação, 4) Explicação do professor, 5) Aplicação.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 56,
    titulo: "Guia de Avaliação Autêntica",
    descricao: "Tarefas do mundo real",
    texto: "Elabore um guia para criar avaliações autênticas em [área] com: 1) Contextos reais, 2) Critérios profissionais, 3) Rubricas, 4) Feedback formativo, 5) Portfólios.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 57,
    titulo: "Template de Plano de Aula para Educação Alimentar",
    descricao: "Hábitos saudáveis",
    texto: "Desenvolva um template de plano de aula para educação alimentar com: 1) Grupos alimentares, 2) Rótulos nutricionais, 3) Culinária educativa, 4) Sustentabilidade, 5) Avaliação de hábitos.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 58,
    titulo: "Kit de Atividades para Educação no Trânsito",
    descricao: "Segurança viária",
    texto: "Crie um kit com 6 atividades para educação no trânsito para [faixa etária] incluindo: 1) Sinalização, 2) Papéis (pedestre, ciclista), 3) Simulações, 4) Projetos comunitários, 5) Avaliação.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 59,
    titulo: "Manual de Educação para a Paz",
    descricao: "Resolução não-violenta",
    texto: "Elabore um manual para educação para a paz com: 1) Comunicação não-violenta, 2) Mediação de conflitos, 3) Justiça restaurativa, 4) Projetos escolares, 5) Avaliação de clima escolar.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 60,
    titulo: "Template de Plano de Aula com Estudo do Meio",
    descricao: "Aprendizagem fora da sala",
    texto: "Desenvolva um template de plano de aula para estudo do meio em [local] com: 1) Preparação, 2) Roteiro de observação, 3) Registros, 4) Análise pós-visita, 5) Produto final.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 61,
    titulo: "Guia de Metacognição na Aprendizagem",
    descricao: "Consciência do aprender",
    texto: "Crie um guia para desenvolver metacognição em [nível] com: 1) Diários reflexivos, 2) Planejamento de estudo, 3) Autoavaliação, 4) Estratégias de aprendizagem, 5) Transferência.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 62,
    titulo: "Template de Plano de Aula para Educação Cinematográfica",
    descricao: "Análise fílmica",
    texto: "Elabore um template de plano de aula usando filmes para ensinar [conteúdo] com: 1) Seleção de cenas, 2) Contextualização, 3) Elementos narrativos, 4) Análise crítica, 5) Produção estudantil.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 63,
    titulo: "Kit de Atividades para Lógica Matemática",
    descricao: "Raciocínio dedutivo",
    texto: "Desenvolva um kit com 7 atividades para desenvolver lógica matemática em [nível] incluindo: 1) Sequências, 2) Classificações, 3) Padrões, 4) Problemas abertos, 5) Jogos estratégicos.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 64,
    titulo: "Manual de Educação para Igualdade de Gênero",
    descricao: "Equidade na escola",
    texto: "Crie um manual para promover igualdade de gênero em [contexto] com: 1) Linguagem inclusiva, 2) Análise de materiais, 3) Dinâmicas reflexivas, 4) Projetos, 5) Avaliação de ambiente.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 65,
    titulo: "Template de Plano de Aula com Aprendizagem Expedicionária",
    descricao: "Exploração guiada",
    texto: "Elabore um template de plano de aula usando aprendizagem expedicionária para [tema] com: 1) Preparação, 2) Expedição (virtual/presencial), 3) Documentação, 4) Análise, 5) Compartilhamento.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 66,
    titulo: "Guia de Educação para o Empreendedorismo",
    descricao: "Habilidades empreendedoras",
    texto: "Desenvolva um guia para educação empreendedora com: 1) Identificação de oportunidades, 2) Modelos de negócio, 3) Prototipagem, 4) Pitch, 5) Avaliação de viabilidade.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 67,
    titulo: "Template de Plano de Aula para Educação Musical",
    descricao: "Expressão sonora",
    texto: "Crie um template de plano de aula para educação musical com: 1) Exploração sonora, 2) Elementos musicais, 3) Criação coletiva, 4) Contextualização cultural, 5) Apresentação.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 68,
    titulo: "Kit de Atividades para Educação Fiscal",
    descricao: "Cidadania tributária",
    texto: "Elabore um kit com 5 atividades para educação fiscal incluindo: 1) Orçamento público, 2) Nota fiscal, 3) Impostos e serviços, 4) Simulações, 5) Ações comunitárias.",
    categoria: "educação",
    favorito: false
  },
  {
    id: 69,
    titulo: "Manual de Educação para o Uso Consciente da Água",
    descricao: "Conservação hídrica",
    texto: "Desenvolva um manual para educação hídrica com: 1) Ciclo da água, 2) Pegada hídrica, 3) Conservação, 4) Projetos de reúso, 5) Monitoramento escolar.",
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
      favorito: false
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
  saúde: [
  {
    id: 25,
    titulo: "Guia de Meditação para Iniciantes",
    descricao: "Rotina de mindfulness para redução de estresse",
    texto: "Crie um programa de meditação de [21 dias] para iniciantes com sessões de [5-20 minutos]. Inclua: 1) Técnicas de respiração, 2) Tipos de meditação (focalizada, body scan etc), 3) Playlist sugerida, 4) Dicas para criar hábito, 5) Soluções para dificuldades comuns.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 26,
    titulo: "Check-up Preventivo Personalizado",
    descricao: "Lista de exames por faixa etária e perfil",
    texto: "Elabore um cronograma de check-ups médicos para [homem/mulher] de [idade] anos com histórico de [listar]. Inclua: 1) Exames essenciais, 2) Frequência recomendada, 3) Sinais de alerta, 4) Especialistas para consultar, 5) Cuidados pré-exames.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 27,
    titulo: "Desafio de Hidratação",
    descricao: "Plano para aumentar consumo de água diário",
    texto: "Desenvolva um desafio de [30 dias] para atingir [X] litros de água/dia. Inclua: 1) Cálculo personalizado por peso, 2) Métodos de acompanhamento, 3) Infusões saborosas, 4) Lembretes estratégicos, 5) Benefícios por semana.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 28,
    titulo: "Guia de Alongamento para Sedentários",
    descricao: "Sequências para quem passa muito tempo sentado",
    texto: "Crie uma rotina de [10-15 minutos] de alongamentos para pessoas que trabalham [X horas] sentadas. Inclua: 1) Exercícios para coluna, 2) Alívio de tensão cervical, 3) Alongamentos rápidos no escritório, 4) Frequência ideal, 5) Erros comuns a evitar.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 29,
    titulo: "Plano de Transição para Vegetarianos",
    descricao: "Guia passo-a-passo para mudança alimentar",
    texto: "Elabore um plano de [8 semanas] para transição ao vegetarianismo. Inclua: 1) Substituições proteicas, 2) Lista de nutrientes-chave, 3) Receitas semanais, 4) Como lidar com desafios sociais, 5) Suplementos recomendados.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 30,
    titulo: "Rotina de Skincare Científica",
    descricao: "Protocolo de cuidados com a pele baseado em evidências",
    texto: "Desenvolva uma rotina de skincare para pele [oleosa/seca/mista] com preocupações de [acne/envelhecimento/manchas]. Inclua: 1) Produtos essenciais, 2) Ordem de aplicação, 3) Ingredientes ativos chave, 4) Frequência de uso, 5) Quando consultar um dermatologista.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 31,
    titulo: "Guia de Suplementação Esportiva",
    descricao: "Protocolo seguro para diferentes objetivos",
    texto: "Crie um guia de suplementos para [objetivo: performance/emagrecimento/hipertrofia]. Inclua: 1) Suplementos base, 2) Dosagens, 3) Timing ideal, 4) Combinações eficazes, 5) Marcadores para avaliar eficácia.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 32,
    titulo: "Programa de Postura Corporal",
    descricao: "Exercícios corretivos para melhorar alinhamento",
    texto: "Desenvolva um programa de [6 semanas] para corrigir [má postura específica]. Inclua: 1) Exercícios diários, 2) Conscientização postural, 3) Adaptações ergonômicas, 4) Progressão de dificuldade, 5) Sinais de melhora.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 33,
    titulo: "Plano de Gestão do Estresse",
    descricao: "Estratégias baseadas em evidências para ansiedade",
    texto: "Crie um protocolo de [30 dias] para redução de estresse crônico. Inclua: 1) Técnicas de respiração, 2) Adaptações nutricionais, 3) Rotina de sono, 4) Exercícios específicos, 5) Ferramentas de monitoramento.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 34,
    titulo: "Guia de Saúde Intestinal",
    descricao: "Protocolo para melhorar microbioma e digestão",
    texto: "Elabore um plano de [4 semanas] para saúde intestinal. Inclua: 1) Alimentos prebióticos/probióticos, 2) Hábitos digestivos, 3) Sinais de desequilíbrio, 4) Suplementos úteis, 5) Métodos de avaliação progresso.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 35,
    titulo: "Programa de Reabilitação para Lesões",
    descricao: "Protocolo seguro de recuperação ativa",
    texto: "Desenvolva um plano de reabilitação para [tipo de lesão] com duração de [X semanas]. Inclua: 1) Exercícios progressivos, 2) Sinais de alerta, 3) Adaptações diárias, 4) Tempo de recuperação esperado, 5) Quando retomar atividades normais.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 36,
    titulo: "Guia de Saúde Ocular Digital",
    descricao: "Proteção para usuários de telas",
    texto: "Crie um protocolo de [7 dias] para reduzir fadiga ocular digital. Inclua: 1) Exercícios oculares, 2) Configurações ideais de tela, 3) Suplementos nutricionais, 4) Hábitos protetores, 5) Quando procurar especialista.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 37,
    titulo: "Plano de Desintoxicação Digital",
    descricao: "Redução consciente do uso tecnológico",
    texto: "Elabore um programa de [21 dias] para reduzir dependência digital. Inclua: 1) Metas progressivas, 2) Alternativas offline, 3) Gestão de notificações, 4) Benefícios esperados por fase, 5) Métricas de sucesso.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 38,
    titulo: "Guia de Saúde Masculina Preventiva",
    descricao: "Checklist por faixa etária",
    texto: "Desenvolva um guia de saúde preventiva para homens de [idade]. Inclua: 1) Exames essenciais, 2) Sinais precoces de alerta, 3) Hábitos protetores, 4) Fatores de risco modificáveis, 5) Especialistas recomendados.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 39,
    titulo: "Protocolo de Sono Restaurador",
    descricao: "Otimização do ciclo circadiano",
    texto: "Crie um plano de [14 dias] para melhorar qualidade do sono. Inclua: 1) Rotina pré-sono, 2) Ambiente ideal, 3) Alimentação noturna, 4) Técnicas de relaxamento, 5) Métodos para medir progresso.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 40,
    titulo: "Guia de Saúde da Mulher",
    descricao: "Cuidados específicos por fase hormonal",
    texto: "Elabore um guia de saúde feminina para [idade/fase]. Inclua: 1) Ciclo hormonal, 2) Necessidades nutricionais, 3) Exercícios recomendados, 4) Rastreios preventivos, 5) Sinais de desequilíbrio.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 41,
    titulo: "Plano de Prevenção de Doenças Crônicas",
    descricao: "Estratégias baseadas em evidências",
    texto: "Desenvolva um protocolo de [12 semanas] para redução de risco de [doença]. Inclua: 1) Fatores modificáveis, 2) Hábitos protetores, 3) Marcadores biológicos, 4) Acompanhamento profissional, 5) Métricas de sucesso.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 42,
    titulo: "Guia de Saúde Mental no Trabalho",
    descricao: "Estratégias para equilíbrio emocional profissional",
    texto: "Crie um programa de [30 dias] para saúde mental no ambiente de trabalho. Inclua: 1) Técnicas de gerenciamento de estresse, 2) Limites saudáveis, 3) Comunicação assertiva, 4) Prevenção de burnout, 5) Recursos de apoio.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 43,
    titulo: "Protocolo de Jejum Intermitente Seguro",
    descricao: "Guias para diferentes protocolos",
    texto: "Elabore um plano de [4 semanas] de jejum intermitente para [objetivo]. Inclua: 1) Protocolos disponíveis, 2) Adaptação progressiva, 3) Alimentação nas janelas, 4) Contraindicações, 5) Métricas de acompanhamento.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 44,
    titulo: "Guia de Saúde Cardiovascular",
    descricao: "Estratégias para coração saudável",
    texto: "Desenvolva um programa de [8 semanas] para saúde cardiovascular. Inclua: 1) Exercícios específicos, 2) Alimentos protetores, 3) Monitoramento de marcadores, 4) Redução de fatores de risco, 5) Sinais de alerta.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 45,
    titulo: "Plano de Controle de Alergias",
    descricao: "Gestão de alergias sazonais/alimentares",
    texto: "Crie um protocolo para controle de [tipo de alergia]. Inclua: 1) Evitamento de gatilhos, 2) Medicação preventiva, 3) Plano de ação para crises, 4) Alimentos/ambientes seguros, 5) Quando buscar ajuda emergencial.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 46,
    titulo: "Guia de Saúde Óssea",
    descricao: "Prevenção de osteoporose e fraturas",
    texto: "Elabore um programa de [12 semanas] para saúde óssea. Inclua: 1) Exercícios de impacto, 2) Nutrientes essenciais, 3) Fatores de risco, 4) Exames preventivos, 5) Adaptações domiciliares.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 47,
    titulo: "Protocolo para Parar de Fumar",
    descricao: "Plano passo-a-passo baseado em evidências",
    texto: "Desenvolva um programa de [8 semanas] para cessação tabágica. Inclua: 1) Estratégias comportamentais, 2) Terapias de reposição, 3) Lidando com recaídas, 4) Benefícios temporais, 5) Apoio profissional.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 48,
    titulo: "Guia de Saúde para Viajantes",
    descricao: "Preparação para diferentes destinos",
    texto: "Crie um checklist de saúde para viagem a [tipo de destino]. Inclua: 1) Vacinas necessárias, 2) Kit médico básico, 3) Precauções alimentares, 4) Seguro saúde, 5) Fontes de atendimento local.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 49,
    titulo: "Plano de Gestão de Dor Crônica",
    descricao: "Abordagem multimodal para alívio",
    texto: "Elabore um protocolo de [12 semanas] para gestão de [tipo de dor]. Inclua: 1) Abordagens não-farmacológicas, 2) Exercícios adaptados, 3) Técnicas mente-corpo, 4) Diário de dor, 5) Quando procurar especialista.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 50,
    titulo: "Guia de Saúde para Home Office",
    descricao: "Equilíbrio e ergonomia no trabalho remoto",
    texto: "Desenvolva um protocolo de [7 dias] para saúde no home office. Inclua: 1) Setup ergonômico, 2) Pausas ativas, 3) Gestão de tempo, 4) Limites trabalho-vida pessoal, 5) Check-list diário.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 51,
    titulo: "Plano de Prevenção de Quedas para Idosos",
    descricao: "Exercícios e adaptações domiciliares",
    texto: "Crie um programa de [6 semanas] para redução de risco de quedas. Inclua: 1) Exercícios de equilíbrio, 2) Adaptações na casa, 3) Calçados seguros, 4) Avaliação de medicação, 5) Plano de ação em caso de queda.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 52,
    titulo: "Guia de Saúde para Pessoas com Diabetes",
    descricao: "Gestão diária da glicemia",
    texto: "Elabore um plano de [30 dias] para controle glicêmico. Inclua: 1) Monitoramento, 2) Alimentação, 3) Atividade física, 4) Medicação, 5) Prevenção de complicações.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 53,
    titulo: "Protocolo de Saúde da Tireoide",
    descricao: "Abordagem integrativa para disfunções",
    texto: "Desenvolva um plano de [8 semanas] para saúde tireoidiana. Inclua: 1) Nutrientes essenciais, 2) Alimentos a evitar, 3) Controle de estresse, 4) Exames necessários, 5) Sinais de desequilíbrio.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 54,
    titulo: "Guia de Saúde Bucal Completa",
    descricao: "Rotina além da escovação",
    texto: "Crie um protocolo diário de saúde bucal. Inclua: 1) Técnicas de escovação, 2) Uso do fio dental, 3) Escolha de produtos, 4) Sinais de alerta, 5) Frequência de check-ups.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 55,
    titulo: "Plano de Recuperação Pós-Treino",
    descricao: "Otimização da regeneração muscular",
    texto: "Elabore um protocolo de [24-48h] para recuperação pós-exercício. Inclua: 1) Alimentação, 2) Sono, 3) Técnicas de relaxamento, 4) Suplementos, 5) Sinais de recuperação adequada.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 56,
    titulo: "Guia de Saúde para Gestantes",
    descricao: "Cuidados por trimestre",
    texto: "Desenvolva um plano de saúde para gestação de [X] semanas. Inclua: 1) Nutrição, 2) Exercícios seguros, 3) Exames por fase, 4) Preparação para parto, 5) Sinais de alerta.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 57,
    titulo: "Protocolo de Saúde para Menopausa",
    descricao: "Gestão de sintomas climatéricos",
    texto: "Crie um plano de [12 semanas] para alívio de sintomas da menopausa. Inclua: 1) Terapias hormonais/não-hormonais, 2) Adaptações nutricionais, 3) Exercícios recomendados, 4) Saúde óssea, 5) Acompanhamento médico.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 58,
    titulo: "Guia de Saúde para Adolescentes",
    descricao: "Cuidados específicos para essa fase",
    texto: "Elabore um guia de saúde para adolescentes de [idade]. Inclua: 1) Desenvolvimento físico, 2) Saúde mental, 3) Nutrição, 4) Prevenção de riscos, 5) Check-ups necessários.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 59,
    titulo: "Plano de Saúde para Pessoas com Hipertensão",
    descricao: "Gestão diária da pressão arterial",
    texto: "Desenvolva um protocolo de [4 semanas] para controle da hipertensão. Inclua: 1) Monitoramento, 2) Redução de sódio, 3) Exercícios seguros, 4) Gestão de estresse, 5) Sinais de alerta.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 60,
    titulo: "Guia de Saúde para Atletas Amadores",
    descricao: "Otimização de performance e recuperação",
    texto: "Crie um plano de [8 semanas] para atletas amadores de [esporte]. Inclua: 1) Periodização, 2) Nutrição esportiva, 3) Prevenção de lesões, 4) Recuperação, 5) Avaliação de progresso.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 61,
    titulo: "Protocolo de Saúde para Trabalhadores Noturnos",
    descricao: "Adaptações para turnos noturnos",
    texto: "Elabore um plano de [7 dias] para saúde de trabalhadores noturnos. Inclua: 1) Gestão do sono, 2) Alimentação, 3) Exposição à luz, 4) Atividade física, 5) Check-ups específicos.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 62,
    titulo: "Guia de Saúde para Pessoas com Ansiedade",
    descricao: "Estratégias diárias de manejo",
    texto: "Desenvolva um protocolo de [30 dias] para redução de sintomas ansiosos. Inclua: 1) Técnicas respiratórias, 2) Exercícios físicos, 3) Adaptações nutricionais, 4) Rotina de sono, 5) Quando buscar ajuda.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 63,
    titulo: "Plano de Saúde para Pessoas com Doenças Autoimunes",
    descricao: "Gestão de sintomas e qualidade de vida",
    texto: "Crie um protocolo de [12 semanas] para [doença autoimune]. Inclua: 1) Dieta anti-inflamatória, 2) Controle de estresse, 3) Exercícios adaptados, 4) Monitoramento de sintomas, 5) Acompanhamento médico.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 64,
    titulo: "Guia de Saúde para Pessoas com Insônia",
    descricao: "Estratégias para melhorar o sono",
    texto: "Elabore um plano de [14 dias] para tratamento da insônia. Inclua: 1) Higiene do sono, 2) Restrição de sono, 3) Técnicas de relaxamento, 4) Controle de estímulos, 5) Quando considerar medicação.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 65,
    titulo: "Protocolo de Saúde para Pessoas com Refluxo",
    descricao: "Gestão diária dos sintomas",
    texto: "Desenvolva um plano de [4 semanas] para controle do refluxo gastroesofágico. Inclua: 1) Modificações dietéticas, 2) Posicionamento, 3) Medicação, 4) Sinais de alerta, 5) Quando procurar especialista.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 66,
    titulo: "Guia de Saúde para Pessoas com Colesterol Alto",
    descricao: "Redução natural de LDL",
    texto: "Crie um protocolo de [8 semanas] para controle do colesterol. Inclua: 1) Alimentos funcionais, 2) Exercícios específicos, 3) Suplementos, 4) Monitoramento, 5) Metas realistas.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 67,
    titulo: "Plano de Saúde para Pessoas com Artrite",
    descricao: "Gestão da dor e mobilidade",
    texto: "Elabore um programa de [6 semanas] para alívio dos sintomas de artrite. Inclua: 1) Exercícios de baixo impacto, 2) Terapias de calor/frio, 3) Alimentos anti-inflamatórios, 4) Proteção articular, 5) Adaptações domiciliares.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 68,
    titulo: "Guia de Saúde para Pessoas com Asma",
    descricao: "Controle de crises e prevenção",
    texto: "Desenvolva um plano de ação para asma. Inclua: 1) Identificação de gatilhos, 2) Uso correto de medicação, 3) Exercícios respiratórios, 4) Plano para crises, 5) Quando buscar ajuda emergencial.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 69,
    titulo: "Protocolo de Saúde para Pessoas com Enxaqueca",
    descricao: "Prevenção e manejo de crises",
    texto: "Crie um plano de [30 dias] para redução de episódios de enxaqueca. Inclua: 1) Identificação de gatilhos, 2) Diário de dor, 3) Terapias não-farmacológicas, 4) Medicação preventiva, 5) Sinais de alerta.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 70,
    titulo: "Guia de Saúde para Pessoas com Síndrome do Intestino Irritável",
    descricao: "Gestão dos sintomas digestivos",
    texto: "Elabore um protocolo de [4 semanas] para SII. Inclua: 1) Dieta FODMAP, 2) Controle de estresse, 3) Probióticos, 4) Monitoramento de sintomas, 5) Quando procurar especialista.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 71,
    titulo: "Plano de Saúde para Pessoas com Fibromialgia",
    descricao: "Melhora da qualidade de vida",
    texto: "Desenvolva um programa de [12 semanas] para manejo da fibromialgia. Inclua: 1) Exercícios graduais, 2) Terapias mente-corpo, 3) Controle da dor, 4) Sono reparador, 5) Apoio psicológico.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 72,
    titulo: "Guia de Saúde para Pessoas com Apneia do Sono",
    descricao: "Melhora da qualidade do sono",
    texto: "Crie um protocolo de [30 dias] para apneia do sono. Inclua: 1) Posições para dormir, 2) Perda de peso, 3) Uso de CPAP, 4) Exercícios respiratórios, 5) Monitoramento de sintomas.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 73,
    titulo: "Protocolo de Saúde para Pessoas com Osteoporose",
    descricao: "Fortalecimento ósseo e prevenção de fraturas",
    texto: "Elabore um plano de [6 meses] para saúde óssea. Inclua: 1) Exercícios seguros, 2) Suplementação, 3) Nutrição, 4) Prevenção de quedas, 5) Monitoramento de densidade óssea.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 74,
    titulo: "Guia de Saúde para Pessoas com Depressão",
    descricao: "Estratégias complementares ao tratamento",
    texto: "Desenvolva um protocolo de [8 semanas] para apoio no tratamento da depressão. Inclua: 1) Atividade física, 2) Exposição à luz, 3) Rotina saudável, 4) Conexão social, 5) Sinais de alerta.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 75,
    titulo: "Plano de Saúde para Pessoas com TDAH",
    descricao: "Estratégias para organização e foco",
    texto: "Crie um programa de [30 dias] para adultos com TDAH. Inclua: 1) Técnicas de organização, 2) Gestão do tempo, 3) Adaptações nutricionais, 4) Exercícios específicos, 5) Quando considerar medicação.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 76,
    titulo: "Guia de Saúde para Pessoas com Doença de Crohn",
    descricao: "Gestão dos sintomas e qualidade de vida",
    texto: "Elabore um protocolo de [4 semanas] para doença de Crohn. Inclua: 1) Dieta durante remissão/crises, 2) Controle de estresse, 3) Monitoramento nutricional, 4) Sinais de alerta, 5) Acompanhamento médico.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 77,
    titulo: "Protocolo de Saúde para Pessoas com Psoríase",
    descricao: "Cuidados com a pele e controle de sintomas",
    texto: "Desenvolva um plano de [12 semanas] para psoríase. Inclua: 1) Cuidados com a pele, 2) Banhos terapêuticos, 3) Controle de gatilhos, 4) Terapias tópicas, 5) Quando procurar dermatologista.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 78,
    titulo: "Guia de Saúde para Pessoas com Lúpus",
    descricao: "Gestão da doença e qualidade de vida",
    texto: "Crie um protocolo de [30 dias] para lúpus eritematoso. Inclua: 1) Proteção solar, 2) Controle de fadiga, 3) Exercícios adaptados, 4) Dieta anti-inflamatória, 5) Monitoramento de sintomas.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 79,
    titulo: "Plano de Saúde para Pessoas com Esclerose Múltipla",
    descricao: "Manutenção da função e qualidade de vida",
    texto: "Elabore um programa de [12 semanas] para EM. Inclua: 1) Exercícios adaptados, 2) Controle da fadiga, 3) Adaptações domiciliares, 4) Suporte emocional, 5) Acompanhamento multidisciplinar.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 80,
    titulo: "Guia de Saúde para Pessoas com Parkinson",
    descricao: "Manutenção da mobilidade e função",
    texto: "Desenvolva um protocolo de [6 semanas] para doença de Parkinson. Inclua: 1) Exercícios específicos, 2) Adaptações nutricionais, 3) Segurança domiciliar, 4) Fonoaudiologia, 5) Acompanhamento neurológico.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 81,
    titulo: "Protocolo de Saúde para Pessoas com Alzheimer",
    descricao: "Cuidados e estimulação cognitiva",
    texto: "Crie um plano de [30 dias] para pacientes com Alzheimer. Inclua: 1) Atividades de estimulação, 2) Segurança domiciliar, 3) Rotina estruturada, 4) Cuidado do cuidador, 5) Apoio profissional.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 82,
    titulo: "Guia de Saúde para Pessoas com Doença Cardíaca",
    descricao: "Reabilitação e prevenção secundária",
    texto: "Elabore um programa de [12 semanas] para reabilitação cardíaca. Inclua: 1) Exercícios supervisionados, 2) Dieta cardioprotetora, 3) Controle de fatores de risco, 4) Medicação, 5) Sinais de alerta.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 83,
    titulo: "Plano de Saúde para Pessoas com Doença Pulmonar Obstrutiva Crônica",
    descricao: "Melhora da capacidade respiratória",
    texto: "Desenvolva um protocolo de [8 semanas] para DPOC. Inclua: 1) Exercícios respiratórios, 2) Conservação de energia, 3) Oxigenoterapia, 4) Prevenção de infecções, 5) Reabilitação pulmonar.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 84,
    titulo: "Guia de Saúde para Pessoas com Câncer",
    descricao: "Suporte durante o tratamento",
    texto: "Crie um plano de [X semanas] para pacientes em tratamento oncológico. Inclua: 1) Manejo de efeitos colaterais, 2) Nutrição adaptada, 3) Atividade física segura, 4) Suporte emocional, 5) Comunicação com equipe médica.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 85,
    titulo: "Protocolo de Saúde para Sobreviventes de Câncer",
    descricao: "Monitoramento e qualidade de vida pós-tratamento",
    texto: "Elabore um plano de [6 meses] para sobreviventes de câncer. Inclua: 1) Rastreamento de recidiva, 2) Reabilitação, 3) Controle de efeitos tardios, 4) Retorno às atividades, 5) Apoio psicológico.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 86,
    titulo: "Guia de Saúde para Pessoas com HIV",
    descricao: "Gestão da saúde e adesão ao tratamento",
    texto: "Desenvolva um protocolo de [12 semanas] para pessoas vivendo com HIV. Inclua: 1) Adesão à TARV, 2) Monitoramento imunológico, 3) Prevenção de comorbidades, 4) Saúde mental, 5) Direitos e apoio.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 87,
    titulo: "Plano de Saúde para Transplantados",
    descricao: "Cuidados pós-transplante",
    texto: "Crie um programa de [6 meses] para pacientes transplantados. Inclua: 1) Adesão à imunossupressão, 2) Prevenção de infecções, 3) Sinais de rejeição, 4) Retorno às atividades, 5) Acompanhamento multidisciplinar.",
    categoria: "saúde",
    favorito: false
  },
  {
    id: 88,
    titulo: "Guia de Saúde para Pessoas com Doenças Raras",
    descricao: "Gestão de condições específicas",
    texto: "Elabore um plano de cuidados para [doença rara]. Inclua: 1) Monitoramento de sintomas, 2) Rede de apoio, 3) Tratamentos disponíveis, 4) Direitos do paciente, 5) Centros de referência.",
    categoria: "saúde",
    favorito: false
  },
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
      favorito: false
    }
  ],
  tecnologia: [
  {
    id: 1,
    titulo: "Evolução Histórica",
    descricao: "Linha do tempo de desenvolvimento tecnológico",
    texto: "Descreva a evolução histórica de [tecnologia/área] desde seu surgimento até os dias atuais. Destaque: 1) Marcos importantes, 2) Principais inovações, 3) Impacto na sociedade, 4) Tendências futuras. Compare com tecnologias concorrentes/sucessoras.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 2,
    titulo: "Guia de Implementação",
    descricao: "Como adotar uma nova tecnologia",
    texto: "Crie um plano detalhado para implementar [tecnologia] em uma empresa de [porte/segmento]. Inclua: 1) Análise de viabilidade, 2) Requisitos técnicos, 3) Fases de implantação, 4) Treinamento de equipe, 5) Métricas de sucesso. Considere os desafios específicos de [indústria].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 3,
    titulo: "Análise de Impacto",
    descricao: "Efeitos sociais de inovações tecnológicas",
    texto: "Analise o impacto social de [tecnologia] em [área/segmento]. Explore: 1) Mudanças no mercado de trabalho, 2) Implicações éticas, 3) Vantagens para grupos específicos, 4) Riscos potenciais, 5) Regulamentações necessárias. Proponha soluções para minimizar efeitos negativos.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 4,
    titulo: "Guia de Segurança",
    descricao: "Proteção em ambientes digitais",
    texto: "Elabore um manual completo de segurança digital para [público-alvo]. Aborde: 1) Principais ameaças atuais, 2) Ferramentas essenciais, 3) Boas práticas, 4) Protocolos de emergência, 5) Atualizações necessárias. Adapte para necessidades específicas de [setor/uso].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 5,
    titulo: "Futuro da Tecnologia",
    descricao: "Previsões e tendências emergentes",
    texto: "Descreva as principais tendências tecnológicas para [área/indústria] nos próximos [X] anos. Inclua: 1) Tecnologias promissoras, 2) Investimentos esperados, 3) Mudanças no comportamento do usuário, 4) Desafios de adoção, 5) Impacto potencial no mercado. Baseie-se em dados recentes de [fonte confiável].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 6,
    titulo: "Otimização de Performance",
    descricao: "Melhorando eficiência tecnológica",
    texto: "Apresente estratégias para otimizar o desempenho de [sistema/aplicação]. Detalhe: 1) Métricas-chave a monitorar, 2) Ferramentas de análise, 3) Técnicas de ajuste, 4) Casos de sucesso, 5) Armadilhas comuns. Adapte para ambiente [cloud/on-premise/híbrido].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 7,
    titulo: "Migração de Sistemas",
    descricao: "Transição entre tecnologias",
    texto: "Elabore um plano de migração de [sistema antigo] para [novo sistema]. Considere: 1) Compatibilidade, 2) Tempo de inatividade aceitável, 3) Transferência de dados, 4) Treinamento, 5) Rollback em caso de falha. Especifique para ambiente [específico].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 8,
    titulo: "Análise de Arquitetura",
    descricao: "Estruturas de sistemas tecnológicos",
    texto: "Compare arquiteturas de [sistema A] versus [sistema B] para [tipo de aplicação]. Avalie: 1) Escalabilidade, 2) Tolerância a falhas, 3) Complexidade, 4) Custos operacionais, 5) Casos de uso ideais. Recomende a melhor opção para [cenário específico].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 9,
    titulo: "Guia de Integração",
    descricao: "Conectando sistemas diferentes",
    texto: "Explique como integrar [sistema A] com [sistema B] usando [tecnologia/metodologia]. Descreva: 1) Pré-requisitos, 2) Protocolos compatíveis, 3) Fluxo de dados, 4) Tratamento de erros, 5) Monitoramento pós-integração. Inclua exemplos para [caso de uso].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 10,
    titulo: "Benchmarking Tecnológico",
    descricao: "Comparação de desempenho",
    texto: "Realize um benchmarking entre [X] soluções para [problema específico]. Teste: 1) Velocidade/eficiência, 2) Consumo de recursos, 3) Facilidade de uso, 4) Custo-benefício, 5) Suporte. Apresente resultados em tabelas comparativas e recomende a melhor opção para [tipo de usuário].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 11,
    titulo: "Guia de Privacidade",
    descricao: "Proteção de dados pessoais",
    texto: "Crie um manual completo sobre privacidade digital para [público-alvo]. Aborde: 1) Configurações essenciais, 2) Ferramentas de anonimato, 3) Gerenciamento de cookies, 4) Proteção contra tracking, 5) Direitos legais conforme [lei específica]. Adapte para dispositivos [mobile/desktop].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 12,
    titulo: "Análise de ROI",
    descricao: "Retorno sobre investimento tecnológico",
    texto: "Calcule o ROI potencial da implementação de [tecnologia] em [tipo de negócio]. Considere: 1) Custos iniciais, 2) Economias operacionais, 3) Ganhos de produtividade, 4) Horizonte temporal, 5) Riscos. Apresente em diferentes cenários [otimista/conservador].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 13,
    titulo: "Guia de Acessibilidade",
    descricao: "Tecnologia inclusiva",
    texto: "Desenvolva diretrizes para criar soluções tecnológicas acessíveis em [área]. Inclua: 1) Padrões WCAG, 2) Ferramentas de teste, 3) Adaptações para [deficiência específica], 4) Casos de sucesso, 5) Recursos para desenvolvedores. Foque em [plataforma específica].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 14,
    titulo: "Transformação Digital",
    descricao: "Modernização de negócios",
    texto: "Elabore um roteiro de transformação digital para [tipo de empresa]. Aborde: 1) Diagnóstico inicial, 2) Tecnologias-chave, 3) Mudança cultural, 4) Fases de implementação, 5) Indicadores de sucesso. Adapte para empresas com [característica específica].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 15,
    titulo: "Análise de Vulnerabilidades",
    descricao: "Riscos em sistemas tecnológicos",
    texto: "Conduza uma avaliação de vulnerabilidades para [sistema/aplicação]. Identifique: 1) Pontos fracos comuns, 2) Ferramentas de varredura, 3) Classificação de riscos, 4) Mitigação, 5) Monitoramento contínuo. Foque em ameaças específicas de [ambiente/setor].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 16,
    titulo: "Guia de Cloud Computing",
    descricao: "Adoção de serviços na nuvem",
    texto: "Compare modelos de cloud computing (IaaS, PaaS, SaaS) para [tipo de negócio]. Analise: 1) Custos comparativos, 2) Flexibilidade, 3) Requisitos técnicos, 4) Segurança, 5) Provedores líderes. Recomende a melhor abordagem para [caso de uso específico].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 17,
    titulo: "Automação de Processos",
    descricao: "Tecnologias RPA e similares",
    texto: "Descreva como automatizar [processo específico] usando [tecnologia]. Detalhe: 1) Pré-requisitos, 2) Fluxo de trabalho, 3) Integrações necessárias, 4) Ferramentas recomendadas, 5) ROI esperado. Adapte para setor [específico].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 18,
    titulo: "Análise de UX/UI",
    descricao: "Experiência do usuário em tecnologia",
    texto: "Avalie a interface de [aplicativo/site] sob a perspectiva de UX/UI. Considere: 1) Princípios de design, 2) Navegabilidade, 3) Acessibilidade, 4) Performance, 5) Feedback de usuários. Sugerir melhorias específicas para [público-alvo].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 19,
    titulo: "Guia de IoT",
    descricao: "Internet das Coisas aplicada",
    texto: "Explique como implementar solução IoT para [problema específico]. Descreva: 1) Arquitetura necessária, 2) Sensores/dispositivos, 3) Plataformas de análise, 4) Segurança, 5) Casos reais similares. Adapte para ambiente [industrial/doméstico].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 20,
    titulo: "Tendências em DevOps",
    descricao: "Práticas modernas de desenvolvimento",
    texto: "Descreva as principais tendências em DevOps para [ano]. Aborde: 1) Novas ferramentas, 2) Mudanças culturais, 3) Integração com outras metodologias, 4) Impacto na entrega contínua, 5) Estudos de caso relevantes. Foque em aplicações para [tipo de empresa].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 21,
    titulo: "Guia de Blockchain",
    descricao: "Aplicações além de criptomoedas",
    texto: "Explore usos práticos de blockchain em [indústria]. Detalhe: 1) Problemas resolvidos, 2) Implementação técnica, 3) Custos, 4) Limitações atuais, 5) Projetos pioneiros. Compare com soluções tradicionais.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 22,
    titulo: "Análise de Dados",
    descricao: "Técnicas de data science aplicadas",
    texto: "Descreva uma metodologia para analisar [tipo de dados] visando [objetivo]. Inclua: 1) Coleta/preparação, 2) Ferramentas, 3) Algoritmos relevantes, 4) Visualização, 5) Interpretação de resultados. Adapte para contexto [específico].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 23,
    titulo: "Guia de 5G",
    descricao: "Aplicações da nova geração móvel",
    texto: "Explique o impacto do 5G em [setor]. Aborde: 1) Vantagens técnicas, 2) Casos de uso inovadores, 3) Requisitos de infraestrutura, 4) Linha do tempo de adoção, 5) Comparação com gerações anteriores.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 24,
    titulo: "Computação Quântica",
    descricao: "Fundamentos e aplicações práticas",
    texto: "Introduza computação quântica para [público-alvo]. Explique: 1) Princípios básicos, 2) Diferenças para computação clássica, 3) Aplicações promissoras, 4) Limitações atuais, 5) Principais players no campo.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 27,
    titulo: "Realidade Aumentada",
    descricao: "Tecnologias AR aplicadas",
    texto: "Descreva a implementação de solução AR para [finalidade]. Detalhe: 1) Hardware necessário, 2) Plataformas de desenvolvimento, 3) Desafios técnicos, 4) Experiência do usuário, 5) Exemplos bem-sucedidos.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 28,
    titulo: "Gestão de TI",
    descricao: "Administração de departamentos tecnológicos",
    texto: "Apresente melhores práticas para gerenciar um departamento de TI em [tipo de empresa]. Aborde: 1) Estrutura de equipe, 2) Orçamento, 3) KPIs, 4) Relacionamento com outros departamentos, 5) Inovação contínua.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 29,
    titulo: "Cibersegurança",
    descricao: "Proteção contra ameaças digitais",
    texto: "Elabore um plano de defesa cibernética para [tipo de organização]. Inclua: 1) Avaliação de riscos, 2) Camadas de proteção, 3) Treinamento de pessoal, 4) Resposta a incidentes, 5) Conformidade com [lei/regulamento].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 30,
    titulo: "Inteligência Artificial",
    descricao: "Aplicações práticas de IA",
    texto: "Descreva como implementar solução de IA para [problema específico]. Detalhe: 1) Coleta de dados, 2) Modelos adequados, 3) Treinamento, 4) Integração, 5) Monitoramento. Adapte para recursos de [pequena/grande] escala.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 31,
    titulo: "Desenvolvimento Mobile",
    descricao: "Criação de aplicativos modernos",
    texto: "Compare abordagens para desenvolvimento mobile (nativo, híbrido, PWA) para [tipo de aplicativo]. Analise: 1) Performance, 2) Custo, 3) Manutenção, 4) Distribuição, 5) Experiência do usuário. Recomende baseado em [critérios específicos].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 32,
    titulo: "Computação em Edge",
    descricao: "Processamento descentralizado",
    texto: "Explique aplicações de edge computing em [setor]. Aborde: 1) Vantagens sobre cloud tradicional, 2) Casos de uso ideais, 3) Requisitos de infraestrutura, 4) Desafios, 5) Tendências futuras.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 33,
    titulo: "Chatbots",
    descricao: "Implementação de assistentes virtuais",
    texto: "Guie na criação de chatbot para [finalidade]. Descreva: 1) Plataformas disponíveis, 2) Design de conversação, 3) Integrações, 4) Treinamento com IA, 5) Métricas de desempenho. Adapte para [canal específico].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 34,
    titulo: "Tokenizaçao",
    descricao: "Ativos digitais e NFTs",
    texto: "Explique o processo de tokenização de [ativo] usando blockchain. Detalhe: 1) Benefícios, 2) Plataformas adequadas, 3) Aspectos legais, 4) Custos, 5) Exemplos práticos. Considere regulamentações em [país/região].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 35,
    titulo: "Gestão de Dados",
    descricao: "Estratégias modernas de data governance",
    texto: "Desenvolva um framework para gestão de dados em [tipo de empresa]. Inclua: 1) Coleta e armazenamento, 2) Qualidade, 3) Segurança, 4) Análise, 5) Conformidade com [LGPD/GDPR]. Adapte para volume [pequeno/grande].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 36,
    titulo: "Computação Sem Servidor",
    descricao: "Arquiteturas serverless",
    texto: "Compare plataformas serverless (AWS Lambda, Azure Functions) para [tipo de aplicação]. Avalie: 1) Custos, 2) Performance, 3) Limitações, 4) Casos de uso ideais, 5) Curva de aprendizagem.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 37,
    titulo: "Contêineres",
    descricao: "Tecnologias de virtualização",
    texto: "Elabore um guia para adoção de containers em [ambiente]. Aborde: 1) Docker vs alternativas, 2) Orquestração, 3) Segurança, 4) Monitoramento, 5) Migração de aplicações legadas.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 38,
    titulo: "Monitoramento",
    descricao: "Observabilidade de sistemas",
    texto: "Descreva uma estratégia de monitoramento para [tipo de infraestrutura]. Inclua: 1) Métricas essenciais, 2) Ferramentas, 3) Alertas, 4) Logs, 5) Ações corretivas. Adapte para escala [pequena/grande].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 39,
    titulo: "Backup",
    descricao: "Estratégias de recuperação de dados",
    texto: "Proponha um plano de backup para [tipo de dados]. Considere: 1) Frequência, 2) Localização, 3) Criptografia, 4) Testes, 5) RTO/RPO. Adapte para requisitos de [setor regulamentado].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 40,
    titulo: "APIs",
    descricao: "Desenvolvimento e consumo",
    texto: "Guie na criação de API para [finalidade]. Detalhe: 1) Design REST/GraphQL, 2) Documentação, 3) Autenticação, 4) Versionamento, 5) Monitoramento. Inclua exemplos para [linguagem específica].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 41,
    titulo: "Microserviços",
    descricao: "Arquitetura distribuída",
    texto: "Compare arquitetura monolítica vs microserviços para [tipo de aplicação]. Analise: 1) Complexidade, 2) Escalabilidade, 3) Custos, 4) Time-to-market, 5) Manutenção. Recomende baseado em [critérios].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 42,
    titulo: "QA Automatizado",
    descricao: "Testes de software modernos",
    texto: "Descreva uma estratégia de testes automatizados para [tipo de aplicação]. Inclua: 1) Tipos de testes, 2) Ferramentas, 3) Integração contínua, 4) Métricas, 5) Manutenção. Adapte para equipe de [tamanho].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 43,
    titulo: "Low-Code",
    descricao: "Desenvolvimento com pouca programação",
    texto: "Avalie plataformas low-code para [tipo de solução]. Compare: 1) Flexibilidade, 2) Custos, 3) Integrações, 4) Performance, 5) Casos de uso adequados. Recomende para [perfil de usuário].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 44,
    titulo: "Web Semântica",
    descricao: "Tecnologias e aplicações",
    texto: "Explique como implementar princípios da web semântica em [projeto]. Detalhe: 1) Schema.org, 2) RDF, 3) SEO, 4) Ferramentas, 5) Benefícios para [tipo de negócio].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 45,
    titulo: "VR Corporativo",
    descricao: "Realidade virtual nos negócios",
    texto: "Descreva aplicações de VR em [setor]. Aborde: 1) Hardware necessário, 2) Casos de uso, 3) ROI, 4) Desafios, 5) Tendências. Inclua exemplos reais.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 46,
    titulo: "Tecnologia Financeira",
    descricao: "Inovações em fintech",
    texto: "Analise o impacto de [tecnologia] no setor financeiro. Considere: 1) Regulamentação, 2) Adoção, 3) Segurança, 4) Experiência do cliente, 5) Futuro. Compare com soluções tradicionais.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 47,
    titulo: "HealthTech",
    descricao: "Tecnologia na saúde",
    texto: "Explore aplicações de [tecnologia] em saúde. Detalhe: 1) Benefícios clínicos, 2) Privacidade, 3) Adoção, 4) Regulamentação, 5) Estudos de caso. Foque em [área médica específica].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 48,
    titulo: "EdTech",
    descricao: "Inovações em educação",
    texto: "Descreva como [tecnologia] está transformando a educação. Aborde: 1) Implementação, 2) Resultados, 3) Acessibilidade, 4) Desafios, 5) Tendências. Adapte para [nível educacional].",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 49,
    titulo: "CleanTech",
    descricao: "Tecnologia sustentável",
    texto: "Analise o papel de [tecnologia] na sustentabilidade. Considere: 1) Impacto ambiental, 2) Viabilidade econômica, 3) Adoção, 4) Políticas públicas, 5) Inovações futuras.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 50,
    titulo: "AgriTech",
    descricao: "Tecnologia agrícola",
    texto: "Explique aplicações de [tecnologia] na agricultura. Detalhe: 1) Aumento de produtividade, 2) Monitoramento, 3) Automação, 4) Desafios rurais, 5) Casos de sucesso.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 51,
    titulo: "Smart Cities",
    descricao: "Tecnologia urbana",
    texto: "Descreva soluções inteligentes para [problema urbano]. Inclua: 1) Tecnologias envolvidas, 2) Implementação, 3) Benefícios, 4) Privacidade, 5) Exemplos globais.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 52,
    titulo: "Wearables",
    descricao: "Tecnologia vestível",
    texto: "Analise o mercado de wearables para [aplicação]. Considere: 1) Dispositivos líderes, 2) Sensores, 3) Integrações, 4) Privacidade, 5) Tendências futuras.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 53,
    titulo: "Voice Tech",
    descricao: "Interfaces por voz",
    texto: "Explore desenvolvimento para assistentes de voz. Aborde: 1) Plataformas, 2) Design de diálogo, 3) NLP, 4) Casos de uso, 5) Acessibilidade.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 54,
    titulo: "Biometria",
    descricao: "Tecnologias de identificação",
    texto: "Compare métodos biométricos para [aplicação]. Avalie: 1) Precisão, 2) Custo, 3) Aceitação, 4) Segurança, 5) Regulamentação.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 55,
    titulo: "Robótica",
    descricao: "Aplicações práticas",
    texto: "Descreva usos de robótica em [setor]. Inclua: 1) Tipos de robôs, 2) Integração, 3) ROI, 4) Impacto laboral, 5) Tendências.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 56,
    titulo: "Drones",
    descricao: "Aplicações comerciais",
    texto: "Explore usos de drones para [finalidade]. Detalhe: 1) Regulamentação, 2) Modelos adequados, 3) Custo-benefício, 4) Limitações, 5) Casos reais.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 57,
    titulo: "3D Printing",
    descricao: "Manufatura aditiva",
    texto: "Analise aplicações de impressão 3D em [indústria]. Considere: 1) Tecnologias, 2) Materiais, 3) Economia, 4) Sustentabilidade, 5) Inovações.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 58,
    titulo: "Digital Twins",
    descricao: "Modelos virtuais",
    texto: "Explique implementação de digital twins para [aplicação]. Aborde: 1) Benefícios, 2) Plataformas, 3) Integração IoT, 4) Casos de uso, 5) Futuro.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 59,
    titulo: "Redes 6G",
    descricao: "Próxima geração",
    texto: "Descreva o potencial do 6G comparado ao 5G. Considere: 1) Tecnologias, 2) Linha do tempo, 3) Aplicações, 4) Investimentos, 5) Desafios.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 60,
    titulo: "Neuromórfica",
    descricao: "Computação inspirada no cérebro",
    texto: "Explique conceitos de computação neuromórfica. Aborde: 1) Princípios, 2) Hardware, 3) Vantagens, 4) Aplicações, 5) Limitações.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 61,
    titulo: "Swarm",
    descricao: "Inteligência de enxame",
    texto: "Descreva aplicações de swarm intelligence em [área]. Inclua: 1) Algoritmos, 2) Casos de uso, 3) Vantagens, 4) Implementação, 5) Exemplos.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 62,
    titulo: "Exascale",
    descricao: "Supercomputação",
    texto: "Analise o impacto da computação exascale em [campo]. Considere: 1) Aplicações, 2) Desafios, 3) Projetos globais, 4) Arquitetura, 5) Futuro.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 63,
    titulo: "Memristores",
    descricao: "Futuro da computação",
    texto: "Explique o potencial dos memristores para substituir [tecnologia atual]. Aborde: 1) Princípios, 2) Vantagens, 3) Desafios, 4) Pesquisa atual, 5) Aplicações.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 64,
    titulo: "Fotônica",
    descricao: "Computação com luz",
    texto: "Descreva o estado atual da computação fotônica. Inclua: 1) Benefícios, 2) Aplicações, 3) Desafios técnicos, 4) Players, 5) Perspectivas.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 65,
    titulo: "Nanotecnologia",
    descricao: "Aplicações computacionais",
    texto: "Explore usos da nanotecnologia em [área tecnológica]. Detalhe: 1) Inovações, 2) Pesquisa, 3) Limitações, 4) Segurança, 5) Futuro.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 66,
    titulo: "Biocomputação",
    descricao: "Sistemas biológicos",
    texto: "Analise o potencial da computação usando DNA/biologia. Considere: 1) Princípios, 2) Vantagens, 3) Aplicações, 4) Desafios, 5) Projetos atuais.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 67,
    titulo: "HPC",
    descricao: "Computação de alto desempenho",
    texto: "Compare arquiteturas HPC para [aplicação]. Avalie: 1) Performance, 2) Custo, 3) Escalabilidade, 4) Casos de uso, 5) Tendências.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 68,
    titulo: "Grid Computing",
    descricao: "Computação distribuída",
    texto: "Explique aplicações de grid computing em [campo]. Aborde: 1) Arquitetura, 2) Vantagens, 3) Projetos notáveis, 4) Comparação com cloud, 5) Futuro.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 69,
    titulo: "Fog Computing",
    descricao: "Processamento intermediário",
    texto: "Descreva o papel do fog computing em ecossistema IoT. Inclua: 1) Benefícios, 2) Casos de uso, 3) Arquitetura, 4) Segurança, 5) Implementação.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 70,
    titulo: "Green IT",
    descricao: "Tecnologia sustentável",
    texto: "Apresente estratégias para data centers sustentáveis. Considere: 1) Eficiência energética, 2) Resfriamento, 3) Hardware, 4) Métricas, 5) Casos de sucesso.",
    categoria: "tecnologia",
    favorito: false
  },
  {
    id: 71,
    titulo: "Ethical Hacking",
    descricao: "Segurança ofensiva",
    texto: "Descreva metodologia de teste de penetração para [sistema]. Inclua: 1) Fases, 2) Ferramentas, 3) Relatórios, 4) Mitigação, 5) Certificações.",
    categoria: "tecnologia",
    favorito: false
  }
  ]
};