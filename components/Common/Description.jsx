import React from "react";

const Description = ({description}) => {
  return (
    <p className="text-lg sm:text-xl text-purple-200 max-w-3xl mx-auto">
      {description}
    </p>
  );
};

export default Description;
