
import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom";


const Dates=()=>{
const [startDate,setStartDate]=useState();
const [endDate,setEndDate]=useState();
const [toDate,setToDate]=useState();

// const navigate = useNavigate();

async function getDates() {
  try {
    const response = await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${startDate}&end=${endDate}`);
    const data = await response.json();
    if(data==[])
      console.log("you have wrote reverse dates")     
    console.log(data);
    setToDate(data)
  } catch (error) {
    alert("failed to fetch");
  }
}





useEffect(()=>{
    getDates()
},[startDate,endDate])

const seedate= toDate && toDate.map(i, j)=>(<resolte ></resolte>)
return(
    <div>
        <h1>תכתבו שני תאריכים</h1>
        <input onBlur={(e) => setStartDate(e.target.value)} placeholder="Start Date"></input>
        <br/>
        <input  onBlur={(e) => setEndDate(e.target.value)} placeholder="End Date"></input>
        <br/>
        
        <button onClick={()=>{getDates()}}>שליחה</button>
          {seedate}
       
    </div>
)

}
export default Dates
