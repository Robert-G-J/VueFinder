import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import RepoTable from "./RepoTable";

describe("<RepoTable/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<RepoTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit("renders without crashing", () => {
    const component = shallow(<RepoTable />);
    expect(component.exists()).toEqual(true);
  });

  it("fetches repos from GH and renders on mount", done => {
    jest.mock("../services/github");

    const component = shallow(<RepoTable />);
  });
});
