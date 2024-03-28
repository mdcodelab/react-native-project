import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const TodosItem = ({item, pressHandler}) => {

return (
    <TouchableOpacity onPress={()=> pressHandler(item.key)}>
        <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
)
}

const styles=StyleSheet.create({
text: {
    padding: 10,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
} 
})

