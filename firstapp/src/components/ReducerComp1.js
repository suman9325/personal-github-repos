import * as ActionType from './ReduxAction';

const INITIAL_STATE = {
    reducer_data: 0,
}

function handleChange(state, change) {
    const { reducer_data } = state;
    return ({
        reducer_data: reducer_data + change,
    })
}

export default function counterReducer(state = INITIAL_STATE, action) {
    const { reducer_data } = state;
    
    switch (action.type) {

        case ActionType.INCREASE_DATA:
            return handleChange(state, 1);

        case ActionType.DECREASE_DATA:
            return handleChange(state, -1);
            
        default:
            return state;
    }
}