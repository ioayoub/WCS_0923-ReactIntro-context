import { useUser } from "../contexts/CurrentUserContext";

function About() {
  const { name } = useUser();
  return (
    <div>
      <h1>About page</h1>
      <h2>Hi my name is {name}</h2>
    </div>
  );
}

export default About;
