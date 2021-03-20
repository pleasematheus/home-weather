import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";

const mylist = [
	{
		date: "20/03",
		weekday: "Sáb",
		max: 26,
		min: 18,
		description: "Tempestades",
		condition: "storm",
	},
	{
		date: "21/03",
		weekday: "Dom",
		max: 27,
		min: 17,
		description: "Ensolarado com muitas nuvens",
		condition: "cloudly_day",
	},
	{
		date: "22/03",
		weekday: "Seg",
		max: 28,
		min: 17,
		description: "Tempestades",
		condition: "storm",
	},
	{
		date: "23/03",
		weekday: "Ter",
		max: 28,
		min: 17,
		description: "Tempestades isoladas",
		condition: "storm",
	},
	{
		date: "24/03",
		weekday: "Qua",
		max: 28,
		min: 17,
		description: "Parcialmente nublado",
		condition: "cloudly_day",
	},
	{
		date: "25/03",
		weekday: "Qui",
		max: 26,
		min: 17,
		description: "Tempo nublado",
		condition: "cloud",
	},
	{
		date: "26/03",
		weekday: "Sex",
		max: 28,
		min: 18,
		description: "Parcialmente nublado",
		condition: "cloudly_day",
	},
	{
		date: "27/03",
		weekday: "Sáb",
		max: 28,
		min: 18,
		description: "Tempestades",
		condition: "storm",
	},
	{
		date: "28/03",
		weekday: "Dom",
		max: 29,
		min: 19,
		description: "Tempestades",
		condition: "storm",
	},
	{
		date: "29/03",
		weekday: "Seg",
		max: 23,
		min: 13,
		description: "Tempestades",
		condition: "storm",
	},
];

export default function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<Menu />

			<Header />

			<Conditions />

			<FlatList
				horizontal={true}
				contentContainerStyle={{paddingBottom: '5%'}}
				style={styles.list}
				data={mylist}
				keyExtractor={(item) => item.date}
				renderItem={({ item }) => <Forecast data={item}/>}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#E8F0FF",
		paddingTop: "5%",
	},
	list: {
		marginTop: 10,
		marginLeft: 10,
	},
});
