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
    }
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
    }
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
    }
  },
];
export default JobsData;
