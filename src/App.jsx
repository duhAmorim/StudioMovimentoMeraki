import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlignCenter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  GraduationCap,
  Home as HomeIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  Users,
  X,
} from 'lucide-react';

const whatsappBase =
  'https://wa.me/5511983612385?text=Ol%C3%A1!%20Quero%20agendar%20minha%20aula%20experimental%20gratuita%20no%20Movimento%20Meraki.';

const navLinks = [
  ['#formatos', 'Formatos'],
  ['#metodo', 'Método'],
  ['#galeria', 'Espaço'],
  ['#sobre', 'Sobre'],
  ['#faq', 'Dúvidas'],
];

const painCards = [
  {
    image: '/Para vc que/Dores.jpeg',
    alt: 'Evolução',
    text: 'Não importa de onde voçê começa. O importante é perceber até onde consegue chegar.',
  },
  {
    image: '/Para vc que/Postura.jpeg',
    alt: 'Exclusividade',
    text: 'Turmas de até 3 alunos para que você tenha atenção de verdade durante a aula.',
  },
  {
    image: '/Para vc que/Atividade segura.jpg',
    alt: 'Personalização',
    text: 'Seu treino é pensado para você, respeitando seu momento, seu nível e seus objetivos.',
  },
  {
    image: '/Para vc que/ambiente.jpeg',
    alt: 'Desafio',
    text: 'A cada fase, novos exercícios e desafios para você sair da zona de conforto.',
  },
  {
    image: '/Para vc que/Constancia.jpg',
    alt: 'Constância',
    text: 'Uma rotina de movimento que seja possivel manter e que faça sentido para sua vida.',
  },
  {
    image: '/Para vc que/Rotina.jpg',
    alt: 'Pertencimento',
    text: 'Um espaço onde você é conhecido pelo nome, acompanhado de perto e faz parte da evolução do grupo.',
  },
];

const formats = [
  {
    image: '/Presencial.jpg',
    alt: 'Pilates Presencial',
    title: 'Pilates presencial no Meraki',
    body: 'Para quem gosta de sair de casa, se desconectar da rotina e ter um momento dedicado ao próprio corpo. Em um ambiente acolhedor e exclusivo, você se movimenta, aprende e evolui com acompanhamento próximo.',
    items: [
      'Turmas de até 3 alunos',
      'Exercícios adaptados ao seu nível e objetivos',
      'Acompanhamento próximo durante toda a aula',
      'Aparelhos e acessórios para uma experiência completa',
      'Evolução planejada e acompanhamento individualizado',
    ],
    cta: 'Quero fazer Pilates presencial',
    href: 'https://wa.me/5511983612385?text=Ol%C3%A1!%20Quero%20agendar%20minha%20aula%20experimental%20presencial%20no%20Movimento%20Meraki.',
  },
  {
    image: '/online.jpg',
    alt: 'Meraki Conecta Online',
    title: 'Meraki Conecta: Pilates Online ao Vivo',
    body: 'Para quem tem uma rotina dinâmica, viaja com frequência ou simplesmente prefere a praticidade de treinar em casa. Aulas ao vivo, com orientação profissional e atenção de verdade, para você não precisar abrir mão de se cuidar.',
    items: [
      'Aulas online ao vivo',
      'Acompanhamento e correções em tempo real',
      'Orientação profissional individualizada',
      'Flexibilidade para encaixar o movimento na sua rotina',
      'A experiência Meraki, onde você estiver',
    ],
    cta: 'Quero conhecer o Pilates online',
    href: 'https://wa.me/5511983612385?text=Ol%C3%A1!%20Quero%20conhecer%20o%20Pilates%20online%20do%20Meraki%20Conecta.',
  },
];

const methodSteps = [
  [
    'Conhecemos você',
    'Antes de começar, entendemos sua rotina, seus objetivos e o que você busca para o seu corpo e para a sua vida.',
  ],
  [
    'Personalizamos sua experiência',
    'Cada exercício, desafio e orientação é pensado de acordo com o seu momento, seu nível e a forma como você evolui.',
  ],
  [
    'Acompanhamos de perto',
    'Durante a aula, você recebe atenção, correções e estímulos para se movimentar com mais consciência, qualidade e segurança.',
  ],
  [
    'Evoluímos junto com você',
    'Seu treino acompanha sua evolução. Novos movimentos, novos desafios e novas conquistas fazem parte da sua jornada.',
  ],
  [
    'Criamos constância',
    'Porque acreditamos que o melhor resultado não está em fazer muito por pouco tempo, mas em encontrar uma forma de se movimentar que faça sentido para você e que queira manter na sua vida.',
  ],
];

const galleryImages = [
  '/Galeria/Recrie_essa_imagem_202604271857.jpeg',
  '/Galeria/Recrie_essa_imagem_202604271936 (1).jpeg',
  '/Galeria/Recrie_essa_imagem_202604271936.jpeg',
  '/Galeria/Recrie_essa_imagem_202604271937.jpeg',
  '/Galeria/Recrie_essa_imagem_202604271946.jpeg',
  '/Galeria/Recrie_essa_imagem_202604271947.jpeg',
];

const teamData = {
  jessica: {
    name: 'Jéssica Antunes',
    role: 'Fisioterapeuta e Gestora',
    image: '/Equipe/Melhore_a_imagem_202604281735.jpeg',
    bio: [
      'Fisioterapeuta pela Universidade Cidade de São Paulo (UNICID)',
      'Profissional de Educação Física pela Faculdades Metropolitanas Unidas (FMU)',
      'Formação de Empreendedorismo pelo SEBRAE',
      'Formada em Pilates pela Liberty Pilates',
      '8 anos de experiência na área de Pilates',
      'Gestora do Movimento Meraki - Pilates',
    ],
    quote:
      '“O Meraki é mais do que um estúdio. É um espaço para você se reconectar com o seu corpo e com a sua melhor versão.”',
  },
  deborah: {
    name: 'Deborah Rego',
    role: 'Educação Física',
    image: '/Equipe/Melhore_a_imagem_202604281737.jpeg',
    bio: [
      'Profissional de Educação Física formada pela UNINOVE',
      'Formada em pilates pela Voll Pilates',
      'Curso de formação livre Biomecânica e Especificação de Quadril',
      '2 anos de experiência no pilates',
    ],
    quote: '',
  },
  raiane: {
    name: 'Raiane Rocha',
    role: 'Fisioterapeuta',
    image: '/Equipe/Melhore_a_imagem_202604281735 (3).jpeg',
    bio: [
      'Fisioterapeuta pela Faculdade Frasce - Rj',
      'Formada em pilates pela Arpilates - Rj',
      'Curso de formação livre: Massoterapia, Massagem modeladora, Drenagem linfática, Liberação miofascial',
      '4 anos de experiência no pilates',
    ],
    quote: '',
  },
  silvana: {
    name: 'Silvana Gama',
    role: 'Fisioterapeuta',
    image: '/Equipe/Melhore_a_imagem_202604281735 (2).jpeg',
    bio: [
      'Fisioterapeuta formada pela UNINOVE',
      'Pós graduada em Saúde Coletiva',
      'Formada em pilates pela Voll Pilates',
      'Cursos em terapias manuais: liberação miofascial, drenagem linfática, ventosaterapia, bandagem/taping e auriculoterapia',
      '5 anos de experiência no pilates',
    ],
    quote: '',
  },
  mariana: {
    name: 'Mariana Matos',
    role: 'Fisioterapeuta',
    image: '/Equipe/Melhore_a_imagem_202604281735 (1).jpeg',
    bio: [
      'Fisioterapeuta pela Universidade Municipal de São Caetano do Sul',
      'Pós Graduada em Reabilitação Funcional pela USP',
      'Pós Graduada em Fisioterapia Pediátrica e Neonatal pela FMABC',
      'Formada em Pilates pela Meta Pilates',
      'Cursos em desenvolvimento motor infantil, fisioterapia respiratória e assimetrias cranianas',
      '4 anos de experiência no Pilates',
    ],
    quote: '',
  },
};

const testimonials = [
  {
    author: 'Matheus Rodrigues',
    text: '“Excelente experiência, aula transformadora. Para alguém que estava vivendo a experiência do yoga pela primeira vez como eu foi maravilhoso, professora muito paciente e que transmite muita paz. Amei a experiência com certeza irei retornar ao espaço.”',
  },
  {
    author: 'Carolina Saran',
    text: '“O estúdio é excelente! Possui um espaço amplo, confortável e com ar-condicionado. Desde o primeiro contato, fui muito bem recebida. A Jéssica é extremamente atenciosa e demonstra muito carinho e dedicação com o espaço e com os alunos. A professora Giulia é uma profissional maravilhosa! Sempre muito atenciosa, cuidadosa e presente durante os exercícios. Está me ajudando muito a melhorar as minhas dores. Recomendo demais!”',
  },
  {
    author: 'Maria de Lourdes Antunes Costa',
    text: '“Fui muito bem acolhida, as professoras são muito capacitadas, solicitas, prontas para esclarecer dúvidas e ajudar. O pilates corrigiu a minha postura errada, me trouxe muitos benefícios, flexibilidade, equilíbrio, força muscular, melhorei a minha consciência corporal, mente e a respiração. Ganhei condicionamento físico, o que me ajudou nas minhas atividades do cotidiano.”',
  },
  {
    author: 'Marina Calissi Pegoraro',
    text: '“Lugar perfeito, as instrutoras são maravilhosas super competentes e atenciosas, treinamento específico para cada aluno suas necessidades e objetivos. melhores horários da região. Tem ar condicionado, cafézinho, petiscos. Ambiente sempre limpo, bem iluminado. Equipamento novinho.”',
  },
  {
    author: 'Vilma Lanzotti',
    text: '“Estar na Meraki é tudo o que eu precisava para mim e meu corpo agradece. As professoras Tainá e Jéssica estão sempre atenciosas, realmente trabalham com carinho e amor. Indico com toda a certeza esse Studio.”',
  },
  {
    author: 'Aline Oliveira Guedes Do Carmo',
    text: '“Maravilhoso, fui super bem recebida e atendida, compreendeu todas as minhas necessidades e vamos trabalhar para ajustar todas as queixas que relatei. Obrigada pelo carisma e profissionalismo!”',
  },
];

const faqItems = [
  [
    'Onde fica o Movimento Meraki Pilates?',
    'O Movimento Meraki Pilates fica na Rua Pinheiro Guimarães, 88, sala 2, em Jardim Avelino, São Paulo — SP.',
  ],
  [
    'O estúdio oferece aula experimental?',
    'Sim. O Movimento Meraki oferece aula experimental gratuita para novos alunos conhecerem a metodologia, o espaço e o formato de aula.',
  ],
  [
    'As aulas são individuais?',
    'As aulas presenciais acontecem em turmas reduzidas, com até 3 alunos, mantendo acompanhamento próximo e orientação personalizada.',
  ],
  [
    'Tem Pilates online?',
    'Sim. O Meraki Conecta oferece aulas de Pilates online ao vivo, com acompanhamento profissional e orientação em tempo real.',
  ],
  [
    'Pilates é indicado para iniciantes?',
    'Sim. As aulas são adaptadas ao nível, ritmo e objetivo de cada aluno, inclusive para quem nunca praticou Pilates antes.',
  ],
  [
    'Como agendar uma aula?',
    'O agendamento pode ser feito pelo WhatsApp do Movimento Meraki: (11) 98361-2385.',
  ],
  [
    'Formas de pagamento?',
    'O Movimento Meraki aceita pagamento via Pix, cartão de crédito, cartão de débito, dinheiro, Wellhub e TotalPass. Consulte sobre planos e pacotes de aulas.',
  ],
];

const hours = [
  ['Segunda-feira', '06:30 – 12:00, 14:30 – 21:00'],
  ['Terça-feira', '06:30 – 12:30, 14:30 – 21:00'],
  ['Quarta-feira', '06:30 – 12:00, 14:30 – 21:00'],
  ['Quinta-feira', '06:30 – 12:00, 14:30 – 21:00'],
  ['Sexta-feira', '06:30 – 12:00'],
  ['Sábado', '07:00 – 12:00'],
  ['Domingo', 'Fechado'],
];

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function getVisibleCount() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoursOpen, setHoursOpen] = useState(false);
  const [teamMember, setTeamMember] = useState('jessica');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedReview, setExpandedReview] = useState(null);
  const [faqOpen, setFaqOpen] = useState(null);
  const [lightboxImage, setLightboxImage] = useState('');
  const [timelineVisible, setTimelineVisible] = useState(false);
  const timelineRef = useRef(null);

  const selectedMember = teamData[teamMember];
  const maxTestimonialIndex = Math.max(0, testimonials.length - visibleCount);
  const maxGalleryIndex = Math.max(0, galleryImages.length - visibleCount);
  const testimonialDots = useMemo(
    () => Array.from({ length: maxTestimonialIndex + 1 }),
    [maxTestimonialIndex],
  );

  useEffect(() => {
    const updateCount = () => setVisibleCount(getVisibleCount());
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  useEffect(() => {
    setTestimonialIndex((value) => Math.min(value, maxTestimonialIndex));
    setGalleryIndex((value) => Math.min(value, maxGalleryIndex));
  }, [maxGalleryIndex, maxTestimonialIndex]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || lightboxImage ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, lightboxImage]);

  useEffect(() => {
    if (!timelineRef.current || timelineVisible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' },
    );
    observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, [timelineVisible]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTestimonialIndex((value) =>
        value >= maxTestimonialIndex ? 0 : value + 1,
      );
      setExpandedReview(null);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [maxTestimonialIndex]);

  const handleInternalLink = (event, href) => {
    if (!href.startsWith('#')) return;
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const headerHeight = document.querySelector('.header')?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const nextReview = () => {
    setExpandedReview(null);
    setTestimonialIndex((value) =>
      value >= maxTestimonialIndex ? 0 : value + 1,
    );
  };

  const previousReview = () => {
    setExpandedReview(null);
    setTestimonialIndex((value) =>
      value <= 0 ? maxTestimonialIndex : value - 1,
    );
  };

  const nextGallery = () => {
    setGalleryIndex((value) => (value >= maxGalleryIndex ? 0 : value + 1));
  };

  const previousGallery = () => {
    setGalleryIndex((value) => (value <= 0 ? maxGalleryIndex : value - 1));
  };

  return (
    <>
      <header className="header">
        <div className="container header-content">
          <a
            className="logo"
            href="#home"
            onClick={(event) => handleInternalLink(event, '#home')}
            aria-label="Voltar ao início"
          >
            <img src="/Logo Horizontal.png" alt="Movimento Meraki Logo" />
          </a>
          <nav className="desktop-menu">
            {navLinks.map(([href, label]) => (
              <a
                href={href}
                key={href}
                onClick={(event) => handleInternalLink(event, href)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a
              href={whatsappBase}
              className="btn btn-primary header-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              <span>Agendar aula</span>
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Abrir menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/Hero Meraki.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <div className="hero-overlay" />
        <div className="container hero-container">
          <div className="hero-text">
            <h1>Pilates personalizado para você se reconectar com o seu corpo</h1>
            <p className="subheadline">
              Aulas <strong>presenciais e online ao vivo</strong>, com
              acompanhamento próximo, turmas reduzidas e uma metodologia que
              respeita o seu ritmo e seus objetivos.
            </p>
            <div className="hero-ctas">
              <a
                href={whatsappBase}
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={24} />
                Agendar minha aula experimental gratuita
              </a>
            </div>
            <p className="microcopy">
              Atendimento presencial no Jardim Avelino - São Paulo e online para o mundo.
            </p>
          </div>
        </div>
      </section>

      <SocialProof />
      <PainPoints />
      <Formats />
      <Method timelineRef={timelineRef} visible={timelineVisible} />
      <Gallery
        index={galleryIndex}
        onNext={nextGallery}
        onPrevious={previousGallery}
        onOpen={setLightboxImage}
      />
      <Team
        selectedId={teamMember}
        selectedMember={selectedMember}
        onSelect={setTeamMember}
      />
      <Trial />
      <Testimonials
        index={testimonialIndex}
        dots={testimonialDots}
        expandedReview={expandedReview}
        onDot={setTestimonialIndex}
        onNext={nextReview}
        onPrevious={previousReview}
        onToggle={setExpandedReview}
      />
      <Location hoursOpen={hoursOpen} setHoursOpen={setHoursOpen} />
      <Faq faqOpen={faqOpen} setFaqOpen={setFaqOpen} />
      <FinalCta />
      <Footer handleInternalLink={handleInternalLink} />
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage('')} />
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        handleInternalLink={handleInternalLink}
      />
    </>
  );
}

function SocialProof() {
  const items = [
    [Star, '5 estrelas no Google', 'Mais de 90 avaliações de alunos reais'],
    [Users, 'Turmas de até 3 alunos', 'Mais atenção, correção e cuidado'],
    [HomeIcon, 'Aulas personalizadas', 'Presencial ou online, na sua rotina'],
    [
      GraduationCap,
      'Professora especialista',
      'Acompanhamento profissional do início ao fim',
    ],
  ];
  return (
    <div className="social-proof">
      <div className="marquee">
        <div className="marquee-content">
          {[...items, ...items].map(([Icon, title, text], index) => (
            <div className="proof-item" key={`${title}-${index}`}>
              <div className="proof-icon">
                <Icon />
              </div>
              <div className="proof-text">
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PainPoints() {
  return (
    <section className="pain-points section-padding bg-lavender" id="dores">
      <div className="container">
        <div className="section-title text-center">
          <h2>Por que o Meraki combina com você?</h2>
          
        </div>
        <div className="pain-cards-container mt-4">
          <div className="grid grid-3 pain-cards-grid">
            {painCards.map((card) => (
              <div className="pain-card" key={card.text}>
                <div className="pain-card-image">
                  <img src={card.image} alt={card.alt} />
                </div>
                <div className="pain-card-content">
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Formats() {
  return (
    <section className="formats section-padding" id="formatos">
      <div className="container">
        <div className="section-title text-center">
          <h2>Escolha como você prefere se movimentar</h2>
          <p>
            Presencial ou online, o mais importante é encontrar um formato que
            você consiga manter.
          </p>
        </div>
        <div className="grid grid-2">
          {formats.map((format) => (
            <div className="card format-card" key={format.title}>
              <img src={format.image} alt={format.alt} className="format-img" />
              <div className="format-content">
                <h3>{format.title}</h3>
                <p>{format.body}</p>
                <ul className="format-list">
                  {format.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href={format.href}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  {format.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="section-footer text-center mt-4">
          <p>
            <strong>
              Escolha a experiência que combina com a sua rotina e descubra uma nova forma de cuidar de você.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function Method({ timelineRef, visible }) {
  return (
    <section className="method section-padding bg-lavender" id="metodo">
      <div className="container">
        <div className="method-layout">
          <div className="method-image-container">
            <img
              src="/metodologia.jpeg"
              alt="Metodologia Meraki"
              className="method-image"
            />
          </div>
          <div className="timeline-column">
            <div className="section-title text-left" style={{ marginBottom: 40 }}>
              <h2 className="main-method-title">A metodologia Meraki:</h2>
              <p className="method-subtitle">
                Um jeito diferente de se movimentar, evoluir e cuidar de você.
              </p>
              <div className="method-description mt-4">
                <p>
                  No Meraki, nenhuma aula é igual à outra.
Cada aluno tem uma história, um objetivo e um ritmo. Por isso, nossa metodologia une atenção individualizada, orientação profissional e evolução contínua para que você perceba seu progresso e construa uma relação duradoura com o movimento.
                </p>
              </div>
            </div>
            <div className="timeline" ref={timelineRef}>
              {methodSteps.map(([title, text], index) => (
                <div
                  className={`timeline-item ${visible ? 'visible' : ''}`}
                  key={title}
                  style={{ transitionDelay: visible ? `${index * 120}ms` : '0ms' }}
                >
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`impact-quote-container timeline-item ${
                visible ? 'visible' : ''
              }`}
            >
              <div className="impact-quote">
                <p>
                  Movimento com técnica. Cuidado com presença.
                  <br />
                  Pilates com propósito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery({ index, onNext, onPrevious, onOpen }) {
  const itemRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const updateStep = () => {
      if (itemRef.current) setStep(itemRef.current.offsetWidth + 24);
    };
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, []);

  return (
    <section className="gallery-section section-padding" id="galeria">
      <div className="container gallery-layout">
        <div className="gallery-info">
          <h2>Conheça nosso espaço</h2>
          <p>
            Um ambiente preparado com carinho para você se sentir em casa. No
            Movimento Meraki, cada detalhe foi pensado para proporcionar
            conforto, segurança e uma experiência de Pilates completa e
            exclusiva.
          </p>
        </div>
        <div className="gallery-carousel">
          <button
            className="gallery-btn prev-gallery"
            aria-label="Anterior"
            type="button"
            onClick={onPrevious}
          >
            <ChevronLeft />
          </button>
          <div className="gallery-track-container">
            <div
              className="gallery-track"
              style={{ transform: `translateX(-${index * step}px)` }}
            >
              {galleryImages.map((image, imageIndex) => (
                <div
                  className="gallery-item"
                  key={image}
                  ref={imageIndex === 0 ? itemRef : null}
                >
                  <img
                    src={image}
                    alt={`Espaço Meraki ${imageIndex + 1}`}
                    onClick={() => onOpen(image)}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="gallery-btn next-gallery"
            aria-label="Próximo"
            type="button"
            onClick={onNext}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function Team({ selectedId, selectedMember, onSelect }) {
  return (
    <section className="team-section section-padding bg-plum text-white" id="sobre">
      <div className="container">
        <div className="section-title text-center">
          <h2>Conheça nossas profissionais</h2>
          <p>
            Uma equipe dedicada a cuidar de você, com formação especializada e
            um olhar atento às suas necessidades individuais.
          </p>
        </div>
        <div className="team-interactive-container">
          <div className="team-nav">
            <div className="team-nav-track" id="team-nav-track">
              {Object.entries(teamData).map(([id, member]) => (
                <button
                  className={`team-bubble ${id === selectedId ? 'active' : ''}`}
                  key={id}
                  type="button"
                  onClick={() => onSelect(id)}
                >
                  <img src={member.image} alt={member.name} />
                  <span>{member.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="team-main-display">
            <div className="team-image-wrapper">
              <div className="team-blob" />
              <img
                id="team-display-image"
                src={selectedMember.image}
                alt={`Profissional Meraki ${selectedMember.name}`}
              />
            </div>
            <div className="team-info-content">
              <div id="team-details">
                <h3 id="team-member-name" className="text-white">
                  {selectedMember.name}
                </h3>
                <p id="team-member-role" className="member-role">
                  {selectedMember.role}
                </p>
                <ul id="team-member-bio" className="credentials">
                  {selectedMember.bio.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {selectedMember.quote && (
                  <p id="team-member-quote" className="signature mt-4">
                    <em>{selectedMember.quote}</em>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trial() {
  const items = [
    'Conversa inicial sobre seus objetivos',
    'Apresentação do estúdio ou formato online',
    'Aula guiada com orientação profissional',
    'Indicação do melhor formato para sua rotina',
    'Tirar dúvidas sobre planos, horários e frequência',
  ];
  return (
    <section className="trial section-padding">
      <div className="container">
        <div className="grid grid-2 align-center">
          <div className="trial-content text-left">
            <h2>Comece com uma aula experimental gratuita</h2>
            <p>
              A melhor forma de entender se o Pilates é para você é vivendo a
              experiência na prática.
            </p>
            <p>
              Na aula experimental, você conhece o espaço, entende como
              funcionam as aulas e sente como é ser acompanhado de perto por uma
              profissional que olha para o seu corpo de forma individual.
            </p>
            <a
              href={whatsappBase}
              className="btn btn-primary btn-lg mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={24} />
              Agendar aula experimental pelo WhatsApp
            </a>
            <p className="microcopy mt-2">
              Vagas limitadas por horário para manter a qualidade do
              acompanhamento.
            </p>
          </div>
          <div className="trial-info card bg-lavender">
            <h3>O que acontece na aula experimental:</h3>
            <ul className="check-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({
  index,
  dots,
  expandedReview,
  onDot,
  onNext,
  onPrevious,
  onToggle,
}) {
  const slideRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const updateStep = () => {
      if (slideRef.current) setStep(slideRef.current.offsetWidth + 32);
    };
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, []);

  return (
    <section className="testimonials section-padding bg-lavender" id="depoimentos">
      <div className="container">
        <div className="section-title text-center">
          <h2>Quem vive a experiência Meraki sente a diferença</h2>
        </div>
        <div className="testimonials-container">
          <div className="testimonials-slider">
            <div
              className="testimonials-track"
              style={{ transform: `translateX(-${index * step}px)` }}
            >
              {testimonials.map((testimonial, reviewIndex) => {
                const expanded = expandedReview === reviewIndex;
                return (
                  <div
                    className="testimonial-slide"
                    key={testimonial.author}
                    ref={reviewIndex === 0 ? slideRef : null}
                  >
                    <div
                      className={`card testimonial-card has-long-text ${
                        expanded ? 'is-expanded' : ''
                      }`}
                    >
                      <div className="stars" aria-label="5 estrelas">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star key={starIndex} />
                        ))}
                      </div>
                      <div className="testimonial-text">
                        <p>{testimonial.text}</p>
                      </div>
                      <button
                        className="read-more-btn"
                        type="button"
                        onClick={() => onToggle(expanded ? null : reviewIndex)}
                      >
                        {expanded ? 'Ler menos' : 'Ler mais'}
                      </button>
                      <h4>{testimonial.author}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="slider-controls">
          <button
            className="slider-btn prev-btn"
            aria-label="Anterior"
            type="button"
            onClick={onPrevious}
          >
            <ChevronLeft />
          </button>
          <div className="slider-dots">
            {dots.map((_, dotIndex) => (
              <button
                className={`dot ${dotIndex === index ? 'active' : ''}`}
                aria-label={`Ir para depoimento ${dotIndex + 1}`}
                key={dotIndex}
                type="button"
                onClick={() => onDot(dotIndex)}
              />
            ))}
          </div>
          <button
            className="slider-btn next-btn"
            aria-label="Próximo"
            type="button"
            onClick={onNext}
          >
            <ChevronRight />
          </button>
        </div>
        <div className="text-center mt-4">
          <a
            href="https://www.google.com/search?q=Movimento+Meraki+Pilates#lrd=0x94ce5d77478a573d:0x8544d62334f553f1,1"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}

function Location({ hoursOpen, setHoursOpen }) {
  return (
    <section className="location section-padding" id="localizacao">
      <div className="container grid grid-2 align-center">
        <div className="location-content">
          <div className="section-title text-left">
            <h2>Venha nos visitar</h2>
            <p>
              O Movimento Meraki está localizado em Jardim Avelino, São Paulo,
              em uma região de fácil acesso para quem está na Vila Prudente e
              bairros próximos.
            </p>
          </div>
          <div className="location-data mt-4">
            <p>
              <MapPin className="inline-icon" />
              <strong>Endereço:</strong> Rua Pinheiro Guimarães, 88, sala 2 —
              Jardim Avelino, São Paulo — SP
            </p>
            <p>
              <Phone className="inline-icon" />
              <strong>Telefone:</strong> (11) 98361-2385
            </p>
            <div className="hours-toggle">
              <button
                className={`hours-trigger ${hoursOpen ? 'active' : ''}`}
                id="hours-trigger"
                type="button"
                onClick={() => setHoursOpen(!hoursOpen)}
              >
                <Clock className="inline-icon" />
                <strong>Horário de Atendimento</strong>
                <ChevronDown className="chevron-icon" />
              </button>
              <div
                className={`hours-content ${hoursOpen ? 'active' : ''}`}
                id="hours-content"
              >
                <ul className="hours-list">
                  {hours.map(([day, time]) => (
                    <li key={day}>
                      <span>{day}</span>
                      <span>{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p>
              <strong>
                Estamos te esperando para uma visita! Venha conhecer nosso
                estúdio e sentir a energia do Movimento Meraki.
              </strong>
            </p>
          </div>
          <div className="mt-4">
            <a
              href="https://www.google.com/maps/place/Movimento+Meraki+-+Pilates/@-23.5887242,-46.5797448,15.18z/data=!4m16!1m9!3m8!1s0x94ce5c1556c99607:0x2cdf705d8aadaede!2sR.+Pinheiro+Guimar%C3%A3es,+88+-+Parque+da+Vila+Prudente,+S%C3%A3o+Paulo+-+SP,+03141-030!3b1!8m2!3d-23.584186!4d-46.5744186!10e5!16s%2Fg%2F11fx2tpjfl!3m5!1s0x94ce5dc0c65a4b6f:0x14d23ee7b6380fec!8m2!3d-23.5841684!4d-46.5743825!16s%2Fg%2F11sm_tj13q?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver rota no Google Maps
            </a>
          </div>
        </div>
        <div className="map-wrapper card">
          <iframe
            title="Mapa do Movimento Meraki"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.444318765432!2d-46.5684443!3d-23.5912222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d77478a573d%3A0x8544d62334f553f1!2sRua%20Pinheiro%20Guimar%C3%A3es%2C%2088%20-%20Jardim%20Avelino%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003225-000!5e0!3m2!1spt-BR!2sbr!4v1714260000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Faq({ faqOpen, setFaqOpen }) {
  return (
    <section className="faq section-padding" id="faq">
      <div className="container">
        <div className="section-title text-center">
          <h2>Dúvidas frequentes sobre o Movimento Meraki Pilates</h2>
          <p>Tudo o que você precisa saber para começar sua jornada conosco.</p>
        </div>
        <div className="faq-list">
          {faqItems.map(([question, answer], index) => (
            <details className="faq-item" open={faqOpen === index} key={question}>
              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setFaqOpen(faqOpen === index ? null : index);
                }}
              >
                {question}
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta section-padding text-center bg-plum text-white">
      <div className="container">
        <h2>Transforme seu corpo e sua mente no seu ritmo</h2>
        <p>
          Dê o primeiro passo para uma vida com mais qualidade e bem-estar em
          Jardim Avelino.
        </p>
        <a
          href={whatsappBase}
          className="btn btn-primary btn-lg mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={24} />
          Agendar minha aula experimental gratuita
        </a>
      </div>
    </section>
  );
}

function Footer({ handleInternalLink }) {
  const footerLinks = [
    ['#dores', 'Diferenciais'],
    ['#depoimentos', 'Depoimentos'],
    ['#sobre', 'Sobre Nós'],
    ['#localizacao', 'Localização'],
  ];
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-column footer-brand">
          <img
            src="/Logo branco.png"
            alt="Movimento Meraki Logo"
            className="footer-logo"
          />
          <p className="footer-desc">
            Referência em Pilates no Jardim Avelino. Saúde, bem-estar e
            atendimento personalizado para transformar sua vida.
          </p>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">NAVEGAÇÃO</h4>
          <ul className="footer-links">
            {footerLinks.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(event) => handleInternalLink(event, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">CONTATO</h4>
          <div className="contact-info">
            <p>
              <Phone /> (11) 98361-2385
            </p>
            <p>
              <MapPin /> Rua Pinheiro Guimarães, 88, sala 2 — Jardim Avelino,
              São Paulo — SP
            </p>
          </div>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">REDES SOCIAIS</h4>
          <div className="social-links">
            <a
              href="https://www.instagram.com/movimento.meraki?igsh=amU1Mm95dXFzeG4z"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/share/1H9ej1gH4U/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YoutubeIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <TikTokIcon />
            </a> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div
          className="container footer-bottom-content"
          style={{ justifyContent: 'center', textAlign: 'center' }}
        >
        <p>© {new Date().getFullYear()} Movimento Meraki Pilates. Todos os direitos reservados. Este site e seu conteúdo não podem ser reproduzidos sem autorização.</p>        </div>
      </div>
    </footer>
  );
}

function Lightbox({ image, onClose }) {
  return (
    <div className={`lightbox ${image ? 'active' : ''}`} id="lightbox">
      <div className="lightbox-content">
        <button
          className="lightbox-close"
          id="lightbox-close"
          aria-label="Fechar imagem"
          type="button"
          onClick={onClose}
        >
          <X />
        </button>
        {image && (
          <img
            src={image}
            alt="Espaço Meraki ampliado"
            className="lightbox-image"
            id="lightbox-img"
          />
        )}
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose, handleInternalLink }) {
  const mobileLinks = [...navLinks, ['#localizacao', 'Localização']];
  return (
    <div className={`mobile-menu ${open ? 'active' : ''}`} id="mobile-menu">
      <div className="mobile-menu-header">
        <div className="logo">
          <img src="/Logo Horizontal.png" alt="Movimento Meraki Logo" />
        </div>
        <button
          className="menu-close"
          id="menu-close"
          aria-label="Fechar menu"
          type="button"
          onClick={onClose}
        >
          <X />
        </button>
      </div>
      <nav className="mobile-nav">
        {mobileLinks.map(([href, label]) => (
          <a
            href={href}
            key={href}
            onClick={(event) => handleInternalLink(event, href)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="mobile-menu-footer">
        <a
          href="https://wa.me/5511983612385"
          className="btn btn-primary btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default App;
