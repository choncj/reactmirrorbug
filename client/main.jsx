import { Meteor } from 'meteor/meteor';
import React, { Fragment } from 'react';
import {	BrowserRouter } from "react-router-dom";
import { CookieConsentProvider } from '@use-cookie-consent/react';
import { render } from 'react-dom';


import { App } from '/imports/ui/App';

import {AccountProvider} from '/imports/ui/hooks/account/AccountProvider';
import {PlayerProvider} from '/imports/ui/hooks/player/PlayerProvider';

Meteor.startup(() => 
	render(
		<Fragment>
			<CookieConsentProvider>
				<AccountProvider>
					<PlayerProvider>
						<BrowserRouter>
							<App/>
						</BrowserRouter>
					</PlayerProvider>
				</AccountProvider>
			</CookieConsentProvider>
		</Fragment>
	, document.getElementById('react-target')
	)
);


// Meteor.startup(() => render(
// 	<Fragment>
// 		<CookieConsentProvider>
// 			<AccountProvider>
// 				<PlayerProvider>
// 					<BrowserRouter>
// 						<App />
// 					</BrowserRouter>
// 				</PlayerProvider>
// 			</AccountProvider>
// 		</CookieConsentProvider>
// 	</Fragment>
// 	,document.getElementById('react-target'),
// ));
