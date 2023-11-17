import { useState, createContext, useContext, useMemo } from "react";
import {} from "react";
import PropTypes from "prop-types";

const UserContext = createContext({
  name: "toto",
  handleNameChange: () => {},
});

export const UserProvider = ({ children }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");

  const userValues = useMemo(
    () => ({
      name,
      handleNameChange: (e) => {
        e.preventDefault();
        let inputValue = e.target[0].value;

        if (inputValue.trim() === "") return alert("Please enter a name");

        setName(inputValue);
        // localStorage.setItem("name", inputValue);
        e.target[0].value = "";
      },
      resetName: () => {
        setName("");
        localStorage.removeItem("name");
      },
    }),
    [name]
  );

  return (
    <UserContext.Provider value={userValues}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
