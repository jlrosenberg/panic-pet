import { makeStyles } from "@material-ui/core";
import theme from "../../common/theme";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(2),
  },

  petButton: {
    margin: "8px 0px",
    height: 64,
  },

  petButtons: {
    position: "fixed",
    bottom: 24,
    width: "calc(100%-32px)",
  },
});

export default useStyles;
