import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsFeedPage from "./Pages/NewsFeed/NewsFeedPage";
import Header from "./Components/Header/Header";
import DataFeeder from "./Components/DataFeederForMidSection/DataFeeder";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NewsFeedPage />}/>
          <Route path="/page1" element={<NewsFeedPage />}/>
          <Route path="/page2" element={<DataFeeder/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
