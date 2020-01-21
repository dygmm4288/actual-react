import * as actions from "../state/index";
import React from "react";

import { getNextFriend } from "../../common/mockData";
import NumberSelect from "../component/NumberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";
import FriendList from "../component/FriendList";
import { connect } from "react-redux";
import {
	getAgeLimit,
	getShowLimit,
	getFriendsWithAgeLimit,
	getFriendsWithAgeShowLimit,
	makeGetFriendsWithAgeLimit
} from "../state/selector";

class FriendMain extends React.Component {
	onAdd = () => {
		const friend = getNextFriend();
		this.props.addFriend(friend);
	};
	render() {
		console.log("FriendMain render");
		const { friendsWithAgeLimit } = this.props;
		return (
			<div>
				<button onClick={this.onAdd}>친구 추가</button>
				{/* <NumberSelect
					onChange={setAgeLimit}
					value={ageLimit}
					options={ageLimitOptions}
					postfix="세 이하만 보기"
				/> */}
				<FriendList friends={friendsWithAgeLimit} />
				{/* <NumberSelect
					onChange={setShowLimit}
					value={showLimit}
					options={showLimitOptions}
					postfix="명 이하만 보기(연령 제한 적용)"
				/> */}
				{/* <FriendList friends={friendsWithAgeShowLimit} /> */}
			</div>
		);
	}
}
const makeMapStateToProps = () => {
	const getFriendsWithAgeLimit = makeGetFriendsWithAgeLimit();
	const mapStateToProps = (state, props) => {
		return {
			friendsWithAgeLimit: getFriendsWithAgeLimit(state, props)
		};
	};
	return mapStateToProps;
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
const ageLimitOptions = [15, 20, 25, MAX_AGE_LIMIT];
const showLimitOptions = [2, 4, 6, MAX_SHOW_LIMIT];

export default connect(makeMapStateToProps, actions)(FriendMain);
