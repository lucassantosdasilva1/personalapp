import styled from 'styled-components/native';

import {getStatusBarHeight} from "react-native-iphone-x-helper"
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  position: absolute;

  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Image = styled.ImageBackground`
    
`;

export const Content = styled.View`

  margin-top: 400px;
  width: 420px;
  background-color: green;
`;

export const Title = styled.Text`
  color: white;
`;

export const Description = styled.Text`
  color: white;
`;

