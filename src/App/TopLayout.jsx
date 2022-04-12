// import { Outlet, Link } from "react-router-dom";
const TopLayout = ({page}) => {
  const pagesName = ['Sign Up', 'Message', 'CheckBox']
  return (
    <>
      <section className="title">
          <div>{page>1 ?<span>✔</span>: page==1 ?<span className="pageColour">1</span>:<span>1</span>}SignUp</div>
          <div>{page>2 ?<span>✔</span>: page==2 ?<span className="pageColour">2</span>:<span>2</span>}Message</div>
          <div>{page>3 ?<span>✔</span>: page==3 ?<span className="pageColour">3</span>:<span>3</span>}CheckBox</div>
      </section>
      <br/>
      <section>
      <hr></hr>
      <br/>
      <br/>
      <div className="steps">
      <small className="step">Step{page}/3</small>
      <b className="heading">{pagesName[page-1]}</b>
      </div>
      </section>

    </>
  )
};

export default TopLayout;