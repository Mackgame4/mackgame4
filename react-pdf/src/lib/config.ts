const dotenv = import.meta.env; // Vite process.env

export const Config = {
    defaultTheme: 'green-light',
    defaultLocale: 'pt',

    firstName: dotenv.VITE_NAME_SECRET || 'Name',
    lastName: dotenv.VITE_SURNAME_SECRET || 'Surname',
    userName: '',
    imageURL: '/profile.png',

    phoneNumber: dotenv.VITE_PHONE_SECRET || '+351 000 000 000',
    email: dotenv.VITE_EMAIL_SECRET || 'email@gmail.com',
    githubUsername: 'Mackgame4',
    githuLink: 'http://github.com/Mackgame4',
    linkedInUsername: 'fabiomagalhaes104365',
    linkedInLink: 'https://www.linkedin.com/in/fabiomagalhaes104365',
};

export const Locales = {
    en: {
        /* Config */
        badges: ['Software Engineer', 'Full Stack Developer', 'Student'],

        summarize: 'I am a software engineer with a passion for developing and designing software. I am currently studying "Informatic Engineering", IT, at the University of Minho, where I am learning about the fundamentals of computers, algorithms, data science, and software engineering. I am also a full stack developer with experience as freelance in web development and mobile development.',

        skills: [
            'Trouble Shooting',
            'Problem Solving',
            'Team Work',
            'Workflow Development',
            'Computer/Hardware Skills',
            'Adaptability/Creativity'
        ],

        languages: [ // Levels: Native, Fluent, Proficient, Intermediate, Basic
            {
                name: 'Portuguese',
                level: 'Native',
                flag: '/icons/pt-flag.png'
            },
            {
                name: 'English',
                level: 'Fluent',
                flag: '/icons/us-flag.png'
            }
        ],

        experience: [
            {
                src: 'https://cecri-blog.vercel.app/',
                title: 'Web Developer',
                date: 'Freelance',
                company: 'Centro de Estudos de Relações Internacionais (CECRI)',
                location: 'Braga, Portugal',
                description: '[Worked as a freelance web developer for the CECRI - UMINHO, where I developed a blog for the organization. The blog was developed using AstroJS and used Github as CMS and deployed on Vercel, aiming for minimum costs of maintenance. The blog is used to share articles and news about international relations and politics. The blog is also used to share information about the organization and its members, and help students and researchers to find information and support during their studies and research.]',
                underlinedTitle: false
            },
            {
                src: '',
                title: 'And gladly looking forward to new opportunities and experiences :)',
                date: '',
                company: '',
                location: '',
                description: '',
                underlinedTitle: true
            }
        ],

        education: [
            {
                src: 'https://www.uminho.pt/',
                title: 'Bachelor in Computer Science & Software Engineering',
                date: '2022 - 2024',
                institution: 'University of Minho',
                location: 'Braga, Portugal',
                description: 'Currently studying Computer Science & Software Engineering at the University of Minho. I am learning about the fundamentals of computer science, algorithms, data structures, data analysis, computer architecture, hardware, and software engineering.'
            }
        ],

        /* Text Locales */
        hello: "Hello, I'm",
        contacts: "CONTACTS",
        experienceText: "WORK EXPERIENCE",
        educationText: "EDUCATION",
        skillsText: "SKILLS",
        languagesText: "LANGUAGES",
        moreInfo: "More Info",
    },
    pt: {
        /* Config */
        badges: ['Engenheiro Software', 'Estudante'],

        summarize: 'Sou atualmente estudante em engenharia informática na Universidade do Minho, com paixão por desenvolver e projetar software. De entre as minhas competências, destaco a minha capacidade de resolução de problemas, trabalho em equipa, desenvolvimento de aplicações web e conhecimentos em hardware, software e ciência de dados. Sou também extremamente adaptável, criativo e amigavél e procuro semper aplicar essas ideologias no meu dia a dia, bem como na resolução de problemas que me são propostos.',

        skills: [
            'Desenvolvimento de Software',
            'Resolução de Problemas',
            'Trabalho em Equipa',
            'Amigável/Comunicativo',
            'Informativo/Explicito',
            'Conhecimentos Software/Hardware',
            'Adaptabilidade/Criatividade'
        ],

        languages: [
            {
                name: 'Português',
                level: 'Nativo',
                flag: '/icons/pt-flag.png'
            },
            {
                name: 'Inglês',
                level: 'Fluente',
                flag: '/icons/us-flag.png'
            }
        ],

        experience: [
            {
                src: 'https://cecri-blog.vercel.app/',
                title: 'Desenvolvimento Web',
                date: 'Freelance (2023)',
                company: 'Centro de Estudos de Relações Internacionais (CECRI)',
                location: 'Braga, Portugal',
                description: '[Trabalhei como desenvolvedor web freelancer para o CECRI - UMINHO, onde desenvolvi um blog para a organização.]',
                underlinedTitle: false
            },
            {
                src: '',
                title: 'Water Park Gerês',
                date: '06/2022 - 07/2022',
                company: 'Water Park Gerês',
                location: 'Gerês, Portugal',
                description: '[Trabalhei ao balcão de atendimento e na vigilante do parque aquático durante um mês de verão. (Mês em que fui contactado pois era necessário mais ajuda para o parque aquático no pico do verão.)]',
                underlinedTitle: false
            },
            {
                src: '',
                title: 'E atualemente à procura de ajudar a desenvolver a sua equipa e projeto. Estou disponivel para trabalho de verão e/ou part-time. :)',
                date: '',
                company: '',
                location: '',
                description: '',
                underlinedTitle: true
            }
        ],

        education: [
            {
                src: 'https://www.aecb.pt/',
                title: 'Ciências e Tecnologias - 12º Ano',
                date: '2019 - 2021',
                institution: 'Escola Secundária de Cabeceiras de Basto',
                location: 'Braga, Portugal',
                description: ''
            },
            {
                src: 'https://www.uminho.pt/',
                title: 'Engenharia Informática',
                date: '2022 - Atualmente',
                institution: 'Universidade do Minho',
                location: 'Braga, Portugal',
                description: ''
            }
        ],

        /* Text Locales */
        hello: "Olá, eu sou",
        contacts: "CONTATOS",
        experienceText: "EXPERIÊNCIA",
        educationText: "EDUCAÇÃO",
        skillsText: "COMPETÊNCIAS",
        languagesText: "IDIOMAS",
        moreInfo: "Mais informação",
    },
};