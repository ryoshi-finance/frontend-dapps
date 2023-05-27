import React from "react";
import Aside from "./aside";
import Social from "./social";

function Main() {
  return (
    <>
      <main className="main">
        <section className="container">
          <div className="d-flex justify-content-between">
            <Aside />
            <Social />
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
