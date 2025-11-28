import { useParams } from "react-router";

export default function ProjectDetails() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1 className="font-bold text-center">{params.id}</h1>
    </div>
  );
}
