import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50vw",
    alignSelf: "left",
    padding: "3vh 5vw",
    backgroundColor: "#222",
    opacity: "0.9",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
}
}));
export default useStyles;
