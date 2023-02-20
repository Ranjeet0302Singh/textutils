import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar title="textUtils" aboutText="About TextUtils" />
      <div className="container">
        <TextForm heading ="Enter Your Text Here"/>
      </div>
    </div>
  );
}

export default App;
