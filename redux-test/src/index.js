import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./common/store";
import TimelineMain from "./timeline/container/TimelineMain";
import FriendMain from "./friend/container/FriendMain";

ReactDOM.render(
	<Provider store={store}>
		<div>
			<FriendMain />
			<TimelineMain />
		</div>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
