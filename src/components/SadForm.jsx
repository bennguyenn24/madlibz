import React from "react";
import { useState } from "react";

const SadForm = () => {
	// Arr to store needed values
	const typeArr = [
		"adjective",
		"adjective",
		"type of bird",
		"room in a house (include the word 'room')",
		"verb (past tense)",
		"verb",
		"relative's name",
		"noun",
		"type of liquid",
		"verb ending in 'ing'",
		"part of the body 'plural'",
		"plural noun",
		"verb ending in 'ing'",
		"noun",
	];

	const [index, setIndex] = useState(0);
	const [count, setCount] = useState(typeArr.length);
	const [submit, setSubmit] = useState(false);

	// Handle inputted words
	const [word, setWord] = useState("");
	// Saving inputted word state
	const [words, setWords] = useState([]);

	const handleClick = () => {
		// Saving input value to empty arr
		setWords((words) => [...words, word]);

		// Clear Input
		setWord("");

		// Increment Count
		setIndex((index) => index + 1);

		// Decrement Count
		setCount((count) => count - 1);
	};

	return (
		<div>
			{count != 0 ? (
				<div>
					<h1>Sad Day MadLib</h1>
					<div>Words Left: {count}</div>
					<form>
						{count != 0 ? (
							<div>
								<label htmlFor="word">Enter {typeArr[index]}:</label>
								<input
									type="text"
									id="word"
									name="word"
									value={word}
									onChange={(e) => setWord(e.target.value)}
									placeholder={typeArr[index]}
								/>
								<button type="button" onClick={handleClick}>
									Add Word
								</button>
							</div>
						) : (
							<button>Submit & get story</button>
						)}
					</form>
				</div>
			) : (
				<div>
					<p>
						It was a {words[0]}, cold November day. I woke up to the {words[1]} smell
						of {words[2]} roasting in the {words[3]} downstairs. I {words[4]} down the stairs to see
						if I could help {words[5]} the dinner. My mom said, "See if {words[6]} needs a fresh {words[7]}". 
						So I carried a tray of glasses full of {words[8]} into the {words[9]} room. 
						When I got there, I couldn't believe
						my {words[10]}! There were {words[11]} {words[12]} on the {words[13]}!
					</p>
				</div>
			)}
		</div>
	);
};

export default SadForm;
