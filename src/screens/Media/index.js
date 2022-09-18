import { useRoute } from '@react-navigation/native'
import React, { useContext } from 'react'
import MediaComponent from '../../conponent/MediaComponent'
import getAllPhotos from '../../context/actions/expatsActions/getAllPhotos'
import getMediaVideo from '../../context/actions/expatsActions/getMediaVideo'
import { GlobalContext } from '../../context/Provider'

const Media = () => {
  const {
    expatsDispatch,
    expatsState: {
      getPhotos: {photoData, photoLoading, photoError},
      getVideos: {videoData, videoLoading, videoError},
    },
  } = useContext(GlobalContext);

   console.log({videoData}, 'media');

  React.useEffect(() => {
    getAllPhotos()(expatsDispatch);
    getMediaVideo()(expatsDispatch);
  }, [expatsDispatch]);

  const getAllPictures = () => {
    getAllPhotos()(expatsDispatch);
  };
  const getAllVideos = () => {
    getMediaVideo()(expatsDispatch);
  };

  return (
    <MediaComponent
      photoData={photoData}
      photoLoading={photoLoading}
      photoError={photoError}
      getAllPictures={getAllPictures}
      videoData={videoData}
      videoLoading={videoLoading}
      videoError={videoError}
      getAllVideos={getAllVideos}
    />
  );
}

export default Media
