import { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home';
import Projection from './Pages/Projection'
import News from './Pages/News'
import Info from './Pages/Info';
import { getTheme, setTheme, t_Dark, t_Light, t_Midnight } from './LibThemes';

function App() {
	let accent = getTheme.accent();
	useEffect(() => {
		switch(getTheme.localTheme()){
			case 0:
				setTheme(t_Midnight, 3);
				return;
			case 1:
				setTheme(t_Midnight, 3);
				return;
			case 2:
				setTheme(t_Midnight, 3);
				return;
			default:
				setTheme(t_Midnight, 3);			
		}
	}, [])

	return (
	<>
	<Router>
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/proiezione" exact element={<Projection />} />
			<Route path="/rassegna" exact element={<News/>} />
			<Route path="/info" exact element={<Info />} />
		</Routes>
	</Router>
	</>
	);
}

export default App;
