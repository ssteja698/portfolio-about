import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Stories = lazy(() => import("./pages/Stories"));

function LoadingFallback() {
  return (
    <div className="container-custom py-12 text-center">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-500 border-t-transparent"></div>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">Loading...</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-zinc-900">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stories" element={<Stories />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
