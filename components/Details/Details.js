import React, { useState, useEffect } from "react";
import { Image, Text, View, Linking } from "react-native";
import styles from "../../styles/styles";
import KEYS from "../../assets/KEYS";

/*
  DetailsScreen giving more information about a series
*/
function DetailsScreen({ route, navigation }) {
  // A series object that is being fetched from a movies API
  const [jsonObj, setJsonObj] = useState([]);
  let seriesTitle = JSON.stringify(route.params.seriesTitle);
  // Esthetic purposes for displaying "name" as name
  seriesTitle = String(seriesTitle.slice(1, seriesTitle.length - 1));
  // Fetching information about a series by the name of the one that was pressed
  useEffect(() => {
    fetch("http://www.omdbapi.com/?t=" + seriesTitle + "&apikey=" + KEYS)
      .then((response) => response.json())
      .then((data) => setJsonObj(data)).catch(function(error) {
        console.log('There has been a problem with getting the series data from the API: ' + error.message);
          throw error;
        });
  }, []);

  return (
    <View style={styles.container}>
      {jsonObj.Response === "False" ? (
        <Text style={styles.DetailsNotFound}>
          The series could not be found
        </Text>
      ) : null}
      <Text style={styles.DetailsTitle}>{seriesTitle}</Text>
      <Image
        source={{ uri: jsonObj.Poster }}
        style={styles.DetailsPosterImage}
      />
      <View>
        <Text style={styles.DetailsHeading}>Plot</Text>
        <Text style={styles.SeriesElement}>{jsonObj.Plot}</Text>
        <Text style={styles.DetailsHeading}>IMDB-Ratings</Text>
        <Text style={styles.SeriesElement}>{jsonObj.imdbRating}</Text>
        <Text style={styles.DetailsHeading}>IMDB-Votes</Text>
        <Text style={styles.SeriesElement}>{jsonObj.imdbVotes}</Text>
        <Text style={styles.DetailsHeading}>Search on IMDB</Text>
        <Text
          style={styles.DetailsAnchorToIMDB}
          onPress={() =>
            Linking.openURL(
              "https://www.google.com/search?q=IMDB+" + seriesTitle
            )
          }
        >
          {"Search for " + seriesTitle + " in the Web"}
        </Text>
      </View>
    </View>
  );
}

export default DetailsScreen;