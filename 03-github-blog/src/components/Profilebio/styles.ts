import styled from 'styled-components'


export const ProfileBioContainer = styled.div`
display: flex;
width: 86.4rem;
height: 21.2rem;
border-radius: 10px;

.img-styled{
  width: 14.8rem;
  height: 14.8rem;
  flex-shrink: 0;
  border-radius: 8px;
}

.title-name{
  color: #E7EDF4;
font-family: Nunito;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; 
}

.bio{
  width: 61.2rem;
  color: #AFC2D4;
font-family: Nunito;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 25.6px */
}

.github-link{
  color: #C4D4E3;
font-family: Nunito;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 160%; 
}

.followers{
  color: #C4D4E3;
font-family: Nunito;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 25.6px */
}
`