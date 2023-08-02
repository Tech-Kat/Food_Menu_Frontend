import "./ItemList.css";
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ itemsData }) => {
  return (
    <div className="ItemList">
      {itemsData.map((items) => (
        <ItemCard key={items.id} items={items} />
      ))}
    </div>
  );
};

export default ItemList;
