import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import Map from '../../components/Map';

export default () => {
  return (
    <Fragment>
      <StatusBar hidden />
      <Map />
    </Fragment>
  );
};
