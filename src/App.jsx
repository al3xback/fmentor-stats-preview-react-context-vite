import Header from './components/Header/Header.jsx';
import Preview from './components/Preview/Preview.jsx';
import Footer from './components/Footer/Footer.jsx';
import PreviewContextProvider from './store/preview-context.jsx';

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<div className='container'>
					<PreviewContextProvider>
						<Preview />
					</PreviewContextProvider>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
