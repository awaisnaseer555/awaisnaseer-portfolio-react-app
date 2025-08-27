export interface Education {
  id: number;
  title: string;
  duration: string;
  institution: string;
}

export const educations: Education [] = [
  {
    id: 1,
    title: "Bachelor's in Computer Science (BSCS)",
    duration: "2014 - 2018",
    institution: "Capital University of Science and Technology",
  },
  {
    id: 2,
    title: "Intermediate in Computer Science (ICS)",
    duration: "2012 - 2014",
    institution: "Punjab College of Information Technology",
  },
  {
    id: 3,
    title: "Matriculation in Arts",
    duration: "2010 - 2012",
    institution: "Hussain International School of Excellence",
  }
]