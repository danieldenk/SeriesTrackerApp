import React from "react";
import { Image, Text, View } from "react-native";
import styles from '../../styles/styles'

/*
  This is a component representing a series element consisting of a title, image, episode & season nr.
*/
function SeriesElement(props) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>

      <Image
        source={{ uri: props.img_src }}
        style={styles.seriesElementImage}
      />
      <Text style={styles.information}>Season {props.season_nr}</Text>
      <Text style={styles.information}>Episode {props.episode_nr} </Text>
      <Text style={{ marginBottom: 20 }}></Text>
    </View>
  );
}

export default SeriesElement;