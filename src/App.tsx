import "./App.css";
import Button from "./Button";

interface Props {
  name: string;
}

function App({ name }: Props) {
  console.log(name);
  return (
    <>
      <Button></Button>
    </>
  );
}

export default App;
