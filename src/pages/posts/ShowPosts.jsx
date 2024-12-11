import PostDetail from "../../components/PostDetail";

import { useParams } from "react-router-dom";

export default function ShowPosts() {
  console.log(useParams());

  return <PostDetail />;
}
