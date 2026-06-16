import ButtonTest from "./button_test.jsx";
import Name from "./name.jsx";
import Header from "./header.jsx";
import "./App.css";
import MarketItems from "./marketitem.jsx";
import Footer from "./footer.jsx";
import { useState } from "react";

function App() {
  

  const name = "vishesh";

  let [marketitems, setMarketItems] = useState([
    {
      name: "handjob",
      price: "1000/night",
    },

    {
      name: "Fulljob",
      price: "5000/night",
    },

    {
      name: "blowjob",
      price: "2000/night",
    },

    {
      name: "blow+handjob",
      price: "3000/night",
    },
  ]);


  const onClick = () => {
    console.log("Button clicked!");
    alert("Service added to cart!");
  };

  let textstate = "intial text";
  const [textshow, setText] = useState(textstate);
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  const addMarketItem = () => {
    if (!nameInput.trim() || !priceInput.trim()) {
      alert("Please enter both service name and price.");
      return;
    }
    const newItem = { name: nameInput.trim(), price: priceInput.trim() };
    setMarketItems((prev) => [...prev, newItem]);
    setNameInput("");
    setPriceInput("");
    setText("");
  };

  const onKeyDown = (event) => {
    const inputValue = event.target.value;
    if (event.key === "Enter") {
      addMarketItem();
      return;
    }
    setText(inputValue);
  };

  return (
    <div className="App">
      <div>
        <h2>Welcome {name} service center !</h2>
      </div>
      <ButtonTest />
      <Name />
      <Header
        nameValue={nameInput}
        priceValue={priceInput}
        onNameChange={(e) => setNameInput(e.target.value)}
        onPriceChange={(e) => setPriceInput(e.target.value)}
        onAdd={addMarketItem}
        onKeyDown={onKeyDown}
      />
      <MarketItems marketitems={marketitems} onClick={onClick} />
      <Footer />
    </div>
  );
}

export default App;
