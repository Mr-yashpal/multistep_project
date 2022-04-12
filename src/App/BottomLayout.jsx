import { Link } from "react-router-dom";
const BottomLayout = (props) => {
  let BackButton, NextButton;
  if(props.page[0]!="") {BackButton = <Link to={props.page[0]} ><button>Back</button></Link>}
  if(props.page[1]=="/submit") {NextButton = "Submit"}
  else {NextButton =  "Next Step" }

  
    return (
      <>
        <section>
        <hr></hr>
      <br/>

        <div className="buttonDiv">
        {/* <button onClick={() => getIndex(-1)} >Back</button> */}
        {/* <button className="next-button" onClick={() => getIndex(1)} >Next Step</button> */}
        {BackButton}
        <Link to={props.page[1]} ><button type="submit" className="next-button">{NextButton}</button></Link>
        </div>
        </section>
      </>
    )
  };
  export default BottomLayout;