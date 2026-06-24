export interface PersonalData {
  name: string;
  profile: string;
  designation: string;
  description: string;
  email: string;
  phone: string;
  address?: string;
  github: string;
  facebook?: string;
  linkedIn: string;
  twitter?: string;
  stackOverflow?: string;
  leetcode: string;
  devUsername: string;
  resume: string;
}

export const personalData: PersonalData = {
  name: "MOHAMMAD AWAIS NASEER",
  profile: '/profile.png',
  designation: "Principal Software Engineer",
  description: "Full-Stack Developer with 5+ years of experience creating scalable and high-performance web applications. Skilled in React.js, Vue.js, TypeScript, TailwindCSS, Node.js, Express, MongoDB, Django, and Odoo development. Passionate about clean architecture, seamless user experiences, and modern deployment workflows using CI/CD, Vercel, and Netlify.",
  email: 'awaisnaseer555@gmail.com',
  phone: '+92 3355544431',
  address: 'Rawalpindi, Pakistan',
  github: 'https://github.com/awaisnaseer555',
  facebook: 'https://www.facebook.com/awaisnaseer55',
  linkedIn: 'https://www.linkedin.com/in/awaisnaseer555',
  twitter: '',
  stackOverflow: '',
  leetcode: "https://leetcode.com/awaisnaseer555/",
  devUsername: "awaisnaseer555",
  resume: "https://docs.google.com/document/d/19p8LQzXHZx6mlxL0yFTli2xHtgyOLVYz/edit?usp=sharing&ouid=108582055075985082178&rtpof=true&sd=true"
}