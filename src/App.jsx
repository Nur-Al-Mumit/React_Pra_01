import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SearchParams from "./conponents/SearchParams";
import Details from "./conponents/Details";

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<SearchParams />}></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);

// createRoot(container);
