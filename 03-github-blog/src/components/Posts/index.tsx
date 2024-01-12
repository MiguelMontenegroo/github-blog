import { PostContainer } from "./styles";

export function Posts() {
  return (
    <PostContainer>
      <div className="post-upper-content">
      <h1 className="post-title">JavaScript data types and data structures</h1>
      <p className="post-date">Há 1 dia</p>
      </div>
      <p className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris</p>
    </PostContainer>
  )
}