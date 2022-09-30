import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import productsApi from "./apis/Products";

export default function App() {
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    try {
      const getProducts = async () => {
        const response = await productsApi.get(
          `https://bukloo.herokuapp.com/sheetstore/ferdulu`
        );
        // console.log(response);
        setProducts(response.data);
      };
      getProducts();
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {products
        ? products.map((product, i) => <Text key={i}>{product.title} </Text>)
        : ""}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
