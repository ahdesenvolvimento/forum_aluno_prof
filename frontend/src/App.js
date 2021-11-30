import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { useState } from "react";
function App() {
  const [logged, setLog] = useState(false);
  const access_token = localStorage.getItem("auth-token-access");
  console.log(access_token);
  async function login() {
    const requestInfo = {
      method: "POST",
      body: JSON.stringify({ 123: "12312" }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    };
    await fetch("http://localhost:8000", requestInfo);
  }
  return (
    <div className="App">
      <Header log={access_token}/>
      {/* <main>
          <p>123</p><p>123</p><p>123</p><p>123</p><p>123</p>
        </main> */}
      <Footer />
    </div>
  );
}

export default App;
