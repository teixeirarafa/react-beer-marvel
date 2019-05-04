import * as React from "react";
import { shallow } from "../../enzyme";

import Header from "../Header";

describe("Header component tests", () => {
	it("renders Header", () => {
		const wrapper = shallow(<Header />);
		expect(wrapper);
	});
});
