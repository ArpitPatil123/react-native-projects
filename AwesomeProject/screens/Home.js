import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = () => {
  const openGithub = () => {
    Linking.openURL("https://github.com/ArpitPatil123");
  };
  const openInstagram = () => {
    Linking.openURL("https://www.instagram.com/arpitpatil42/");
  };
  const openLinkedIn = () => {
    Linking.openURL("https://www.linkedin.com/in/arpitpatil-");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>
          <TouchableOpacity>
            <Icon name="bars" size={30} color="#00fe94" />
          </TouchableOpacity>
        </Text>
        <Text style={{ color: "#00fe94", fontSize: 20 }}>Arpit Patil</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.top}>
          <View style={styles.image}>
            <Image
              source={require("../assets/Hero.gif")}
              style={{ height: 350, width: 350, borderRadius: 200 }}
            />
          </View>
          <View style={styles.information}>
            <Text style={{ color: "#00fe94", fontSize: 20 }}>
              Hi,👋 I'm Arpit Patil
            </Text>
            <Text style={{ color: "#fff", fontSize: 24 }}>
              Full Stack Developer
            </Text>
            <View style={styles.social}>
              <TouchableOpacity onPress={openGithub}>
                <Icon name="github" size={50} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={openInstagram}>
                <Icon name="instagram" size={50} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={openLinkedIn}>
                <Icon name="linkedin" size={50} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity>
                {/* <Button title="Contact Me" color="#0f2825"  /> */}
                <Text
                  style={{
                    backgroundColor: "#0f2825",
                    color: "#fff",
                    padding: 10,
                    textAlign: "center",
                    borderRadius: 10,
                    fontSize: 18,
                  }}
                >
                  Contact Me
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111119",
    height: "100%",
    width: "100%",
    flex: 1,
    paddingHorizontal: 35,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  main: {
    flex: 1,
    justifyContent: "space-between",
    height: "100%",
  },
  top: {
    flex: 1,
  },
  image: {
    borderRadius: 200,
    overflow: "hidden",
  },
  information: {
    flex: 1,
    marginTop: 24,
    gap: 16,
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    gap: 16,
  },
  button: {
    marginTop: 48,
  },
});
