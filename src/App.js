import { useEffect, useState } from "react";
import "./App.css";
import Error from "./components/Error/Error";
import ItemList from "./components/ItemList/ItemList";
import Loading from "./components/Loading/Loading";
import Container from "./components/Container/Container";

const API_URL = "http://localhost:5400";

function App() {
  const [itemsData, setItemsData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(`${API_URL}/items`);
        const json = await response.json();

        const { data, error } = json;

        if (response.ok) {
          setItemsData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  const renderedContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <ItemList itemsData={itemsData} />;
    }
  };

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <Container center={Boolean(error || loading)}>
        {renderedContent()}
      </Container>
    </div>
  );
}

export default App;
