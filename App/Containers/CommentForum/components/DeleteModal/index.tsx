import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { useClassForumsQuery, useDeleteCommentForumMutation } from '../../../../RTK/Api/CourseApi';
import style from './style';
import { DeleteProps } from './type';

const DeleteModal = (props: DeleteProps) => {
    const { modalVisible = false, setModalVisible, id,reload,setReload,ids } = props;
    const [deleteCommentForum, { isLoading, isSuccess, isError }] = useDeleteCommentForumMutation();
    const { data, refetch, isFetching } = useClassForumsQuery({ id: ids || 0 });
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
                     deleteCommentForum({id:id})
                       refetch()
                        setModalVisible(false)
                        setReload(true)
                }}>
                    <View style={style.deleteContainer}>
                        <Text style={style.deleteText}>Delete</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setModalVisible(false)
                }}>
                    <View style={style.cancelContainer}>
                        <Text style={style.cancelText}>Cancel</Text>
                    </View>
                </TouchableOpacity>

            </View>





        </Modal>
    );
};
export default DeleteModal;
