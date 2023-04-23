import React, { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();

    setMessage(data.message); // set the message to the value of the "message" key in the JSON response
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Get Message</button>
      <p>{message}</p>
    </div>
  );
}



