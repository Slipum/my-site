import './App.css';
import logoSlp from './assets/logo-slipum.svg';

function App() {
	return (
		<>
			<div className="main-info">
				<img
					src={logoSlp}
					alt="Slipum"
					style={{ width: '250px', height: '250px', borderRadius: '48px' }}
				/>
				<h1>Hey there! I'm Slipum</h1>
				<h2>
					I am <p>FullStack</p> Developer
				</h2>
			</div>
		</>
	);
}

export default App;
