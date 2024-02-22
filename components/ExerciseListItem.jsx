import { StyleSheet, Text, View } from "react-native";

function ExerciseListItem({ item }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {capitalizeFirstLetter(item.muscle)} |{" "}
        {capitalizeFirstLetter(item.equipment)}
      </Text>
    </View>
  );
}

export default ExerciseListItem;

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
});
