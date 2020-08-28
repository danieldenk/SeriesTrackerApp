import {Snackbar } from "react-native-paper";
import React, { useState, useEffect } from "react";
import styles from "../../styles/styles";

/*
  This component supplies the predefined Snackbar 
*/
export default function triggerSnackbar(visible, setVisible, resultAddDelete) {
    return (
      <Snackbar
        style={styles.SnackbarStyle}
        visible={visible}
        duration={2000}
        theme={{ colors: { accent: "white" } }}
        onDismiss={() => setVisible(false)}
      >
        {resultAddDelete}
      </Snackbar>
    );
  }