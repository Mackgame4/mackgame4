export const Config = {
    defaultTheme: 'green-light',
    defaultLocale: 'en',

    firstName: 'Fabio',
    lastName: 'Magalhas',
    imageURL: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-gen%C3%A9rica-silhueta-cinzenta-em-um-fundo-branco-144511705.jpg',
    badges: ['Software Engineer', 'Full Stack Developer', 'Student'],

    phoneNumber: '+351 910 000 000',
    email: 'email@gmail.com',
    githubUsername: 'Mackgame4',
    githuLink: 'http://github.com/Mackgame4',
    linkedInUsername: 'mackgame4',
    linkedInLink: 'http://linkedin.com/in/mackgame4',

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

    skills: [
        'Trouble Shooting',
        'Problem Solving',
        'Team Work',
        'Workflow Development',
        'Computer/Hardware Skills',
        'Adaptability/Creativity'
    ],

    tools: [
        {
            name: 'JavaScript/TypeScript',
            level: 100
        },
        {
            name: 'React/Vue/Svelte/Astro',
            level: 90
        },
        {
            name: 'C/Lua',
            level: 95
        },
        {
            name: 'Python/Haskell',
            level: 80
        },
        {
            name: 'HTML/CSS',
            level: 100
        },
        {
            name: 'Git/Batch/Bash',
            level: 80
        },
        {
            name: 'Java',
            level: 95
        },
        {
            name: 'MySQL/MongoDB',
            level: 100
        },
        {
            name: 'VSCode/IntelliJ',
            level: 100
        },
        {
            name: 'Figma/Adobe Photoshop',
            level: 55
        },
        {
            name: 'Assembly/ASM',
            level: 40
        }
    ],

    education: [
        {
            title: 'Bachelor in Computer Science & Software Engineering',
            date: '2022 - 2024',
            institution: 'University of Minho',
            location: 'Braga, Portugal',
            description: 'Currently studying Computer Science at the University of Coimbra. I am learning about the fundamentals of computer science, algorithms, data structures, and software engineering.'
        }
    ],
};

export const locales = {
    en: {
        title: 'Resume',
        contact: 'CONTACTS',
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills',
        languages: 'Languages',
        projects: 'Projects',
        certifications: 'Certifications',
    },
    pt: {
        title: 'Currículo',
        contact: 'CONTACTOS',
        education: 'Educação',
        experience: 'Experiência',
        skills: 'Competências',
        languages: 'Idiomas',
        projects: 'Projetos',
        certifications: 'Certificações',
    },
};