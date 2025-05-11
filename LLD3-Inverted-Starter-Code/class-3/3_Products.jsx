// Task Overview:
// Build an Interactive Product List where:
//     The product array is passed as a prop from the parent component.
//     Each product has a name, price, and an “Add to Cart” button.
//     Clicking “Add to Cart” logs the product name in the console.

const ProductList = ({ products }) => {

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Product List</h2>
      <ul>
        List of products
      </ul>
    </div>
  );
};

export default ProductList;