import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className="flex text-white">
        <div className="flex flex-row h-full"></div>
        <h2> Home Page!!</h2>

        <About />
        <Contact />
      </div>
    </>
  );
}

export default Home;
