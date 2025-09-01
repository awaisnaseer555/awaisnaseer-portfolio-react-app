export interface PersonalData {
  name: string;
  profile: string;
  designation: string;
  description: string;
  email: string;
  phone: string;
  address?: string;
  github: string;
  facebook?: string | undefined;
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
  description: "I am a professional and enthusiastic Full-Stack Developer with over 5+ years of experience. I am a quick learner with a self-driven attitude and a passion for problem-solving. My core expertise is in JavaScript, with strong skills in React.js, Vue.js, TypeScript, and TailwindCSS on the frontend, and Node.js, Express, MongoDB, and Django on the backend. I also specialize in CI/CD pipelines, Vercel, and Netlify deployments, and love building scalable, performant, and user-friendly applications. I am always eager to learn new technologies and open to opportunities that align with my skills and interests.",
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
  resume: "https://drive.google.com/file/d/1bj0qfwMO72BPMZnWyarp__F0jeU0f5OE/view?usp=sharing"
}