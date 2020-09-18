import React from "react";

import {
  Navbar,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import Product from "./components/Product.js";
import SearchForm from "./components/SearchForm.js";
import { useSelector } from 'react-redux';


function App() {
  const productList = useSelector(store => store.searchReducer.productList);
  
  return (
    <React.Fragment>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="ml-2 mr-5">Walmart PalFinder</Navbar.Brand>
        <SearchForm />
      </Navbar>
      <Container fluid>
        <Row id="resultsRow">
          {productList.map((v, i) => {
            return <Col md={3} key={"col" + v.id} className={(i > 3) ? "mt-4" : ""}>
              <Product
                key={v.id}
                brand={v.brand}
                description={v.description}
                image={v.image}
                price={v.price}
                priceF={v.priceF}
              />
            </Col>
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default App;
