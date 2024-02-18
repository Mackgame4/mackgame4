export const Config = {
    defaultTheme: 'green-light',
    defaultLocale: 'en',

    firstName: 'Fábio',
    lastName: 'Magalhães',
    imageURL: 'https://media.licdn.com/dms/image/D4E03AQHr208rFuXqtQ/profile-displayphoto-shrink_800_800/0/1686155019867?e=1714003200&v=beta&t=63TPqMh12mwOW6DWRYW4tbuH1U5aPSmk9kc0uWjviJ0',
    badges: ['Software Engineer', 'Full Stack Developer', 'Student'],

    phoneNumber: '+351 927 728 801',
    email: 'fabiomagalhaes454@hotmail.com',
    githubUsername: 'Mackgame4',
    githuLink: 'http://github.com/Mackgame4',
    linkedInUsername: 'fabiomagalhaes104365',
    linkedInLink: 'https://www.linkedin.com/in/fabiomagalhaes104365',

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

    summarize: 'I am a software engineer with a passion for developing and designing software. I am currently studying "Informatic Engineering", IT, at the University of Minho, where I am learning about the fundamentals of computers, algorithms, data science, and software engineering. I am also a full stack developer with experience as freelance in web development and mobile development.',

    experience: [
        {
            src: 'https://cecri-blog.vercel.app/',
            title: 'Web Developer',
            date: 'Freelance',
            company: 'Centro de Estudos de Relações Internacionais (CECRI)',
            location: 'Braga, Portugal',
            description: '[Worked as a freelance web developer for the CECRI - UMINHO, where I developed a blog for the organization. The blog was developed using AstroJS and used Github as CMS and deployed on Vercel, aiming for minimum costs of maintenance. The blog is used to share articles and news about international relations and politics. The blog is also used to share information about the organization and its members, and help students and researchers to find information and support during their studies and research.]'
        },
        {
            src: '',
            title: 'And gladly looking forward to new opportunities and experiences :)',
            date: '',
            company: '',
            location: '',
            description: ''
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
    ]
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