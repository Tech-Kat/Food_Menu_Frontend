import "./ItemCard.css";

const ItemCard = ({items}) => {

  const {name, price, toppings, shortDescription, id, image} = items
  return (
    <div className="ItemCard" key={id}>
      <h1>{name}</h1>
      <h3>{shortDescription}</h3>
      <div className="Card_Image">
        <img src={image} alt="pic" />
      </div>
      <div className="CardList_Info">
        <ul>
          <li>Price: ${price.toFixed(2)}</li>
          <li>Toppings: {toppings.join(",")}</li>
        </ul>
      </div>
    </div>
  );
};

export default ItemCard;
