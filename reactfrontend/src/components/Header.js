import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import TextField from "@material-ui/core/TextField";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InsertCommentOutlinedIcon from "@material-ui/icons/InsertCommentOutlined";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";

import "../App.css";

const styles = (theme) => ({
    roots: {
      flexGrow: 1,
    },
    iconButton: {
      padding: 10,
    },
    iconButton1: {
      fontSize: 60,
      width: 64,
      height: 64,
      color: "black",
      
    },
  
    title: {
      backgroundColor: "white",
      margin: theme.spacing(1, "auto"),
      borderBottomColor: "red",
    },
    title2: {
      backgroundColor: "red",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "15ch",
    },
    root1: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "red",
      },
  
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "red",
      },
    },
   
  });

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#757575",
      },
      secondary: {
        main: "#d50000",
      },
    },
  });

class Header extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
            <Container maxWidth="lg">
            <div className="root">
                 <Grid container spacing={8}>
                <ThemeProvider theme={theme}>
                  <Grid item xs={3} />
                  <Grid item xs={3} />
                  <Grid item xs={3} />
                  <Grid item xs={3} >
                    <Button size="small" color="primary">
                      로그인
                    </Button>
                    <Button size="small" color="primary">
                      회원가입
                    </Button>
                    <Button size="small" color="primary">
                      주문배송
                    </Button>
                    <Button size="small" color="primary">
                      고객센터
                    </Button>
                  </Grid>

                  <Grid item xs={1} /> 

                   <Button style={{ fontSize: "40px" }} color="secondary">
                    LOTTE ON
                  </Button>
                  <Grid item xs={1} />
                  <TextField
                    color="secondary"
                    id="outlined-full-width"
                    className={classes.root1}
                    style={{
                      margin: 8,
                      borderRadius: 40,
                      width: 400,
                      backgroundColor: "#fff",
                    }}
                    margin="normal"
                    variant="outlined"
                  ></TextField>
                   <IconButton className = {classes.iconButton1}> 
                    <InsertCommentOutlinedIcon />
                  </IconButton>
                  <IconButton className={classes.iconButton1}>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton
                    className={classes.iconButton1}
                    style={{ width: 75 }}
                  >
                    <PersonOutlineIcon />
                  </IconButton>
                  <IconButton
                    t
                    className={classes.iconButton1}
                    fontSize="large"
                  >
                    <LocalGroceryStoreIcon />
                  </IconButton>

                  <Grid container spacing={7}>
                    <Grid item xs={8} />
                    ㅤㅤㅤㅤㅤㅤ
                    <Button
                      style={{
                        fontSize: "14px",
                        marginLeft: "20px",
                        marginTop: "-40px",
                      }}
                    >
                      챗봇
                    </Button>
                    <Button style={{ fontSize: "14px", marginTop: "-40px" }}>
                      나의 찜
                    </Button>
                    <Button style={{ fontSize: "14px", marginTop: "-40px" }}>
                      마이 롯데
                    </Button>
                    <Button style={{ fontSize: "14px", marginTop: "-40px" }}>
                      장바구니
                    </Button>
                    <Grid item xs={12} />
                  </Grid>
                </ThemeProvider>
              </Grid>
             </div>
          </Container> 
            <ThemeProvider theme={theme}>
          <div className={classes.root} style={{ marginTop: "-50px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AppBar position="static" className={classes.title}>
                  <Toolbar className={classes.title}>
                    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                    <IconButton
                      className={classes.title2}
                      edge="start"
                      className={classes.menuButton}
                      style={{ marginRight: "10px" }}
                      color="secondary"
                      borderColor="secondary"
                      aria-label="open drawer"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h8" noWrap>
                      <Button color="black">오늘ON</Button>
                      ㅤㅤ
                      <Button color="black" style={{ marginLeft: "-20px" }}>
                        타임딜
                      </Button>
                      ㅤㅤ
                      <Button color="black" style={{ marginLeft: "-20px" }}>
                        장보기
                      </Button>
                      ㅤㅤ
                      <Button color="black" style={{ marginLeft: "-20px" }}>
                        백화점
                      </Button>
                      ㅤㅤ
                      <Button color="black" style={{ marginLeft: "-20px" }}>
                        명품ON
                      </Button>
                      ㅤㅤ
                      <Button color="black" style={{ marginLeft: "-20px" }}>
                        뷰티넘버원
                      </Button>
                      ㅤㅤ
                      <Button color="black" style={{ marginLeft: "-20px" }}>
                        오늘발송
                      </Button>
                      ㅤㅤ
                      <Button color="black" style={{ marginLeft: "-20px" }}>
                        내관심
                      </Button>
                      <Button color="black">이벤트존</Button>
                    </Typography>
                    <div>
                      ㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                      <InputBase
                        color="inherit"
                        placeholder="친환경 플라스틱"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                      />
                    </div>
                  </Toolbar>
                </AppBar>
              </Grid>
            </Grid>
          </div>
        </ThemeProvider>
                    <div>
            </div>
            </div>
            
        );
    }
}

export default withStyles(styles)(Header);