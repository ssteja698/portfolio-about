import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Stories = lazy(() => import("./pages/Stories"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-zinc-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:bookId" element={<Stories />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
