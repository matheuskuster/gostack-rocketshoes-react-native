import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubTotal,
  TotalContainer,
  TotalPrice,
  TotalTitle,
  FinishButton,
  FinishButtonText,
  EmptyBasketContainer,
  EmptyBasketText,
} from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function renderProduct({ item: product }) {
    return (
      <Product>
        <ProductInfo>
          <ProductImage source={{ uri: product.image }} />
          <ProductDetails>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.formattedPrice}</ProductPrice>
          </ProductDetails>
          <ProductDelete
            onPress={() => dispatch(CartActions.removeFromCart(product.id))}
          >
            <Icon name="delete-forever" size={24} color="#7159c1" />
          </ProductDelete>
        </ProductInfo>
        <ProductControls>
          <ProductControlButton onPress={() => decrement(product)}>
            <Icon name="remove-circle-outline" size={20} color="#7159c1" />
          </ProductControlButton>
          <ProductAmount value={String(product.amount)} />
          <ProductControlButton onPress={() => increment(product)}>
            <Icon name="add-circle-outline" size={20} color="#7159c1" />
          </ProductControlButton>
          <ProductSubTotal>{product.subTotal}</ProductSubTotal>
        </ProductControls>
      </Product>
    );
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <Products
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={renderProduct}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => (
              <>
                <TotalContainer>
                  <TotalTitle>TOTAL</TotalTitle>
                  <TotalPrice>{total}</TotalPrice>
                </TotalContainer>
                <FinishButton>
                  <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
                </FinishButton>
              </>
            )}
          />
        </>
      ) : (
        <EmptyBasketContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyBasketText>Seu carrinho está vazio</EmptyBasketText>
        </EmptyBasketContainer>
      )}
    </Container>
  );
}
