import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { collection, addDoc } from "firebase/firestore";
import { database } from "../config/firestore";

export default function Addfirestore() {
	const navigation = useNavigation();
	const [newItem, setNewItem] = useState({
		tarea: "",
		descripcion: "",
		creadaEn: new Date(),
		actualizadaEn: new Date(),
		fechaLimite: new Date(),
	});

	const onSubmit = async () => {
		try {
			await addDoc(collection(database, "cruds"), newItem);
			navigation.navigate("Listfirestore");
		} catch (error) {
			alert("Error agregando tarea");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<Text style={styles.textHeader}>Agreagar Tarea</Text>
				<TextInput
					multiline={false}
					onChangeText={(text) => setNewItem({ ...newItem, tarea: text })}
					placeholder="Tarea"
					style={styles.textInput}
				></TextInput>
				<TextInput
					multiline={true}
					onChangeText={(text) => setNewItem({ ...newItem, about: text })}
					placeholder="Descripción"
					style={styles.textInput}
				></TextInput>
				<Button title="Enviar" onPress={onSubmit} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#dfedfa",
	},
	innerContainer: {
		padding: 15,
		margin: 15,
		borderRadius: 15,
		alignItems: "center",
		backgroundColor: "#fff",
		shadowOffset: { width: 2, height: 2 },
		elevation: 20,
		shadowColor: "#333",
		shadowOpacity: 0.3,
	},
	textHeader: {
		fontWeight: "bold",
		padding: 20,
	},
	textInput: {
		width: "90%",
		padding: 5,
		marginVertical: 6,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "red",
	},
});
