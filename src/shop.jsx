import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/scss/free/_variables.scss";
import "./sp.css";
import { ProductList } from "./ProductsData.jsx";
import Product from "./Products.jsx";

function Shop() {
  return (
    /* Header */
    <div
      style={{ marginTop: "5rem" }}
      className="container-sm d-flex justify-content-center align-items-center"
    >
      <div className="row gap-5 w-1000">
        {ProductList.map((p, index) => (
          <div className="col" key={index}>
            <Product Data={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
