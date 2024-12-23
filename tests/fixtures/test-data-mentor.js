require('dotenv').config();  // Load environment variables

module.exports = {
    validMentorDetails: {
        firstName: 'Employee',
        lastName: 'Mentor',
        email: process.env.VALID_MENTOR_EMAIL,
        password: process.env.VALID_MENTOR_PASSWORD,
        jobTitle: 'Software Engineer',
        company: 'QA Techno',
        linkedIn: 'https://www.linkedin.com/in/mentor',
    },
    
    validMentorLogin: {
        email:'tony@yopmail.com',
        password:'Testdata@123'
        
    },

    validVolunteer: {
        email:'aaa@yopmail.com',
        password:'Testdata@123'
        
    },
   
    invalidMentorDetails: {
        firstName: '',
        lastName: '',
        email: 'invalid_email@domain.com',
        password: 'short',  // Invalid password
        jobTitle: '',
        company: '',
        linkedIn: 'invalid-linkedin-url'
    },

    urls: {
        baseUrl: process.env.BASE_URL,
    }
};
