import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import HomePage from "./components/HomePage";
import StorePage from "./components/StorePage";
import ProductPage from "./components/ProductPage";

const AppEl = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
`;

const Pages = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

function App() {
  return (
    <Router>
      <AppEl>
        <Pages>
          <Routes>
            <Route exact path="/store" element={<StorePage />}></Route>
            <Route exact path="/product" element={<ProductPage />}></Route>
            <Route exact path="/" element={<HomePage />}></Route>
          </Routes>
        </Pages>
        <NavMenu />
      </AppEl>
    </Router>
  );
}

export default App;
