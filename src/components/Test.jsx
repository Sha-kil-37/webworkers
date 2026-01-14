import { useEffect } from "react";

export default function Test() {
  //
  const options = { method: "GET" };

  useEffect(() => {
    fetch("https://api.hubapi.com/content/api/v2/blog-posts?limit=20", options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  //
  return <div>Test</div>;
}
