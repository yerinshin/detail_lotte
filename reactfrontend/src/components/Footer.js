import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";


  const useStyles = makeStyles((theme) => ({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: '100px',
      paddingRight: '50PX',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
 
    },
  }));
  
  
function Footer(props) {
    const classes = useStyles();
    return (
        
        <footer className={classes.footer}>
            <Grid container spacing = {5}>
            <Grid item xs={3}>
            <Button style={{ fontSize: "35px", marginTop : "80px", marginLeft : "60px"}} color="secondary">
            LOTTE ON
            </Button>
            </Grid>
            <Grid item xs={4} >
            
          <Typography  color="textSecondary">
              <b>롯데쇼핑 주식회사</b><br></br>
              {'대표이사 : 강희태'}<br></br>
              {'주소 : 서울특별시 송파구 올림픽로'}<br></br>
              {'사업자등록번호 : 000-00-00000(롯데쇼핑(주)'}<br></br>
              {'통신판매업 신고: 서울송파 제 0000호'}
              <Link color="inherit" href="#">
                사업자 정보 확인
              </Link>
              <br></br>
              {'호스팅 서비스 사업자 : 롯데쇼핑(주)'}<br></br>
              {'Copyright © LOTTESHOOPING Co.,LTD. All rights reserved.'}
           </Typography>
          </Grid> 
          <Grid item xs = {5}>
          <Typography  color="textSecondary" >
              <b>고객센터</b><br></br>
              {'대표 : 1899-0000 | 장보기 전용 : 1899 -3000'}<br></br>
              {'E-mail : lotteon@lotte.net'}<br></br>
              {'부정비리 신고 E-mail : open@lotte.net'}<br></br><br></br>
              <b>콘텐츠산업진흥법에 의한 콘텐츠보호안내 </b>
              <Link color="inherit" href="#">
               자세히보기
              </Link><br></br><br></br>
              <b>롯데멤버스 에스크로 </b>
              <br></br>
              {'고객님의 안전거래를 위해 현금 등으로 결제 시 결제금액 전액에 대해 소비자 피해 방지 서비스를 이용합니다.'}<br></br>
           </Typography>
            
            </Grid>  
            </Grid>
        </footer>
    );
}

export default Footer;