import { Label, SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <form>
        <Label>
          Publicações
          <input className="input-styled" type="text" placeholder="Buscar conteudo"/>
        </Label>
      </form>
    </SearchFormContainer>
  )
}