import React from "react";
import { Text, View, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/styles";

/*
  AboutScreen directing to Github
*/
function AboutScreen({ navigation }) {
  return (
    <View style={styles.AboutContainer}>
      <Text style={styles.AboutTextStyle}>
        This App has been developed using React-Native during a project at the
        Metropolia University
      </Text>
      <TouchableOpacity>
        <Text
          onPress={() => Linking.openURL("http://github.com/danieldenk")}
          style={styles.AboutAnchorStyle}
        >
          VISIT MY GITHUB
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default AboutScreen;