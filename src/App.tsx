import React from "react";
import * as Material from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	mainContainer: {
		marginTop: "75px",
	},
}));

let App = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Material.AppBar>
				<Material.Toolbar>
					<Material.Typography variant="h6" className={classes.title}>
						Kittenz's website
					</Material.Typography>
				</Material.Toolbar>
			</Material.AppBar>
			<Material.Container className={classes.mainContainer}>
				<Material.Typography variant="h5">Hello</Material.Typography>
			</Material.Container>
		</div>
	);
};

export default App;
