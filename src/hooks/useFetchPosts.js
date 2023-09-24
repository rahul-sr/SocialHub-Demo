import { useState, useEffect } from "react";
import { baseUrl } from "../constant";

export function useFetchPosts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    setPosts(result);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return [posts, fetchPosts];
}
