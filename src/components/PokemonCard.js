import { useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, id, hp, sprites}) {

  const [isToggled, setIsToggled] = useState(false)
  return (
    <Card>
      <div>
        <div onClick={() => setIsToggled(!isToggled)} className="image">
          <img src={isToggled ? sprites.back : sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
