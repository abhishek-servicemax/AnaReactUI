const initialState1 = {
		username : "Abhishek",
	  password : "pathak"
};
const empReducer  = (state = initialState1, action) => {
	switch(action.type) {
	case "SET_LOGIN":
		state = {
			...state,
			name: action.payload
		};

		break;

	}
	return state;
}

export default empReducer;
