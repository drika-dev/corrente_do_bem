import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#696969",
  },
  scrollContent: {
    flexGrow: 1,
  },
  title: {
    backgroundColor: "#696969",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  tableContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 8,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
    marginRight: 8,
  },
  editButton: {
    backgroundColor: "#8B008B",
    borderRadius: 5,
    padding: 8,
    marginRight: 8,
  },
  editButtonText: {
    fontSize: 16,
    color: "white",
  },
  deleteButton: {
    backgroundColor: "#DC143C",
    borderRadius: 5,
    padding: 8,
  },
  deleteButtonText: {
    fontSize: 16,
    color: "white",
  },
  botao: {
    backgroundColor: "#B22222",
    borderRadius: 5,
    padding: 8,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  textbtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
