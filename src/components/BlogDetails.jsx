// import React from 'react'

import { useParams } from "react-router";

export default function BlogDetails() {
  //
  const params = useParams();
  console.log(params);
  //
  return (
    <div>
      <h2 className="font-bold text-center">{params.id}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in
        quibusdam et explicabo placeat voluptates atque. Architecto aliquid
        excepturi deleniti itaque ut officia molestiae ab atque. Totam at
        dignissimos dolorem?
      </p>
    </div>
  );
}
