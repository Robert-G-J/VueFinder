import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import RepoTable from "./RepoTable";

describe("<RepoTable/>", () => {
  jest.mock("../services/github.js");

  it("renders correctly", () => {
    const tree = renderer.create(<RepoTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<RepoTable />);
    expect(wrapper.exists()).toEqual(true);
  });

  describe("#componentDidMount", () => {
    it("fetches repos from GH and renders on mount", async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () =>
          new Promise((resolve, reject) => {
            resolve({
              items: [
                { id: 123, name: "vuey", description: "Funfun", stars: 234 }
              ]
            });
          })
      }));
      const wrapper = await shallow(<RepoTable />);
      await wrapper.update();
      console.log(wrapper.state);
      expect(wrapper.state("items").length).toEqual(1);
    });
  });
});
