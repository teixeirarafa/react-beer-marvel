import * as React from "react";
import { shallow } from "../../enzyme";
import configureStore from "redux-mock-store";
import Beer from "../Beer";

describe("Beer component tests", () => {
	const initialState = {};
	const mockStore = configureStore();
	const store = mockStore(initialState);

	it("renders  Beer", () => {
		const wrapper = shallow(<Beer store={store} id={1} />);
		expect(wrapper);
	});
});
