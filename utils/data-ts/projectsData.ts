interface Project {
    id: number;
    name: string;
    description: string;
    tools: string[];
    role: string;
    code: string;
    demo: string[] | string;
}

export const projectsData: Project [] = [
    {
        id: 1,
        name: 'Regulatory, Risk & Compliance SaaS Applications',
        description: "Working with an end-to-end GRC platform that helps financial services firms streamline compliance. It automates regulatory processes, reduces risk, and replaces manual monitoring with advanced automation. Trusted by banks, insurers, asset managers, and wealth management firms worldwide, Ruleguard delivers solutions for risk management, employee compliance, and consumer duty." ,       tools: ['NextJS', 'SSR', 'VueJS', 'JavaScript', 'VUEX', 'JEST', 'Cypress', 'TypeScript', 'GitHub Actions'],
        role: 'Senior Software Engineer - Front End Engineer',
        code: '',
        demo: ['https://www.ruleguard.com'],
    },
    {
        id: 2,
        name: 'Car Insurance Widget Applications',
        description: 'I have designed and developed a full-stack web app for Car insurance Company in Denmark. I convert Figma design into responsive Web Application the UI using VueJS, ReactJS, Typescript, TailwindCSS, and  PINIA for state management, The app supports multiple languages. I developed the API using Nodejs, and CI/CD pipelines using Azure DevOps. we used JIRA for project management and GitHub for version control. The app features role-based authentication, and a custom-built editor for creating and managing insurance policies.',
        tools: ['VueJS', 'PINIA', 'vue-decorators', 'Tailwind CSS', "TypeScript", "Azure DevOps", 'NodeJS'],
        role: 'Associate Principal Software Engineer - Front End Developer',
        code: '',
        demo: ['https://www.fdm.dk'],
    },
    {
        id: 3,
        name: 'Banking Applications',
        description: 'I have worked on the Bank Al Habib Pvt Ltd project, which is a banking application. I have developed the front-end using VueJS, Bootstrap-vue, SCSS, and Xstate for state management. I have also worked on the backend using JAVA - Quarkus for API implementation. The application features role-based authentication, and a custom-built editor for creating and managing banking policies.',
        tools: ['VueJS', 'NextJS', 'Bootstrap-vue', 'SCSS', 'XState ', 'FSM', 'ElementPlus', 'Storybook', 'JAVA - Quarkus', 'vuex', 'Vue Router', 'Axios'],
        code: '',
        role: 'Software Design Engineer - Front End developer',
        demo:'',
    },
    {
        id: 4,
        name: 'Canvas based Applications',
        description: "My team and I developed multiple canvas-based application called e.g GlorifyApp, Ad Viddy, Meme Generator etc. As the front-end developer, I implemented canvas elements for creating ads, incorporating audio transitions, images, and special effects using FabricJS and HowlerJS.",
        tools: ['FabricJS', 'Vanilla JS', 'JQuery', 'HowlerJS', "HTML5/CSS3", 'Bootstrap'],
        code: '',
        demo: ['https://adviddy.com', 'https://glorify.com', 'https://www.chase.com'],
        role: 'Application Developer - Frontend',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },