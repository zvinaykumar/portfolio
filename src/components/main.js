import React from 'react';
import "./content.css";
// import me from "./images/me.jpg";
import bg1 from "./images/bg1.jpg";

export const Main=()=>(

    <div>
        <img src={bg1} alt="loading..."></img>
        
            <div class="row">
            <div class="col-sm-12">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">About Me</h5>
                    <p class="card-text">Hey there I'm Vinay Kumar I am a professional developer and I start my journey  in the world of computer from an young age now I am a 21 year old.</p>
                    <h5 class="card-title">Skills</h5>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>React JS</li>
                    </ul>
                </div>
                </div>
            </div>

         <footer class="footer-size">
            
                <p>Copyright &copy; portfolio.com</p>
            
        </footer>
   </div>
   </div>


);