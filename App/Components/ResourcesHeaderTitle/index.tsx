import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import { ResourcesHeaderTitleProps } from './types';

const ResourcesHeaderTitle = (props: ResourcesHeaderTitleProps) => {
  const { heading, subHeading, icon } = props;
  return (
    <View>
      <Text>{heading}</Text>
      <View style={styles.subHeading}>
        {icon !== undefined && icon()}
        <Text>{subHeading}</Text>
      </View>
    </View>
  );
};

export default ResourcesHeaderTitle;
