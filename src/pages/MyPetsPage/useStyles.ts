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
  imgContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 400,
    flexDirection: "column",
  },
  headerContainer: {},
});

export default useStyles;
