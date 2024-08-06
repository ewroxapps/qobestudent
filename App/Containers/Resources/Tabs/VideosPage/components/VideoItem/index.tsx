import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { VectorIcons } from '../../../../../../Components';
import { ICON_TYPES } from '../../../../../../Components/VectorIcons/VectorIcons';
import { useLanguage } from '../../../../../../Types/LanguageContext';
import { findWord } from '../../../../../../Utils/ParsingUtils';
import styles from './styles';
import { VideoItemProps } from './types';

const VideoItem = (props: VideoItemProps) => {
  const { t } = useTranslation('resources');
  const { videoItem } = props;
  const navigation = useNavigation<ICoursesNavigationProp>();

  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('VideoPlayer', {
          videoItem: props.videoItem
        });
      }}>
      {selectedDirection === 'left' ? (
        <View style={styles.thumbnailContainer}>
          {videoItem?.video ? (
            <Image
              source={{ uri: videoItem?.thumbnail }}
              style={styles.thumbnailPlaceholder}
            />
          ) : (
            <View style={styles.thumbnailPlaceholder}>
              <VectorIcons
                name="video"
                iconType={ICON_TYPES.FeatherIcons}
                size={40}
              />
            </View>
          )}
        </View>
      ) : null}

      <View style={styles.textContainer}>
        <Text style={styles.detailsText}>
          {findWord(dynamicDictionary, 'Detail')
            ? findWord(dynamicDictionary, 'Detail')
            : 'Detail'}
        </Text>
        <Text
          style={
            selectedDirection === 'left'
              ? styles.description
              : styles.description2
          }
          numberOfLines={4}>
          {videoItem?.description.length > 0
            ? videoItem?.description
            : findWord(dynamicDictionary, 'N/A')
            ? findWord(dynamicDictionary, 'N/A')
            : 'N/A'}
        </Text>
      </View>

      {selectedDirection === 'right' ? (
        <View style={[styles.thumbnailContainer,{marginLeft:10}]}>
          {videoItem?.video ? (
            <Image
              source={{ uri: videoItem?.thumbnail }}
              style={styles.thumbnailPlaceholder}
            />
          ) : (
            <View style={styles.thumbnailPlaceholder}>
              <VectorIcons
                name="video"
                iconType={ICON_TYPES.FeatherIcons}
                size={40}
              />
            </View>
          )}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default VideoItem;
