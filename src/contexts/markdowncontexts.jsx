import React, { createContext, useContext, useState } from "react";

// Create the context
const MarkdownContext = createContext();

// Custom hook to use the MarkdownContext
export const useMarkdownContext = () => {
  return useContext(MarkdownContext);
};

// Provider component
export const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState('');

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
};
