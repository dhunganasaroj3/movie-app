import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({adapter: new Adapter()});
import Home from "../../Home";

describe("<Home />", () => {
    const container = shallow(<Home />);
    test("Render the homepage", async () => {
        expect(container).toBeTruthy();
    });
    test("should match the snapshot", () => {
        expect(container.html()).toMatchSnapshot();
    });
});
