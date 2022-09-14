import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import { Helmet, HelmetProvider } from 'react-helmet-async';

import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Dashboard/Profile/Profile";

import './App.css';

function App() {
	return (
		<>
			<HelmetProvider>
				<Router>
					<Helmet>
						<title>UTC±24: THE HOME OF WEB3 FOCUSED PROFESSIONALS</title>
						<meta property="og:title" content="UTC±24: THE HOME OF WEB3 FOCUSED PROFESSIONALS" />
						<meta name="twitter:title" content="UTC±24: THE HOME OF WEB3 FOCUSED PROFESSIONALS" />

						<meta name="description" content="Welcome to the home of a professional and close-knit group of designers, developers, artists, influencers, and innovators building together in Web3. The dreamers and the builders of dreams." />
						<meta name="og:description" content="Welcome to the home of a professional and close-knit group of designers, developers, artists, influencers, and innovators building together in Web3. The dreamers and the builders of dreams." />
						<meta name="twitter:description" content="Welcome to the home of a professional and close-knit group of designers, developers, artists, influencers, and innovators building together in Web3. The dreamers and the builders of dreams." />
					</Helmet>

					<Routes>
						{/* Public landing page */}
						<Route exact path="/" element={<Home />} />

						{/* Member only pages */}
						<Route path="/dashboard/" element={<Dashboard />} />
						<Route path="/profile/" element={<Profile />} />
					</Routes>
				</Router>
			</HelmetProvider>
		</>
	);
}

export default App;
