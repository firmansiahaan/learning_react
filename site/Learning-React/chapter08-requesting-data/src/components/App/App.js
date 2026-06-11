import React, { useState, useEffect } from 'react';
import './App.css';


function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    let cancelled = false;

    fetch(`https://api.github.com/users/${login}`)
      .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(json => {
        if (!cancelled) setData(json);
      })
      .then(() => {
        if (!cancelled) setLoading(false);
      })
      .catch(err => {
        if (!cancelled) setError(err);
      });

    return () => {
      cancelled = true;
    };
  }, [login]);

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  
  return (
    <div className="githubUser">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: 200 }}
      />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

function App({ login }) {
  return (
    <GitHubUser login="MoonHighway" />
  );
}

export default App;
