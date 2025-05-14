import { useEffect, useState } from 'react'
import '../src/App.css'
import { useNavigate } from "react-router-dom";
import { PenIcon, Trash2Icon } from 'lucide-react'

function App() {
  const [read, setRead] = useState(null);
  const response_get = read ? read["users"] : [];
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => {console.log(data); setRead(data);})
    .catch(error => console.error('Error:', error));
  }, []);
  
  function deleteUser(id) {
    fetch('http://localhost:3000/'+id, {"method": "DELETE"})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    .finally(window.location.reload())
  };
  
  function seeUpdateUserClick(user) {
    const query = new URLSearchParams({data: JSON.stringify(user)});
    navigate(`/update_user?${query.toString()}`);
  };

  return (
    <div className="main_app">
      <h1><a href="/signUp">Read</a></h1>
      <div className="read">
        {read ? <ul>{response_get.map(
          (user) => (<li key={user.id}><p>Name: {user.name}, Email: {user.email}, Password: {user.password}</p>
          <button onAbort={() => {seeUpdateUserClick(user)}}><PenIcon></PenIcon></button>
          <button onClick={() => {deleteUser(user.id)}}><Trash2Icon></Trash2Icon></button>
          </li>))}
          </ul> : <p>Carregando...</p>}
      </div>
    </div>
  );
};

export default App;