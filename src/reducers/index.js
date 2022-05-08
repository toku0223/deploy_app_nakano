import { HELLO, INCREMENT } from '../actions/index'

const reducer = (state = [], action) => {
    switch (action.type) {
        case HELLO:
            console.log("Hello World")
            window.confirm("Hello World")
            return { ...state };
        case INCREMENT:
            return { ...state, count: state.count + 1 }
    }

}

export default reducer;