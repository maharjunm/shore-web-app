import  FormData  from '../../components/DataModels/FormData';
import  companyLogo  from '../../components/images/defaultCompanyLogo.jpg';
import  image1  from '../../components/images/images.jpg';
const JobsData:FormData[]=[
  {
     job: {
    title: 'Software Engineer',
    experience: '3+ years',
    discipline: 'Computer Science',
    type: 'Full-time',
    qualification: 'Software Development',
  },
  company: {
    name: 'ABC Tech',
    companyType: 'Private',
    logo: '',
  },
  location: {
    city: 'New York',
    country: 'USA',
    state: 'New York',
    region: 'North America',
  },
  dates: {
    postingDate: new Date('2023-02-14'),
    expiryDate: new Date('2023-03-14'),
    closingDate: new Date('2023-03-15'),
    removingDate: new Date('2023-03-30'),
  },
  salary: {
    sal: 80000,
    hours: 40,
    companyType: 'Annual',
  },
  qualifications: [
      { value: 'Strong programming skills in languages such as Java, Python, or C++', id: 'qual-1' },
      { value: 'Experience with database systems such as MySQL or PostgreSQL', id: 'qual-2' },
      { value: 'Familiarity with software development tools and methodologies such as Agile', id: 'qual-3' },
    ],
    duties: [
      { value: 'Design, develop, and maintain software applications', id: 'duty-1' },
      { value: 'Write high-quality, maintainable code', id: 'duty-2' },
      { value: 'Collaborate with cross-functional teams to identify and address software issues', id: 'duty-3' },
    ],
    contact:{
      email:"example@gmail.com",
      employeeEmail:"emplouyee"
    }
  },
  {
    job: {
    title: "Marketing Manager",
    experience: "3+ years of experience in marketing",
    discipline: "Marketing",
    type: "Full-time",
    qualification: "Marketing and Advertising"
  },
  company: {
    name: "XYZ Corporation",
    companyType: "Public",
    logo:  '',
  },
  location: {
    city: "San Francisco",
    country: "USA",
    state: "California",
    region: "North America"
  },
  dates: {
    postingDate: new Date("2023-02-14"),
    expiryDate: new Date("2023-03-14"),
    closingDate: new Date("2023-03-15"),
    removingDate: new Date("2023-03-30")
  },
  salary: {
    sal: 90000,
    hours: 40,
    companyType: "Annual"
  },
  qualifications: [
      { value: "Bachelor's degree in Marketing or related field", id: "1" },
      { value: "Experience with digital marketing channels", id: "2" },
      { value: "Excellent communication and organizational skills", id: "3" }
    ],
  duties: [
      { value: "Develop and implement marketing strategies", id: "1" },
      { value: "Analyze market trends and competition", id: "2" },
      { value: "Collaborate with cross-functional teams", id: "3" }
    ],
    contact:{
      email:"example@gmail.com",
      employeeEmail:"emplouyee"
    }
  },
  {
    job: {
    title: "Graphic Designer",
    experience: "2+ years of experience in graphic design",
    discipline: "Graphic Design",
    type: "Full-time",
    qualification: "Creative Design"
  },
  company: {
    name: "Design Co.",
    companyType: "Private",
    logo: '',
  },
  location: {
    city: "London",
    country: "UK",
    state: null,
    region: "Europe"
  },
  dates: {
    postingDate: new Date("2023-02-14"),
    expiryDate: new Date("2023-03-14"),
    closingDate: new Date("2023-03-15"),
    removingDate: new Date("2023-03-30")
  },
  salary: {
    sal: 60000,
    hours: 40,
    companyType: "Annual"
  },
  qualifications: [
      { value: "Bachelor's degree in Graphic Design or related field", id: "1" },
      { value: "Experience with design software such as Adobe Creative Suite", id: "2" },
      { value: "Strong portfolio of design work", id: "3" }
    ],
    duties: [
      { value: "Create visual designs for various mediums", id: "1" },
      { value: "Collaborate with teams to understand design requirements", id: "2" },
      { value: "Present designs to stakeholders and incorporate feedback", id: "3" }
    ],
    contact:{
      email:"example@gmail.com",
      employeeEmail:"emplouyee"
    }
  }

];
export default JobsData;

