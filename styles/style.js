import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffffff",
  },
  textbtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 4,
  },
  image: {
    width: 340,
    height: 120,
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 30,
  },
  image_logo: {
    width: 200,
    height: 200,
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 100,
  },
  botao: {
    backgroundColor: "#B22222",
    borderRadius: 5,
    paddingLeft: 0,
    marginVertical: 8,
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    marginTop: 4,
    fontWeight: "bold",
  },

  labelError: {
    alignSelf: "flex-start",
    color: "#D61C28",
    marginBottom: 8,
  },
  title: {
    marginBottom: 16,
    fontSize: 20,
    color: "#B22222",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#8A0808",
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    marginVertical: 6,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#8b0000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#8b0000",
    borderColor: "red",
    marginVertical: 6,
  },
  tableContainer: {
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 16,
  },
  tableHead: {
    backgroundColor: "#8A0808",
  },
  tableHeadText: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
  tableRow: {
    height: 40,
    backgroundColor: "#FFFFFF",
  },
  tableRowText: {
    fontSize: 16,
    color: "#000000",
  },
  scrollView: {
    flex: 1,
    marginBottom: 16,
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
