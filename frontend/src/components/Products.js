import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <ProductsContainer>
      <ProductsHeading>Choose Your Favourite</ProductsHeading>
      <ProductWrapper>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <ProductCard>
              <ProductImg src={product.imageUrl} alt={product.name} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.description}</ProductDesc>
                <ProductPrice>£{product.price}</ProductPrice>
                <ProductButton>Add To Cart</ProductButton>
              </ProductInfo>
            </ProductCard>
          ))
        )}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem 30px;
  background: #fdfdf6;
  color: #0c052e;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

const ProductImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  box-shadow: 8px 8px #f9f4ba;
`;

const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

const ProductTitle = styled.h2`
  font-weight: unset;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
