import { useState } from "react";
import SadForm from "./components/SadForm";
import FunForm from "./components/FunForm";
import Start from "./components/Start";

import "./App.css";

function App() {
	const [start, setStart] = useState(false);
	const [options, setOptions] = useState("");

	return (
		<div className="App">
			{!start && <Start setStart={setStart} setOptions={setOptions} />}
			{start && options === "Funny" && <FunForm />}
			{start && options === "Sad" && <SadForm />}
		</div>
	);
}

export default App;
