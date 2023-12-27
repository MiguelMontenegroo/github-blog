import {  HeaderContainer} from './styles'
import effectEsquerdo from '../../assets/effect-esquerdo.svg'
import effectDireito from '../../assets/effect-direito.svg'
import logo from '../../assets/logo.svg'


export function Header() {
  return (
    <HeaderContainer>
     <img src={effectEsquerdo}/>
    <h1 className='titlePage'>
      <img className='titlePage-logo' src={logo}/>
      <strong className='titlepage-name'>GITHUB BLOG</strong>
    </h1>
    <img src={effectDireito}/>
    <span className='gradientBlurBackground top-left'/>
    <span className='gradientBlurBackground bottom'/>
    <span className='gradientBlurBackground top-right'/>
    </HeaderContainer>
  )
}