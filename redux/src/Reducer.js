import * as ActionType from './Action';

const initialState = {
    reducer_data: 0,

};

const reducer = (state = initialState, action) => {

    // action = {type:Actiontype.INCREASE_DATA,data:no}

    switch (action.type) {
        case ActionType.INCREASE_DATA:

            return {

                reducer_data: action.data + 1
            };

        case ActionType.DECREASE_DATA:

            return {
                //    ...state,
                reducer_data: action.data - 1

            };
        default:
            return {
                state
            };
    }
}
export default reducer;