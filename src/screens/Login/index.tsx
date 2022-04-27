import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ImageBackgroundProps, Dimensions } from 'react-native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { 
    Container,
    Content,
    Title,
    Description,
 } from './styles';
 
 const { width } = Dimensions.get('window');

 const ratio = 644 / 272

 const styles = StyleSheet.create({
    stretch: {
        flex: 1,
        width,
        height: width * ratio,
        resizeMode: 'cover',
    },
  });

  interface Props {
    width: number;
    height: number;
    stretched: boolean;
  }

export function Login({width, height, stretched} : Props) {
    const img1 = '../../utils/muier.png';

    const [widthImgBack, setWidthImgBack] = useState(100);
    const [heightImgBack, setHeightImgBack] = useState(100);
    

    return (
    <>
        <ImageBackground 
            source={require(img1)}
            resizeMode='cover'
            style={styles.stretch}
        />
        <Container>
        <Content>
                <Title> Login to your account </Title>
                <Description>Good to see you again, enter your details below to continue exercise</Description>
            </Content>
        </Container>
    </>
    )
}
