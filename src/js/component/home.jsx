import React, {useState} from "react";

import {Light} from "./light";


//create your first component
const Home = () => {
    const [color, setColor] = useState('');
	return (
		<div className="traffic d-flex flex-column align-items-center justify-content-center">
			<Light onClick={()=>setColor('red')} />
			<Light onClick={()=>setColor('yellow')} />
			<Light onClick={()=>setColor('green')} />
		</div>
	);
};

export default Home;
