import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name })
    })
    .then(res => res.json())
    // --- INSERT YOUR NEW BLOCK HERE ---
    .then(data => {
      if (data.message) {
        alert(data.message);
      } else {
        alert("Unexpected error occurred.");
      }
    })
    // ----------------------------------
    .catch(err => {
      console.error("Error:", err);
      alert("Failed to connect to the server.");
    });
  }

  const handleClear = () => {
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <div style={{ marginTop: "10px" }}>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear} style={{ marginLeft: "5px" }}>
          Clear
        </button>
      </div>
    </form>
  );
}

export default Contact;