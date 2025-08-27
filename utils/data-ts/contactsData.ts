// contactData.ts
export interface ContactData {
  email: string;
  phone: string;
  address: string;
  github: string;
  facebook: string;
  linkedIn: string;
  twitter: string;
  stackOverflow?: string; // optional
  devUsername?: string;   // optional
}

export const contactsData: ContactData = {
  email: 'awaisnaseer555@gmail.com',
  phone: '+92 3355544431',
  address: 'Rwalpindi, Pakistan',
  github: 'https://github.com/awaisnaseer555',
  facebook: 'https://www.facebook.com/awaisnaseer55',
  linkedIn: 'https://www.linkedin.com/in/awaisnaseer555',
  twitter: 'https://twitter.com/awaisnaseer555',
  stackOverflow: '',
  devUsername: 'awaisnaseer555',
};
