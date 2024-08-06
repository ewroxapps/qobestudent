import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl } from 'react-native';
import { GenericMessage, Screen, Spinner } from '../../Components';
import { useClassForumQuery } from '../../RTK/Api/CourseApi';
import {
  DiscussionEmpty,
  DiscussionForumDetails,
  StartDiscussionView
} from './components';
import styles from './styles';

const Forum = (props: any) => {
  const courseName: string = props.route.params.name;
  const courseID: number = props.route.params.id;
  const navigation = useNavigation<ICoursesNavigationProp>();
  const [clicked, setClicked] = React.useState(false);
  const { data, refetch, isFetching, isLoading, isError, isSuccess } =
    useClassForumQuery({ id: courseID || 0 });
  const { t: errorsTranslations } = useTranslation('errors');
  useEffect(() => {
    refetch();

    
  }, [courseName]);

  if (clicked) {
    refetch();
    refetch()
    setClicked(false);
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
  if (isSuccess && data.length === 0) {
    return (
      <DiscussionEmpty
        totalDiscussion={data.length}
        classID={courseID}
        click={clicked}
        setClick={setClicked}
      />
    );
  }
  return (
    <Screen>
      <StartDiscussionView
        totalDiscussion={data.length}
        classID={courseID}
        click={clicked}
        setClick={setClicked}
      />
      <FlatList
        data={data}
        style={styles.container}
        refreshing={isFetching}
        extraData={clicked}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        renderItem={({ item }) => (
          <DiscussionForumDetails
            posted_by={item.posted_by}
            posted_when={item.posted_when}
            id={item.id}
            posted_dp={item.posted_dp}
            allow_update={item.allow_update}
            allow_comment={item.allow_comment}
            title={item.title}
            detail={item.detail}
            img={item.img}
            comments={item.comments}
            classID={courseID}
            courseName={courseName}
            click={clicked}
            setClick={setClicked}
          />
        )}
      />
    </Screen>
  );
};

export default Forum;
