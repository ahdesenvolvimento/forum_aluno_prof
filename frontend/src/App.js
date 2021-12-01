import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
function App() {
  const access_token = localStorage.getItem("auth-token-access");
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
