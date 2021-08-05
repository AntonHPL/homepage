import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import Info from "./components/Info";
import Bookmark from "./components/Bookmark";
import Navigation from "./components/Navigation";
import Warnings from "./components/Warnings";
import Buttons from "./components/Buttons";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = "164ef6f27cb716d507552660eeb9cda4";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState(null);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  function getTitle(el) {
    setTitle(el);
    setCurrentPage(0);
  }

  useEffect(() => {
    if (title) {
      setLoading(true);
      fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${title}
        &per_page=9&page=${currentPage + 1}&format=json&nojsoncallback=1`
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res.photos.photo);
          setTotal(res.photos.pages);
        })
        .then(() => setLoading(false));
    }
  }, [title, currentPage]);

  function prevHandler() {
    setCurrentPage(currentPage - 1);
  }

  function nextHandler() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div id="container">
      <Header />
      <Router>
        <div id="row_block">
          <div id="sidebar">
          <br/>
          <Navigation />
          <Loader loading={loading} />
          </div>
          <div id="content">
            <Switch>
              <Route exact path="/homepage">
                <Search onSearch={getTitle} />
                <div style={{ display: data.length >= 1 ? 'block' : 'none' }}>
                  <Buttons total={total} currentPage={currentPage} prevHandler={prevHandler} nextHandler={nextHandler} />
                  <Info data={data} />
                </div>
                <br/><br/>
                <Warnings title={title} data={data} loading={loading} />
              </Route>
              <Route exact path="/bookmarks" component={Bookmark} />
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
