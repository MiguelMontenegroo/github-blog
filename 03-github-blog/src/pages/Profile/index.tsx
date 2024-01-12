import { Posts } from "../../components/Posts";
import { ProfileBio } from "../../components/Profilebio";
import { SearchForm } from "../../components/SearchForm";
import { ProfileContainer } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
  
      <ProfileBio/>
      <SearchForm/>
      <Posts/>
    </ProfileContainer>
  )
}