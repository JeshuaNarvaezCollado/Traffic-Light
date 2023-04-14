import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setColor] = useState("purple");
	const ChangeColor = () => {
		if (selectedColor === "purple") {
			setColor("blue");

			console.log(selectedColor);
		} else if (selectedColor === "blue") {
			setColor("plum");

			console.log(selectedColor);
		} else if (selectedColor === "plum") {
			setColor("purple");
			console.log(selectedColor);
		}
	};

	return (
		<>
			<div className="traffic-light align-center">
				<div
					className={
						"purple light" +
						(selectedColor === "purple" ? " selected" : "")
					}
					onClick={() => setColor("purple")}></div>
				<div
					className={
						"blue light" +
						(selectedColor === "blue" ? " selected" : "")
					}
					onClick={() => setColor("blue")}></div>
				<div
					className={
						"plum light" +
						(selectedColor === "plum" ? " selected" : "")
					}
					onClick={() => setColor("plum")}></div>
			</div>
			<div className="button">
				<button onClick={() => ChangeColor()}> Click me</button>
			</div>
		</>
	);
};

export default Home;