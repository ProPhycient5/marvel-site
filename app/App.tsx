import Navbar from "@/components/Navbar";
import ToDoWidget from "@/components/ToDoWidgits";
import React from "react";
import Home from "./page";

const App = () => {
  return (
    <div>
      <ToDoWidget />
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
