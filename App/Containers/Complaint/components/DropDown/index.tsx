import React, { useRef, useState } from 'react';
import {
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import WhiteDropDown from '../../../../Assets/SVGs/WhiteDropDown';
import { Colors } from '../../../../Themes';
import { useLanguage } from '../../../../Types/LanguageContext';
import {
  convertNumberToArabic,
  findWord
} from '../../../../Utils/ParsingUtils';
import style from './styles';
import { DropDownProps } from './types';
const DropDown = (props: DropDownProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const { selectedDirection, dynamicDictionary } = useLanguage();
  const handleOptionSelect = (option: any) => {
    props.setValue(option);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    props.setError(false);
    if (props.options.length > 0) {
      setDropdownVisible(!dropdownVisible);
    } else {
      var msg = 'No options available';
      var convertmsg = findWord(dynamicDictionary, msg);
      ToastAndroid.show(convertmsg ?? msg, ToastAndroid.SHORT);
    }
  };

  const overlayStyle = {
    ...style.overlay,
    top: props.height === null ? 0 : props.height
  };
  return (
    <View>
      <Text style={style.textStyle}>{props.containerName}</Text>
      <TouchableOpacity onPress={toggleDropdown}>
        {selectedDirection === 'left' ? (
          <View
            style={
              props.error === false ? style.viewDrop : style.viewDropError
            }>
            <Text style={style.selectedText}>
              {props.value?.name != undefined
                ? props.value?.name
                : findWord(dynamicDictionary, 'Please select complaint type') ??
                  'Please select complaint type'}
            </Text>
            <WhiteDropDown style={{ right: 20 }} />
          </View>
        ) : (
          <View
            style={
              props.error === false ? style.viewDrop : style.viewDropError
            }>
            <WhiteDropDown style={{ right: -20 }} />
            <Text style={style.selectedText}>
              {props.value?.name != undefined
                ? props.value?.name
                : findWord(dynamicDictionary, 'Please select complaint type') ??
                  'Please select complaint type'}
            </Text>
          </View>
        )}

        {props.error ? (
          <Text style={style.errorText}>
            {findWord(dynamicDictionary, 'Please select a value') ??
              'Please select a value'}
          </Text>
        ) : null}
      </TouchableOpacity>
      <Modal isVisible={dropdownVisible} backdropOpacity={0}>
        <TouchableWithoutFeedback onPress={toggleDropdown}>
          <View
            style={[
              overlayStyle,
              selectedDirection != 'left' ? { justifyContent: 'flex-end' } : {}
            ]}>
            <View ref={dropdownRef} style={[style.dropDown]}>
              {selectedDirection != 'left' ? (
                <TouchableOpacity
                  onPress={() => {
                    setDropdownVisible(false);
                  }}>
                  <CloseCircle width={15} height={15} />
                </TouchableOpacity>
              ) : null}
              {props.options != undefined ? (
                <ScrollView>
                  {props.options.map((option, index) => (
                    <View>
                      {selectedDirection === 'left' ? (
                        <TouchableOpacity
                          style={{ flexDirection: 'row' }}
                          key={index}
                          onPress={() => handleOptionSelect(option)}>
                          <Text
                            style={{
                              color: Colors.black,
                              fontSize: 12,
                              marginBottom: 5,
                              marginRight: 5,
                              fontWeight: '300'
                            }}>
                            {index + 1}{' '}
                          </Text>
                          <Text
                            style={{
                              color: Colors.black,
                              fontSize: 12,
                              marginBottom: 5,
                              fontWeight: '300'
                            }}>
                            {option.name}
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                          }}
                          key={index}
                          onPress={() => handleOptionSelect(option)}>
                          <Text
                            style={{
                              color: Colors.black,
                              fontSize: 12,
                              marginBottom: 5,
                              fontWeight: '300'
                            }}>
                            {option.name}
                          </Text>

                          <Text
                            style={{
                              color: Colors.black,
                              fontSize: 12,
                              marginBottom: 5,
                              marginRight: 5,
                              fontWeight: '300',
                              marginLeft: 5
                            }}>
                            {convertNumberToArabic(
                              dynamicDictionary,
                              index + 1
                            ) ?? index + 1}{' '}
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  ))}
                </ScrollView>
              ) : null}

              {selectedDirection === 'left' ? (
                <TouchableOpacity
                  onPress={() => {
                    setDropdownVisible(false);
                  }}>
                  <CloseCircle width={15} height={15} />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default DropDown;
