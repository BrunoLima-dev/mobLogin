import styled from "styled-components/native";

// KeyboardAvoidingView serve para tirar problemas de usabilidade.
export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  width: 90%;
`;

export const Title = styled.Text`
  color: #965EAD;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  border: 2px solid aqua;
  margin-bottom: 30px;
  padding: 15px 20px;
  color: #fff;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #965EAD;
  width: 90%;
  border-radius: 9px;
  padding: 15px 20px;
`;

export const TextButton = styled.Text`
  text-align: center;
  color: aqua;
  font-size: 20px;
  font-weight: bold;
`;
