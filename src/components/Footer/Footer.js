import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppBar from "@mui/material/AppBar";

export default function Footer() {
  return (
    <div className="container-footer" >
      <div className="navigator-bar">
        <AppBar
          className="header"
          position="static"
          style={{ backgroundColor: "transparent" }}
        >
        <br></br>
          <p style={{color: "black"}}>AR Automotores. All rights reserved.</p>
          <p style={{ textTransform: "uppercase" }}>Seguinos en redes!</p>

          <ul className="navigator-footer">
            <li>
              <a
                href="https://www.facebook.com"
              
              >
                <FacebookIcon color="disabled" fontSize="large" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
               
              >
                <InstagramIcon color="disabled" fontSize="large" />
              </a>
            </li>
            <li>
            <a
              href="https://www.whatsapp.com"
            
            >
              <WhatsAppIcon color="disabled" fontSize="large" />
            </a>
          </li>
          </ul>
        </AppBar>
      </div>
    </div>
  );
}