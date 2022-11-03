import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import TimelineBottomSheet from '../TimelineBottomSheet';

const CustomTimelineSheet = React.forwardRef(({message},ref) => {
    return (
      <RBSheet
        ref={ref}
        height={200}
        openDuration={250}
        closeOnDragDown
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            // justifyContent: 'center',
            // alignItems: 'center',
          },
        }}>
        {message}
        {/* <TimelineBottomSheet /> */}
      </RBSheet>
    );
  },
);

export default CustomTimelineSheet;
