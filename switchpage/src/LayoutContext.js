import React from "react";

export const LayoutContext = React.createContext();

export const LayoutStorage = ({ children }) => {
  const [switcher, setSwitcher] = React.useState(true);

  function handleSwitcher() {
    setSwitcher((switcher) => !switcher);
  }

  return (
    <LayoutContext.Provider value={{ switcher, handleSwitcher }}>
      {children}
    </LayoutContext.Provider>
  );
};
