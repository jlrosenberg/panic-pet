import { makeStyles } from "@material-ui/core";
import theme from "../../common/theme";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 34,
  },

  petButton: {
    margin: "8px 0px",
    height: 64,
  },

  petButtons: {
    position: "fixed",
    bottom: 24,
    width: `calc(100%-32px)`,
    marginLeft: 16,
    marginRight: 16,
  },

  petImage: {
    height: 150,
  },

  header: {
    display: "flex",
    marginBottom: 40,
  },
  backButton: {
    position: "fixed",
    left: "8px",
    top: "16px",
    marginLeft: -8,
  },

  imageContainer: {},
});

export default useStyles;
