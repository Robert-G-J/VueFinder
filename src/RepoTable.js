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
      .then(res => that.setState({ repos: [...res.items] }));
  }

  componentDidMount() {
    this.fetchRepos();
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {this.state.repos.map(repo => (
            <tr key={repo.id}>
              <td>{repo.full_name}</td>
              <td>{repo.description}</td>
              <td>{repo.stargazers_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default RepoTable;
