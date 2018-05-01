import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import RepoTable from "./RepoTable";

describe("<RepoTable/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<RepoTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const component = shallow(<RepoTable />);
    expect(component.exists()).toEqual(true);
  });
});
