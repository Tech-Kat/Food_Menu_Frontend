import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ itemsData }) => {
  return (
    
    <div className="ItemList">
      <h1>Our Menu</h1>
      {itemsData.map((items) => (
        <ItemCard key={items.id} items={items}/>
      ))}
    </div>
  );
};

export default ItemList;
