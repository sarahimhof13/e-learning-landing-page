import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
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
      <Footer/>
    </div>
  );
}

export default App;
