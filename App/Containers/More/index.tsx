import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View, Image } from 'react-native';
import { Screen } from '../../Components';
import { Images } from '../../Themes';
import styles from './styles';

const MorePage = () => {
  const { t } = useTranslation('more');
  return (
    <Screen>
      <ScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.topContainer}>
            <Image
              source={Images.appLogoBlue}
              resizeMode="contain"
              style={styles.logo}
            />
            <Text style={styles.aboutQobeHeading}>{t('aboutQobe')}</Text>
            <Text style={styles.aboutQobeText}>{t('aboutQobePara')}</Text>
          </View>
          <View style={styles.logosContainer}>
            <Text>Logos container</Text>
          </View>
          <View style={styles.allRightsContainer}>
            <Text>Bottom container </Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default MorePage;
