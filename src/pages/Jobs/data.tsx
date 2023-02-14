const jobListings = [
  {
    job: {
      title: 'Software Engineer',
      qualifications: [
      'Strong programming skills in languages such as Java, Python, or C++',
      'Experience with database systems such as MySQL or PostgreSQL',
      'Familiarity with software development tools and methodologies such as Agile',
      ],
      duties: [
      'Design, develop, and maintain software applications',
      'Write high-quality, maintainable code',
      'Collaborate with cross-functional teams to identify and address software issues',
      ],
      description: 'Develop, test, and maintain software applications',
      discipline: 'Computer Science',
      type: 'full-time',
      category: 'Software Development',
      experience:"NULL"
    },
    company: {
      name: 'ABC Tech',
      companyType: 'Private',
      logo: 'https://www.example.com/abc-tech-logo.png',
    },
    location: {
      city: 'New York',
      country: 'USA',
      region: 'North America',
    },
    dates: {
      postingDate: new Date('2023-02-14'),
      expiryDate: new Date('2023-03-14'),
      closingDate: new Date('2023-03-15'),
      removingJobDate: new Date('2023-03-30'),
    },
    salary: {
      sal: 80000,
      hours: 40,
      type: 'annual',
    },
  },
  {
    job: {
      title: 'Marketing Specialist',
      qualifications: [
      'Experience with digital marketing channels such as social media and email marketing',
      'Ability to develop and implement marketing strategies and campaigns',
      'Strong communication and interpersonal skills',
      ],
      duties: [
      'Develop and execute marketing strategies and campaigns',
      'Analyze marketing data and develop reports',
      'Collaborate with cross-functional teams to develop marketing materials and content',
      ],
      description: 'Develop and implement marketing strategies',
      discipline: 'Marketing',
      type: 'full-time',
      category: 'Marketing and Advertising',
      experience:"2+ years"
    },
    company: {
      name: 'XYZ Corp',
      companyType: 'Public',
      logo: 'https://www.example.com/xyz-corp-logo.png',
    },
    location: {
      city: 'San Francisco',
      country: 'USA',
      region: 'North America',
    },
    dates: {
      postingDate: new Date('2023-02-13'),
      expiryDate: new Date('2023-03-13'),
      closingDate: new Date('2023-03-14'),
      removingJobDate: new Date('2023-03-29'),
    },
    salary: {
      sal: 60000,
      hours: 40,
      salaryType: 'annual',
    }
  },
  {
    job: {
      title: 'Product Manager',
      qualifications: [
      'Experience with digital marketing channels such as social media and email marketing',
      'Ability to develop and implement marketing strategies and campaigns',
      'Strong communication and interpersonal skills',
      ],
      duties: [
      'Develop and execute marketing strategies and campaigns',
      'Analyze marketing data and develop reports',
      'Collaborate with cross-functional teams to develop marketing materials and content',
      ],
      description: 'Lead product development and launch',
      discipline: 'Business Administration',
      type: 'full-time',
      category: 'Product Management',
      experience:"Null"
    },
    company: {
      name: 'LMN Inc',
      companyType: 'Private',
      logo: 'https://www.example.com/lmn-inc-logo.png',
    },
    location: {
      city: 'London',
      country: 'UK',
      region: 'Europe',
    },
    dates: {
      postingDate: new Date('2023-02-12'),
      expiryDate: new Date('2023-03-12'),
      closingDate: new Date('2023-03-14'),
      removingJobDate: new Date('2023-03-29')
    },
    salary: {
      sal: 60000,
      hours: 40,
      companyType: 'annual',
    },
  }
];
export default jobListings;