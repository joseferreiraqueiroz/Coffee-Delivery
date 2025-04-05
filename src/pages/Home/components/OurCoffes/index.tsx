
import { OurCoffesComponentParent, OurCoffesContent } from "./style";
import { coffees } from "../../../../data/coffe";
import { CoffeeCard } from "./components/cards";
const OurCoffeComponent = () => {
  return (
    <OurCoffesComponentParent>
      <h1>Nossos cafés</h1>
      <OurCoffesContent>
        {coffees.map((coffe) =>(
            <CoffeeCard coffee={coffe} />
        ))}
      </OurCoffesContent>
    </OurCoffesComponentParent>
  );
};

export default OurCoffeComponent;
