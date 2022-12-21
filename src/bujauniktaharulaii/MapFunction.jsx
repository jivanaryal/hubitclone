import React from "react";

const data = [
  {
    name: "jivan",
    age: "23",
  },
  {
    name: "manoj",
    age: "23",
  },
  {
    name: "alember",
    age: "23",
  },
  {
    name: "alember",
    age: "23",
  },
  {
    name: "alember",
    age: "23",
  },
  {
    name: "alember",
    age: "23",
  },
  {
    name: "alember",
    age: "23",
  },
  {
    name: "alember",
    age: "23",
  },
  {
    name: "alember",
    age: "23",
  },
  {
    name: "alember",
    age: "23",
  },
];

const MapFunction = () => {
  return (
    <div>
      {data.map((val, i) => {
        return (
          <div key={i}>
            <p>{val.name}</p>
            <p>{val.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MapFunction;
