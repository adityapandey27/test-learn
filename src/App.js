import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>First React Test Case</p>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Your Name"
        name="username"
        id="userId"
        value={"aditya"}
      />
      <br />
      <br />
      <img
        title="image from pixabay"
        src="https://cdn.pixabay.com/photo/2023/07/19/12/16/car-8136751_1280.jpg"
      />
    </div>
  );
}

export default App;
