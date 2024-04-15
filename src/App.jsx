import Body from './components/body/Body';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/global-styles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Main>
				<Header />
				<Body />
			</Main>
		</>
	);
};

export default App;
