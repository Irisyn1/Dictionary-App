import react from "react";
import {createRoot} from "react-dom/client";
import {Word} from "./components/index.js";
import "./style.css"

const App = () => {
    return <>
        <Word />
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />)