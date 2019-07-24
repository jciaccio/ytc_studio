import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./jen.css";

function Header() {
  return (
    <div className="head">
      <h1>Welcome to my page!</h1>
    </div>
  );
}
function Body() {
  return (
    <div className="body">
      <p>
        {" "}
        Hi there, my name is Jen! I have had a strong passion for computers and
        technology ever since I was a wee lil lass. It occured to me much later
        in life that I could not only be an avid user, but I could build
        technology as well. I've spent the last few years of my life trying to
        teach myself the ropes.
      </p>
    </div>
  );
}
function Footer() {
  return <div className="footer" />;
}
function User() {
  return (
    <div className="container">
      <Header />
      <br />
      <Body />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<User />, rootElement);
