import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/Header";
import SearchRecipe from './pages/SearchRecipe';

import './App.css';


import RecipeList from "./pages/RecipeList";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";


function App() {



  return (
    <Router
    >

      <div >
        <Header />
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />

          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/searchrecipe/:term" element={<SearchRecipe />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/onerecipe" element={<Product />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  );
}

export default App;



