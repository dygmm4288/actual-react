import createReducer from "../common/createReducer";
import mergeReducers from "../common/mergeReducers";
//상태값 액션객체. 리듀서 함수
/* const ADD = "timeline/ADD";
const REMOVE = "timeline/REMOVE";
const EDIT = "timeline/EDIT";
const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

export const addTimeline = timeline => ({ type: ADD, timeline });
export const removeTimeline = timeline => ({ type: REMOVE, timeline });
export const editTimeline = timeline => ({ type: EDIT, timeline });
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

const INITIAL_STATE = { timeline: [], nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
	[ADD]: (state, action) => state.timeline.push(action.timeline),
	[REMOVE]: (state, action) =>
		(state.timeline = state.timeline.filter(
			timeline => timeline.id !== action.timeline.id
		)),
	[EDIT]: (state, action) => {
		const index = state.timeline.findIndex(
			timeline => timeline.id === action.timeline.id
		);
		if (index >= 0) {
			state.timeline[index] = action.timeline;
		}
	},
	[INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1)
}); */
import createItemsLogic from "../common/createItemsLogic";
const { add, remove, edit, reducer: timelinesReducers } = createItemsLogic(
	"timelines"
);
const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

const INITIAL_STATE = { nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
	[INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1)
});

const reducers = [reducer, timelinesReducers];

export default mergeReducers(reducers);
