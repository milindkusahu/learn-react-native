import { useState, useEffect } from "react";
import GitHubProfile from "./components/GitHubProfile";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          "https://api.github.com/users/milindkusahu",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return <GitHubProfile isLoading={isLoading} data={data} error={error} />;
};

export default App;
