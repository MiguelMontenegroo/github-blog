import styled from 'styled-components'


export const ProfileBioContainer = styled.div`
display: flex;
width: 86.4rem;
height: 21.2rem;
border-radius: 10px;
background: #0B1B2B;
box-shadow: 0 0.2rem 2.8rem 0 rgba(0, 0, 0, 0.20);
padding: 3.2rem 3.2rem 3.2rem 4rem;
.img-styled{
  width: 14.8rem;
  height: 14.8rem;
  flex-shrink: 0;
  border-radius: 8px;
  margin: 0 3.2rem 0 0;
}

.profileContent {
  width: 100%;
}
.profileContent-title {
  display: flex;
  justify-content: space-between;
}
.profileContent-title__name{
  color: #E7EDF4;
font-size: 2.4rem;
font-weight: 700;
line-height: 130%; 
}
.profileContent-title__link{
  color:  #3294F8;
font-size: 1.2rem;
font-weight: 700;
line-height: 160%; /* 19.2px */
display: flex;
align-items: flex-start;
text-transform: uppercase;

  svg{
    margin: 0 0 0 0.8rem;
  }
}
.profileContent-description{
  color: #AFC2D4;
font-size: 1.6rem;
line-height: 160%; /* 25.6px */
margin: 0.8rem 0 0 0;
}

.profileContent-status{
  display: flex;
  margin-top: 2.4rem;
}

.profileContent-status__link + .profileContent-status__link{
margin-left: 2.4rem;

img{
  margin: 0 0.8rem 0 0;
}
}
.profileContent-status__link{
  color: #C4D4E3;
font-size: 1.6rem;
line-height: 160%; /* 25.6px */
display: flex;
align-items: center;
  img{
  margin: 0 0.8rem 0 0;
}
}

`