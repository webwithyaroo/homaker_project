import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav, Footer } from "./Components/constant";
import { Home, ProductPage, ProductsDir } from "./Pages/constant";
import { AppProvider } from "./contest/AppContext";
const App = () => {
  return (
    <AppProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />

          {/* If you're using `/product/:id` */}
          <Route path="/products/:id" element={<ProductsDir />} />
          {/* <Route path="/about" component={""} /> */}
        </Routes>

        <Footer />
      </Router>
    </AppProvider>
  );
};

export default App;
