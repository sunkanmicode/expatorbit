import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles"

const CustomBottomSheet = React.forwardRef(
  (
    {
      setModelVisible,
      setModelVisible2,
      setModelVisible3,
      show2,
      setShow2,
    },
    ref,
  ) => {
    const [categoriesIndex, setCategoriesIndex] = React.useState(2);

    const options = [
      {
        name: 'Report',
        onPress: () => {
          setShow2(!show2);
        },
      },
      {
        name: 'Remove connection',
        onPress: () => {
          setModelVisible(true);
          setModelVisible2(true);
        },
      },
      {
        name: 'Block',
        onPress: () => {
          setModelVisible(true);
          setModelVisible3(true);
        },
      },
    ];

    const reportList = [
      {
        name: "It's posting content that shouldn't be on the app",
        onPress: () => {},
      },
      {
        name: "It's pretenting to be someone else",
        onPress: () => {},
      },
      {
        name: 'Hate Speech or symbols',
        onPress: () => {},
      },
    ];

    return (
      <RBSheet
        ref={ref}
        height={150}
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
        

        {!show2 ? (
          <View style={styles.optionsWrapper}>
            {options.map((list, index) => (
              <>
                <TouchableOpacity
                  key={list.name}
                  style={styles.pickerOption}
                  onPress={list.onPress}>
                  <Text
                    style={[
                      styles.text,
                      categoriesIndex === index && styles.selected,
                    ]}>
                    {list.name}
                  </Text>
                </TouchableOpacity>
              </>
            ))}
          </View>
        ) : (
          <View>
            <Text style={{color: '#333', textAlign: 'center'}}>
              Why are you reporting this account?
            </Text>
            <View style={styles.optionsWrapper}>
              {reportList.map((item, index) => (
                <TouchableOpacity
                  key={item.name}
                  style={styles.pickerOption}
                  onPress={item.onPress}>
                  <Text
                    style={[
                      styles.text,
                      // categoriesIndex === index && styles.selected,
                    ]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </RBSheet>
    );
  },
);
 

export default CustomBottomSheet
