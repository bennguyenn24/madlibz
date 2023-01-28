import { useState } from "react";
import Start from "./components/Start";
import Form from "./components/Form";
import { sadStoryTypeArr, getSadStory, funStoryTypeArr, getFunStory } from "./shared/stories";
import "./App.css";

const StoryType = {
	Funny: 'Funny',
	Sad: 'Sad'
};

function App() {
	const [start, setStart] = useState(false);
	const [options, setOptions] = useState("");

	return (
		<div className="App">
			{!start && <Start setStart={setStart} setOptions={setOptions} />}
			{start && options === StoryType.Funny && <Form typeArr={funStoryTypeArr} getStory={getFunStory} />}
			{start && options === StoryType.Sad && <Form typeArr={sadStoryTypeArr} getStory={getSadStory} />}

		</div>
	);
}

export default App;
