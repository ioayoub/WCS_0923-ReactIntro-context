import { useUser } from "../contexts/CurrentUserContext";

function Homepage() {
  const { name, handleNameChange, resetName } = useUser();
  return (
    <div>
      <h1>Homepage</h1>
      <h2>Hello {name}</h2>

      {name.length ? (
        <button onClick={resetName}>Reset</button>
      ) : (
        <form onSubmit={handleNameChange}>
          <input type="text" />
          <button type="submit">Change My Name</button>
        </form>
      )}
    </div>
  );
}

export default Homepage;
