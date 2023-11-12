import { useState } from "react";
import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const UserContext = createContext({
  name: "toto",
  handleNameChange: () => {},
});

export const UserProvider = ({ children }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");

  const handleNameChange = (e) => {
    e.preventDefault();
    let inputValue = e.target[0].value;

    if (inputValue.trim() === "") return alert("Please enter a name");

    setName(inputValue);
    // localStorage.setItem("name", inputValue);
    e.target[0].value = "";
  };

  const resetName = () => {
    setName("");
    localStorage.removeItem("name");
  };

  return (
    <UserContext.Provider value={{ name, handleNameChange, resetName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
