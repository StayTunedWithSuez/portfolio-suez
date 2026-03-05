const educationData = [
  {
    year: "2020 - 2024",
    title: "BSc in Mechanical Engineering",
    institution: "CUET",
    description: "Studied core mechanical subjects with practical projects."
  },
  {
    year: "2018 - 2020",
    title: "Higher Secondary Certificate",
    institution: "XYZ College",
    description: "Focused on Science background."
  }
];

const Education = () => {
  return (
    <div className="relative border-l-2 border-gray-300 ml-4">
      {educationData.map((item, index) => (
        <div key={index} className="mb-10 ml-6 relative">
          
          {/* Circle */}
          <div className="absolute -left-[17px] top-1 w-4 h-4 bg-blue-500 rounded-full"></div>

          {/* Content Box */}
          <div className="bg-gray-100 p-5 rounded-lg shadow-md">
            <span className="text-sm text-blue-500">{item.year}</span>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <h4 className="text-sm text-gray-600">{item.institution}</h4>
            <p className="text-sm mt-2">{item.description}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Education;