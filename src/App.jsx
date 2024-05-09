import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./conponents/SearchParams";

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Alhamdulillah"),

//     React.createElement(Tasbih, {
//       tasbih: "Alhamdulillah",
//     }),

//     React.createElement(Tasbih, {
//       tasbih: "SubhanAllah",
//     }),

//     React.createElement(Tasbih, {
//       tasbih: "Allahuakhbar",
//     })

//   );
// };

const App = () => {
  return (
    <div>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);

// createRoot(container);
