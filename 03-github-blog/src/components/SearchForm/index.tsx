import { Label, SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <form>
        <Label>
          Publicações
         
        </Label>
        <input className="input-styled" type="text" placeholder="Buscar conteudo"/>
      </form>
    </SearchFormContainer>
  )
}