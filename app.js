import React from "react";
import ReactDOM  from "react-dom/client";

  const child1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Namaste react"
  );
  const ch3 = React.createElement(
    "li",
    {
      
    },
    "About us"
  );
  const ch4 = React.createElement(
    "li",
    {
      
    },
    "Support"
  );
  const ch5= React.createElement(
    "li",
    {
      
    },
    "Home"
  );
  
  const child2 = React.createElement(
    "ul",
    {
      
    },
    [ch3, ch4,ch5]
  );
  
 
 
  const header = React.createElement(
    "div",
    {
      className: "header",
      style: {
        background:"violet",
      },
      
    },
    [child1,child2]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(header);