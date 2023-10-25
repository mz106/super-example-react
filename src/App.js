import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/landing/Landing";

import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(false);

  useEffect(() => {
    async function getAllProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      await setProducts(data);
    }

    getAllProducts();
  }, [user]);

  const handleLogin = async (e, setter, state) => {
    e.preventDefault();
    const res = await fetch("https://fakestoreapi.com/users/1");
    const data = await res.json();
    console.log(data);
    await setUser(data);
  };

  const handleLogout = () => {
    setUser(false);
    setProducts([]);
  };

  if (!user) {
    return (
      <>
        <p>You need to log in</p>
        <button onClick={(e) => handleLogin(e, setUser, user)}>Login</button>
      </>
    );
  }

  return (
    <div className="App">
      <Landing products={products} />
      <button onClick={(e) => handleLogout()}>Logout</button>
    </div>
  );
}

export default App;
