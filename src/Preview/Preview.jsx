import "./Preview.css";

export const Preview=({names,array,ed})=>{
    return (
        <div className="preview-comtainer">
            <div className="d-flex justify-content-start">
                <a href={ed.linkedin} className="fab fa-linkedin">{}</a>
                <a href={ed.twitter} className="fab fa-twitter">{}</a>
                <a href={ed.github} className="fab fa-github">{}</a>
            </div>
            <div className="d-flex justify-content-start text-name" >
                    {names.firstname}{" "}{names?.middlename}{" "}{names.lastname}
            </div>
                <div className="d-flex" style={{position:"absolute",right:"0rem", top:"-5rem" }}>
                    {/*  eslint-disable-next-line */}
                    <iframe className="video" width="215" height="415" src="https://www.youtube.com/embed/tgbNymZ7vqY" style={{borderRadius:"1rem 1rem"}}></iframe>
                </div>
                <div className="d-flex justify-content-start job-container">
                    <span className="job-info">Available For</span><span className="job-text">Full Time</span><span className="job-text">Immediate</span>
                </div> 
                <div className="d-flex justify-content-start job-container">
                    <span className="job-info">Available From</span><span className="job-from">Contract</span><span className="job-from">20/10/2021</span>
                </div> 
                <div className="d-flex justify-content-start">
                    <span className="personal-info">{names.email}</span><span className="personal-info">{names.number}</span>
                </div>
                <div className="d-flex justify-content-start job-container">
                    <div className="job-info">CAREER HEADLINE</div>
                </div>
                <div className="d-flex justify-content-start job-container">
                    <div className="job-info" style={{color:"#000",width:"18rem"}}>It is possible to commit no mistakes and still lose. That is not a weakness,that is life</div> 
                </div>
                <div className="d-flex justify-content-start job-container">
                    <span className="job-change">MOTIVATION FOR A JOB SEARCH
                        <div className="d-flex justify-content-start " style={{marginTop:"-1rem"}}>
                            <div className="d-flex justify-content-start job-container tags" style={{fontSize:"small", color:"#000"}}>First Job </div>  
                            <div className="d-flex justify-content-start job-container tags" style={{fontSize:"small", color:"#000"}}>Career Change </div> 
                        </div>
                    </span>
                    <span className="job-prefrence">WORK PREFRENCES
                    <div className="d-flex justify-content-start " style={{marginTop:"-1rem"}}>
                            <div className="d-flex justify-content-start job-container" style={{fontSize:"small", color:"#000",marginTop:"1.6rem"}}>Remote Only </div>  
                        </div>
                    </span>
                </div>
                <div class="d-flex justify-content-start ">
                    <span className="job-change">ROLE PREFRENCES
                    <div className="d-flex justify-content-start " style={{marginTop:"-1rem"}}>
                            <div className="d-flex justify-content-start job-container" style={{fontSize:"small", color:"#000",marginTop:"1.5rem"}}>Senior UI/UX Designer </div>  
                        </div>
                    </span>
                    <span className="job-prefrences">INDUSTRY PREFRENCES
                    <div className="d-flex justify-content-start" style={{marginTop:"-1rem"}}>
                            <div className="d-flex justify-content-start " style={{fontSize:"small", color:"#000",marginTop:"1.5rem"}}>Full Stack Engineer </div>  
                        </div>
                    </span>
                </div>
                <div className="d-flex justify-content-evenly  ">
                    <div className="d-flex flex-column bd-highlight mb-3 education-journey align-items-start">Education
                    <div className=" bd-highlight" style={{color:"#D1D5DB"}}>Bahus University</div>
                    <hr style={{width: "6rem",height:"0.5rem", borderRadius:"1rem", color:"#FEE2E2"}}/></div>
                    <div className="d-flex flex-column bd-highlight mb-3 education-journey align-items-start">Education
                    <div className="bd-highlight" style={{color:"#D1D5DB"}}>Bahus University</div>
                    <hr className="line" style={{width: "8rem",height:"0.5rem", borderRadius:"1rem", color:"#FECACA"}}/></div>
                    <div className="d-flex flex-column bd-highlight mb-3 education-journey align-items-start">Education
                    <div className=" bd-highlight" style={{color:"#D1D5DB"}}>Bahus University</div>
                    <hr className="line" style={{width: "10rem",height:"0.5rem", borderRadius:"1rem", color:"#FCA5A5"}}/></div>
                </div>
                <div className="d-flex justify-content-center" >
                    <div className="row">
                        <div className="col-7" style={{marginLeft:"0rem" ,maxWidth:"15rem"}}>
                            Talent Board
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex flex-column bd-highlight mb-3">
                                            <div className="p-2 bd-highlight"><img alt="" src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg" className="img-1"/></div>
                                            <div className="p-2 bd-highlight"><img alt="" src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg" className="img-1"/></div>
                                            <div className="p-2 bd-highlight"><img alt="" src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg" className="img-1"/></div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column">
                                            <div className="bd-highlight"><img alt="" src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg" className="img-2"/></div>
                                            <div class="d-flex justify-content-start ">
                                            <img alt="" src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg" className="img-3" style={{marginLeft:"-2.3rem"}}/>
                                            <img alt="" src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg" className="img-3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col" style={{maxWidth:"15rem",wordWrap:"break-word",border:"1px solid #E5E7EB",marginLeft:"1rem"}}>
                        Technical Skills
                        <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                            <div className="d-flex justify-content-start job-container tags" style={{fontSize:"small", color:"#000"}}>TypeScript </div>  
                            <div className="d-flex justify-content-start job-container tags" style={{fontSize:"small", color:"#000"}}>C++ </div>
                            <div className="d-flex justify-content-start job-container tags" style={{fontSize:"small", color:"#000"}}>JavaScript </div>
                            <div className="d-flex justify-content-start job-container tags" style={{fontSize:"small", color:"#000"}}>Python </div>
                            <div className="d-flex justify-content-start job-container tags" style={{fontSize:"small", color:"#000"}}>NodeJs </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="motto">
                        Motto I Live By
                        <div className="motto-text">{names.motto}</div>
                    </div>
                <div className="row">
                    <div className="col-7" style={{maxWidth:"15rem",wordWrap:"break-word"}}>
                        <div className="matters">What Matters To Me</div>
                        <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                            {array.matters[0]?.map((element,i) => (
                                <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                                <div key={i} className="d-flex justify-content-start job-container" ><p className="tag">{element}</p></div>
                              </div>  
                            ))}
                        </div>
                        <div className="matters" style={{marginTop:"1rem"}}>Qualities I Bring</div>
                        <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                            {array.myQualties[0]?.map((element,i) => (
                                <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                                <div key={i} className="d-flex justify-content-start job-container" ><p className="tag">{element}</p></div>
                              </div>  
                            ))}
                        </div>
                        <div className="matters" style={{marginTop:"1rem"}}>Qualities I seek in an Employee</div>
                        <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                            {array.employQualties[0]?.map((element,i) => (
                                <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                                <div key={i} className="d-flex justify-content-start job-container" ><p className="tag">{element}</p></div>
                              </div>  
                            ))}
                        </div>
                        <div className="matters" style={{marginTop:"1rem"}}>Companies that inspire me</div>
                        <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                            {array.companies[0]?.map((element,i) => (
                                <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                                <div key={i} className="d-flex justify-content-start job-container" ><p className="tag">{element}</p></div>
                              </div>  
                            ))}
                        </div>
                        <div className="matters" style={{marginTop:"1rem" ,fontSize:"small",color:"#D1D5DB"}}>IN 5 YEARS FROM NOW I WILL BE HAPPY</div>
                        <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                                <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                                <div  className="d-flex justify-content-start job-container" ><p className="normal-tag">It is possible to commit no mistakes and still lose. That is not a weakness,that is life</p></div>
                              </div>  
                        </div>
                    </div>
                    <div className="col " style={{maxWidth:"25rem",wordWrap:"break-word",marginLeft:"1rem",marginTop:"1rem"}}>
                        <div className="d-flex justify-content-start" style={{marginTop:"0rem",fontSize:"small"}}>Soft Skills</div>
                    <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"25rem"}}>
                            <div className="d-flex justify-content-start job-container normal-tag" style={{fontSize:"small", color:"#000"}}>TypeScript </div>  
                            <div className="d-flex justify-content-start job-container normal-tag" style={{fontSize:"small", color:"#000"}}>C++ </div>
                            <div className="d-flex justify-content-start job-container normal-tag" style={{fontSize:"small", color:"#000"}}>JavaScript </div>
                            <div className="d-flex justify-content-start job-container normal-tag" style={{fontSize:"small", color:"#000"}}>Python </div>
                            <div className="d-flex justify-content-start job-container normal-tag" style={{fontSize:"small", color:"#000"}}>NodeJs </div>
                    </div>
                    <div className="d-flex justify-content-start" style={{marginTop:"1rem", fontSize:"small"}}>Hobbies and Interests</div>
                        <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                            {array.hobbies[0]?.map((element,i) => (
                                <div className="d-flex justify-content-start flex-wrap" style={{marginTop:"-1rem", maxWidth:"15rem"}}>
                                <div key={i} className="d-flex justify-content-start job-container" ><p className="tag">{element}</p></div>
                              </div>  
                            ))}
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="d-flex justify-content-start col">
                        <div className="d-flex flex-column align-items-start">
                            <div className="ed-heading">Education</div>
                            <div className="univ-heading">{ed.college}</div>
                            <div className="univ-program">{ed.program}</div>
                            <div className="univ-about">Futuristic technologies of electronic media</div>
                            <ul className="about-tech d-flex flex-column align-items-start">
                                <li className="list-items">Developing Professional agency</li>
                                <li className="list-items">Perspectives on Education: Socio/Psych/Phil </li>
                                <li className="list-items">Childhood, Social Justice and Education</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}