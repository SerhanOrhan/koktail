
import { ButtonGroup, Button } from 'react-bootstrap';





function NavCategory(props) {
const {setCount,count}= props;
console.log(count);

  return (
    <div>
      <ButtonGroup>
        <Button type="submit" active={count==="c=Cocktail"} onClick={() => setCount("c=Cocktail")}>Cocktail</Button>
        <Button type="submit" onClick={() => setCount("c=Ordinary_Drink")}>Ordinary Drink</Button>
        <Button type="submit" onClick={() => setCount("c=Shot")}>Shot</Button>
        <Button type="submit" onClick={() => setCount("c=Coffee / Tea")}>Coffee / Tea</Button>
        <Button type="submit" onClick={() => setCount("c=Other/Unknown")}>Other/Unknown</Button>
        <Button type="submit" onClick={() => setCount("c=Punch / Party Drink")}>Punch / Party Drink</Button>
        <Button type="submit" onClick={() => setCount("c=Milk / Float / Shake")}>Milk / Float / Shake</Button>
        <Button type="submit" onClick={() => setCount("c=Homemade Liqueur")}>Homemade Liqueur</Button>
        <Button type="submit" onClick={() => setCount("c=Beer")}>Beer</Button>
        <Button type="submit" onClick={() => setCount("a=Alcoholic")}>Alcoholic</Button>
        <Button type="submit" onClick={() => setCount("a=Non_Alcoholic")}>Non Alcoholic</Button>
        <Button type="submit" onClick={() => setCount("a=Optional alcohol")}>Optional alcohol</Button>
      </ButtonGroup>

    </div>

  )
}

export default NavCategory;