import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError("Error is comming"))
      .finally(setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="flex justify-center items-center text-center">
        Loading.....
      </p>
    );
  if (error) return <p>Error is there...</p>;

  return (
    <div className="bg-gradient-to-br from-black to-gray-700">
      <h1 className="text-center font-extrabold text-white">Todo Data</h1>
      {data.map((data) => (
        <div className=" grid grid-2 gap-1">
          <h1
            className="flex justify-center items-center text-white "
            key={data.id}
          >
            {data.userId}
          </h1>
          <h1
            className="flex justify-center items-center text-white"
            key={data.id}
          >
            {data.title}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default App;
