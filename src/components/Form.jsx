import React from "react";
import { useState } from "react";

const Form = ({typeArr, getStory}) => {
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
					<p>{getStory(words)}</p>
				</div>
			)}
		</div>
	);
};

export default Form;
