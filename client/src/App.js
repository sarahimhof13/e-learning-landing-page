import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
