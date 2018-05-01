import React from "react";
import "./RepoTable.css";

class RepoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }
  fetchRepos() {
    const that = this;
    fetch(
      "https://api.github.com/search/repositories?q=vue+language:javascript&sort=stars&order=desc"
    )
      .then(res => res.json())
      .then(res => that.setState({ repos: [...res.items] }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.fetchRepos();
  }
  render() {
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
          {this.state.repos.map(repo => (
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
