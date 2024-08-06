import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, View } from 'react-native';
import { GenericMessage, Spinner } from '../../Components';
import { useClassForumsQuery } from '../../RTK/Api/CourseApi';
import { Comments, MyHeader, NoCommentsView } from './components';
import LeaveComment from './components/LeaveComment';
import style from './style';
const CommentForum = (props: any) => {
  // @ts-ignore
  let courseName: string = props.route.params.courseName;
  // @ts-ignore
  let courseID: number = props.route.params.id;
  const navigation = useNavigation<ICoursesNavigationProp>();
  const { data, refetch, isFetching, isLoading, isError, isSuccess } =
    useClassForumsQuery({ id: courseID || 0 });
  const { t: errorsTranslations } = useTranslation('errors');
  const [reload, setReload] = useState(true);

  
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => (
        <MyHeader
          dp={data.posted_dp}
          name={data.posted_by}
          date={data.posted_when}
          from={'Main'}
          title={data.title}
          detail={data.detail}
        />
      )
    });
  };
  useEffect(() => {
    if (isSuccess) {
      changeHeaderTitle();
   
    }
    refetch();
  }, [courseName,isSuccess]);



  if (reload) {
    refetch();
    setReload(false);
  }
  const onRefresh = () => {
    refetch();
  };

  if (isFetching || isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return (
      <GenericMessage
        title={'Something went wrong'}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  return (
      <View style={style.tryme}>
      <FlatList
        style={{ marginBottom: 10 }}
        data={data.comments}
        refreshing={isFetching}
        extraData={reload}
        inverted={data.comments.length > 3}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <Comments
            data={item}
            commentID={courseID}
            reload={reload}
            setReload={setReload}
          />
        )}
        ListEmptyComponent={
          <NoCommentsView
            name={data.posted_by}
            date={data.posted_when}
            title={data.title}
            detail={data.detail}
            dp={data.posted_dp}
            courseID={courseID}
          />
        }
      />

      <LeaveComment
        courseID={courseID}
        heading={'Leave a comment'}
        reload={reload}
        setReload={setReload}
      />
    </View>
  );
};

export default CommentForum;
