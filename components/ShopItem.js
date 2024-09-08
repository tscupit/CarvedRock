import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ShopItem = ({ id, name, image, price, category }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("carved", { id, category })}
    >
      <View style={styles.container}>
        <Image style={styles.shopImage} source={{ uri: image }} />
        <View style={styles.itemTextRow}>
          <Text style={styles.itemText}>{name}</Text>
          <Text style={styles.itemText}>${price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 30,
  },
  shopImage: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  itemTextRow: {
    alignItems: "center",
  },
  itemText: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 20,
    color: "#000000",
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default ShopItem;
