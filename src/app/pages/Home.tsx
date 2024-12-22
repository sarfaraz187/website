import PathConstants from "@src/routes/PathConstants";
import { Link } from "react-router";

const Home = () => {
  const stories = [
    { id: 1, title: "Story 1" },
    { id: 2, title: "Story 2" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>
        <Link to={PathConstants.about.root.path}>To About</Link>
      </h1>
      {stories.map((story) => (
        <div key={story.id}>{story.title}</div>
      ))}
    </div>
  );
};

export default Home;
