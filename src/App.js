// import "./App.css";
// import Form from "./components/Form";
// // import { createContext, useState } from "react";  4.3k (gzipped: 1.9k)

// export const ThemeContext = createContext(null);

// function App() {
//   const [theme, setTheme] = useState("light");
//   const toggleTheme = () => {
//     setTheme((curr) => (curr === "light" ? "dark" : "light"));
//   };
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme}}>
//       <div className="App" id="theme">
//         <Form />
//       </div>
//       </ThemeContext.Provider>
//   );
// }

// export default App;


import Form from "./components/form";
import "./App.css";

import { createContext, useState } from "react";
import Switch from "react-switch";
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <Switch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;