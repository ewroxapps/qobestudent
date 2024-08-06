import React from 'react';
import { ScrollView } from 'react-native';
import { ComplainerDetail, ComplaintDetail, Header, Media, Participants } from './components';
import styles from './styles';

const ComplaintUserDetail = (props: any) => {
  const Data: IComplaintResponse = props.route.params.data;

  const usersAndDps = Data.chat.map(chatItem => ({
    user: chatItem.user,
    dp: chatItem.dp
  }));

  const media = Data.chat
    .map(chatItem => chatItem.attachment)
    .filter(attachment => typeof attachment === 'string');

  return (
    <ScrollView style={styles.contaner}>
      <Header data={Data} />
      <ComplainerDetail/>
      {media.length > 0 ? <Media data={Data} /> : null}
      <ComplaintDetail data={Data.complaint}/>
      {usersAndDps.length>0 ? <Participants data={Data}/> :null}

     
    </ScrollView>
  );
};

export default ComplaintUserDetail;
