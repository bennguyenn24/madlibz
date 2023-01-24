import React from "react";

const Question = ({ type }) => {
	return (
		<div>
			<p>Enter {type}</p>
			<input
				type="text"
				placeholder={`${type}`}
				onChange={(e) => setUserName(e.target.value)}
			/>
		</div>
	);
};

export default Question;
