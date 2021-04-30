import React from "react";
import { Route, Redirect } from "react-router-dom";

const AppRoute = ({
	component: Component,
	isAuthProtected,
	...rest
}) => (
	<Route
		{...rest}
		render={props => {

			if (isAuthProtected && !localStorage.getItem("accessToken")) {
				return (
					<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
				);
			}

			return (
				<div>
					<Component {...props} />
				</div>
			);
		}}
	/>
);

export default AppRoute;

