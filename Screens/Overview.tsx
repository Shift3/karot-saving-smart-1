import { View, Text, StyleSheet } from "react-native";
import ExpenseCard from "../Components/ExpenseCard";

function Overview() {
  return (
    <View style={styles.container}>
      <View style={styles.budgetCardHolder}>
        <Text>Budget Card Goes Here</Text>
      </View>
      <View style={styles.expenseCardHolder}>
        <ExpenseCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  budgetCardHolder: {
    marginTop: 30,
  },
  expenseCardHolder: {
    marginTop: 20,
  },
});

export default Overview;
