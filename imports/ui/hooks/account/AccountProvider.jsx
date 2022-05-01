import { Meteor } from 'meteor/meteor';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles'

const AccountContext = React.createContext('account')

export const withAccount = withTracker((props) => {
	// const UserRoles = Meteor.isServer ? null : !Roles.subscription.ready();
	const user = Meteor.isServer ? null : Meteor.user()
	const userId = Meteor.isServer ? null : Meteor.userId()
	const loadingUser = Meteor.isServer ? null : Meteor.loggingIn();
	const roles = Meteor.isServer ? null : Roles.getRolesForUser(userId);

	return { account: {
		user,
		userId,
		loadingUser,
		roles,
		isLoggedIn: !!userId
	} }
})

function Provider (props) {
	return <AccountContext.Provider value={props.account}>
		{props.children}
	</AccountContext.Provider>
}

export const AccountProvider = withAccount(Provider)
export const AccountConsumer = AccountContext
