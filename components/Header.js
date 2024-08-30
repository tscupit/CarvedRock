import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/carved-rock-logo-black.png")}
        />
        <TouchableWithoutFeedback>
          <Image
            style={styles.menu}
            source={require("../assets/menu_2976215.png")}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  headerRow: {
    flexDirection: "row",
  },
  imageStyle: {
    height: 100,
    width: "50%",
  },
  menu: {
    alignSelf: "center",
    marginLeft: 150,
  },
});

export default Header;
