import * as ActionType from './ReduxAction';

const initialState = {
    reducer_msg: ""
};

const messageReducer = (state = initialState, action) => {

    // action = {type:Actiontype.INCREASE_DATA,data:no}

    switch (action.type) {

        case ActionType.SET_MESSAGE:
            return {
                reducer_msg: action.data
            }
        default:
            return {
                state
            };
    }
}
export default messageReducer;