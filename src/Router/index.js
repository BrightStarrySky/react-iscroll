import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Iscroll from "../Components/Iscroll";

const router = (	
	<Router>
		
			<Switch>
				<Route path="/iscroll" component={Iscroll}/>
				
				<Redirect from="/" to='/iscroll' component={Iscroll} />
			</Switch>
		
	</Router>
	)
export  default router;