import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, Basket, Count } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo />
      <Basket>
        <Icon
          name="shopping-basket"
          size={24}
          color="#FFF"
          onPress={() => navigation.navigate('Cart')}
        />
        <Count>{cartSize}</Count>
      </Basket>
    </Container>
  );
}
