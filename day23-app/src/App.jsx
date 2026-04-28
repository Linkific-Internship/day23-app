import {Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";


function App() {
  return (
    <ErrorBoundary>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </ErrorBoundary>
  )
}

export default App;