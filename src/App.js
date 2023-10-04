import { useEffect, useState } from "react";
import "./App.css";
import { Main } from "./Components/Main";
import { Navbar } from "./Components/Navbar";
import { Spinner } from "./Components/Spinner";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(`https://type.fit/api/quotes`);
      const response = await res.json();
      setData(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" w-screen h-screen overflow-y-hidden app_div">
      <Navbar fetchData={fetchData} />
      {loading ? <Spinner /> : data.length > 0 ? <Main data={data} /> : null}
    </div>
  );
}

export default App;
