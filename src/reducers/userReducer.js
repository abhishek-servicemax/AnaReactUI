const initialState1 = {
		name : "Abhishek",
	    age: "abhishek.pathak@servicemax.com"
};
const empReducer  = (state = initialState1, action) => {
	switch(action.type) {
	case "SET_NAME":
		state = {
			...state,
			name: action.payload
		};

		break;
	case "SET_AGE":
		state = {
			...state,
			age: action.payload
		};
		break;
	}
	return state;
}

export default empReducer;
