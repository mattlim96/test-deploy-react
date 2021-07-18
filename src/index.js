import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Checkbox() {
//   const [checked, toggle] = useReducer(checked => !checked,false)
  
//   return (
//     <>
//       <input 
//         type="checkbox" 
//         value={checked}
//         onChange={toggle}
//       />
//       {checked ? "checked" : "not checked"}
//     </>
//   );
// }

function GitHubUser({login}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if(data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={500}/>
      </div>
    )
  }
  return null
}

function App() {
  return (
  <>
    <GitHubUser login="mattlim96"/>
    <GitHubUser login="ministrudels"/>
  </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);