import * as React from "react";
import { shallow } from "../../enzyme";

import Tabs from "../Tabs";

describe("Tabs component tests", () => {
	it("renders Tabs", () => {
		const wrapper = shallow(<Tabs />);
		expect(wrapper);
	});
});
