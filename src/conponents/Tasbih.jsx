// import React from "react";

// const Tasbih = ({ text }) => {
//   return React.createElement("div", {}, [
//     React.createElement("h3", { key: 1 }, text),
//     // React.createElement("h3", { key: 2 }, text),
//     // React.createElement("h3", { key: 3 }, text),
//   ]);
// };

const Tasbih = (props) => {
  return (
    <div>
        <h1>{props.tasbih}</h1>
    </div>
  );
};

export default Tasbih;
