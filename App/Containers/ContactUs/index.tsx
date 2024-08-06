import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Linking,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Arrows from '../../Assets/SVGs/Arrows';
import Emails from '../../Assets/SVGs/Emails';
import Facebook from '../../Assets/SVGs/Facebook';
import LinkedIn from '../../Assets/SVGs/LinkedIn';
import Twitter from '../../Assets/SVGs/Twitter';
import Whatsapp from '../../Assets/SVGs/Whatsapp';
import { Screen } from '../../Components';
import { useLanguage } from '../../Types/LanguageContext';
import { findWord } from '../../Utils/ParsingUtils';
import styles from './styles';
const ContactUs = () => {
  const deviceWidth = Dimensions.get('window').width;
  const navigation1 = useNavigation<IHomeNavigationProp>();
  const { selectedDirection, dynamicDictionary } = useLanguage();
  return (
    <Screen>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
        <TouchableOpacity
          style={{ width: deviceWidth / 1.01 }}
          onPress={() => {
            navigation1.navigate('ReportContact', {});
          }}>
          {selectedDirection === 'left' ? (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                paddingBottom: 10,
                paddingLeft: 10,
                paddingRight: 20
              }}>
              <Text style={styles.contactUS}>
                {findWord(dynamicDictionary, 'Contact Us')
                  ? findWord(dynamicDictionary, 'Contact Us')
                  : 'Contact Us'}
              </Text>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Arrows />
              </View>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                paddingBottom: 10,
                paddingLeft: 10,
                paddingRight: 20
              }}>
              <View style={{ flex: 1, alignItems: 'flex-start' }}>
              <Text style={styles.contactUS}>
                 {'<'}
              </Text>
              </View>
              <Text style={styles.contactUS}>
                {findWord(dynamicDictionary, 'Contact Us')
                  ? findWord(dynamicDictionary, 'Contact Us')
                  : 'Contact Us'}
              </Text>
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 0,
              paddingRight: 0
            }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#E2E8F0' }} />
            <View style={{ flex: 1, height: 1, backgroundColor: '#E2E8F0' }} />
          </View>
        </TouchableOpacity>
        <View style={styles.recordContainer}>
          <View style={styles.itemContainer}></View>
          <View style={styles.itemContainer}>
            <View style={styles.comeDown}>
              <View>
                <Text style={styles.salesText}>{findWord(dynamicDictionary,"Sales & Partnerships")?
              findWord(dynamicDictionary,"Sales & Partnerships"):'Sales & Paternships'  
              }</Text>
              </View>
              <View style={styles.emailContainer1}>
                <Emails />
                <Text style={styles.email}>{findWord(dynamicDictionary,'Email at')?
              findWord(dynamicDictionary,'Email at'):"Email at"  
              }</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('mailto:sales@alfoze.com');
                }}>
                <View style={styles.emailContainer}>
                  <Text style={styles.emailText}>sales@alfoze.com</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.whatsAppContainer}>
              <View style={styles.emailContainer1}>
                <Whatsapp />
                <Text style={styles.email}>{findWord(dynamicDictionary,'WhatsApp')?
              findWord(dynamicDictionary,'WhatsApp'):'WhatsApp'  
              }</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'whatsapp://send?text=hello&phone=+923035555429'
                  );
                }}>
                <View style={styles.emailContainer}>
                  <Text style={styles.emailText}>+923035555429</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.socialMediaContainer}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.facebook.com/AlfozeTechnologies/'
                  );
                }}>
                <View style={styles.socialView}>
                  <Facebook />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://pk.linkedin.com/company/alfoze-technologies'
                  );
                }}>
                <View style={styles.socialView}>
                  <LinkedIn />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://twitter.com/muazzambhatti');
                }}>
                <View style={styles.socialView}>
                  <Twitter />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default ContactUs;
