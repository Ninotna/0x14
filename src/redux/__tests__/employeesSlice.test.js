import employeesReducer, { addEmployee } from '../employeesSlice';

describe('employeesSlice', () => {
	test('should return the initial state', () => {
		const initialState = { list: [] };
		expect(employeesReducer(undefined, {})).toEqual(initialState);
	});

	test('should handle addEmployee', () => {
		const previousState = { list: [] };
		const newEmployee = {
			firstName: 'Alice',
			lastName: 'Durand',
			dateOfBirth: '1990-01-01',
			startDate: '2022-01-01',
			street: '123 rue des Lilas',
			city: 'Paris',
			state: 'FR',
			zipCode: '75000',
			department: 'Marketing'
		};

		const nextState = employeesReducer(previousState, addEmployee(newEmployee));
		expect(nextState.list).toHaveLength(1);
		expect(nextState.list[0]).toEqual(newEmployee);
	});
});
