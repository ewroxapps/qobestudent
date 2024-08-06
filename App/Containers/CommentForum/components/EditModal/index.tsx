import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import { useUpdateCommentForumMutation } from '../../../../RTK/Api/CourseApi';
import { Colors } from '../../../../Themes';
import style from './styles';
import { DeleteProps } from './type';

const EditModal = (props: DeleteProps) => {
    const { modalVisible = false, setModalVisible, id,reload,setReload,message,ids } = props;
    const [update, { isLoading, isSuccess, isError }] = useUpdateCommentForumMutation();
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(message)
      }, [message]);
    return (
        <Modal
            isVisible={modalVisible}
            hasBackdrop={true}
            backdropOpacity={0.7}
            onBackButtonPress={() => {
                setModalVisible(false)

            }}>
            <View style={style.container}>

            <TouchableOpacity onPress={() => {
                   setModalVisible(false)
           }}>
               <View style={style.closeContainer}>
                   <CloseCircle/>
               </View>
           </TouchableOpacity>

           <View style={style.titleView}>
                    <Text style={style.titleText}>Update Your Comment</Text>
                    <View style={{ backgroundColor: Colors.backgroundGrey, borderRadius: 10 }}>
                        <TextInput
                            style={style.titletextInput}
                            multiline
                            value={title}
                            placeholder={'Update...'}
                            onChangeText={value => setTitle(value)} />
                    </View>
                </View>


                <TouchableOpacity onPress={() => {
                        update({id:id,comment:title})
                        setModalVisible(false)
                        setReload(true)
                }}>
                    <View style={style.deleteContainer}>
                        <Text style={style.deleteText}>Save</Text>
                    </View>
                </TouchableOpacity>

               

            </View>





        </Modal>
    );
};
export default EditModal;
