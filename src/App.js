import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import AddQuote from "./pages/addquote/AddQuote";
import AllQuote from "./pages/allquote/AllQuote";
import Fullscreen from "./pages/showScreen/Fullscreen";
import AllCommets from "./pages/showScreen/AllCommets";
import Book from "./book/Book";
import Book1 from "./book/Book1";
import Book2 from "./book/Book2";
import Book3 from "./book/Book3";

function App() {
  const [accept, setAccept] = useState([]);

  const getData = (get) => {
    console.log(get);
    setAccept(get);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/allquote" element={<AllQuote yehone={accept} />} />
        <Route path="/addqoute" element={<AddQuote addTo={getData} />} />
        <Route path="/fullscreen" element={<Fullscreen />}>
          <Route path="comments" element={<AllCommets />} />
        </Route>
        <Route path="/book" element={<Book />}>
          <Route path="book1" element={<Book1 />} />
          <Route path="book2" element={<Book2 />} />
          <Route path="book3" element={<Book3 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
