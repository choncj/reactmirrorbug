import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Reflector } from '/imports/ui/Reflector';

export const App = () => (
	<div>
		<h1 className="text-3xl text-indigo-800">
			Welcome to Meteor + Tailwind!
		</h1>
		<Hello/>
		<Info/>
		<Reflector/> {/* Comment this and you should see the page working again */}
	</div>
);
