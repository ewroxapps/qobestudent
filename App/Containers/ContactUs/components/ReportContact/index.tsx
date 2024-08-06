import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Screen } from '../../../../Components';
import styles from './styles';
const ReportContact = (props: any) => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [number, setnumber] = useState('');
    const [university, setUniversity] = useState('');
    const [department, setDepartment] = useState('');
    const [subject, setSubject] = useState('');
    const [detail, setDetail] = useState('');
    const [error, seterror] = useState('');
    const [errormsg, seterrormsg] = useState('');
    const navigation = useNavigation();

    function checkAl(){
        seterror('')
        if(name.length === 0 && email.length === 0 && number.length === 0 &&
            university.length === 0 && department.length === 0 && subject.length === 0 &&
            detail.length === 0 ){
                seterror("all")
                seterrormsg("This feild cannot be empty")
                return false
            }
            else{
                return true
            }
    }

    const handleValidEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
         if (reg.test(email) === false) {
          return false
        } else if (reg.test(email) === true) {
          return true
        }
        };

        const handleValidNumber = () =>{
            let reg = /((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/
            if (reg.test(number) === false) {
                return false
              } else if (reg.test(number) === true) {
                return true
              }
        }
        

    function submitReport() {
        seterror('')
       if (name.length > 0) {
            if (email.length > 0) {
                if(handleValidEmail()===true){
                    if (number.length > 0 ) {
                           if(handleValidNumber() === true){
                            if (university.length > 0) {
                                if (department.length > 0) {
                                    if (subject.length > 0) {
                                        if (detail.length > 0) {
                                            console.debug("YOO")
                                        }else{
                                            seterror("detail")
                                            seterrormsg("Please enter detail")
                                        }
                                    }else{
                                        seterror("subject")
                                        seterrormsg("Please enter your subject")
                                    }
                                }else{
                                    seterror("department")
                                    seterrormsg("Please enter your department")
                                }
                            }else{
                                seterror("university")
                                seterrormsg("Please enter your university")
                            }
                           }else{
                            seterror("number")
                            seterrormsg("Format: 923XXXXXXXXX and Enter 12 digit number")
                           }
                        
                    }else{
                        seterror("number")
                        seterrormsg("Please enter your number")
                    }
                }else{
                    seterror("email")
                seterrormsg("Please enter correct email")
                }        
            } else{
                seterror("email")
                seterrormsg("Please enter your email")
            }
        } else {
            seterror("name")
            seterrormsg("Please enter your name")
        }
    }
  
    return (
        <Screen >
            <ScrollView>
                <View style={styles.container} >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.texts}>Name</Text>
                        { error.includes('all')  && (
                            <Text style={styles.errorText}> {errormsg}</Text>
                        )}
                        {error.includes('name') && (
                            <Text style={styles.errorText}> {errormsg}</Text>
                        )}
                    </View>
                    <TextInput
                        value={name}
                        multiline={true}
                        placeholder="Enter your name..."
                        style={styles.inputText}
                        maxLength={200}
                        placeholderTextColor="#878787"
                        onChangeText={value => {
                            setname(value)
                        }}
                    />
                </View>

                <View style={styles.container} >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.texts}>Email</Text>
                        { error.includes('all') && (
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                         {error.includes('email') && (
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                    </View>
                    <TextInput
                        value={email}
                        multiline={true}
                        placeholder="Enter your email..."
                        style={styles.inputText}
                        maxLength={200}
                        placeholderTextColor="#878787"
                        onChangeText={value => {
                            setemail(value)
                        }}
                    />
                </View>

                <View style={styles.container} >
                    
                        <Text style={styles.texts}>Contact No. /WhatsApp Number</Text>
                        { error.includes('all') &&(
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                        {error.includes('number')  &&(
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                 

                    <TextInput
                        keyboardType='numeric'
                        value={number}
                        multiline={true}
                        placeholder="Enter your number..."
                        style={styles.inputText}
                        maxLength={200}
                        placeholderTextColor="#878787"
                        onChangeText={value => {
                            setnumber(value)
                        }}

                    />
                </View>

                <View style={styles.container} >

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.texts}>University/Organization</Text>
                        { error.includes('all') && (
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                        {error.includes('university') && (
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                    </View>
                    <TextInput
                        value={university}
                        multiline={true}
                        placeholder="Enter your university/organization..."
                        style={styles.inputText}
                        maxLength={200}
                        placeholderTextColor="#878787"
                        onChangeText={value => {
                            setUniversity(value)
                        }}
                    />
                </View>

                <View style={styles.container} >
                <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.texts}>Department</Text>
                        { error.includes('all') && (
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                        {error.includes('department')  && (
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                    </View>
                    <TextInput
                        value={department}
                        multiline={true}
                        placeholder="Enter your department..."
                        style={styles.inputText}
                        maxLength={200}
                        placeholderTextColor="#878787"
                        onChangeText={value => {
                            setDepartment(value)
                        }}
                    />
                </View>

                <View style={styles.container} >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.texts}>Subject</Text>
                        { error.includes('all') && (
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                          {error.includes('subject')  && (
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                    </View>
                    <TextInput
                        value={subject}
                        multiline={true}
                        placeholder="Enter your subject..."
                        style={styles.inputText}
                        maxLength={200}
                        placeholderTextColor="#878787"
                        onChangeText={value => {
                            setSubject(value)
                        }}
                    />
                </View>

                <View style={styles.containerd} >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.texts}>Detail</Text>
                        {error.includes('all') &&(
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                         {error.includes('detail')  &&(
                            <Text style={styles.errorText}>{errormsg}</Text>
                        )}
                    </View>
                    <TextInput
                        value={detail}
                        multiline={true}
                        placeholder="Enter detail..."
                        style={styles.inputTextd}
                        maxLength={200}
                        placeholderTextColor="#878787"
                        onChangeText={value => {
                            setDetail(value)
                        }}
                    />
                </View>
                <TouchableOpacity onPress={() => {
                    if(checkAl() === true){
                        submitReport()
                    }
                }}>
                    <View style={styles.buttonSubmit}>
                        <Text style={styles.textSubmit}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </Screen>
    );
};

export default ReportContact;
