import React from "react";
import {fade} from "@material-ui/core/styles";
import {makeStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"

/*const someObject = {
    some: 1,
    blah: 2,
    blahblah: 3,
    somehsd: 4,
    djksdks: 6
};

const someObject2 = {
    some: 1,
    blah: 2,
    blahblah: 3,
    somehsd: 4,
    djksdks: 6,
    djksdksds: 6,
    jkjk: 5
};

const {some, blah, blahblah, ...rest} = someObject2*/

const DahboardNav = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return(
                <React.Fragment>
                    <div>
                        <div style={{flexGrow: 1}}>
                            <AppBar position="static">
                                <Toolbar>
                                    <IconButton
                                        edge="start"
                                        style={{marginRight: 10}}
                                        color="inherit"
                                        aria-label="Open drawer"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography style={{flexGrow: 1,
                                        display: 'block'}} variant="h6" noWrap>
                                        Some App
                                    </Typography>

                                </Toolbar>
                            </AppBar>
                        </div>
                    </div>
                    <WrappedComponent {...this.props}/>
                </React.Fragment>
            )
        }
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}))

export default DahboardNav
