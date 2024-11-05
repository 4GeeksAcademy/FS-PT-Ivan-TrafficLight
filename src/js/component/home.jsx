import React, {useState} from "react";

import {Light} from "./light";
import {ButtonPurple} from "./button"

//create your first component
const Home = () => {
	const [color, setColor] = useState('');
	
	return (
		<>
			<div className="traffic">
				<Light />
			</div>

			<div className="buttonPurple" >
               <ButtonPurple onClick={toggleColor}  />
            </div>
		</>
	);
};

export default Home;
