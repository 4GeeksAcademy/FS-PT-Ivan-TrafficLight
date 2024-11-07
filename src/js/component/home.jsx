import React, {useState} from "react";

import {Light} from "./light";

//create your first component
const Home = () => {
	return (
		<>
			<div className="traffic">
				<Light />
			</div>

		</>
	);
};

export default Home;
