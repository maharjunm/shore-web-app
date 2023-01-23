import  {JobDet}  from '../../components/DataModels/JobDet';
const JobsData:JobDet[]=[
  {
    job:{
      title:"Software Developer-Fresher",
      qualification:"Btech",
      experience:"Fresher +1",
    },
    company:{
      name:"INFOSYS",
      type:"Regular",
      logo:null,
    },
    location:{
      city:"Hyderabad",
      state:"Telangana",
      country:"India",
      region:"Asia",
    },
    dates:{
      postingDate:new Date("02-21-2023"),
      expiryDate:new Date("12-13-2024"),
      closingDate:new Date("01-03-2023"),
      removingJobDate:new Date("08-02-2023"),
    },
    salary:{
      sal:15000,
      hours:8,
      type:"monthly",
    },
    qualifications:[
      "Bachelor of Technology ",
      "Aws Cloud Computing service",
      "Git and Github",
    ],
    duties:[
      "Developing and maintaining all server-side network components.",
      "Developing and maintaining all client-side UI components and interfaces.",
      "Designing customer-facing UI and back-end services for various business processes",
      "Developing high-performance applications by writing testable, reusable, and efficient code.",
    ],
  },
  {
    job:{
      title:"Frontend Developer-Fresher",
      qualification:"Btech",
      experience:"Seniority +2",
    },
    company:{
      name:"THOUGHTWORKS",
      type:"Regular",
      logo:null,
    },
    location:{
      city:"Mumbai",
      state:"Mharastra",
      country:"India",
      region:"Asia",
    },
    dates:{
      postingDate:new Date("02-02-2023"),
      expiryDate:new Date("03-23-2024"),
      closingDate:new Date("11-10-2023"),
      removingJobDate:new Date("12-06-2023"),
    },
    salary:{
      sal:1200000,
      hours:8,
      type:"yearly",
    },
    qualifications:[
      "Computer Science Graduate",
      "Well familiar with Node.js ",
    ],
    duties:[
      "Implementing effective security protocols, data protection measures, and storage solutions.",
      "Running diagnostic tests, repairing defects, and providing technical support.",
      "Recommending and implementing improvements to processes and technologies.",
    ],
  },
  {
    job:{
      title:"Backend Developer-Fresher",
      qualification:"Btech",
      experience:"Fresher +3",
    },
    company:{
      name:"DELOITTE",
      type:"Permanent",
      logo:null,
    },
    location:{
      city:"Delhi",
      state:"Delhi",
      country:"India",
      region:"Asia",
    },
    dates:{
      postingDate:new Date("02-02-2023"),
      expiryDate:new Date("03-13-2024"),
      closingDate:new Date("11-10-2023"),
      removingJobDate:new Date("12-06-2023"),
    },
    salary:{
      sal:50000,
      hours:8,
      type:"monthly",
    },
    qualifications:[
      "Any Degree",
      "Information Technology Expert",
      "React native of new version",
    ],
    duties:[
      "Keeping informed of advancements in the fields of Node.js and React.js development.Keeping informed of advancements in the fields of Node.js and React.js development.",
      "Designing DB tables and Querying Databases to validate application behaviour and perform unit tests",
    ]
  },
];
export default JobsData;
