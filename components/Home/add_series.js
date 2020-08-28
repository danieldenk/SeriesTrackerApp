import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import KEYS from "../../assets/KEYS";
import styles from "../../styles/styles";
import triggerSnackbar from "./trigger_snackbar";
import handleAdd from "./handle_add";

/*
  This component includes all of the input field related parts of the HomeScreen
    --> Adding a series and triggering the snackbar
*/
function AddElement(props) {
  const [seriesTitle, setSeriesTitle] = useState("");
  const [seriesSeason, setSeriesSeason] = useState(1);
  const [seriesEpisode, setSeriesEpisode] = useState(1);

  // We need to fetch the image from the API so that it has one in the overview
  // The returned object is saved here
  const [jsonObjIMG, setJsonObjIMG] = useState("");
  // Hook is fired when seriesTitle is changed
  useEffect(() => {
    fetch("http://www.omdbapi.com/?t=" + seriesTitle + "&apikey=" + KEYS)
      .then((response) => response.json())
      .then((data) => setJsonObjIMG(data)).catch(function(error) {
        console.log('There has been a problem with getting the series data from the API: ' + error.message);
          throw error;
        });
  }, [seriesTitle]);

  return (
    <View>
      <TextInput
        label="Name of the Series"
        placeholder={"Name of the Series"}
        style={styles.name}
        onChangeText={(text) => setSeriesTitle(text)} //Instead onChange and event.target.value !
      />
      <TextInput
        label="# Season"
        placeholder={"Number of the Season"}
        style={styles.name}
        onChangeText={(text) => setSeriesSeason(text)}
      />
      <TextInput
        label="# Episode"
        placeholder={"Number of the Episode"}
        style={styles.name}
        onChangeText={(text) => setSeriesEpisode(text)}
      />

      <Button
        style={styles.buttonStyle}
        mode="contained"
        onPress={() => {
          handleAdd(
            props.getSeriesState,
            props.updateSeriesState,
            seriesTitle,
            seriesSeason,
            seriesEpisode,
            props.setSave,
            props.setVisible,
            setJsonObjIMG,
            jsonObjIMG
          )
            ? props.setResultAddDelete(
                "The series " + seriesTitle + " was added!"
              )
            : props.setResultAddDelete(
                "The series is already present or you are missing an input!"
              );

          console.log(props.resultAddDelete);
        }}
      >
        Add Series
      </Button>

      {props.save ? (
        <Button
          style={styles.buttonStyle}
          mode="contained"
          onPress={() => {
            AsyncStorage.setItem(
              "@seriesList",
              JSON.stringify(props.getSeriesState)
            );
            props.setResultAddDelete("Your changes were saved!");
            props.setSave(false);
          }}
        >
          Save Changes
        </Button>
      ) : (
        <Button mode="contained" disabled={true} style={styles.buttonStyle}>
          Save Changes
        </Button>
      )}

      {props.visible &&
        triggerSnackbar(props.visible, props.setVisible, props.resultAddDelete)}
    </View>
  );
}

export default AddElement;