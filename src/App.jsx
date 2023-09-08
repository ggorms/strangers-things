import "./App.css";
import PostsPage from "./pages/PostsPage";
import { Routes, Route } from "react-router-dom";
import SinglePostPage from "./pages/SinglePostPage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path={"/"} element={<PostsPage />} />
          <Route path={"/post/:id"} element={<SinglePostPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
