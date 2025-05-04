import React from 'react';

const SkillCard = ({ title, description, Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="text-4xl text-primary mb-6 flex justify-center">
        <Icon />
      </div>
      <h3 className="text-xl font-heading font-semibold text-center mb-4">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default SkillCard;