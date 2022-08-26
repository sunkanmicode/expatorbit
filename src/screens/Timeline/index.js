import { useRoute } from '@react-navigation/native'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import TimelineComponent from '../../conponent/TimelineComponent'
import getAllTimeLine from '../../context/actions/expatsActions/getAllTimeLine'
import { GlobalContext } from '../../context/Provider'

const Timeline = () => {
  const {
    expatsDispatch,
    expatsState: {
      getUser_Id,
      getTimeline: {data, loading},
    },
  } = useContext(GlobalContext);

  console.log(data?.length, 'timeline Length')

   

  useEffect(() => {
    // getProfileDatails(getUser_Id);
    getAllTimeLine(getUser_Id)(expatsDispatch);
  }, [getUser_Id]);

  return <TimelineComponent data={data} loading={loading} />;
}

export default Timeline
