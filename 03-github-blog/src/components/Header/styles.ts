import styled from 'styled-components'

export const HeaderContainer = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background: #0b1b2b;
position: relative;
overflow: hidden;
.titlePage {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titlePage-logo{
  width: 4.5rem;
  height: 4rem;
  margin-bottom: 2rem;
}

.titlepage-name {
  font-family: 'Coda',  sans-serif;
  font-weight: 400;
font-size: 2.4rem;
color: #3294f8;
line-height: 160%; /* 38.4px */
}

.gradientBlurBackground{
  background: #14589C;
    filter: blur(200px);

    width: 23.6rem;
    height: 23.6rem;

    position:absolute;
    
}
.top-left{
      top:-8rem;
    left: -13rem;
    }
    .bottom{
   bottom: 0;
   left: 50rem;
    }
    .top-right{
 top: -8rem;
 right: -13rem;
    }
`
