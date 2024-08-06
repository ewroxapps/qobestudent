import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Vimeo } from 'react-native-vimeo-iframe';
import YoutubePlayer from 'react-native-youtube-iframe';
import { GenericMessage, Screen, Spinner } from '../../Components';
import { parseVimeoUrl, parseYoutubeUrl } from '../../Utils/ParsingUtils';

const VideoPlayer = () => {
  const { t: errorsTranslations } = useTranslation('errors');
  const { params } = useRoute();

  const navigation = useNavigation();
  const [playing, setPlaying] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [youtubeVideoId, setYoutubeVideoId] = useState(
    parseYoutubeUrl(params?.videoItem?.video)
  );
  const [vimeoVideoId, setVimeoVideoId] = useState(
    parseVimeoUrl(params?.videoItem?.video)
  );

  useEffect(() => {
    if (!youtubeVideoId && !vimeoVideoId) {
      setIsError(true);
    }
  }, [youtubeVideoId]);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Video Player'
    });
  }, []);

  const renderYoutubeVideo = () => {
    return (
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={youtubeVideoId}
        onChangeState={onStateChange}
        onReady={() => setShowLoading(false)}
        onError={() => setShowLoading(false)}
      />
    );
  };

  const renderVimeoVideo = () => {
    return <Vimeo videoId={vimeoVideoId} params={'api=1&autoplay=0'} />;
  };
  if (isError) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  return (
    <Screen>
      {showLoading && <Spinner />}
      {youtubeVideoId && renderYoutubeVideo()}
      {vimeoVideoId && renderVimeoVideo()}
    </Screen>
  );
};

export default VideoPlayer;
