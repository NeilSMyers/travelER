import React from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

import ListItem from "./src/components/ListItem";

const App = () => {
  const [placeName, setPlaceName] = React.useState("");
  const [places, setPlaces] = React.useState([]);

  const updatePlaces = () => {
    setPlaces([...places, placeName]);
    setPlaceName("");
  };

  const renderPlaces = () => {
    return places.map((place, i) => <ListItem key={i} placeName={place} />);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={val => setPlaceName(val)}
          placeholder="Cool Zone"
          value={placeName}
          style={styles.placeInput}
        />
        <Button title="Add" style={styles.placeButton} onPress={updatePlaces} />
      </View>
      <View style={styles.listContainer}>{renderPlaces()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 50,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});

export default App;
