import React from "react";
import ReactDOM from "react-dom";
import RepoTable from "./RepoTable";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<RepoTable />, document.getElementById("root"));
registerServiceWorker();
