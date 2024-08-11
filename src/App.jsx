import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav, Footer } from "./Components/constant";
import {
  Home,
  ProductPage,
  ProductsDir,
  Cart,
  NewsFeed,
  PromoBanner,
} from "./Pages/constant";
import { AppProvider } from "./contest/AppContext";
const App = () => {
  return (
    <AppProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductsDir />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/newsfeed" element={<NewsFeed />} />
          <Route path="/promo" element={<PromoBanner />} />
          {/* <Route path="/about" component={""} /> */}
        </Routes>

        <Footer />
      </Router>
    </AppProvider>
  );
};

export default App;
