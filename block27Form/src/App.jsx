import { useState } from "react";
import "./App.css";
import SingUpForm from "./components/SingUpForm";
import Authenitcate from "./components/Authenitcate";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <SingUpForm />
      <Authenitcate />
    </>
  );
}

export default App;
