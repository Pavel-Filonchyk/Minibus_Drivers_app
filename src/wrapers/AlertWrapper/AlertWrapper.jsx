import React from 'react'

import { StyleSheet, Modal, View, Platform } from 'react-native'

export default function AlertWrapper(props) {
  return (
    
    <View style={styles.centeredView}>
      <Modal
        visible={ props.showAlert }  // 
        animationType="none"
        transparent={true}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {props.children}  
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    zIndex: 1000,
    backgroundColor: 'floralwhite',
    height: '100%'
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#eb5a1e',
    alignItems: "center",
    height: '100%',
    width: '100%',
    height: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    ...Platform.select({
      android: {
        width: '90%',
      },
      ios: {
        width: '90%',
      },
      default: {
        width: 400,
      },
    }),
  },
  
})
