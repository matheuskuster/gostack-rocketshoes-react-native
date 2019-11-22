import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  padding: 0 20px;
`;

export const Product = styled.View`
  background: #fff;
  width: 220px;
  height: 358px;
  border-radius: 4px;
  padding: 10px;
  margin-right: 15px;
`;

export const ProductImage = styled.Image`
  background: #eee;
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 10px;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: #000;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  background: ${darken(0.3, '#7159c1')};
  flex-direction: row;
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0 4px 0 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

// export const List = styled.FlatList``;
