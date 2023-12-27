import { ProfileBio } from "../../components/Profilebio";
import { SearchForm } from "../../components/SearchForm";
import { ProfileContainer } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <h1>teste</h1>
      <ProfileBio/>
      <SearchForm/>
    </ProfileContainer>
  )
}