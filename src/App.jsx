import Header from "./Header.jsx";
import Component from "./Component.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <body>
        <div className="container">
          <Component />
        </div>
        <Footer />
      </body>
    </>
  );
}

export default App;
