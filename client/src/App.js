import Courses from "./Components/Courses/Courses";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <Hero/>
      <Courses/>
    </div>
  );
}

export default App;
