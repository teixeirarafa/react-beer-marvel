import * as React from "react";
import { shallow } from "../../enzyme";

import Grid from "../Grid";

describe("Grid component tests", () => {
	it("renders Grid", () => {
		const wrapper = shallow(<Grid />);
		expect(wrapper);
	});
});
