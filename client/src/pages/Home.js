import React from "react";

function Home() {
  return (
    <div className="page">
      <h2>Welcome to SR tracker</h2>
      <h3>Enter your battletag</h3>
      <form>
        <label>
          Name
          <input type="text"></input>
        </label>
        <label>
          Number
          <input type="text"></input>
        </label>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default Home;
