import { StyleSheet } from "react-native";

// All applied styles are found here

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9bcfe5",
    color: "#fff",
  },
  headline: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
    marginTop: 25,
  },
  SeriesElement: {
    padding: 5,
    alignContent: "center",
    justifyContent: "center",
    fontSize: 17,
    textAlign: "center",
  },
  SeriesHeadline: {
    fontSize: 20,
    fontWeight: "bold",
  },
  trashButton: {
    marginTop: -4,
    position: "absolute",
    zIndex: 100,
  },
  imageScreen: {
    width: 200,
    height: 300,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  information: {
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: "#77c6c4",
  },
  name: {
    backgroundColor: "#fff",
    borderRadius: 2,
    borderColor: "#000",
    margin: 10,
  },
  episode: {
    backgroundColor: "#fff",
  },
  season: {
    backgroundColor: "#fff",
  },
  HomeContentContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  HomeAboutButton: {
    backgroundColor: "#77c6c4",
    color: "#fff",
  },
  AboutContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9bcfe5",
  },
  AboutTextStyle: {
    color: "#fff",
    textAlign: "center",
    margin: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  AboutAnchorStyle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    fontStyle: "italic",
  },
  DetailsNotFound: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    top: 10,
  },
  DetailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    top: 40,
  },
  DetailsPosterImage: {
    flex: 2,
    marginBottom: 5,
    //resizeMode: "contain"
  },
  DetailsHeading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  DetailsAnchorToIMDB: {
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "italic",
    paddingBottom: 50,
  },
  SnackbarStyle: {
    bottom: -80,
    position: "relative",
    backgroundColor: "#8acccb",
    borderColor: "#77c6c4",
    borderRadius: 2,
    borderWidth: 3,
  },
  seriesElementImage: {
    width: 305,
    height: 160,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default styles;
