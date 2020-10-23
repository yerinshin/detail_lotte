import React, { Component } from 'react';

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";

import TextField from "@material-ui/core/TextField";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import Typography from "@material-ui/core/Typography";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import Rating from "@material-ui/lab/Rating";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import UsbSharpIcon from "@material-ui/icons/UsbSharp";
import { Box } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import LinearProgress from "@material-ui/core/LinearProgress";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AdbIcon from "@material-ui/icons/Adb";

import Tab from "@material-ui/core/Tab";
import MoodIcon from "@material-ui/icons/Mood";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";


const styles = (theme) => ({
    root: {
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
    iconButton2: {
      fontSize: 40,
      width: 40,
      height: 40,
      marginLeft: 60,
      color: "black",
    },
    iconButton3: {
      fontSize: 30,
      width: 30,
      height: 30,
      marginLeft: 3,
      color: "purple",
      marginBottom: 5,
    },
    iconButton4: {
      fontSize: 30,
      width: 30,
      height: 30,
      marginLeft: 3,
      color: "white",
      marginBottom: 5,
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
    
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: 420,
    },
    formControl2: {
      margin: theme.spacing(1),
      marginLeft: 20,
      width: 360,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  
    button9: {
      marginLeft: 220,
      Color: "red",
    },
    search4: {
      width: 500,
      height: 40,
    },
  });
  
  // const theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: "#757575",
  //     },
  //     secondary: {
  //       main: "#d50000",
  //     },
  //   },
  // });

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          number: 0,
          price: 0,
          number2: 0,
          price2: 0,
        };
      }

     //함수 실행시 number값이 1 증가
  handleIncrease = () => {
    const { number, price } = this.state;
    //this.setState는 state의 값을 변경할 때 사용 하는 함수
    this.setState({
      number: number + 1,
      price: price + 7960,
    });
  };
  handleDecrease = () => {
    const { number, price } = this.state;
    //this.setState는 state의 값을 변경할 때 사용 하는 함수

    this.setState({
      number: number - 1,
      price: price - 7960,
    });
  };
  handleIncrease2 = () => {
    const { number2, price2 } = this.state;
    //this.setState는 state의 값을 변경할 때 사용 하는 함수
    this.setState({
      number2: number2 + 1,
      price2: price2 + 7960,
    });
  };
  handleDecrease2 = () => {
    const { number2, price2 } = this.state;
    //this.setState는 state의 값을 변경할 때 사용 하는 함수

    this.setState({
      number2: number2 - 1,
      price2: price2 - 7960,
    });
  };

    render() {
       const { classes } = this.props;

    return (
      <div className="App">
         
        {  /* Body               */}
        <div>
          <Container maxWidth="lg">
            <div>
              <Grid container spacing={3}>
                {/* Body왼쪽영역  */}
                <Grid item xs={6}>
                  <div
                    style={{
                      marginLeft: "50px",
                      marginTop: "20px",
                      height: "100%",
                    }}
                  >
                    <img src="https://contents.lotteon.com/itemimage/LO/10/24/51/10/29/_1/02/45/11/03/0/LO1024511029_1024511030_1.jpg" alt = "..."></img>
                  </div>
                </Grid>

                {/* Body오른쪽영역 */}
                <Grid item xs={6}>
                  <div style={{ marginLeft: "100px", marginTop: "50px" }}>
                    <div>
                      <Button
                        color="black"
                        style={{
                          blockSize: "50px",
                          fontSize: "16px",
                          marginLeft: "-5px",
                        }}
                      >
                        아이시스
                      </Button>
                      ㅤ
                      <IconButton
                        className={classes.iconButton1}
                        style={{ marginLeft: "150px" }}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                      <IconButton className={classes.iconButton1}>
                        <SystemUpdateAltIcon />
                      </IconButton>
                    </div>
                    <div style={{ marginTop: "-30px" }}>
                      <h2>아이시스8.0에코 1.5L</h2>
                    </div>
                    <div
                      style={{
                        width: "85%",
                        borderBottom: "1px solid #bcbcbc",
                        paddingBottom: "5px",
                      }}
                    >
                      <Rating
                        size="small"
                        name="half-rating"
                        defaultValue={4.6}
                        precision={0.5}
                      ></Rating>
                      <h8 style={{ marginLeft: "5px" }}>4.6</h8>
                      <h8 style={{ marginLeft: "5px" }}>32건</h8>
                      <h8 style={{ marginLeft: "10px" }}>월간구매</h8>
                      <IconButton className={classes.iconButton2}>
                        <PhoneAndroidIcon />
                      </IconButton>
                      <Button
                        style={{
                          marginLeft: "-15px",
                        }}
                      >
                        App으로보기
                      </Button>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <h2 style={{ display: "inline" }}>7960원</h2>
                      <h8> (100ml당 44원, 총 18000ml)</h8>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <h3 style={{ display: "inline", color: "purple" }}>
                        7890원
                      </h3>
                      <IconButton className={classes.iconButton3}>
                        <UsbSharpIcon />
                      </IconButton>
                      <Button
                        style={{
                          marginLeft: "-12px",
                          color: "purple",
                        }}
                      >
                        롯데오너스 할인가
                      </Button>
                    </div>
                    <div style={{ width: "85%", marginTop: "10px" }}>
                      <Box
                        style={{
                          border: "1px solid cornflowerblue",
                          display: "inline",
                          marginRight: "100px",
                          padding: "10px",
                          paddingRight: "100px",
                          borderRadius: "5px",
                        }}
                      >
                        할인가능한 쿠폰이 있습니다.
                      </Box>
                      <Button
                        style={{
                          backgroundColor: "cornflowerblue",
                          color: "white",
                          marginLeft: "-100px",
                          marginBottom: "3px",
                        }}
                      >
                        <IconButton className={classes.iconButton4}>
                          <GetAppIcon />
                        </IconButton>
                        쿠폰받기
                      </Button>
                    </div>
                    <div
                      style={{
                        width: "85%",
                        borderBottom: "1px solid lightgray",
                        marginTop: "20px",
                        
                      }}
                    ></div>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        용량 1.5L
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="용량 1.5L"
                      >
                        <MenuItem value={10}>1.5L</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        수량 12펫
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="용량 1.5L"
                      >
                        <MenuItem value={10}>12펫 7500원</MenuItem>
                      </Select>
                    </FormControl>

                    <div className="App">
                      <header className="App-header">
                        <Counter
                          handleIncrease={this.handleIncrease}
                          handleDecrease={this.handleDecrease}
                          number={this.state.number}
                          price={this.state.price}
                        />
                      </header>
                    </div>

                    <div
                      style={{
                        marginTop: "20px",
                        marginLeft: "10px",
                        width: "420px",
                        height: "60px",
                      }}
                    >
                      <Button
                        style={{
                          borderRadius: "10px",
                          width: "200px",
                          height: "55px",
                        }}
                        variant="outlined"
                        color="secondary"
                      >
                        장바구니 담기
                      </Button>
                      <Button
                        style={{
                          borderRadius: "10px",
                          width: "200px",
                          height: "55px",
                          marginLeft: "20px",
                        }}
                        variant="contained"
                        color="secondary"
                      >
                        바로 구매하기
                      </Button>
                      <div
                        style={{
                          width: "95%",
                          borderBottom: "1px solid lightgray",
                          marginTop: "20px",
                        }}
                      ></div>
                      <div style={{ fontSize: "13px", marginTop: "20px" }}>
                        <h8>혜택정보</h8>
                        <div style={{ display: "inline", marginLeft: "10px" }}>
                          <h8>
                            [무료배송] 롯데ON 롯데오너스 월2회 무료<br></br>
                            <div
                              style={{ display: "inline", marginLeft: "60px" }}
                            >
                              [L.POINT] 롯데오너스 39P 추가적립<br></br>
                            </div>
                            <div
                              style={{ display: "inline", marginLeft: "60px" }}
                            >
                              롤라카드 총 10만원 캐시백!<br></br>
                            </div>
                          </h8>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "95%",
                          borderBottom: "1px solid lightgray",
                          marginTop: "20px",
                        }}
                      ></div>
                      <div style={{ fontSize: "13px", marginTop: "20px" }}>
                        <h8>배송정보</h8>
                        <div style={{ display: "inline", marginLeft: "10px" }}>
                          <h8>
                            배송비 무료<br></br>
                          </h8>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "95%",
                          borderBottom: "1px solid lightgray",
                          marginTop: "20px",
                        }}
                      ></div>
                      <div
                        style={{
                          marginTop: "20px",
                        }}
                      >
                        <h7>롯데칠성음료(주)서부KA지점</h7>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>

              <div
                style={{
                  borderTop: "1px solid black",
                  paddingTop : "80px",
                  marginTop: "240px",
                  marginLeft: "80px",
                }}
              >
                <div style={{ width: "60%", display: "inline" }}>
                  <Tab label="상세정보" />
                  <Tab label="리뷰(33)" />
                  <Tab label="Q&A(1)" />
                  <Tab label="교환/반품 안내" />
                </div>
                <div
                  style={{
                    width: "35%",
                    marginTop: "-50px",
                    marginLeft: "750px",
                    borderLeft: "1px solid lightgray",
                    borderRight: "1px solid lightgray",
                  }}
                >
                  <FormControl
                    variant="outlined"
                    className={classes.formControl2}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      용량 1.5L
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="용량 1.5L"
                    >
                      <MenuItem value={10}>1.5L</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl2}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      수량 12펫
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="용량 1.5L"
                    >
                      <MenuItem value={10}>12펫 7500원</MenuItem>
                    </Select>
                  </FormControl>
                  <div
                    style={{
                      width: "300px",
                      height: "100px",
                      backgroundColor: "lightgray",
                      marginLeft: "20px",
                      marginTop: "20px",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "14px",

                        display: "inline",
                      }}
                    >
                      <h8>배송비 무료</h8>
                      <br></br>
                      <h8>판매자 : 롯데칠성음료(주)서부KA지점</h8>
                      <br></br>
                      <Button className={classes.botton9}>쿠폰적용</Button>
                    </div>
                    <div
                      style={{
                        width: "300px",
                        borderBottom: "1px solid black",
                        marginTop: "20px",
                      }}
                    ></div>
                    <div style={{ marginLeft: "-50px" }}>
                      <header className="App-header2">
                        <Counter2
                          handleIncrease={this.handleIncrease2}
                          handleDecrease={this.handleDecrease2}
                          number2={this.state.number2}
                          price2={this.state.price2}
                        />
                      </header>
                    </div>
                  </div>

                  <Button
                    style={{
                      borderRadius: "10px",
                      width: "360px",
                      height: "55px",
                      marginTop: "500px",
                      marginLeft: "20px",
                    }}
                    variant="outlined"
                    color="secondary"
                  >
                    장바구니 담기
                  </Button>
                  <Button
                    style={{
                      borderRadius: "10px",
                      width: "360px",
                      height: "55px",
                      marginLeft: "20px",
                      marginTop: "10px",
                    
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    바로 구매하기
                  </Button>
                </div>
                <div
                  style={{
                    width: "64%",
                    borderBottom: "1px solid lightgray",
                    marginTop: "-890px",
                  }}
                ></div>
                <div
                  style={{
                    width: "64%",
                    fontSize: "8px",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  <div marginTop>
                  <h6>
                    판매자가 자신의계좌로 직접 현금 입금을 유도한다면 절대
                    입금하지 마시고 롯데ON으로 신고 해주세요.
                  </h6>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <div
                          style={{
                            textAlign: "center",
                            fontSize: "14px",
                          }}
                        >
                          <h8>필수표기정보 더보기</h8>
                        </div>
                        <br></br>
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <h8>
                          제조사/원산지 상세 이미지 참조/한국<br></br>
                        </h8>
                        <h8>
                          상품번호 PD764630-LO1024511029_1024511030<br></br>
                        </h8>
                        <h8>
                          상품상태 새상품<br></br>
                        </h8>
                        <h8>
                          브랜드 아이시스<br></br>
                        </h8>
                        <h8>
                          제조국 한국<br></br>
                        </h8>
                        <h8>
                          식품의 유형 먹는 샘물<br></br>
                        </h8>
                        <h8>
                          포장단위별 용량(중량) 및 포장단위별 수량 1.5L*12펫
                          <br></br>
                        </h8>
                        <h8>
                          제조연월일(포장일, 생산년도) 및 유통기한 또는
                          품질유지기한 본 상품은 해당 물류센터 직발송 상품인
                          관계로 제조연월 정보 제공이 어렵습니다./ 제조일로부터
                          12개월<br></br>
                        </h8>
                        <h8>
                          원재료명 및 함량 (원산지정보) 상세이미지 참조<br></br>
                        </h8>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  </div>
                </div>

                <img
                  style={{ width: "720px", marginTop: "20px" }}
                  src="https://doc-pub.lotteon.com/ec/public/P2636E6CA760957D688BA88B1BA765DAF78815E9D898E3F34810E543BACBCF281/file" alt = "..."
                ></img>
                <div style={{ width: "720px" }}>
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      marginLeft: "300px",
                      borderColor: "1px solid black",
                      borderRadius: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    상세정보 더보기
                  </button>
                  <div
                    style={{
                      marginTop: "80px",
                    }}
                  >
                    <h3
                      style={{
                        display: "inline",
                      }}
                    >
                      리뷰(31)
                    </h3>
                    <TextField
                      color="secondary"
                      className="search4"
                      label="궁금한 점을 찾아보세요"
                      style={{
                        marginLeft: 350,
                        marginTop: -25,
                        width: 360,
                        backgroundColor: "#fff",
                      }}
                      margin="normal"
                      variant="outlined"
                    ></TextField>
                    <div
                      style={{
                        width: "100%",
                        borderBottom: "1px solid black",
                      }}
                    ></div>
                  </div>
                  <div style={{ marginTop: "25px" }}>
                    <div
                      style={{
                        marginLeft: "30px",
                        width: "30%",
                        borderRight: "1px solid lightgray",
                      }}
                    >
                      <Rating
                        size="medium"
                        name="half-rating"
                        defaultValue={4.6}
                        precision={0.5}
                      ></Rating>
                      <h2> 4.6/5</h2>
                    </div>
                    <div
                      style={{
                        width: "68%",
                        marginLeft: "280px",
                        marginTop: "-90px",
                        fontSize: "11px",
                      }}
                    >
                      <div
                        style={{
                          height: "40px",
                          margin: "5px",
                          display: "inline",
                        }}
                      >
                        <h8>유통기한 </h8>

                        <h8> "적당해요"</h8>
                        <LinearProgress
                          variant="determinate"
                          style={{
                            width: "120px",
                            marginLeft: "180px",
                            marginTop: "-10px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          height: "40px",
                          margin: "5px",
                        }}
                      >
                        <h8>재구매의사 </h8>

                        <h8> "재구매의사 있어요"</h8>
                        <LinearProgress
                          variant="determinate"
                          style={{
                            width: "160px",
                            marginLeft: "180px",
                            marginTop: "-10px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginTop: "20px",
                      borderBottom: "1px solid lightgray",
                    }}
                  ></div>
                  <div
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    <text>총33건</text>
                    <button
                      style={{
                        borderRight: "1px solid lightgray",
                        backgroundColor: "none",
                        marginLeft: "430px",
                      }}
                    >
                      랭킹순
                    </button>
                    <button
                      style={{
                        backgroundColor: "none",
                      }}
                    >
                      최신순
                    </button>
                  </div>
                  <div
                    style={{
                      marginTop: "40px",
                    }}
                  >
                    <AdbIcon></AdbIcon>
                    <text>sksn12</text>
                    <div
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Rating
                        size="small"
                        name="half-rating"
                        defaultValue={4.6}
                        precision={0.5}
                      ></Rating>
                    </div>
                    <text>판매자 : 룻데칠성음료(주)서부KA지점</text>
                    <div
                      style={{
                        marginTop: "20px",
                        width: "100%",
                        backgroundColor: "lightgray",
                        height: "60px",
                        borderRadius: "10px",
                        textAlign: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <text>재구매의사 “보통이에요”</text>
                      <text
                        style={{
                          marginLeft: "200px",
                        }}
                      >
                        유통기한 “적당해요”
                      </text>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <MoodIcon></MoodIcon>
                      <text>도움돼요0 </text>
                      <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                      <text>0</text>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginTop: "20px",
                      borderBottom: "1px solid lightgray",
                    }}
                  ></div>
                  <div
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <h3>교환 반품안내</h3>
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails>
                        <Typography></Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <h3>주의 사항</h3>
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails>
                        <Typography></Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <h3>A/S 안내</h3>
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails>
                        <Typography></Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Main);

