import React from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from '../CustomIcon';
import styles from './styles';

const CustomModel = ({
  modelVisible,
  setModelVisible,
  modelBody,
  modelFooter,
  title,
  title2,
}) => {
  return (
    <Modal visible={modelVisible} transparent>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          setModelVisible(false);
        }}>
        <View style={styles.modelView}>
          <View>
            <View style={styles.imgPicture}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.profileImg}
              />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.title1}>{title2}</Text>
            </View>
          </View>

          <ScrollView>
            {/* <View style={styles.header}>
              <Icon name="close" size={30} />
              <Text style={styles.title}>{title || 'Recontacts'}</Text>
              <View />
            </View>
            <View style={styles.footerSeparator} />

            <View style={styles.body}>{modelBody}</View>
            {modelFooter}
            {!modelBody && (
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}> Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of services</Text>
                    </View>
                  </View>
                </>
              </View>
            )} */}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomModel;
