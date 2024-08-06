import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Image, View } from 'react-native';
import { BASE_URL } from '../../../../Config/Api';
import colors from '../../../../Themes/Colors';
const ShowImage = (props: any) => {
  const navigation = useNavigation<ICoursesNavigationProp>();
  const changeHeader = () => {
    // Function to change navigation options
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.quizBlue //Set Header color
      }
    });
  };
  useEffect(() => {
    if (props.route.params.type === 'Online Quiz') changeHeader();
  });
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}>
      <Image
        style={{ alignSelf: 'center', height: '100%', width: '100%' }}
        resizeMode={'center'}
        source={{ uri: BASE_URL + props.route.params.url }}
      />
    </View>
  );
};

export default ShowImage;
