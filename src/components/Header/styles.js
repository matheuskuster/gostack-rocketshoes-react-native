import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  height: 84px;
  flex-direction: row;
  background: #191920;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Basket = styled.TouchableOpacity`
  height: 26px;
  width: 24px;
  flex-direction: row;
  align-items: flex-start;
`;

export const Count = styled.Text`
  color: #fff;
  background: #7159c1;
  font-size: 12px;
  padding: 2px;
  min-width: 18px;
  min-height: 18px;
  text-align: center;
  border-radius: 10px;
  margin-left: -7px;
  margin-top: -7px;
`;
