import "./ItemCard.css";

const ItemCard = ({ items }) => {
  const { name, price, toppings, shortDescription, id, image } = items;
  return (
    <div className="ItemCard" key={id}>
      <h2>{name}</h2>
      <h3>{shortDescription}</h3>
      <div className="ItemCard_Image">
        <img src={image} alt="pic" />
      </div>
      <div className="ItemCard_Info">
        <p>Price: ${price.toFixed(2)}</p>
        <p>Toppings: {toppings.join(", ")}</p>
      </div>
    </div>
  );
};

export default ItemCard;
