import { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [searchedName, setSearchedName] = useState("")
  const [updatedListCard, setUpdatedListCard] = useState([])

  const handleSearch = (inputName) => {
    setSearchedName(inputName)
  }

  const handleSubmit = (updatedCard) => {
    setUpdatedListCard(updatedCard)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection searchedName={searchedName} updatedListCard={updatedListCard}/>
    </Container>
  );
}

export default PokemonPage;
