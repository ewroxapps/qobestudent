import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from 'react-native-popup-menu';
import { Comments } from '../../../../Assets/SVGs';
import Bigtrash from '../../../../Assets/SVGs/Bigtrash';
import BlueEdit from '../../../../Assets/SVGs/BlueEdit';
import Timetable from '../../../../Assets/SVGs/Timetable';
import Verticaldots from '../../../../Assets/SVGs/Verticaldots';
import { VectorIcons } from '../../../../Components';
import { ICON_TYPES } from '../../../../Components/VectorIcons/VectorIcons';
import { BASE_URL } from '../../../../Config/Api';
import { Colors, Images } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import DeleteModal from '../DeleteModal';
import EditDiscussionModal from '../EditDiscussionModal';
import styles from './styles';
import { DetailsModalProps } from './types';
const DiscussionForumDetails = (props: DetailsModalProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const {
    posted_by,
    posted_when,
    posted_dp,
    comments,
    id,
    allow_comment,
    allow_update,
    img,
    detail,
    title,
    classID,
    courseName,
    click,
    setClick
  } = props;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const [modal, setModal] = React.useState(false);
  const [Editmodal, setEditModal] = React.useState(false);
  const navigation = useNavigation<ICoursesNavigationProp>();

  return (
    <View style={styles.container}>
      {selectedDirection === 'left' ? (
        <View style={styles.justifyView}>
          <View style={styles.leftContainer}>
            {posted_dp ? (
              <Image
                source={{
                  uri: `${BASE_URL}${posted_dp}`
                }}
                defaultSource={Images.profilePlaceholder}
                style={styles.profile}
              />
            ) : (
              <Image
                source={Images.profilePlaceholder}
                style={styles.profile}
              />
            )}

            <View style={styles.anotherContainer}>
              <Text style={styles.textPostby} numberOfLines={1}>
                {posted_by}
              </Text>
              <View style={styles.calenderContainer}>
                <Timetable width={20} />
                <Text style={styles.time} numberOfLines={1}>
                  {posted_when}
                </Text>
              </View>
            </View>
          </View>
          {allow_update ? (
            <View>
              <Menu
                opened={menuOpen}
                onBackdropPress={() => setMenuOpen(false)}>
                <MenuTrigger
                  onPress={() => setMenuOpen(true)}
                  customStyles={{
                    TriggerTouchableComponent: TouchableOpacity
                  }}>
                  <TouchableOpacity
                    style={styles.unclickedConfig}
                    onPress={() => {
                      setMenuOpen(!menuOpen);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingLeft: 5,
                        paddingRight: 5,
                        right: 10
                      }}>
                      <Verticaldots width={18} height={18} />
                    </View>
                  </TouchableOpacity>
                </MenuTrigger>
                <MenuOptions
                  optionsContainerStyle={styles.menuOptionsContainer}>
                  <MenuOption
                    style={styles.menuOptionContainer}
                    onSelect={() => {
                      setMenuOpen(false);
                      setEditModal(!Editmodal);
                    }}>
                    <BlueEdit />
                    <Text style={styles.text}>
                      {findWord(dynamicDictionary, 'Edit')
                        ? findWord(dynamicDictionary, 'Edit')
                        : 'Edit'}
                    </Text>
                  </MenuOption>
                  <MenuOption
                    style={styles.menuOptionContainer}
                    onSelect={() => {
                      setMenuOpen(false);
                      setModal(!modal);
                    }}>
                    <Bigtrash width={18} height={18} />
                    <Text style={[styles.text, { color: Colors.red }]}>
                      {findWord(dynamicDictionary, 'Delete')
                        ? findWord(dynamicDictionary, 'Delete')
                        : 'Delete'}
                    </Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          ) : null}
        </View>
      ) : (
        <View style={styles.justifyView}>
          {allow_update ? (
            <View>
              <Menu
                opened={menuOpen}
                onBackdropPress={() => setMenuOpen(false)}>
                <MenuTrigger
                  onPress={() => setMenuOpen(true)}
                  customStyles={{
                    TriggerTouchableComponent: TouchableOpacity
                  }}>
                  <TouchableOpacity
                    style={styles.unclickedConfig}
                    onPress={() => {
                      setMenuOpen(!menuOpen);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingLeft: 5,
                        paddingRight: 5,
                        right: 10
                      }}>
                      <Verticaldots width={18} height={18} />
                    </View>
                  </TouchableOpacity>
                </MenuTrigger>
                <MenuOptions
                  optionsContainerStyle={styles.menuOptionsContainer}>
                  <MenuOption
                    style={[styles.menuOptionContainer]}
                    onSelect={() => {
                      setMenuOpen(false);
                      setEditModal(!Editmodal);
                    }}>
                    <Text style={[styles.text, { left: 0 }]}>
                      {' '}
                      {findWord(dynamicDictionary, 'Edit')
                        ? findWord(dynamicDictionary, 'Edit')
                        : 'Edit'}
                    </Text>
                    <BlueEdit />
                  </MenuOption>
                  <MenuOption
                    style={styles.menuOptionContainer}
                    onSelect={() => {
                      setMenuOpen(false);
                      setModal(!modal);
                    }}>
                    <Text style={[styles.text, { color: Colors.red, left: 0 }]}>
                      {findWord(dynamicDictionary, 'Delete')
                        ? findWord(dynamicDictionary, 'Delete')
                        : 'Delete'}
                    </Text>
                    <Bigtrash width={18} height={18} />
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          ) : null}

          <View style={styles.leftContainer}>
            <View style={[styles.anotherContainer, { alignItems: 'flex-end' }]}>
              <Text style={styles.textPostby} numberOfLines={1}>
                {posted_by}
              </Text>
              <View style={styles.calenderContainer}>
                <Text style={styles.time} numberOfLines={1}>
                  {posted_when}
                </Text>
                <Timetable width={20} />
              </View>
            </View>

            {posted_dp ? (
              <Image
                source={{
                  uri: `${BASE_URL}${posted_dp}`
                }}
                defaultSource={Images.profilePlaceholder}
                style={styles.profile}
              />
            ) : (
              <Image
                source={Images.profilePlaceholder}
                style={styles.profile}
              />
            )}
          </View>
        </View>
      )}

      <View
        style={[
          styles.secondContainer,
          selectedDirection != 'left' ? { alignItems: 'flex-end' } : {}
        ]}>
        <Text style={styles.titleText} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.detailText} numberOfLines={3}>
          {detail}
        </Text>
      </View>

      <View style={styles.thirdContainer}>
        {selectedDirection != 'left' ? (
          <View style={[styles.commentView, { justifyContent: 'flex-start' }]}>
            <TouchableOpacity
              style={styles.readMoreView}
              onPress={() => {
                navigation.navigate('CommentForum', {
                  id: id,
                  courseName: courseName
                });
              }}>
              <View style={{ top: 2 }}>
                <VectorIcons
                  name="left"
                  size={14}
                  color={Colors.backgroundWhite}
                  iconType={ICON_TYPES.AntDesign}
                />
              </View>
              <Text
                style={[
                  styles.detailText,
                  {
                    marginTop: 0,
                    color: Colors.backgroundWhite,
                    fontWeight: '600',
                    marginRight: 3
                  }
                ]}>
                {findWord(dynamicDictionary, 'Read More')
                  ? findWord(dynamicDictionary, 'Read More')
                  : 'Read More'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {selectedDirection === 'left' ? (
          <View style={[styles.commentView, { marginTop: 10 }]}>
            <Comments />
            <Text style={[styles.detailText, { marginTop: 0, marginLeft: 5 }]}>
              {comments}{' '}
              {findWord(dynamicDictionary, 'Comments')
                ? findWord(dynamicDictionary, 'Comments')
                : 'Comments'}
            </Text>
          </View>
        ) : (
          <View
            style={[
              styles.commentView,
              { marginTop: 10, justifyContent: 'flex-end' }
            ]}>
            <Text style={[styles.detailText, { marginTop: 0, marginRight: 5 }]}>
              {convertNumberToArabic(dynamicDictionary, comments)}{' '}
              {findWord(dynamicDictionary, 'Comments') || 'Comments'}
            </Text>
            <Comments />
          </View>
        )}

        {selectedDirection === 'left' ? (
          <View style={[styles.commentView, { justifyContent: 'flex-end' }]}>
            <TouchableOpacity
              style={styles.readMoreView}
              onPress={() => {
                navigation.navigate('CommentForum', {
                  id: id,
                  courseName: courseName
                });
              }}>
              <Text
                style={[
                  styles.detailText,
                  {
                    marginTop: 0,
                    color: Colors.backgroundWhite,
                    fontWeight: '600',
                    marginRight: 3
                  }
                ]}>
                {findWord(dynamicDictionary, 'Read More')
                  ? findWord(dynamicDictionary, 'Read More')
                  : 'Read More'}
              </Text>
              <View style={{ top: 2 }}>
                <VectorIcons
                  name="right"
                  size={14}
                  color={Colors.backgroundWhite}
                  iconType={ICON_TYPES.AntDesign}
                />
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      {modal ? (
        <DeleteModal
          modalVisible={modal}
          setModalVisible={setModal}
          setClicked={setClick}
          dp={posted_dp}
          name={posted_by}
          date={posted_when}
          title={title}
          details={detail}
          id={id}
          classID={classID}
        />
      ) : null}

      {Editmodal ? (
        <EditDiscussionModal
          setClicked={setClick}
          modalVisible={Editmodal}
          setModalVisible={setEditModal}
          titles={title}
          details={detail}
          classID={classID}
          classForumID={id}
          allow_update={allow_update}
          allow_comment={allow_comment}
          published={'1'}
        />
      ) : null}
    </View>
  );
};

export default DiscussionForumDetails;
