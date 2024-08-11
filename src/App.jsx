import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
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
      <HashRouter>
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
      </HashRouter>
    </AppProvider>
  );
};

export default App;
