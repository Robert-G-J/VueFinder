import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import RepoTable from "./RepoTable";

describe("<RepoTable/>", () => {
  jest.mock("../services/github");

  it("renders correctly", () => {
    const tree = renderer.create(<RepoTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<RepoTable />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("fetches repos from GH and renders on mount", done => {
    const wrapper = shallow(<RepoTable />);
    setTimeout(() => {
      wrapper.update();
      const state = wrapper.instance().state;
      expect(state.items.length).toEqual(1);
      expect(wrapper.find("table").length).toEqual(1);
      done();
    });
  });
});
