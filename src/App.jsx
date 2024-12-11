import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout import
import DefaultLayout from "./layouts/DefaultLayout";

// pages import
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

// posts pages import
import IndexPosts from "./pages/posts/IndexPosts";
import ShowPosts from "./pages/posts/ShowPosts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
          </Route>
          {/* posts routes */}
          <Route Component={DefaultLayout}>
            <Route path="/posts">
              <Route index Component={IndexPosts} />
              <Route path=":id" Component={ShowPosts} />
            </Route>
          </Route>
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
