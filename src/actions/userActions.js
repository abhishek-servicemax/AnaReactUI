export function setName(name) {
	/*return dispatch => {
		setTimeout(() =>{
			dispatch({
				type: "SET_NAME",
				payload: name
			})
		}, 2000);
	}*/

	return {
		type: "SET_NAME",
		payload: name
	}
	/*
	return {
		type: "SET_NAME",
		payload: new Promise((resolve, reject) =>{
			setTimeout(() => {
				resolve(name);
			}, 2000);
		})
	};*/
}

export function setAge(age) {
	return {
		type: "SET_AGE",
		payload: age

	}
};
export function setData(data) {
	console.log(data.length);
	return {
		type: "SET_DATA",
		payload: data

	}
};
