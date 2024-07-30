import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./Components/constant";
import { Home } from "./Pages/constant";
import { AppProvider } from "./contest/AppContext";
const App = () => {
  return (
    <AppProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" component={""} /> */}
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
