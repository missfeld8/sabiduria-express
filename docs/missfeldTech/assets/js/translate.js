const translations = {
    pt: {
      menu_home: "Home",
      menu_servicos: "Serviços",
      menu_planos: "Planos",
      menu_contato: "Contato",
      home_title: "Maximize sua Visibilidade no Google Maps com Missfeld Tech",
      home_subtitle: "Otimização especializada para empresas locais, elevando sua presença online e atraindo mais clientes.",
      home_cta: "Comece Agora",
      sobre_titulo: "Sobre Nós",
      sobre_texto: "Na Missfeld Tech, somos especialistas em otimização no Google Maps, ajudando empresas locais a aumentar sua visibilidade e atrair mais clientes. Com uma equipe dedicada e soluções personalizadas, estamos comprometidos em impulsionar o sucesso do seu negócio.",
      sobre_missao: "Nossa Missão",
      sobre_missao_texto: "Facilitar o crescimento de empresas locais por meio de estratégias de otimização digital eficazes e acessíveis.",
      sobre_valores: "Nossos Valores",
      sobre_valores_item1: "Transparência",
      sobre_valores_item2: "Inovação",
      sobre_valores_item3: "Compromisso com resultados",
      planos_title: "Escolha o Plano Ideal para Sua Empresa",
      plano_basico: "Plano Básico",
      plano_basico_preco: "R$ 99/mês",
      plano_basico_item1: "Otimização básica do Google Meu Negócio",
      plano_basico_item2: "Relatório mensal",
      plano_basico_cta: "Assine Agora",
      plano_profissional: "Plano Profissional",
      plano_profissional_preco: "R$ 249/mês",
      plano_profissional_item1: "Otimização completa",
      plano_profissional_item2: "Gestão de avaliações",
      plano_profissional_item3: "Relatório semanal",
      plano_profissional_cta: "Assine Agora",
      plano_premium: "Plano Premium",
      plano_premium_preco: "R$ 499/mês",
      plano_premium_item1: "Otimização avançada",
      plano_premium_item2: "Consultoria personalizada",
      plano_premium_item3: "Relatório diário",
      plano_premium_cta: "Assine Agora",
      comentarios_title: "O que Nossos Clientes Dizem",
      comentario1: "A Missfeld Tech transformou nosso negócio! Agora aparecemos no topo das pesquisas locais.",
      cargo1: "Gerente de Marketing",
      contato_title: "Fale Conosco",
      contato_cta: "Enviar Mensagem",
    },
    es: {
      menu_home: "Inicio",
      menu_servicos: "Servicios",
      menu_planos: "Planes",
      menu_contato: "Contacto",
      home_title: "Maximiza tu Visibilidad en Google Maps con Missfeld Tech",
      home_subtitle: "Optimización especializada para empresas locales, elevando tu presencia en línea y atrayendo más clientes.",
      home_cta: "Comienza Ahora",
      sobre_titulo: "Sobre Nosotros",
      sobre_texto: "En Missfeld Tech, somos especialistas en optimización en Google Maps, ayudando a empresas locales a aumentar su visibilidad y atraer más clientes. Con un equipo dedicado y soluciones personalizadas, estamos comprometidos a impulsar el éxito de su negocio.",
      sobre_missao: "Nuestra Misión",
      sobre_missao_texto: "Facilitar el crecimiento de empresas locales a través de estrategias de optimización digital efectivas y accesibles.",
      sobre_valores: "Nuestros Valores",
      sobre_valores_item1: "Transparencia",
      sobre_valores_item2: "Innovación",
      sobre_valores_item3: "Compromiso con resultados",
      planos_title: "Elige el Plan Ideal para tu Empresa",
      plano_basico: "Plan Básico",
      plano_basico_preco: "$25/mes",
      plano_basico_item1: "Optimización básica de Google Mi Negocio",
      plano_basico_item2: "Informe mensual",
      plano_basico_cta: "Suscríbete Ahora",
      plano_profissional: "Plan Profesional",
      plano_profissional_preco: "$60/mes",
      plano_profissional_item1: "Optimización completa",
      plano_profissional_item2: "Gestión de reseñas",
      plano_profissional_item3: "Informe semanal",
      plano_profissional_cta: "Suscríbete Ahora",
      plano_premium: "Plan Premium",
      plano_premium_preco: "$120/mes",
      plano_premium_item1: "Optimización avanzada",
      plano_premium_item2: "Consultoría personalizada",
      plano_premium_item3: "Informe diario",
      plano_premium_cta: "Suscríbete Ahora",
      comentarios_title: "Lo que Dicen Nuestros Clientes",
      comentario1: "¡Missfeld Tech transformó nuestro negocio! Ahora aparecemos en lo más alto de las búsquedas locales.",
      cargo1: "Gerente de Marketing",
      contato_title: "Contáctanos",
      contato_cta: "Enviar Mensaje",
    },
  };
  
  let currentLang = "pt";
  
  function translatePage(lang) {
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      element.textContent = translations[lang][key] || element.textContent;
    });
  }
  
  document.getElementById("language-toggle").addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "es" : "pt";
    translatePage(currentLang);
    document.getElementById("language-toggle").textContent = currentLang.toUpperCase();
  });
  
  // Inicializa a página em português
  translatePage(currentLang);