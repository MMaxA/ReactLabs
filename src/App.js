import { React , useState, useEffect} from "react";

function App() {
  const [type, setType] = useState("posts"); 
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(respons => respons.json())
      .then(json => setData(json));
  }, [type]);

  return (
    <>
      <div>
        <button className="btn" onClick={() => setType('users')}>Users</button>
        <button className="btn" onClick={() => setType('todos')}>ToDo</button>
        <button className="btn" onClick={() => setType('posts')}>Posts</button>
      </div>
      <hr/>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;






