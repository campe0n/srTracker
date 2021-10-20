import React from "react";

import PlayerForm from "../components/PlayerForm";

function Home() {
  return (
    <div className="page">
      <h2>Welcome to SR tracker</h2>
      <h3>Enter your informatoin</h3>
      <p>replace # with -</p>
      <PlayerForm />
    </div>
  );
}

export default Home;
