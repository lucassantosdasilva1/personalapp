import React from 'react';
import { View, StyleSheet, ImageBackground, ImageBackgroundProps } from 'react-native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { 
    Container,
    Content,
    ImageWrapper,
    Image,
    Title,
    Description,
 } from './styles';

 const styles = StyleSheet.create({
    stretch: {
        flex: 1,
        resizeMode: 'cover',
    },
  });

  interface Props extends ImageBackgroundProps{

  }

export function Login({resizeMode, style, source, ...rest} : Props) {
    const img1 = '../../utils/muier.png';

    return (
        <Container>
            <ImageBackground 
                 
                resizeMode='cover'
                style={styles.stretch}
                source={require(img1)} 
            >


            <Content>
                    <Title> Login to your account </Title>
                    <Description>Good to see you again, enter your details below to continue exercise</Description>
            </Content>

            </ImageBackground>
        </Container>

    )
}
