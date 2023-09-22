import { useEffect, useState } from "react";

const res = new Promise<string[]>((resolve) => {
  setTimeout(() => {
    resolve(["HELLO", "WORLD", "FRONT"]);
  }, 1000);
});

const useFetchSolution = () => {
  const [solution, setSolution] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const words = await res;

      const randomIndex = Math.floor(Math.random() * words.length);

      setSolution(words[randomIndex].toLowerCase());
    };

    fetchData();
  }, []);

  return solution;
};

export default useFetchSolution;
