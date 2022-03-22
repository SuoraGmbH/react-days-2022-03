import { useEffect, useState } from "react";
import { GithubRepository } from "../domain/GithubRepository";

interface Props {
  repoName: string;
}

const GithubStats = ({ repoName }: Props) => {
  const [stargazerCount, setStarGazerCount] = useState<number>();
  useEffect(() => {
    fetch("https://api.github.com/repos/" + repoName)
      .then((response) => response.json())
      .then((data: GithubRepository) => {
        setStarGazerCount(data.stargazers_count);
      });
  }, [repoName]);

  if (!stargazerCount) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      <b>
        {repoName}: {stargazerCount.toLocaleString()}
      </b>
    </div>
  );
};

export default GithubStats;
