import * as actions from "../state";
import React from "react";

import { getNextFriend } from "../../common/mockData";

import FriendList from "../component/FriendList";
import { connect } from "react-redux";

class FriendMain extends React.Component {
	onAdd = () => {
		const friend = getNextFriend();
		this.props.addFriend(friend);
	};
	render() {
		console.log("FriendMain render");
		const { friends } = this.props;
		return (
			<div>
				<button onClick={this.onAdd}>친구 추가</button>
				<FriendList friends={friends} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		friends: state.friend.friends
	};
};
/* const mapDispatchToProps = dispatch => {
	return {
		addFriend: friend => {
			dispatch(addFriend(friend));
		}
	};
}; */
/* mapDispatchToProps 가 단순히 action 생성자 함수와 dispatch 메서드를
연결하는 목적으로 사용한다면... */
/* import * as actions from "../state"; */

/* export default connect(mapStateToProps, mapDispatchToProps)(FriendMain); */
export default connect(mapStateToProps, actions)(FriendMain);
