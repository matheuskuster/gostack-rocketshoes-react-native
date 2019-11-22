import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 15px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
`;

export const Products = styled.FlatList``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
  background: #fff;
`;

export const ProductDetails = styled.View`
  margin-left: 10px;
  padding: 10px;
  flex: 1;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  background: #eee;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
  min-width: 52px;
`;

export const ProductSubTotal = styled.Text`
  flex: 1;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
`;

export const TotalContainer = styled.View`
  align-items: center;
  padding-bottom: 30px;
  padding-top: 10px;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const TotalTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const FinishButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  padding: 12px;
`;

export const FinishButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const EmptyBasketContainer = styled.View`
  align-items: center;
  padding: 20px;
`;

export const EmptyBasketText = styled.Text`
  font-weight: bold;
  font-size: 26px;
  margin-top: 10px;
`;
