import React from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from "react-native";
import Header from "./components/header";

export default function App() {
  const[rodos, setTodos]=React.useState([
    {text: "buy a coffee", key: 1}, 
    {text: "create an app", key: 2},
    {text: "play on the switch", key: 3}
  ])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* todos form*/}
        <View style={styles.list}>
          <FlatList data={todos} renderItem={({item})=> (
            <Text>{item.text}</Text>
          )}   />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
