import GithubStats from "./GithubStats";
import { useState } from "react";

const DynamicGithubStats = () => {
  const [repoName, setRepoName] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setRepoName(event.target.value);
        }}
      />
      <GithubStats repoName={repoName} />
    </div>
  );
};

export default DynamicGithubStats;
