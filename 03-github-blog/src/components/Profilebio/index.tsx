import { ProfileBioContainer } from "./styles";

export function ProfileBio() {
  return (
    <ProfileBioContainer>
      <img className="img-styled" src="https://avatars.githubusercontent.com/u/111308246?v=4"/>
      <h1 className="title-name">Miguel Montenegro</h1>
      <a>github</a>
      <span className="bio">meu github</span>
      <a className="github-link">miguelmontenegroo</a>
      <a className="followers">30 seguidores</a>

    </ProfileBioContainer>
  )
}