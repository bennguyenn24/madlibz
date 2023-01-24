import React from "react";
import { useState } from "react";
import Question from "./components/Question";

const Madlibz = () => {
	const [userName, setUserName] = useState("Culu");
	const [displayQuestion, setDisplayQuestion] = useState(true);
	const [start, setStart] = useState(false);

	return (
		<div>
			{displayQuestion && <Question type="adj" />}

			{!displayQuestion && (
				<p>
					Little known fact, Philip used to be called {userName} when he was a child.
					He likes to {verb}
				</p>
			)}

			<button onClick={() => setDisplayQuestion(!displayQuestion)}>
				Get Story
			</button>
		</div>
	);
};

export default Madlibz;
