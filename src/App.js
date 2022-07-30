import "./App.css";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {
  const selector = useSelector((state) => state);
  const auth = selector.auth.logedInState;

  return (
    <div className="container">
      {auth && <Cart />}
      {!auth && <Login />}
    </div>
  );
}

export default App;
