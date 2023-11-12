import { Outlet } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./contexts/CurrentUserContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main>
        <UserProvider>
          <Navbar />
          <Outlet />
        </UserProvider>
      </main>
    </>
  );
}

export default App;
