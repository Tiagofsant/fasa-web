import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
