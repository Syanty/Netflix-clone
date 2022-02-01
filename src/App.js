import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import "./App.css";
import Api from "./config/api";
function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Nav />

      {/* banner */}

      <Banner />
      {/* rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Api.fetchNetflixOriginals}
        isLargePoster
      />
      <Row title="Trending Movies" fetchUrl={Api.fetchTrendings} />
      <Row title="Top Rated" fetchUrl={Api.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Api.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Api.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Api.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Api.fetchRomanceMovies} />
      <Row title="Documentriess" fetchUrl={Api.fetchDocumentries} />
    </div>
  );
}

export default App;
