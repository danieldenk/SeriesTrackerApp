import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, AsyncStorage } from "react-native";
import SeriesElement from "./series_element";
import AddElement from "./add_series";
import seriesJSON from "../../assets/series.json";
import { Button, IconButton } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/styles";

/*
  The HomeScreen is containing an overview of all the series that are being watched
*/
function HomeScreen({ navigation }) {
  // Contains the saved series one is watching
  const [loadedSeriesData, setSeriesData] = useState([]);
  // Enables save button -> if changes were made // else: disables
  const [save, setSave] = useState(false);
  // Tracker of what has happened for displaying in snackbar -> added x || deleted y
  const [resultAddDelete, setResultAddDelete] = React.useState("");
  // State for Snackbar
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    // Getting saved series from asynchronous memory
    // If none present then default is loaded from series.json (Recommendation so to say)
    async function getData() {
      await AsyncStorage.getItem("@seriesList").then((value) => {
        console.log(JSON.parse(value));
        value
          ? setSeriesData(JSON.parse(value))
          : setSeriesData([...seriesJSON.seriesJSON]);
      }).catch(function(error) {
        console.log('There has been a problem with getting the series from the memory: ' + error.message);
          throw error;
        });
    }
    getData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.HomeContentContainer}
    >
  
      <Text style={styles.headline}>
        Here you can keep track of all the series you are currently watching!
      </Text>

      <AddElement
        updateSeriesState={setSeriesData}
        getSeriesState={loadedSeriesData}
        save={save}
        setSave={setSave}
        resultAddDelete={resultAddDelete}
        setResultAddDelete={setResultAddDelete}
        visible={visible}
        setVisible={setVisible}
      />

      <View style={styles.SeriesElement}>
        {loadedSeriesData.map((s, index) => (
          <View key={index}>
            <IconButton
              icon="delete-circle"
              size={27}
              style={styles.trashButton}
              onPress={() => {
                setSeriesData(
                  loadedSeriesData.filter((se) => se.name != s.name)
                );
                setSave(true);
                setResultAddDelete("The series " + s.name + " was removed!");
                setVisible(true);
              }}
            />

            <TouchableOpacity
              onPress={() =>
                navigation.push("Details", { seriesTitle: s.name })
              }
            >
              <SeriesElement
                key={s.name}
                title={s.name}
                img_src={s.img}
                season_nr={s.season}
                episode_nr={s.episode}
                updateSeriesState={setSeriesData}
                getSeriesState={loadedSeriesData}
                save={save}
                setSave={setSave}
                resultAddDelete={resultAddDelete}
                setResultAddDelete={setResultAddDelete}
                visible={visible}
                setVisible={setVisible}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Button
        onPress={() => navigation.push("About")}
        dark={true}
        compact={true}
        mode="contained"
        style={styles.HomeAboutButton}
      >
        About
      </Button>
      <StatusBar />
    </ScrollView>
  );
}

export default HomeScreen;