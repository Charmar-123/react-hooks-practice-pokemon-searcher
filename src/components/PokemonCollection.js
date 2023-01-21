import { useState, useEffect} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({searchedName, updatedListCard}) {

  const [list, setList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(listData => setList(listData))
  }, [updatedListCard])

  const updatedList = list.filter(card => card.name.toLowerCase().includes(searchedName.toLowerCase()))

  const listCards = updatedList.map(({id, name, hp, sprites}) => <PokemonCard key={id} id={id} name={name} hp={hp} sprites={sprites} />)
  return (
    <Card.Group itemsPerRow={6}>
      {listCards}
    </Card.Group>
  );
}

export default PokemonCollection;
