import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { PROFILE } from '../../constants/routeNames';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Icon from '../CustomIcon';
import ViewMemberProfile from '../../screens/ViewMemberProfile';


const IMAGEDEFAULT =
  'https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png';

const MembersComponent  = ({isLoading, getMembers ,navigation, route, }) => {
  const {navigate} = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesIndex, setCategoriesIndex] = useState(0);

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = ['20%'];

  // callbacks
  const handleSheetChanges = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
    // console.log("handleSheetChanges", index);
  }, []);


  //categories
    const categories = [
      {
        name: (
          <Icon
            type="Ionicons"
            name="md-filter-outline"
            color="#333"
            size={15}
          />
        ),
        onPress: () => {},
      },
      {name: 'All Members', onPress: () => {}},
      {name: 'Connections', onPress: () => {}},
      {name: 'New members', onPress: () => {}},
      {name: 'EO Team', onPress: () => {}},
    ];

      const CategoryList = () => {
        return (
          <View style={styles.categoryContainer}>
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}>
                <Text
                  style={[
                    styles.categoryTest,
                    // categoriesIndex === index && styles.categoryTestSelected,
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      };

      

  

  // const renderItem = ({item}) => {
  //   return (
  //     <TouchableOpacity onPress={()=>{
  //       navigate(PROFILE, {item});
  //     }}>
  //       <View style={styles.groupsGridBox}>
  //         <Image
  //           resizeMode="stretch"
  //           source={{uri: item?.avatar_urls?.thumb}}
  //           style={styles.logoImage2}
  //         />
  //         <View style={styles.subGroupView}>
  //           <Text style={styles.subGroupTextTile}>{item?.name}</Text>

  //           <Text style={styles.subGroupText}>
  //             {item?.is_wp_admin ? 'Admin' : 'Member'}
  //           </Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // }

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <Icon
              type="MaterialIcons"
              size={20}
              name="arrow-back-ios"
              color="#333"
            />
            <Text style={{color: '#333', fontSize: 20}}>Members</Text>
          </View>
          <Icon type="MaterialIcons" size={20} name="search" color="#333" />
        </View>
        <View>
          <CategoryList />
        </View>
        <View style={{paddingVertical: 20}}>
          <Text style={{color: '#333'}}>My Connections</Text>
        </View>

        <View style={{padding: 0}}>
          {/* <View style={{paddingVertical: 100, paddingHorizontal: 100}}> */}
          {isLoading && <ActivityIndicator size="large" />}
          {/* </View> */}
          {!isLoading &&
            getMembers.map(item => (
              <>
                <View style={styles.listCoontainer}>
                  <TouchableOpacity
                    key={item.id}
                    style={styles.listTitle}
                    onPress={() => {
                      navigate(ViewMemberProfile, {item});
                    }}>
                    <Image
                      source={{uri: item?.avatar_urls?.full || IMAGEDEFAULT}}
                      style={styles.profileImg}
                    />
                    <View style={{marginHorizontal: 10}}>
                      <Text style={{color: '#333'}}>{item.name}</Text>
                      <Text style={{color: '#333', fontSize: 10}}>
                        {item.link}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.iconWrapper}
                    onPress={() => {
                      handleSheetChanges(0);
                    }}>
                    <Icon
                      type="Feather"
                      name="more-horizontal"
                      color="#fff"
                      size={15}
                    />
                  </TouchableOpacity>
                </View>
              </>
            ))}
        </View>
      </ScrollView>
      {isOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}>
          <BottomSheetView>
            <Text style={{color: '#333'}}>Hello wolrd</Text>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default MembersComponent;



