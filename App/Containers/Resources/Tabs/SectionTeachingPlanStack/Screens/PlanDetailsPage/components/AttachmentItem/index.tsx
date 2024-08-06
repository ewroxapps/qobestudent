import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Vimeo } from 'react-native-vimeo-iframe';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Download, Eye } from '../../../../../../../../Assets/SVGs';
import WhiteCross from '../../../../../../../../Assets/SVGs/WhiteCross';
import { BASE_URL } from '../../../../../../../../Config/Api';
import { useLanguage } from '../../../../../../../../Types/LanguageContext';
import { downloadFile } from '../../../../../../../../Utils/DownloadUtils';
import {
  findWord,
  parseVimeoUrl,
  parseYoutubeUrl
} from '../../../../../../../../Utils/ParsingUtils';
import styles from './styles';
import { AttachmentItemProps } from './types';
const AttachmentItem = (props: AttachmentItemProps) => {
  const { t } = useTranslation('resources');
  const { resource } = props;
  const { dynamicDictionary, selectedDirection } = useLanguage();
  const [vimeoVideoId, setVimeoVideoId] = useState(
    parseVimeoUrl(resource.path)
  );
  const [playing, setPlaying] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [youtubeVideoId, setYoutubeVideoId] = useState(
    parseYoutubeUrl(resource.path)
  );
  const [isVideoVisible, setVideoVisible] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);
  const download = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (resource.type != 'V') {
            downloadFile(`${BASE_URL}${resource?.path}`, resource?.filename);
          } else {
            setVideoVisible(true);
          }
        }}
        hitSlop={styles.hitSlop}>
        {resource.type != 'V' ? <Download /> : <Eye />}
      </TouchableOpacity>
    );
  };

  const showVideo = () => {
    return (
      <Modal isVisible={isVideoVisible} backdropOpacity={0.6}>
        <View style={{ flex: 1, backgroundColor: '#0000' }}>
          <TouchableOpacity
            onPress={() => {
              setVideoVisible(false);
            }}>
            <WhiteCross />
          </TouchableOpacity>
          <Vimeo
            style={{ backgroundColor: '#0000' }}
            videoId={vimeoVideoId}
            params={'api=1&autoplay=0'}
          />
        </View>
      </Modal>
    );
  };

  const showVideoYoutube = () => {
    return (
      <Modal isVisible={isVideoVisible} backdropOpacity={0.6}>
        <View style={{ flex: 1, backgroundColor: '#0000' }}>
          <TouchableOpacity
            onPress={() => {
              setVideoVisible(false);
            }}>
            <WhiteCross />
          </TouchableOpacity>
          <YoutubePlayer
            height={300}
            play={playing}
            videoId={youtubeVideoId}
            onChangeState={onStateChange}
            onReady={() => setShowLoading(false)}
            onError={() => setShowLoading(false)}
          />
        </View>
      </Modal>
    );
  };
  return (
    <View style={styles.container}>
      {isVideoVisible ? (
        <View>
          {resource.path.includes('vimeo.com') ? (
            <View>{showVideo()}</View>
          ) : (
            <View>{showVideoYoutube()}</View>
          )}
        </View>
      ) : null}
      {selectedDirection != 'left' ? <View>{download()}</View> : null}

      <View style={styles.leftContainer}>
        <Text
          style={[
            styles.heading,
            selectedDirection === 'left' ? {} : { alignSelf: 'flex-end' }
          ]}>
          {resource?.filename != undefined
            ? resource.filename
            : findWord(dynamicDictionary, 'N/A')
            ? findWord(dynamicDictionary, 'N/A')
            : 'N/A'}
        </Text>
        <Text style={styles.dateText}>
          {findWord(dynamicDictionary, 'Created on')
            ? findWord(dynamicDictionary, 'Created on')
            : 'Created on'}
          :{' '}
          {resource?.cdate != undefined
            ? resource.cdate
            : findWord(dynamicDictionary, 'N/A')
            ? findWord(dynamicDictionary, 'N/A')
            : 'N/A'}
        </Text>
        <Text style={styles.description}>
          {findWord(dynamicDictionary, 'Description')
            ? findWord(dynamicDictionary, 'Description')
            : 'Description'}
          : {resource?.description ?? '-'}
        </Text>
      </View>
      {selectedDirection === 'left' ? <View>{download()}</View> : null}
    </View>
  );
};

export default AttachmentItem;
