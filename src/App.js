import './App.css';
import React, { useState } from 'react';
import { Slideshow } from './components/Slideshow';
import ToggleButton from 'react-bootstrap/ToggleButton';

function App () {

	const [autoPlay, setAutoPlay] = useState(true);

	return (
		<div className="App">
			<div className="App-header" style={{ padding: '20px' }}>
				Merry Christmas my love
				<br/>
				Here are just some of the amazing memories we're made this year.
				I can't wait for many more :)
				<br/>
			</div>
			<div style={{ padding: '20px' }}>
				<label>Autoplay </label>
				<ToggleButton
					id="toggle-check"
					type="checkbox"
					variant="secondary"
					value="1"
					checked={autoPlay}
					onChange={() => setAutoPlay(!autoPlay)}
				/>
			</div>
			<Slideshow autoPlay={autoPlay}/>
		</div>
	);
}

export default App;
