import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { initialAchievers, initialCareers, initialCenters, initialEnquiries, initialFaculty, initialFaqs, initialPrograms, initialSettings, initialStatistics, initialTestimonials, type Career, type Center, type Enquiry, type Faq, type Person, type Program, type Testimonial } from "./pdlc-data";

type Store = {
  programs: Program[]; setPrograms: React.Dispatch<React.SetStateAction<Program[]>>;
  achievers: Person[]; setAchievers: React.Dispatch<React.SetStateAction<Person[]>>;
  faculty: Person[]; setFaculty: React.Dispatch<React.SetStateAction<Person[]>>;
  testimonials: Testimonial[]; setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  centers: Center[]; setCenters: React.Dispatch<React.SetStateAction<Center[]>>;
  faqs: Faq[]; setFaqs: React.Dispatch<React.SetStateAction<Faq[]>>;
  enquiries: Enquiry[]; setEnquiries: React.Dispatch<React.SetStateAction<Enquiry[]>>;
  careers: Career[]; setCareers: React.Dispatch<React.SetStateAction<Career[]>>;
  settings: typeof initialSettings; setSettings: React.Dispatch<React.SetStateAction<typeof initialSettings>>;
  statistics: typeof initialStatistics; setStatistics: React.Dispatch<React.SetStateAction<typeof initialStatistics>>;
  isAdmin: boolean; login: (email: string, password: string) => boolean; logout: () => void;
  toast: string; notify: (message: string) => void;
};

const PdlcContext = createContext<Store | undefined>(undefined);
export function PdlcProvider({ children }: { children: ReactNode }) {
  const [programs, setPrograms] = useState(initialPrograms); const [achievers, setAchievers] = useState(initialAchievers);
  const [faculty, setFaculty] = useState(initialFaculty); const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [centers, setCenters] = useState(initialCenters); const [faqs, setFaqs] = useState(initialFaqs);
  const [enquiries, setEnquiries] = useState(initialEnquiries); const [careers, setCareers] = useState(initialCareers);
  const [settings, setSettings] = useState(initialSettings); const [statistics, setStatistics] = useState(initialStatistics);
  const [isAdmin, setIsAdmin] = useState(false); const [toast, setToast] = useState("");
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(""), 2600); };
  const login = (email: string, password: string) => { const valid = email === "admin@demo.com" && password === "admin123"; if (valid) setIsAdmin(true); return valid; };
  const value = useMemo(() => ({ programs, setPrograms, achievers, setAchievers, faculty, setFaculty, testimonials, setTestimonials, centers, setCenters, faqs, setFaqs, enquiries, setEnquiries, careers, setCareers, settings, setSettings, statistics, setStatistics, isAdmin, login, logout: () => setIsAdmin(false), toast, notify }), [programs, achievers, faculty, testimonials, centers, faqs, enquiries, careers, settings, statistics, isAdmin, toast]);
  return <PdlcContext.Provider value={value}>{children}{toast && <div className="toast" role="status"><span>✓</span>{toast}</div>}</PdlcContext.Provider>;
}
export function usePdlc() { const context = useContext(PdlcContext); if (!context) throw new Error("usePdlc must be used inside PdlcProvider"); return context; }