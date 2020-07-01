import React from 'react';
import UserContextProvider from './contexts/UserContext';
import NavContextProvider from './contexts/NavContext';
import { Switch, Route } from 'react-router-dom';
import Login from './components/connexion/Login';
import RegisterUser from './components/connexion/RegisterUser';
import Main from './components/main/Main';

import Contacts from './components/activites/contacts/Contacts';
import Efo from './components/training/Efo';
import Diag from './components/wallet/diag/Diag';
import Jalons from './components/wallet/jalons/Jalons';
import Load from './components/load/Load';
import UpdateUser from './components/connexion/UpdateUser';
import PrivateRoute from './hoc/PrivateRoute'


function App() {
	return (
		<div className="App">
			<UserContextProvider>
				<NavContextProvider>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route
							exact
							path="/home/:route"
							render={() => (
								<Main>
									<PrivateRoute path="home/main" component={Main}/>
									{/* <Route path="home/main" component={Main} /> */}
									<PrivateRoute path="/home/diag" component={Diag} />
									<PrivateRoute path="/home/jalons" component={Jalons} />
									<PrivateRoute path="/home/efo" component={Efo} />
									<PrivateRoute path="/home/contacts" component={Contacts} />
									<PrivateRoute path="/home/Load" component={Load} />
									<PrivateRoute path="/home/user" component={UpdateUser} />
								</Main>
							)}
						/>
						<Route path="/register" component={RegisterUser} />
					</Switch>
				</NavContextProvider>
			</UserContextProvider>
		</div>
	);
}

export default App;
