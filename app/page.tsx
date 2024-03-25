import Landing from "./(sectionComponents)/main";
import About from "./(sectionComponents)/about";
import Projects from "./(sectionComponents)/projects";
import Contact from "./(sectionComponents)/contact";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}
