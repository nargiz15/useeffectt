import {useState, useEffect} from 'react';
import axios from 'axios';
function App() {

  const [value,setValue] = useState([])

    useEffect(()=>{
  
      axios
      .get("https://fakestoreapi.com/users")
      .then((response)=>{
       setValue(response.data);
       
      })


    },[])
  


   
   
  return (
    <>
    <div className="App">
      
     {value.map(({id, email, username})=>{
     return <div key={id}><strong>email:</strong>{email} <br/>
     <strong>name:</strong>{username}</div>
     })}
  </div>

  </>
  );
  
}

export default App;
