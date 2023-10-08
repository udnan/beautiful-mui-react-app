import dayjs, {Dayjs} from 'dayjs';

export const today: Date = new Date();
export const date: Dayjs = dayjs((today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear());
export interface Contact {
    id: number;
    name?: string;
    role?: string;
    skills: Array<string>;
    startDate?: Dayjs | null;
    preference?: string;
}

export const contactData: Array<Contact> = [
  {id: 1, name: "John Doe", role: "Software Dev", skills: ["Angular", "React", "Python"], startDate: date, preference: "Home"},
  {id: 2, name: "Jane Doe", role: "Architect", skills: ["Machine Learning", "NodeJS", "Python", "React", "Angular"], startDate: date, preference: "Home"},
  {id: 3, name: "John Smith", role: "Designer", skills: ["NodeJS"], startDate: date, preference: "Hybrid"},
  {id: 4, name: "Jane Smith", role: "Business Analyst", skills: [], startDate: date, preference: "Office"}
];

export const setContactData = (data: Contact): Promise<Contact> => {
  return new Promise((resolve, reject) => {
    const currentIds: Array<number> = contactData.map((contact: Contact) => contact.id);

    if (currentIds.includes(data.id) || data.id === 0 || data.id === null || data.id === undefined) {
      const contactDataError: Error = new Error(`Cannot save contact data with ID ${data.id}.`);
      reject(contactDataError);
    } else {
      contactData.push(data);
      setTimeout(resolve, 3000, data);
    }
  });
};
