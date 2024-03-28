mport React from "react";
import { StyleSheet, Text, Button, TextInput } from "react-native";

export const AddTodos = ({submitHandler}) => {
const [text, setText]=React.useState("");

const changeHandler = (val) => {
    setText(val);
}

return (
    <View>
        <TextInput onChangeText={changeHandler}
        style={styles.input} placeholder="new todo..."/>
        <Button onPress={()=>submitHandler(text)} title="Add Todos" color="coral"/>
    </View>
)
}

const styles=StyleSheet.create({
input: {
    marbgginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
}
})