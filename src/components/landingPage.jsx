import React,{useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Navbar from "./navbar";
import { Box } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import reading from './icons/reading1.svg';
import AOS from 'aos';
import "aos/dist/aos.css";

const UseStyles = makeStyles((theme)=>({
  intro:{
      display:"flex",
      alignItems: "center",
      textAlign: "left",
      width:"100%",
      height:"100vh", 
  },
  introNameBox:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height: "100vh",
  },
  hello:{
    fontFamily:"Karla",
    fontSize: 40,
    fontWeight:"bold"
  },
  name:{
      fontFamily:"Karla",
      fontSize: "3rem",
      color:"#0F4C75",
      // color:"#54E346",
      fontWeight:"bolder",
  },
  introPicBox:{
       display:"flex",
       alignItems:"center",
       width:"50%",
       height: "100vh",
  },
  readingImg:{
    marginTop:"10vh",
    height:"90vh",
    width:"100%"
  },
  socialIcons:{
      fontSize: 35,
      marginRight: "20px",
  }
}));

function LandingPage(){
const classes = UseStyles();

useEffect(()=>{
  AOS.init({});
},[]);

return(
    <div>
       <Navbar />
       <Box className={classes.intro}>
           <Box className={classes.introNameBox} data-aos="fade-up" data-aos-duration="2200">
               <Box>
                        <h1>
                        <span className={classes.hello}>Welcome to</span>
                        <br/>
                        <span className={classes.name}>INSTA_DEF</span>
                        </h1>
                        <div>
                          <a href=""><GitHubIcon style={{color:"#171515"}} className={classes.socialIcons}/></a>
                          <a href=""><LinkedInIcon style={{color:"#0077b5"}} className={classes.socialIcons}/></a>
                          <a href=""><FacebookIcon style={{color:"#4267B2"}} className={classes.socialIcons}/></a>
                        </div>
                </Box>
           </Box>
           <Box className={classes.introPicBox} data-aos="fade-left" data-aos-duration="2200">
               <img src={reading} alt="readingSVG" className={classes.readingImg}></img>
           </Box>
       </Box>   
    </div>   
);
   
}
export default LandingPage;