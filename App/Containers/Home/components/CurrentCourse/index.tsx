import React from 'react';
import { Image, Text, View } from 'react-native';
import { VectorIcons } from '../../../../Components';
import { ICON_TYPES } from '../../../../Components/VectorIcons/VectorIcons';
import { BASE_URL } from '../../../../Config/Api';
import { Colors, Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import styles from './styles';
import { CurrentCourseProps } from './types';
const CurrentCourse = (props: CurrentCourseProps) => {
  const { label, instructorName, instructorProfile } = props;
  const { dynamicDictionary, selectedDirection } = useLanguage();

  const iconNext = () => {
    return (
      <VectorIcons
        name="right"
        size={24}
        color={Colors.textBlack}
        iconType={ICON_TYPES.AntDesign}
      />
    );
  };

  const iconNext2 = () => {
    return (
      <VectorIcons
        name="left"
        size={24}
        color={Colors.textBlack}
        iconType={ICON_TYPES.AntDesign}
      />
    );
  };

  const imageDisplay = () => {
    return (
      <View>
        {instructorProfile ? (
          <Image
            source={{
              uri: `${BASE_URL}${instructorProfile}`
            }}
            defaultSource={Images.profilePlaceholder}
            style={styles.profile}
          />
        ) : (
          <Image source={Images.profilePlaceholder} style={styles.profile} />
        )}
      </View>
    );
  };

  const textDisplay = () => {
    return (
      <View style={styles.topTextContainer}>
        <Text style={styles.classLabel} numberOfLines={2}>
          {label}
        </Text>
        <Text style={styles.instructorName}>{instructorName}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {selectedDirection === 'left' ? (
        <View style={styles.leftContainer}>
          {imageDisplay()}
          {textDisplay()}
          {iconNext()}
        </View>
      ) : (
        <View style={styles.leftContainer}>
          {iconNext2()}
          {textDisplay()}
          {imageDisplay()}
        </View>
      )}
    </View>
  );
};

export default CurrentCourse;
