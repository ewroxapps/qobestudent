/* eslint-disable no-shadow */
import React from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { IconProps } from 'react-native-vector-icons/Icon';
import { useTheme } from '@react-navigation/native';
import { CustomIcon } from './CustomIcon';

export enum ICON_TYPES {
  AntDesign = 'AntDesign',
  Ionicons = 'Ionicons',
  FontAwesome = 'FontAwesome',
  FontAwesome5 = 'FontAwesome5',
  SimpleLineIcons = 'SimpleLineIcons',
  MaterialIcons = 'MaterialIcons',
  MaterialCommunityIcons = 'MaterialCommunityIcons',
  Entypo = 'Entypo',
  EvilIcons = 'EvilIcons',
  FeatherIcons = 'FeatherIcons',
  Octicons = 'Octicons',
  Fontisto = 'Fontisto',
  Custom = 'custom'
}

interface IVectorIcon extends Partial<IconProps> {
  iconType?: ICON_TYPES;
}

const VectorIcon = (props: IVectorIcon) => {
  const { colors } = useTheme() as ITheme;
  const {
    name = '',
    iconType = ICON_TYPES.Custom,
    color = colors.iconColor,
    ...restProps
  } = props;
  switch (iconType) {
    case ICON_TYPES.AntDesign:
      return <AntDesign name={name} color={color} {...restProps} />;
    case ICON_TYPES.Ionicons:
      return <IoniconsIcons name={name} color={color} {...restProps} />;
    case ICON_TYPES.FontAwesome:
      return <FontAwesomeIcons name={name} color={color} {...restProps} />;
    case ICON_TYPES.FontAwesome5:
      return <FontAwesome5Icons name={name} color={color} {...restProps} />;
    case ICON_TYPES.SimpleLineIcons:
      return <SimpleLineIcons name={name} color={color} {...restProps} />;
    case ICON_TYPES.MaterialIcons:
      return <MaterialIcons name={name} color={color} {...restProps} />;
    case ICON_TYPES.MaterialCommunityIcons:
      return (
        <MaterialCommunityIcons name={name} color={color} {...restProps} />
      );
    case ICON_TYPES.Entypo:
      return <EntypoIcons name={name} color={color} {...restProps} />;
    case ICON_TYPES.EvilIcons:
      return <EvilIcons name={name} color={color} {...restProps} />;
    case ICON_TYPES.FeatherIcons:
      return <FeatherIcon name={name} color={color} {...restProps} />;
    case ICON_TYPES.Octicons:
      return <Octicons name={name} color={color} {...restProps} />;
    case ICON_TYPES.Fontisto:
      return <Fontisto name={name} color={color} {...restProps} />;
    default:
      return <CustomIcon name={name} color={color} {...restProps} />;
  }
};

export default React.memo(VectorIcon);
