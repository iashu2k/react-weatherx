import React from "react";


const Card = ({ name, icon, data }) => {
  return (
    <div className="flex jutify-start items-baseline p-4 my-2">
      <div>{name}</div>
      <div className="mx-2">{icon}</div>
      <div>{data}</div>
    </div>
  );
};

export default Card;
