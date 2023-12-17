import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Link from "next/link";
import PublicIcon from "@mui/icons-material/Public";



const MainBody = () => {
  const Mainbody = {
    height: "75vh",
    position: "relative",
    backgroundColor: "#FFC017",
    marginInline: "100px",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={{}}>
      <div style={{ backgroundColor: "#FFC017" }}>
        <div style={Mainbody}>
          <div style={{ position: "absolute", width: "500px" }}>
            <p style={{ color: "black", fontSize: "80px", marginTop: "100px" }}>
              Stay curious.
            </p>
            <p style={{ color: "black", fontSize: "24px", marginTop: "29px" }}>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <button
              style={{
                borderRadius: "20px",
                border: "none",
                backgroundColor: "black",
                fontSize: "15px",
                color: "white",
                width: "200px",
                height: "50px",
                fontWeight: "bold",
                marginTop: "40px",
              }}
            >
              Start reading
            </button>
          </div>
        </div>
      </div>
      <Typography
        variant="body1"
        color="initial"
        style={{ marginLeft: "90px", marginTop: "10px" }}
      >
        Trending on meduim
      </Typography>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",

          padding: "10px",
          marginTop: "2px",
          marginInline: "100px",
        }}
      >
        <div style={{ marginLeft: "20px", marginBottom: "10px" }}>
          <Typography variant="body1" style={{ fontSize: "14px" }}>
            Enrique Dans
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "17px", fontWeight: "bold" }}
          >
            Google launches Gemini… but again...
          </Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}>
            Dec 9 · 42 min read
          </Typography>
        </div>

        <div style={{ marginLeft: "20px" }}>
          <Typography variant="body1" style={{ fontSize: "14px" }}>
            Ben Bernard in tech-at-instacart
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "17px", fontWeight: "bold" }}
          >
            Monte Carlo, Puppetry and Laughter: ....
          </Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}>
            Dec 9 · 42 min read
          </Typography>
        </div>

        <div style={{ marginLeft: "20px" }}>
          <Typography variant="body1" style={{ fontSize: "14px" }}>
            Admiral Cloudberg
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "17px", fontWeight: "bold" }}
          >
            A Matter of Millimeters: ..
          </Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}>
            Dec 9 · 42 min read
          </Typography>
        </div>

        <div style={{ marginLeft: "20px" }}>
          <Typography variant="body1" style={{ fontSize: "14px" }}>
            Mariya Mansurova
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "17px", fontWeight: "bold" }}
          >
            Can LLMs Replace Data Analysts? ...
          </Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}>
            Dec 11 · 19 min read
          </Typography>
        </div>

        <div style={{ marginLeft: "20px" }}>
          <Typography variant="body1" style={{ fontSize: "14px" }}>
            Orrin Onken{" "}
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "17px", fontWeight: "bold" }}
          >
            The Christmas I Broke Us
          </Typography>
          <Typography variant="body1">Dec 9 · 42 min read</Typography>
        </div>

        <div style={{ marginLeft: "20px" }}>
          <Typography variant="body1" style={{ fontSize: "14px" }}>
            Admiral Cloudberg
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "17px", fontWeight: "bold" }}
          >
            A Matter of Millimeters...
          </Typography>
          <Typography variant="body1">Dec 9 · 42 min read</Typography>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginInline: "100px",
          marginTop: "40px",
        }}
      >
        <div style={{ width: "60%" }}>
          <div style={{display:"flex", flexDirection:"row"}}>
          <div>
            <Typography
              variant="body1"
              style={{ fontSize: "14px", width: "50%" }}
            >
              Lessig
            </Typography>
            <Typography
              variant="body1"
              style={{ fontSize: "17px", fontWeight: "bold" }}
            >
              ChatGPT, or: How I Learned to Stop Worrying and Love AI
            </Typography>
            <Typography variant="body1">
              In my first book, Code and Other Laws of Cyberspace (1999), I told
              the story of why I had become a lawyer. My uncle, Richard
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src="/images/art1.jpg" style={{width:"200px",height:"130px"}}></img>
            </div>
        </div>


        <div style={{display:"flex", flexDirection:"row",marginTop:"50px"}}>
          <div>
            <Typography
              variant="body1"
              style={{ fontSize: "14px", width: "50%" }}
            >
              Oscar Rhea
in
Pitfall
            </Typography>
            <Typography
              variant="body1"
              style={{ fontSize: "17px", fontWeight: "bold" }}
            >
              And then immediately wondering why I bothered
            </Typography>
            The story of why I had become a lawyer. My uncle, Richard
            <Typography variant="body1">
             
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src="/images/art2.jpg" style={{width:"200px",height:"130px"}}></img>
            </div>
        </div>
        
        </div>

        <div style={{marginLeft:"70px", position:"sticky", width:"30%" }}>
          <Typography variant="body1" color="initial" style={{fontWeight:"bold",marginTop:"20px"}}>Discover more of what matters to you</Typography>
          <div>
            <button style={{width:"100px", height:"30px", marginRight:"6px" ,border:"3px solid #F2F2F2 ",borderRadius:"20px",marginTop:"5px", backgroundColor:"#F2F2F2"}}>Programming</button>
            <button style={{width:"100px",marginRight:"6px",height:"30px" ,border:"3px solid #F2F2F2 ",borderRadius:"20px",marginTop:"5px", backgroundColor:"#F2F2F2"}}>Data Science</button>
            <button style={{width:"100px",marginRight:"6px",height:"30px" ,border:"3px solid #F2F2F2 ",borderRadius:"20px",marginTop:"5px", backgroundColor:"#F2F2F2"}}>Technology</button>

            <button style={{width:"100px", height:"30px", marginRight:"6px" ,border:"3px solid #F2F2F2 ",borderRadius:"20px",marginTop:"5px", backgroundColor:"#F2F2F2"}}>Python</button>
            <button style={{width:"100px",marginRight:"6px",height:"30px" ,border:"3px solid #F2F2F2 ",borderRadius:"20px",marginTop:"5px", backgroundColor:"#F2F2F2"}}>Javascript</button>
            <button style={{width:"100px",marginRight:"6px",height:"30px" ,border:"3px solid #F2F2F2 ",borderRadius:"20px",marginTop:"5px", backgroundColor:"#F2F2F2"}}>Development</button>

            
            <button style={{width:"100px", height:"30px", marginRight:"6px" ,border:"3px solid #F2F2F2 ",borderRadius:"20px",marginTop:"5px", backgroundColor:"#F2F2F2"}}>Andriod</button>
            <button style={{width:"100px",marginRight:"6px",height:"30px" ,border:"3px solid #F2F2F2 ",borderRadius:"20px",marginTop:"5px", backgroundColor:"#F2F2F2"}}>IOS</button>
            <button style={{width:"100px",marginRight:"6px",height:"30px" ,border:"3px solid #F2F2F2 ",borderRadius:"20px",marginTop:"5px", backgroundColor:"#F2F2F2"}}>Windows</button>
          </div>

          <div style={{marginTop:"50px"}}>
            <Typography variant="body1" color="initial" style={{color:"green",marginBottom:"20px",marginTop:"20px"}}>See more Topics</Typography>
            <Divider/>

            <div style={{marginTop:"10px",display:"flex",flexDirection:"row", width:"",flexWrap:"wrap"}} >

            <Typography variant="body1"  style={{fontSize:"14px", marginLeft:"20px"}}>Help</Typography>
            <Typography variant="body1"  style={{fontSize:"14px", marginLeft:"20px"}}>Status</Typography>
            <Typography variant="body1"  style={{fontSize:"14px", marginLeft:"20px"}}>About</Typography>
            <Typography variant="body1"  style={{fontSize:"14px", marginLeft:"20px"}}>Careers</Typography>
            <Typography variant="body1"  style={{fontSize:"14px", marginLeft:"20px"}}>Blog</Typography>
            <Typography variant="body1"  style={{fontSize:"14px", marginLeft:"20px"}}>Privacy</Typography>
            <Typography variant="body1"  style={{fontSize:"14px", marginLeft:"20px"}}>Terms</Typography>
            <Typography variant="body1"  style={{fontSize:"14px", marginLeft:"20px"}}>Text to Speech</Typography>
            <Typography variant="body1"  style={{fontSize:"14px", marginLeft:"20px"}}>Teams</Typography>
           
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainBody;
