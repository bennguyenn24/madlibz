import React from "react";
import { useState } from "react";

const FunForm = () => {
	// Array to store the values
	const typeArr = [
		"noun",
		"adjective",
		"noun (plural)",
		"famous person",
		"place",
		"verb (ending in ing)",
		"adjective",
		"your favorite song",
		"verb (ending in ed)",
		"adverb",
		"verb (ending in ing)",
		"name of supermodel",
		"adjective",
	];

	const [index, setIndex] = useState(0);
	const [count, setCount] = useState(typeArr.length);
	const [submit, setSubmit] = useState(false);

	// Input State
	const [word, setWord] = useState("");
	// Saved Words State
	const [words, setWords] = useState([]);

	const handleClick = () => {
		// Save the Word to An Array
		setWords((words) => [...words, word]);

		// Clears Input
		setWord("");

		// Increment the Index
		setIndex((index) => index + 1);

		// Decrement Count
		setCount((count) => count - 1);
	};

	return (
		<div>
			{count != 0 ? (
				<div>
					<h1>Weird Day Ad-Lib</h1>
					<div>Words Left: {count}</div>
					<form>
						{count != 0 ? (
							<div>
								<label htmlFor="word">Enter {typeArr[index]}:</label>
								<input
									id="word"
									name="word"
									onChange={(e) => setWord(e.target.value)}
									value={word}
									type="text"
									placeholder={typeArr[index]}
								/>
								<button type="button" onClick={handleClick}>
									Add Word
								</button>
							</div>
						) : (
							<button onClick={() => setSubmit(true)} type="button">
								Submit
							</button>
						)}
					</form>
				</div>
			) : (
				// Story
				<div>
					<p>
						Once upon a time there was a {words[0]}. It had {words[1]} {words[2]}! One
						day it met {words[3]} on the side of the
						{words[4]} they were {words[5]}. It was very {words[6]}; they both looked
						like hobos! All of the sudden they started singing {words[7]} really
						loudly. They {words[8]}
						really {words[9]}! {words[10]} started {words[11]} with {words[12]}. They
						looked really {words[13]}!
					</p>
				</div>
			)}
		</div>
	);
};

export default FunForm;
