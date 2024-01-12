import styled from 'styled-components'

export const PostContainer = styled.div`
width: 41.6rem;
height: 26rem;
border-radius: 10px;
background: #112131;
padding: 3.2rem 10.1rem 16.4rem 3.2rem;
.post-upper-content {
  display: flex;
  align-items: center;
  
}

.post-title{
  width: 28.3rem;
  color: #E7EDF4;
font-size: 20px;
font-weight: 700;
line-height: 160%; 
margin-bottom: 2rem;
}

.post-date{
  color: #7B96B2;
font-size: 14px;
font-weight: 400;
line-height: 160%; 
margin-left: 1.6rem;

}

.post-content{
  width: 35.2rem;
  height: 11.2rem;
  flex-shrink: 0;
  overflow: hidden;
color: #AFC2D4;
text-overflow: ellipsis;
white-space: nowrap;
font-size: 16px;
font-weight: 400;
line-height: 160%; 
}
`