import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(()=>import("./pages/About"));

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
