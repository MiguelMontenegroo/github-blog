import { ArrowSquareOut } from "@phosphor-icons/react";
import { ProfileBioContainer } from "./styles";
import followers from '../../assets/followers.svg'
import github from '../../assets/github.svg'

export function ProfileBio() {
  return (
    <ProfileBioContainer>
      <img className="img-styled" src="https://avatars.githubusercontent.com/u/111308246?v=4"/>
      <div className="profileContent">
        <div className="profileContent-title">
      <h1 className="profileContent-title__name">Miguel Montenegro</h1>
      <a className="profileContent-title__link">GITHUB <ArrowSquareOut size={16} weight="bold" color="#3294f8"/></a>
      </div>
      <p className="profileContent-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris</p>
      <div className="profileContent-status">
      <a className="profileContent-status__link"><img src={github}/>miguelmontenegroo</a>
      <a className="profileContent-status__link"><img src={followers}/>30 seguidores</a>
      </div>
      </div>
    </ProfileBioContainer>
  )
}