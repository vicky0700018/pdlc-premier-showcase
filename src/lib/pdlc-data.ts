import heroImage from "@/assets/pdlc-hero.jpg";
import mentorshipImage from "@/assets/pdlc-mentorship.jpg";
import classroomImage from "@/assets/pdlc-classroom.jpg";
import achieversImage from "@/assets/pdlc-achievers.jpg";

export type Program = {
  id: string; name: string; category: string; description: string; duration: string;
  format: string; eligibility: string; image: string; features: string[]; modules: string[]; active: boolean;
};
export type Person = { id: string; name: string; program: string; detail: string; meta: string; image: string; bio?: string; active: boolean };
export type Testimonial = { id: string; name: string; program: string; rating: number; quote: string; image: string; active: boolean };
export type Center = { id: string; name: string; address: string; phone: string; email: string; hours: string; programs: string; image: string; active: boolean };
export type Faq = { id: string; question: string; answer: string; category: string; active: boolean };
export type Enquiry = { id: string; name: string; email: string; phone: string; program: string; center: string; date: string; status: "New" | "Contacted" | "Converted" };
export type Career = { id: string; title: string; department: string; location: string; type: string; description: string; requirements: string; active: boolean };

export const images = { heroImage, mentorshipImage, classroomImage, achieversImage };

export const programCategories = ["All", "Professional Courses", "Commerce", "Entrance Preparation", "Global Exams"];

export const initialPrograms: Program[] = [
  { id: "ca-coaching", name: "CA Coaching", category: "Professional Courses", description: "A structured pathway from foundation concepts to confident exam performance.", duration: "12–36 months", format: "Classroom + Live", eligibility: "Class 12 or equivalent", image: classroomImage, features: ["Concept studios", "Weekly tests", "Exam strategy"], modules: ["Accounting", "Business Law", "Taxation", "Audit & Assurance"], active: true },
  { id: "cfa-coaching", name: "CFA Coaching", category: "Professional Courses", description: "Applied finance preparation built around analysis, ethics and portfolio thinking.", duration: "5–8 months / level", format: "Hybrid", eligibility: "As per CFA Institute guidelines", image: mentorshipImage, features: ["Market cases", "Adaptive mocks", "Career mentoring"], modules: ["Ethical Standards", "Quantitative Methods", "Equity", "Portfolio Management"], active: true },
  { id: "acca-coaching", name: "ACCA Coaching", category: "Global Exams", description: "Paper-wise mentoring for an internationally recognised accounting pathway.", duration: "18–30 months", format: "Classroom + Online", eligibility: "Class 12 or graduate", image: heroImage, features: ["Paper planning", "Revision labs", "Progress reviews"], modules: ["Business & Technology", "Financial Reporting", "Audit", "Strategic Business Leader"], active: true },
  { id: "cs-coaching", name: "CS Coaching", category: "Professional Courses", description: "Precise legal, governance and writing preparation for every CS stage.", duration: "10–24 months", format: "Classroom + Live", eligibility: "Class 12 or graduate", image: classroomImage, features: ["Writing labs", "Case studies", "Mentor reviews"], modules: ["Company Law", "Corporate Accounting", "Governance", "Tax Laws"], active: true },
  { id: "commerce", name: "Commerce", category: "Commerce", description: "Strong fundamentals for Accounts, Economics and business studies.", duration: "Academic year", format: "Classroom", eligibility: "FYJC / SYJC students", image: classroomImage, features: ["Board focus", "Doubt desks", "Parent reviews"], modules: ["Accounts", "Economics", "OCM", "Mathematics"], active: true },
  { id: "bba-ipm", name: "BBA / IPM", category: "Entrance Preparation", description: "Focused preparation for aptitude, interviews and management entrances.", duration: "6–10 months", format: "Hybrid", eligibility: "Class 11, 12 or graduate", image: achieversImage, features: ["Aptitude drills", "Interview prep", "Mock analysis"], modules: ["Quantitative Aptitude", "Verbal Ability", "Reasoning", "GD–PI"], active: true },
  { id: "clat-law", name: "CLAT / Law Entrance", category: "Entrance Preparation", description: "Legal reasoning, current affairs and time-bound mock preparation.", duration: "6–12 months", format: "Classroom + Live", eligibility: "Class 11 or 12", image: mentorshipImage, features: ["Legal cases", "GK capsules", "National mocks"], modules: ["Legal Reasoning", "Current Affairs", "Logical Reasoning", "English"], active: true },
  { id: "ielts-toefl", name: "IELTS / TOEFL", category: "Global Exams", description: "Personalised language preparation for global study ambitions.", duration: "8–12 weeks", format: "Hybrid", eligibility: "Open eligibility", image: heroImage, features: ["Speaking labs", "Writing feedback", "Full mocks"], modules: ["Reading", "Writing", "Listening", "Speaking"], active: true },
  { id: "gre-gmat", name: "GRE / GMAT", category: "Global Exams", description: "A dual-track preparation plan for global graduate admissions.", duration: "12–20 weeks", format: "Online + Classroom", eligibility: "Graduate aspirants", image: mentorshipImage, features: ["Diagnostic plan", "Section strategy", "Application support"], modules: ["Quantitative Reasoning", "Verbal Reasoning", "Data Insights", "Analytical Writing"], active: true },
];

export const initialAchievers: Person[] = [
  { id: "a1", name: "Aarav Sharma", program: "CA Foundation", detail: "92%", meta: "2026", image: achieversImage, active: true },
  { id: "a2", name: "Ananya Mehta", program: "CFA Level I", detail: "Top Performer", meta: "2026", image: mentorshipImage, active: true },
  { id: "a3", name: "Riya Patel", program: "CS Executive", detail: "88%", meta: "2026", image: classroomImage, active: true },
  { id: "a4", name: "Kabir Nair", program: "BBA / IPM", detail: "Mock Rank 01", meta: "2026", image: heroImage, active: true },
];

export const initialFaculty: Person[] = [
  { id: "f1", name: "Dr. Rahul Mehta", program: "CA & Financial Accounting", detail: "PhD, FCA", meta: "18 years", image: mentorshipImage, bio: "Known for turning complex accounting frameworks into clear, practical systems.", active: true },
  { id: "f2", name: "Prof. Neha Sharma", program: "Economics & Commerce", detail: "MA Economics", meta: "14 years", image: achieversImage, bio: "Connects economic theory with current markets and student-friendly examples.", active: true },
  { id: "f3", name: "CA Arjun Kapoor", program: "Advanced Accounting", detail: "CA, B.Com", meta: "12 years", image: classroomImage, bio: "Combines rigorous problem-solving with calm, personal exam mentorship.", active: true },
];

export const initialTestimonials: Testimonial[] = [
  { id: "t1", name: "Meera Joshi", program: "CA Foundation", rating: 5, quote: "The weekly plan made a demanding syllabus feel clear and achievable. Every test had useful, personal feedback.", image: achieversImage, active: true },
  { id: "t2", name: "Dev Malhotra", program: "CFA Level I", rating: 5, quote: "Case discussions changed how I approached finance. The mentors cared about understanding, not memorising.", image: mentorshipImage, active: true },
  { id: "t3", name: "Sara Khan", program: "IELTS", rating: 5, quote: "Speaking sessions were focused and encouraging. I always knew what to improve next.", image: heroImage, active: true },
  { id: "t4", name: "Ishaan Rao", program: "BBA / IPM", rating: 5, quote: "The mock analysis and interview practice gave me structure, speed and confidence.", image: classroomImage, active: true },
  { id: "t5", name: "Naina Shah", program: "Commerce", rating: 4, quote: "Concepts finally felt connected. Regular reviews helped me stay consistent through the year.", image: achieversImage, active: true },
  { id: "t6", name: "Arjun Iyer", program: "GRE / GMAT", rating: 5, quote: "A thoughtful study plan, sharp feedback and mentors who respected my schedule.", image: mentorshipImage, active: true },
];

export const initialCenters: Center[] = ["Mumbai Central", "Andheri", "Borivali", "Ghatkopar", "Pune", "Delhi"].map((name, index) => ({ id: `c${index + 1}`, name, address: `Demo learning center, ${name} — illustrative address only`, phone: "[PHONE NUMBER]", email: "[EMAIL ADDRESS]", hours: "Mon–Sat · 8:00 AM–8:00 PM", programs: index % 2 ? "CA, Commerce, Entrance" : "CA, CFA, ACCA, CS", image: index % 2 ? classroomImage : mentorshipImage, active: true }));

export const initialFaqs: Faq[] = [
  ["What programs do you offer?", "The demo catalogue includes professional, commerce, entrance and global exam pathways."],
  ["Do you provide online classes?", "Yes. Selected demo programs show classroom, live and hybrid learning formats."],
  ["Do you provide study material?", "Structured notes, practice sets and revision resources are represented as part of each program."],
  ["Are mock tests included?", "Regular mock tests and performance reviews are included in the learning model shown in this demo."],
  ["Do you offer personal mentorship?", "Yes. Personal reviews and goal-based mentoring are central to the represented experience."],
  ["How can I choose the right program?", "Submit an enquiry and a demo academic counsellor will help map your goals to a pathway."],
  ["How can I book a counselling session?", "Use the Enquire Now form or the counselling button shown across the website."],
  ["How can I visit a center?", "Choose a demo center and use its directions action or send an enquiry for a visit."],
].map(([question, answer], index) => ({ id: `q${index + 1}`, question, answer, category: "General", active: true }));

export const initialEnquiries: Enquiry[] = [
  { id: "e1", name: "Nikhil Verma", email: "nikhil@example.com", phone: "+91 90000 00001", program: "CA Coaching", center: "Andheri", date: "26 Sep 2026", status: "New" },
  { id: "e2", name: "Tanya Bose", email: "tanya@example.com", phone: "+91 90000 00002", program: "CFA Coaching", center: "Mumbai Central", date: "25 Sep 2026", status: "Contacted" },
  { id: "e3", name: "Rohan Das", email: "rohan@example.com", phone: "+91 90000 00003", program: "BBA / IPM", center: "Ghatkopar", date: "24 Sep 2026", status: "Converted" },
];

export const initialCareers: Career[] = [
  ["Academic Counsellor", "Admissions", "Mumbai", "Full time", "Guide students and families toward suitable learning pathways.", "Clear communication · education counselling · student-first mindset"],
  ["Faculty Member", "Academics", "Multiple locations", "Full time / Visiting", "Deliver concept-led sessions and support academic planning.", "Subject expertise · teaching experience · mentorship orientation"],
  ["Student Relationship Executive", "Student Success", "Mumbai", "Full time", "Coordinate student support, progress updates and parent communication.", "Organisation · empathy · service experience"],
  ["Marketing Executive", "Growth", "Mumbai", "Full time", "Create responsible campaigns and community outreach programs.", "Content sense · campaign execution · analytics basics"],
  ["Center Operations Executive", "Operations", "Multiple locations", "Full time", "Keep academic schedules, facilities and student services running smoothly.", "Operations experience · ownership · coordination"],
].map(([title, department, location, type, description, requirements], i) => ({ id: `j${i + 1}`, title, department, location, type, description, requirements, active: true }));

export const initialSettings = { businessName: "PDLC", fullName: "PD Learning Curve", tagline: "You trust. We care.", phone: "[PHONE NUMBER]", email: "[EMAIL ADDRESS]", address: "[BUSINESS ADDRESS]", footer: "Structured learning, thoughtful mentorship and professional preparation for ambitious students.", primary: "#0B1F3A", secondary: "#123B63", accent: "#D4A72C" };
export const initialStatistics = [
  { id: "s1", value: "10K+", label: "Students Guided" }, { id: "s2", value: "25+", label: "Expert Faculty" },
  { id: "s3", value: "12+", label: "Professional Programs" }, { id: "s4", value: "15+", label: "Years of Excellence" },
  { id: "s5", value: "1.8K+", label: "Success Stories" },
];