import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const { image, price, toppings, shortDescription, name, id } = item;
  
  return (
    <div>
      <div key={id}>
        <h1>{name}</h1>
        <h3>{shortDescription}</h3>
        <img src={image} alt="pic" />
        <ul>
          <li>{price}</li>
          <li>{toppings}</li>
        </ul>
      </div>
    </div>
  );
};

export default ItemCard;
