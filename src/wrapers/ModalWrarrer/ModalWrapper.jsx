import React from 'react'

import { StyleSheet, Modal, View, Platform } from 'react-native'

export default function ModalWrapper(props) {
  return (
      <Modal
        visible={ props.showModal }
        animationType="none"
        transparent={true}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {props.children}  
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    zIndex: 1000,
    backgroundColor: '#1B5583',
    height: '100%'
  },
  modalView: {
    //backgroundColor: "white",
    borderRadius: 28,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'white',//'#4169E0',
    alignItems: "center",
    height: '100%',
    width: '100%',
    height: 240,
    ...Platform.select({
      android: {
        width: '80%',
      },
      ios: {
        width: '80%',
      },
      default: {
        width: 400,
      },
    }),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})
