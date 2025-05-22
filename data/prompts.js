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
  ]
};