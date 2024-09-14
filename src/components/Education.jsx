import React from 'react'

const educationData = [
  {
    institution: 'Uttarakhand Technical University',
    degree: 'B.Tech in Computer Science and Engineering',
    date: '2020 - 2024',
    cgpa: '7.3',
    description: 'Participated in university technical fest and designed official calendar.'
  },
  {
    institution: 'DAV Public School',
    degree: 'CBSE Class XII',
    date: '2018 - 2019',
    cgpa: '8.7',
    description: 'Secured top marks in  Computer Science.'
  }
  // Add more educational entries
];

const Education = () => {

   return (
    <section className=" py-10 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">EDUCATION</h2>
      <div className="max-w-6xl mx-auto px-4 flex flex-col  grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white  p-6 rounded-lg hover:shadow-xl transition-shadow   duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600">{edu.institution}</h3>
            <p className="text-gray-500">{edu.degree}</p>
            <p className="text-gray-400">{edu.date}</p>
            <p className="text-gray-700 mt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education