import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import axios from 'axios';

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About |</Link>
        <Link to="events">Events |</Link>
        <Link to="products">Products |</Link>
        <Link to="contact">Contact Us |</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <nav>
        <Link to="/">Home |</Link>
        <Link to="services">Services |</Link>
        <Link to="history">History |</Link>
        <Link to="location">Location |</Link>
        <Link to="userlist">UserList |</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus
        diam. Sed nisi. Nulla quis sem at nibh
        elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed
        augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class
        aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos
        himenaeos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );
}
export function History() {
  return (
    <section>
      <h2>Our History</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus
        diam. Sed nisi. Nulla quis sem at nibh
        elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed
        augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class
        aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos
        himenaeos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );
}
export function Location() {
  return (
    <section>
      <h2>Our Location</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus
        diam. Sed nisi. Nulla quis sem at nibh
        elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed
        augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class
        aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos
        himenaeos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
      <nav>
        <Link to="/">Home |</Link>
      </nav>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
      <nav>
        <Link to="/">Home |</Link>
      </nav>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
      <nav>
        <Link to="/">Home |</Link>
      </nav>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>
        Resource not found at {location.pathname}
      </h1>
      <nav>
        <Link to="/">Home |</Link>
      </nav>
    </div>
  );
}

export function User() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const UserTable = ({data}) => <table id="tab">
   <thead><tr><th>Name</th><th>Email</th></tr></thead>
   <tbody>{data.map((user, i) => <tr key = {i}><td>{user.name}</td><td>{user.email}</td></tr>)}</tbody>
   </table>

  const [data, setData] = useState([])

  const loadData = () => {
    axios.get(url)
         .then(res => { setData(res.data) })
         .catch(error => { console.log(error) })
  }
  
  let button = <button onClick = {loadData}>LOAD DATA</button>;
  let content = <div></div>;

  if (data.length > 0) {
      button = <button onClick = {() => {setData([])}}>CLEAR DATA</button>;
      content = <UserTable data={data} />;  
  }

  return (   
      <div>
          {/* <h2>React Mini App</h2> */}
          <p>Data URL: {url}</p>
          {button}
          {content}
      </div>
  )  
}
