import './App.css';
import React, { useState } from "react";
import { encodingForModel } from "js-tiktoken";

function App() {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState(0);
  const TOKEN_THRESHOLD = 50; // Set your threshold here

  const handleChange = (e) => {
    const input = e.target.value;
    setText(input);

    const enc = encodingForModel("gpt-3.5-turbo-0613");
    const tokenCount = enc.encode(input).length;
    setTokens(tokenCount);
  };

  const handleSubmit = () => {
    alert("Submitting Prompt:\n" + text);
    // Replace this alert with your actual processing logic
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Token-Aware Prompting Assistant</h1>

      <textarea
        value={text}
        onChange={handleChange}
        rows={10}
        cols={60}
        placeholder="Type your text here..."
        style={{ fontSize: "16px" }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleSubmit} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Submit
        </button>
      </div>

      {/* Only show token count if it exceeds the threshold */}
      {tokens >= TOKEN_THRESHOLD && <p>Token Count: {tokens}</p>}
    </div>
  );
}

export default App;
