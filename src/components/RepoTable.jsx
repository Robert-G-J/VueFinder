import React from "react";
import fetchFromGithub from "../services/github";
import "./RepoTable.css";

class RepoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  async componentDidMount() {
    try {
      const repos = await fetchFromGithub();
      this.setState({
        repos: [...repos]
      });
    } catch (error) {
      console.error("Request failed");
    }
  }

  render() {
    const { repos } = this.state;
    return (
      <table className="repo-table">
        <caption>Most Starred Vue Repos</caption>
        <thead className="table-head">
          <tr>
            <th className="header">Name</th>
            <th className="header bp-tablet">Description</th>
            <th className="header stars">Stars</th>
          </tr>
        </thead>
        <tbody>
          {repos.map(repo => (
            <tr key={repo.id}>
              <td className="row name">{repo.full_name}</td>
              <td className="row description bp-tablet">{repo.description}</td>
              <td className="row stars">{repo.stargazers_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default RepoTable;
