
//import chartData from '../assets/Json/barchartdata';

const barReducer  = (state = {data: [100, 300, 132, 400, 433, 120, 178, 140, 300, 120]}, action) => {
	switch(action.type) {
	case 'SET_DATA':
		state = {
			...state,
			data:action.payload
		};
		break;
	}
	return state;
}

export default barReducer;
