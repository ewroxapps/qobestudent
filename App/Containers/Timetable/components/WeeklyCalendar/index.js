// T2
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Timetable from '../../../../Assets/SVGs/Timetable';
import { VectorIcons } from '../../../../Components';
import { ICON_TYPES } from '../../../../Components/VectorIcons/VectorIcons';
import { useLanguage } from '../../../../Types/LanguageContext';
import { convertNumberToArabic, findWord } from '../../../../Utils/ParsingUtils';
import styles from './Style';

const WeeklyCalendar = props => {
  const [currDate, setCurrDate] = useState(moment());
  const [weekdays, setWeekdays] = useState([]);
  const [weekdayLabels, setWeekdayLabels] = useState([]);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [dateToShow, setDateToShow] = useState(undefined);
  const [isCalendarReady, setCalendarReady] = useState(false);
  const [pickerDate, setPickerDate] = useState(currDate.clone());
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [cancelText, setCancelText] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { dynamicDictionary, selectedDirection } = useLanguage();
  // const [getFilteredTimetable, {isLoading: filteredLoading, set}]

  useEffect(() => {
    createWeekdays(currDate);
    setCalendarReady(true);
  }, []);

  useEffect(() => {
    if (props.clearDate) {
      clearDateSelection();
    }
  });

  useEffect(() => {
    if (selectedDate) {
      setDateToShow(selectedDate);
    } else {
      setDateToShow(currDate);
    }
  }, [selectedDate,selectedDirection,dynamicDictionary]);

  const clearDateSelection = () => {
    setCalendarReady(false);
    setSelectedDate(undefined);
    props.setDateSelection(false);
    createWeekdays(currDate.clone(), {});
    setCalendarReady(true);
  };

  const createWeekdays = (date, map) => {
    setWeekdays([]);
    for (let i = 0; i < 7; i++) {
      const weekdayToAdd = date.clone().weekday(props.startWeekday - 7 + i);
      setWeekdays(weekdays => [...weekdays, weekdayToAdd]);
      setWeekdayLabels(weekdayLabels => [
        ...weekdayLabels,
        weekdayToAdd.format(props.weekdayFormat)
      ]);
    }
  };

  const clickLastWeekHandler = () => {
    setCalendarReady(false);
    const lastWeekCurrDate = currDate.subtract(7, 'days');
    props.onWeekChanged(lastWeekCurrDate);
    setCurrDate(lastWeekCurrDate.clone());
    setSelectedDate(undefined);
    props.setDateSelection(false);
    createWeekdays(lastWeekCurrDate.clone(), {});
    setCalendarReady(true);
  };

  const clickNextWeekHandler = () => {
    setCalendarReady(false);
    const nextWeekCurrDate = currDate.add(7, 'days');
    props.onWeekChanged(nextWeekCurrDate);
    setCurrDate(nextWeekCurrDate.clone());
    setSelectedDate(undefined);
    props.setDateSelection(false);
    createWeekdays(nextWeekCurrDate.clone(), {});
    setCalendarReady(true);
  };

  const isSelectedDate = date => {
    if (!selectedDate) return;
    if (!date) return Date.now();
    return (
      selectedDate.year() === date.year() &&
      selectedDate.month() === date.month() &&
      selectedDate.date() === date.date()
    );
  };

  const pickerOnChange = (_event, pickedDate) => {
    if (Platform.OS === 'android') {
      setPickerVisible(false);
      setLoading(true);
      if (pickedDate !== undefined) {
        // when confirm pressed
        setTimeout(() => {
          let pickedDateMoment = moment(pickedDate);
          setPickerDate(pickedDateMoment);
          confirmPickerHandler(pickedDateMoment);
          onDayPress(pickedDateMoment);
          setLoading(false);
        }, 0);
      } else setLoading(false);
    } else {
      onDayPress(pickedDateMoment);
      setPickerDate(moment(pickedDate));
    }
  };

  const confirmPickerHandler = pickedDate => {
    setCurrDate(pickedDate);
    setSelectedDate(pickedDate);
    props.setDateSelection(false);
    setCalendarReady(false);
    createWeekdays(pickedDate, {});
    setCalendarReady(true);

    setPickerVisible(false);
  };

  const onDayPress = weekday => {
    setSelectedDate(weekday.clone());
    if (props.onDaySelected !== undefined) {
      props.setDateSelection(true);
      props.onDaySelected(weekday.clone());
    } else {
      props.setDateSelection(false);
    }
  };

  const getDateStrings = (
    date,
    arabicDictionary
  ) => {
    const dayOfWeek = findWord(arabicDictionary, moment(date).format('ddd'))
    ? findWord(arabicDictionary, moment(date).format('ddd'))
    : moment(date).format('ddd');
  

    const dayOfMonth = convertNumberToArabic(
      arabicDictionary,
      moment(date).get('D')
    )
      ? convertNumberToArabic(arabicDictionary, moment(date).get('D'))
      : moment(date).get('D');

    const month = findWord(arabicDictionary, moment(date).format('MMMM'))
      ? findWord(arabicDictionary, moment(date).format('MMMM'))
      : moment(date).format('MMMM');

    const year = convertNumberToArabic(arabicDictionary, moment(date).year())
      ? convertNumberToArabic(arabicDictionary, moment(date).year())
      : moment(date).year();

    if (selectedDirection === 'right') {
      return `  ${year},${month} ${dayOfMonth}  `;
    } else {
      return ` ${dayOfMonth} ${month} ,${year} `;
    }
  };

  const formattedDate =
    dateToShow && isCalendarReady
      ? getDateStrings(dateToShow, dynamicDictionary, selectedDirection)
      : getDateStrings(moment().format(), dynamicDictionary, selectedDirection);
  return (
    <View style={[styles.component, props.style]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={()=>{
            if(selectedDirection === 'left')
            {
            clickLastWeekHandler()
            }else{
              clickNextWeekHandler()
            }
          }}>
          <VectorIcons
            name="chevron-thin-left"
            size={16}
            iconType={ICON_TYPES.Entypo}
          />
        </TouchableOpacity>
        {selectedDirection === 'left' ?(
          <TouchableOpacity
            onPress={() => setPickerVisible(true)}
            style={styles.titleContainer}>
            <Timetable />
            <Text style={[styles.title, props.titleStyle]}>
              {formattedDate}
            </Text>
        </TouchableOpacity>
        ):(
          <TouchableOpacity
          onPress={() => setPickerVisible(true)}
          style={styles.titleContainer}>
         
          <Text style={[styles.title, props.titleStyle]}>
            {formattedDate}
          </Text>
          <Timetable />
        </TouchableOpacity>
        )

        }
       
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={()=>{
            if(selectedDirection === 'left'){
              clickNextWeekHandler()
            }else{
              clickLastWeekHandler()
            }
          }}>
          <VectorIcons
            name="chevron-thin-right"
            size={16}
            iconType={ICON_TYPES.Entypo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.week}>
        {selectedDirection === 'left' ?(
  <View style={styles.weekdayLabelContainer}>
  <TouchableOpacity
    style={[
      styles.weekdayLabel,
      isCalendarReady && isSelectedDate(weekdays[0])
        ? styles.selectedWeekdayLabel
        : {}
    ]}
    onPress={onDayPress.bind(this, weekdays[0], 0)}>
    <Text
      style={[
        styles.weekdayLabelText,
        isCalendarReady && isSelectedDate(weekdays[0])
          ? styles.selectedDayText
          : {}
      ]}>
      {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[0].toString())? 
      findWord(dynamicDictionary,weekdayLabels[0].toString()):weekdayLabels[0].toString() : " " }
    </Text>
    <View style={styles.weekDayNumber}>
      <Text
        style={[
          isCalendarReady && isSelectedDate(weekdays[0])
            ? styles.selectedDayText
            : {}
        ]}>
       {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[0].date())? 
         convertNumberToArabic(dynamicDictionary,weekdays[0].date()):weekdays[0].date() : " "}
      </Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity
    style={[
      styles.weekdayLabel,
      isCalendarReady && isSelectedDate(weekdays[1])
        ? styles.selectedWeekdayLabel
        : {}
    ]}
    onPress={onDayPress.bind(this, weekdays[1], 1)}>
    <Text
      style={[
        styles.weekdayLabelText,
        isCalendarReady && isSelectedDate(weekdays[1])
          ? styles.selectedDayText
          : {}
      ]}>
      {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[1].toString())? 
      findWord(dynamicDictionary,weekdayLabels[1].toString()):weekdayLabels[1].toString() : " " }
    </Text>
    <View style={styles.weekDayNumber}>
      <Text
        style={[
          isCalendarReady && isSelectedDate(weekdays[1])
            ? styles.selectedDayText
            : {}
        ]}>
        {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[1].date())? 
         convertNumberToArabic(dynamicDictionary,weekdays[1].date()):weekdays[1].date() : " "}
      </Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity
    style={[
      styles.weekdayLabel,
      isCalendarReady && isSelectedDate(weekdays[2])
        ? styles.selectedWeekdayLabel
        : {}
    ]}
    onPress={onDayPress.bind(this, weekdays[2], 2)}>
    <Text
      style={[
        styles.weekdayLabelText,
        isCalendarReady && isSelectedDate(weekdays[2])
          ? styles.selectedDayText
          : {}
      ]}>
      {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[2].toString())? 
      findWord(dynamicDictionary,weekdayLabels[2].toString()):weekdayLabels[2].toString() : " " }
    </Text>
    <View style={styles.weekDayNumber}>
      <Text
        style={[
          isCalendarReady && isSelectedDate(weekdays[2])
            ? styles.selectedDayText
            : {}
        ]}>
        {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[2].date())? 
         convertNumberToArabic(dynamicDictionary,weekdays[2].date()):weekdays[2].date() : " "}
      </Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity
    style={[
      styles.weekdayLabel,
      isCalendarReady && isSelectedDate(weekdays[3])
        ? styles.selectedWeekdayLabel
        : {}
    ]}
    onPress={onDayPress.bind(this, weekdays[3], 3)}>
    <Text
      style={[
        styles.weekdayLabelText,
        isCalendarReady && isSelectedDate(weekdays[3])
          ? styles.selectedDayText
          : {}
      ]}>
      {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[3].toString())? 
      findWord(dynamicDictionary,weekdayLabels[3].toString()):weekdayLabels[3].toString() : " " }
    </Text>
    <View style={styles.weekDayNumber}>
      <Text
        style={[
          isCalendarReady && isSelectedDate(weekdays[3])
            ? styles.selectedDayText
            : {}
        ]}>
       {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[3].date())? 
         convertNumberToArabic(dynamicDictionary,weekdays[3].date()):weekdays[3].date() : " "}
      </Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity
    style={[
      styles.weekdayLabel,
      isCalendarReady && isSelectedDate(weekdays[4])
        ? styles.selectedWeekdayLabel
        : {}
    ]}
    onPress={onDayPress.bind(this, weekdays[4], 4)}>
    <Text
      style={[
        styles.weekdayLabelText,
        isCalendarReady && isSelectedDate(weekdays[4])
          ? styles.selectedDayText
          : {}
      ]}>
      {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[4].toString())? 
      findWord(dynamicDictionary,weekdayLabels[4].toString()):weekdayLabels[4].toString() : " " }
    </Text>
    <View style={styles.weekDayNumber}>
      <Text
        style={[
          isCalendarReady && isSelectedDate(weekdays[4])
            ? styles.selectedDayText
            : {}
        ]}>
        {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[4].date())? 
         convertNumberToArabic(dynamicDictionary,weekdays[4].date()):weekdays[4].date() : " "}
      </Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity
    style={[
      styles.weekdayLabel,
      isCalendarReady && isSelectedDate(weekdays[5])
        ? styles.selectedWeekdayLabel
        : {}
    ]}
    onPress={onDayPress.bind(this, weekdays[5], 5)}>
    <Text
      style={[
        styles.weekdayLabelText,
        isCalendarReady && isSelectedDate(weekdays[5])
          ? styles.selectedDayText
          : {}
      ]}>
      {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[5].toString())? 
      findWord(dynamicDictionary,weekdayLabels[5].toString()):weekdayLabels[5].toString() : " " }
    </Text>
    <View style={styles.weekDayNumber}>
      <Text
        style={[
          isCalendarReady && isSelectedDate(weekdays[5])
            ? styles.selectedDayText
            : {}
        ]}>
      {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[5].date())? 
         convertNumberToArabic(dynamicDictionary,weekdays[5].date()):weekdays[5].date() : " "} 
      </Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity
    style={[
      styles.weekdayLabel,
      isCalendarReady && isSelectedDate(weekdays[6])
        ? styles.selectedWeekdayLabel
        : {}
    ]}
    onPress={onDayPress.bind(this, weekdays[6], 6)}>
    <Text
      style={[
        styles.weekdayLabelText,
        isCalendarReady && isSelectedDate(weekdays[6])
          ? styles.selectedDayText
          : {}
      ]}>
      {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[6].toString())? 
      findWord(dynamicDictionary,weekdayLabels[6].toString()):weekdayLabels[6].toString() : " " }
    </Text>
    <View style={styles.weekDayNumber}>
      <Text
        style={[
          isCalendarReady && isSelectedDate(weekdays[6])
            ? styles.selectedDayText
            : {}
        ]}>
        {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[6].date())? 
         convertNumberToArabic(dynamicDictionary,weekdays[6].date()):weekdays[6].date() : " "}
      </Text>
    </View>
  </TouchableOpacity>
</View>
        ):(
          <View style={styles.weekdayLabelContainer}>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[6])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[6], 6)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[6])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[6].toString())? 
              findWord(dynamicDictionary,weekdayLabels[6].toString()):weekdayLabels[6].toString() : " " }
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[6])
                    ? styles.selectedDayText
                    : {}
                ]}>
               {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[6].date())? 
                 convertNumberToArabic(dynamicDictionary,weekdays[6].date()):weekdays[6].date() : " "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[5])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[5], 5)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[5])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[5].toString())? 
              findWord(dynamicDictionary,weekdayLabels[5].toString()):weekdayLabels[5].toString() : " " }
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[5])
                    ? styles.selectedDayText
                    : {}
                ]}>
                {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[5].date())? 
                 convertNumberToArabic(dynamicDictionary,weekdays[5].date()):weekdays[5].date() : " "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[4])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[4], 4)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[4])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[4].toString())? 
              findWord(dynamicDictionary,weekdayLabels[4].toString()):weekdayLabels[4].toString() : " " }
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[4])
                    ? styles.selectedDayText
                    : {}
                ]}>
                {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[4].date())? 
                 convertNumberToArabic(dynamicDictionary,weekdays[4].date()):weekdays[4].date() : " "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[3])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[3], 3)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[3])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[3].toString())? 
              findWord(dynamicDictionary,weekdayLabels[3].toString()):weekdayLabels[3].toString() : " " }
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[3])
                    ? styles.selectedDayText
                    : {}
                ]}>
               {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[3].date())? 
                 convertNumberToArabic(dynamicDictionary,weekdays[3].date()):weekdays[3].date() : " "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[2])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[2], 2)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[2])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[2].toString())? 
              findWord(dynamicDictionary,weekdayLabels[2].toString()):weekdayLabels[2].toString() : " " }
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[2])
                    ? styles.selectedDayText
                    : {}
                ]}>
                {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[2].date())? 
                 convertNumberToArabic(dynamicDictionary,weekdays[2].date()):weekdays[2].date() : " "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[1])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[1], 1)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[1])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[1].toString())? 
              findWord(dynamicDictionary,weekdayLabels[1].toString()):weekdayLabels[1].toString() : " " }
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[1])
                    ? styles.selectedDayText
                    : {}
                ]}>
              {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[1].date())? 
                 convertNumberToArabic(dynamicDictionary,weekdays[1].date()):weekdays[1].date() : " "} 
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[0])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[0], 0)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[0])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? findWord(dynamicDictionary,weekdayLabels[6].toString())? 
              findWord(dynamicDictionary,weekdayLabels[0].toString()):weekdayLabels[0].toString() : " " }
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[0])
                    ? styles.selectedDayText
                    : {}
                ]}>
                {isCalendarReady ? convertNumberToArabic(dynamicDictionary,weekdays[0].date())? 
                 convertNumberToArabic(dynamicDictionary,weekdays[0].date()):weekdays[0].date() : " "}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        )

        }
      
      </View>
      {Platform.OS === 'ios' && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={isPickerVisible}
          onRequestClose={() => setPickerVisible(false)} // for android only
          style={styles.modal}>
          <TouchableWithoutFeedback onPress={() => setPickerVisible(false)}>
            <View style={styles.blurredArea} />
          </TouchableWithoutFeedback>
          <View style={styles.pickerButtons}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setPickerVisible(false)}>
              <Text style={styles.modalButtonText}>{cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={confirmPickerHandler.bind(this, pickerDate)}>
              <Text style={styles.modalButtonText}>{confirmText}</Text>
            </TouchableOpacity>
          </View>
          <DateTimePicker
            locale={props.locale}
            value={pickerDate.toDate()}
            onChange={pickerOnChange}
            style={styles.picker}
          />
        </Modal>
      )}
      {Platform.OS === 'android' && isPickerVisible && (
        <DateTimePicker
          locale={props.locale}
          value={pickerDate.toDate()}
          onChange={pickerOnChange}
        />
      )}
      {(!isCalendarReady || isLoading) && (
        <ActivityIndicator size="large" color="grey" style={styles.indicator} />
      )}
    </View>
  );
};

WeeklyCalendar.propTypes = {
  /** initially selected day */
  selected: PropTypes.any,
  /** If firstDay = 1, week starts from Monday. If firstDay = 7, week starts from Sunday. */
  startWeekday: PropTypes.number,
  /** Set format to display title (e.g. titleFormat='MMM YYYY' displays "Jan 2020") */
  titleFormat: PropTypes.string,
  /** Set format to display weekdays (e.g. weekdayFormat='dd' displays "Mo" and weekdayFormat='ddd' displays "Mon") */
  weekdayFormat: PropTypes.string,
  /** Set locale (e.g. Korean='ko', English='en', Chinese(Mandarin)='zh-cn', etc.) */
  locale: PropTypes.string,
  /** Set list of events you want to display below weekly calendar.
   * Default is empty array []. */
  events: PropTypes.array,
  /** Specify how each event should be rendered below weekly calendar. Event & index are given as parameters. */
  renderEvent: PropTypes.func,
  /** Specify how first event should be rendered below weekly calendar. Event & index are given as parameters. */
  renderFirstEvent: PropTypes.func,
  /** Specify how last event should be rendered below weekly calendar. Event & index are given as parameters. */
  renderLastEvent: PropTypes.func,
  /** Specify how day should be rendered below weekly calendar. Event Views, day (Moment object), index are given as parameters. */
  renderDay: PropTypes.func,
  /** Specify how first day should be rendered below weekly calendar. Event Views, day (Moment object), index are given as parameters. */
  renderFirstDay: PropTypes.func,
  /** Specify how last day should be rendered below weekly calendar. Event Views, day (Moment object), index are given as parameters. */
  renderLastDay: PropTypes.func,
  /** Handler which gets executed on day press. Default = undefined */
  onDayPress: PropTypes.func,
  /** Set theme color */
  themeColor: PropTypes.string,
  /** Set style of component */
  style: PropTypes.any,
  /** Set text style of calendar title */
  titleStyle: PropTypes.any,
  /** Set text style of weekday labels */
  dayLabelStyle: PropTypes.any,
  /** Action on day pressed */
  onDaySelected: PropTypes.any,
  /** Action if date selected */
  setDateSelection: PropTypes.any,
  /** Action if week changed */
  onWeekChanged: PropTypes.any,
  /** Clear date */
  clearDate: PropTypes.bool
};

WeeklyCalendar.defaultProps = {
  // All props are optional
  selected: moment(),
  startWeekday: 7,
  titleFormat: undefined,
  weekdayFormat: 'ddd',
  locale: 'en',
  events: [],
  renderEvent: undefined,
  renderFirstEvent: undefined,
  renderLastEvent: undefined,
  renderDay: undefined,
  renderFirstDay: undefined,
  renderLastDay: undefined,
  onDayPress: undefined,
  onDaySelected: undefined,
  setDateSelection: undefined,
  themeColor: '#46c3ad',
  style: {},
  titleStyle: {},
  dayLabelStyle: {}
};

export default WeeklyCalendar;
