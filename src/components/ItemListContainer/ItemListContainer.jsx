function ItemListContainer() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const handleClick = (item) => {
    alert(`Seleccionaste ${item}`);
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleClick(item)} style={{ cursor: 'pointer' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
