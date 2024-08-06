import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import { findWord } from '../../../../Utils/ParsingUtils';
import styles from './styles';
import { EntityInfoContainerProps } from './types';

const EntityInfoContainer = (props: EntityInfoContainerProps) => {
  const { instructorName, instructorProfile, role } = props;
  const { t } = useTranslation('myCourses');
  const { dynamicDictionary, selectedDirection } = useLanguage();
  return (
    <View>
      {selectedDirection==='left' ?(
      <View style={styles.topContainer}>
      {instructorProfile ? (
        <Image
          source={{
            uri: instructorProfile
          }}
          defaultSource={Images.profilePlaceholder}
          style={styles.profile}
        />
      ) : (
        <Image source={Images.profilePlaceholder} />
      )}
      <View style={styles.topTextContainer}>
        <Text style={styles.entityName}>{instructorName}</Text>
        <Text style={styles.role}>
          {findWord(dynamicDictionary, role)
            ? findWord(dynamicDictionary, role)
            : role}
        </Text>
      </View>
    </View>
      ):(
        <View style={[styles.topContainer,{justifyContent:'flex-end'}]}>
       
        <View style={[styles.topTextContainer,{marginRight:10}]}>
          <Text style={styles.entityName}>{instructorName}</Text>
          <Text style={styles.role}>
            {findWord(dynamicDictionary, role)
              ? findWord(dynamicDictionary, role)
              : role}
          </Text>
        </View>

        {instructorProfile ? (
          <Image
            source={{
              uri: instructorProfile
            }}
            defaultSource={Images.profilePlaceholder}
            style={styles.profile}
          />
        ) : (
          <Image source={Images.profilePlaceholder} />
        )}
      </View>
      )

      }

    </View>
  );
};
export default EntityInfoContainer;
