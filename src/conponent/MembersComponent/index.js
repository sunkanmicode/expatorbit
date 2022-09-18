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
import { PROFILE, VIEWMEMBER } from '../../constants/routeNames';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Icon from '../CustomIcon';
import ViewMember from '../../screens/ViewMember';
import MemberBottomSheet from '../bottomSheetContainer/MemberBottomSheet'
import ViewMemberInfo from '../../screens/ViewMeberInfo';
import getAllMembers from '../../context/actions/expatsActions/getAllMembers';
import memberInfoData from '../../context/actions/expatsActions/memberInfoData';
import colors from '../../assets/themes/colors';
// import MemberBottomSheet from '../bottomSheetContainer/memberBottomSheet';


const IMAGEDEFAULT =
  'https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png';

const MembersComponent = ({
  isLoading,
  getMembers,
  navigation,
  route,
  // byPersonal,
  getSingleMember,
  handFilter,
}) => {
  const {navigate} = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesIndex, setCategoriesIndex] = useState(0);

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = ['30%'];

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
        <Icon type="Ionicons" name="md-filter-outline" color="#333" size={15} />
      ),
      onPress: () => {},
    },
    {name: 'All Members', onPress: () => {}},
    {
      name: 'Connections',
      onPress: () => {
        handFilter();
        // setCategoriesIndex()
      },
    },
    {name: 'New members', onPress: () => {}},
    {name: 'EO Team', onPress: () => {}},
  ];

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} onPress={()=>{setCategoriesIndex(index), item.onPress}}>
            <Text
              style={[
                styles.categoryTest,
                categoriesIndex === index && styles.categoryTestSelected,
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
      <View
        style={[
          styles.wrapper,
          {backgroundColor: isOpen ? colors.grey : colors.white},
        ]}>
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <Icon
              type="MaterialIcons"
              size={20}
              name="arrow-back-ios"
              color="#333"
            />
            <Text
              style={{
                color: '#333',
                fontSize: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              Members
            </Text>
          </View>
          <Icon type="MaterialIcons" size={20} name="search" color="#333" />
        </View>
        <View>
          <CategoryList />
        </View>
        <View style={{paddingVertical: 20}}>
          <Text style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
            My Connections
          </Text>
        </View>

        <View style={{padding: 0}}>
          {isLoading && (
            <ActivityIndicator
              size="large"
              style={{paddingVertical: 100, paddingHorizontal: 100}}
            />
          )}
          {!isLoading &&
            getMembers.map(item => (
              <ScrollView>
                <View style={styles.listCoontainer} key={item.id}>
                  <TouchableOpacity
                    style={styles.listTitle}
                    onPress={() => {
                      navigate('ViewMember', {item});
                    }}>
                    <Image
                      source={{uri: item?.avatar_urls?.full || IMAGEDEFAULT}}
                      style={styles.profileImg}
                    />
                    <View style={{marginHorizontal: 10}}>
                      <Text
                        style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: '#333',
                          fontSize: 10,
                          fontFamily: 'Poppins-Regular',
                        }}>
                        {item.link}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.iconWrapper}
                    onPress={() => {
                      // navigate(ViewMemberInfo, {item});
                      getSingleMember(item.id);
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
              </ScrollView>
            ))}
        </View>
      </View>
      {isOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}>
          <BottomSheetView>
            {/* <ViewMemberInfo /> */}
            <MemberBottomSheet />
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default MembersComponent;



