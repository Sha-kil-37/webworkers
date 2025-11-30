// import React from 'react'

import { useParams } from "react-router";

export default function BlogDetails() {
  //
  const params = useParams();
  console.log(params);
  //
  return <div>BlogDetails</div>;
}
