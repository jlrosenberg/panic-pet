import { makeStyles } from "@material-ui/core";

const useStyles = (draggableImageUrl: string) => {
  return makeStyles({
    container: {
      width: 100,
      height: 100,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      whiteSpace: "pre",
      backgroundImage: `url(${draggableImageUrl});`,
      backgroundSize: "cover",
    },
    headerContainer: {},
  });
};

export default useStyles;
