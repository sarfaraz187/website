import { Button } from "@src/app/components/ui/button";

const Home = () => {
  console.log("Hello world!");
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <Button variant={"default"}>New</Button>
    </div>
  );
};

export default Home;
