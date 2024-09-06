import React, { createContext, useState, useContext } from 'react';


const SidebarContext = createContext();


export const SidebarProvider = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState([]);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, sidebarContent, setSidebarContent }}>
      {children}
    </SidebarContext.Provider>
  );
};


export const useSidebar = () => useContext(SidebarContext);
