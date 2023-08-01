import { useEffect, useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList/ItemList";

const API_URL = "http://localhost:5400";

function App() {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}/items`);
        const json = await response.json();
        console.log("<App /> useEffect() fetched data", json);
        const {data} = json;
        setItemsData(data)
      } catch (err) {
        console.log(`<App/> useEffect() error: ${err.message}`);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <ItemList itemsData={itemsData} />
    </div>
  );
}

export default App;
