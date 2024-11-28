import React from 'react';

const ContactUs = () => {
  const contacts = [
    {
      name: 'Daniel Paredes',
      major: 'Computer Science',
      email: 'dparedes3@neiu.edu',
      profilePic: 'https://via.placeholder.com/150',
    },
    {
      name: 'Akanksha Neelapala',
      major: 'Masters in Computer Science',
      email: 'aneelapala@neiu.edu',
      profilePic: 'https://via.placeholder.com/150',
    },
    {
      name: 'Sri Nikhitha Bhimireddi',
      major: 'Masters in Computer Science',
      email: 'sbhimireddi@neiu.edu',
      profilePic: 'https://via.placeholder.com/150',
    },
    {
      name: 'Luke Lee',
      major: 'Computer Science',
      email: 'L-Lee19@neiu.edu',
      profilePic: 'https://via.placeholder.com/150',
    },
    // Add more contacts here
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="">
              {/* Image */}
              <img
                src={contact.profilePic}
                alt={contact.name}
                className="w-31 h-31 object-cover mx-auto"
              />
              {/* Name */}
              <p className="text-xl font-semibold text-center">{contact.name}</p>
              {/* Major */}
              <p className="text-md text-gray-600 text-center">{contact.major}</p>
              {/* Email */}
              <p className="text-sm text-gray-500 text-center">{contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}
export default ContactUs;