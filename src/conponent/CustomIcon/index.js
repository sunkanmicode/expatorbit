import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'


const getIconFont = type => {
    switch (type) {
        case 'FontAwesome5':
            return FontAwesome5;
        case 'AntDesign':
            return AntDesign;
        case 'Entypo':
            return Entypo;
        case 'EvilIcons':
            return EvilIcons;
        case 'Feather':
            return Feather;
        // case 'FontAwesome5Brands':
        //     return FontAwesome5Brands;
        case 'FontAwesome':
            return FontAwesome;
        case 'Fontisto':
            return Fontisto;
        case 'Foundation ':
            return Foundation;
        case 'Ionicons':
            return Ionicons;
        case 'MaterialCommunity':
            return MaterialCommunityIcons;
        case 'MaterialIcons':
            return MaterialIcons;
        case 'Octicons':
            return Octicons;
        case 'SimpleLineIcons':
            return SimpleLineIcons;
        case 'Zocial':
            return Zocial;
        default:
            return FontAwesome;
        }
    };
const Icon = ({type, ...props})=>{
    const IconFont = getIconFont(type)
    return <IconFont {...props} />;

}
export default Icon;