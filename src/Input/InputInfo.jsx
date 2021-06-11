import {useState} from "react";
import { Preview } from "../Preview/Preview"
import "./InputInfo.css";

export const InputInfo=()=>{
    const button=[{
        id:1,
        name:"Male"
    },{
        id:2,
        name:"Female"
    },{
        id:3,
        name:"Non-Binary"
    },{
        id:4,
        name:"Prefer not to discuss"
    }]
    function classHandler(id){
        const response=button.find((item)=>item.id===id)
        setButtonClassId(response.id)
    }
    function updateField(e){
        setNames({
            ...names,[e.target.name]:e.target.value
        })
    }
    function arrayUpdate(e){
        const response=e.target.value.split(" ")
        setArray({
            ...array,[e.target.name]:[response]
        })
    }
    function edUpdate(e){
        setEd({...ed,[e.target.name]:e.target.value})
    }
    const [buttonClassId,setButtonClassId]=useState(false);
    const [count,setCount]=useState(270)
    const[names,setNames]=useState({
        firstname:"",
        middlename:"",
        lastname:"",
        email:"",
        number:"",
        motto:""
    })
    const [array,setArray]=useState({
        matters:[],
        myQualties:[],
        employQualties:[],
        hobbies:[],
        companies:[]
    })
    const[ed,setEd]=useState({
        college:'',
        date:'',
        program:'',
        github:'',
        twitter:'',
        linkedin:''
    })
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-7">
                <p>Tell me information about yourself and I can help you find your dream job.</p>
                <div className="d-flex justify-content-around">
                    <div className="register-conatainer"><div className="register">Registration</div><div className="info">Information About</div></div>
                    <div className="sample">Sample Resume</div>
                </div>
                <div className="resume-container">
                    <p>Upload a CV(WORD,PDF)</p>
                    <div className="d-flex justify-content-around" style={{marginTop:"5rem"}}>
                        <div className="photo">Upload Photo</div>
                        <div className="video-container"><div className="video">Make a video</div><div className="video-text">Upload video for UI Analytics</div></div>
                    </div>
                </div>
                <div className="d-flex justify-content-start">
                    Basic Info <span className="tool">i</span>
                </div>
                <form className="form-inline">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="First Name" onChange={updateField}  name="firstname"/>
                        <input type="text" className="form-control" placeholder="Middle Name" onChange={updateField}  name="middlename"/>
                        <input type="text" className="form-control" placeholder="Last Name" onChange={updateField}  name="lastname"/>
                    </div>
                    <div className="d-flex justify-content-start">
                        <div className="text">Gender</div>
                    </div>
                    <div className="d-flex justify-content-start">
                            {button.map((item)=>(
                                <span className={buttonClassId===item.id?"gender-selected":"gender"} key={item.id} onClick={()=>classHandler(item.id)}>{item.name}</span>
                            ))}
                              <input type="text" className="form-control" style={{"width":"10rem"}}placeholder="Current Location"/>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Ethincity"/>
                        <input type="text" className="form-control" placeholder="Any Disablities"/>
                        <input type="text" className="form-control" placeholder="Nationality"/>
                    </div>
                    <div className="d-flex justify-content-start">
                    <div className="text">Date Of Birth</div>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Month"/>
                        <input type="text" className="form-control" placeholder="Year"/>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Email" onChange={updateField}  name="email"/>
                        <input type="text" className="form-control" placeholder="Contact Number" onChange={updateField}  name="number"/>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="LinkedIn Account Link" name="linkedin" onChange={edUpdate}/>
                        <input type="text" className="form-control" placeholder="Twitter Account Link" name="twitter" onChange={edUpdate}/>
                        <input type="text" className="form-control" placeholder="Github" name="github" onChange={edUpdate}/>
                    </div>
                    <div className="resume-container">
                     <p>+ Add more link</p>
                    </div>
                    <div className="d-flex justify-content-start">
                        About Me <span className="tool">i</span>
                    </div>
                    {count >0 ?<input type="text" className="input-control" placeholder="A motto I live by" onChange={(e)=>{setCount(count-1);updateField(e)}} name="motto"/>:<input type="text" className="input-control" placeholder="A motto I live by" disabled/>}
                    <div className="d-flex justify-content-end word-count">
                        {count}{" "}symbols
                    </div>
                    <input type="text" className="input-control" placeholder="What matters to me" name="matters" onChange={arrayUpdate}/>
                    <input type="text" className="input-control" placeholder="Hobbies and interests" name="hobbies" onChange={arrayUpdate} />
                    <input type="text" className="input-control" placeholder="Qualities I bring" name="myQualties" onChange={arrayUpdate}/>
                    <input type="text" className="input-control" placeholder="Qualities I seek in an employeer" name="employQualties" onChange={arrayUpdate}/>
                    <input type="text" className="input-control" placeholder="Companies that inspire me" name="companies" onChange={arrayUpdate}/>
                    <div className="resume-container">
                        <p>+ Add more language</p>
                    </div>
                    <div className="d-flex justify-content-start">
                        Education <span className="tool">i</span>
                    </div>
                    <div className="d-flex justify-content-start education">
                        School/College
                    </div>
                    <input type="text" className="input-control" placeholder="Name of the Institution/Platform" name="college" onChange={edUpdate}/>
                    <input type="text" className="input-control" placeholder="Specialization"/>
                    <input type="text" className="input-control" placeholder="Degree/Diploma/Certificate Name" name="program" onChange={edUpdate}/>
                    <input type="text" className="input-control" placeholder="GPA"/>
                    <div className="d-flex justify-content-start " style={{marginTop:"2rem"}}>
                        <div>Date of Starting</div>
                        <div className="college">Completion(or expected)</div>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Year"/>
                        <input type="text" className="form-control" placeholder="Year"/>
                    </div>
                    <input type="text" className="input-control" placeholder="Notable Professions I studied under"/>
                    <div className="d-flex justify-content-start">
                        <div className="text">My top 4 subjects/modules studied</div>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Subject 1"/>
                        <input type="text" className="form-control" placeholder="Subject 2"/>
                        <input type="text" className="form-control" placeholder="Subject 3"/>
                        <input type="text" className="form-control" placeholder="Subject 4"/>
                    </div>
                    <div className="resume-container">
                        <p>+ Add subjects</p>
                    </div>
                    <div className="button-group">
                        <button className="btn-back">Back</button>
                        <button className="btn-save">Save And Close</button>
                        <button className="btn-confirm"> Confirm</button>
                    </div>
                </form>
                </div>
                <div className="col">
                <Preview names={names} array={array} ed={ed}/>
                </div>
            </div>
            </div>
        </>
    )
}