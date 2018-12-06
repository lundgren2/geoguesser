import React from 'react';
import { MapView } from 'expo';
import { View, Text } from 'react-native';

const CalloutText = props => {
  const { isVisible, title, description } = props;
  if (isVisible)
    return (
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    );
  else return null;
};

const Callout = props => {
  const { isVisible } = props;

  return (
    <MapView.Callout tooltip={!isVisible}>
      <CalloutText {...props} />
    </MapView.Callout>
  );
};

export default Callout;
