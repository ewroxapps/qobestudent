import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import Verticaldots from '../../../../Assets/SVGs/Verticaldots';
import styles from './styles';
import { HeaderPropsRight } from './types';
const RightHeader = (props:HeaderPropsRight) => {
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <View >
      <Menu opened={menuOpen} onBackdropPress={() => setMenuOpen(false)}>
        <MenuTrigger
          onPress={() => setMenuOpen(true)}
          customStyles={{
            TriggerTouchableComponent: TouchableOpacity
          }}>
          <TouchableOpacity
            style={[styles.unclickedConfig]}
            onPress={() => {
              setMenuOpen(!menuOpen)

            }}>
            <View style={{ flexDirection: 'row', paddingLeft: 5, paddingRight: 5 }}>
              <Verticaldots />

            </View>
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          <MenuOption style={styles.menuOptionContainer}
            onSelect={() => {
              setMenuOpen(false)   
              props.Setclose(!props.close)
            }}
          >
            <Text style={styles.textColor} >Close chat</Text>
          </MenuOption>
        
        </MenuOptions>
      </Menu>

    </View>

    );
  };
  
 
  
  export default RightHeader;