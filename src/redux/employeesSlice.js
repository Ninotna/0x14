import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: []
};

const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		addEmployee: (state, action) => {
			state.list.push(action.payload);
		},
		resetEmployees: (state) => {
			state.list = [];
		}
	}
});

export const { addEmployee, resetEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
