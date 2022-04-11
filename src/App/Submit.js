import formSubmitedImg from '../images/formSubmited.png'


function Submit({ FormData }) {
  return (
    <>


      <section className=" submitform submitformData">
        <div>First Name:      <span>{FormData.fName}</span></div>
        <div>Last Name:       <span>{FormData.lName}</span></div>
        <div>date of birth:   <span>{FormData.dateOfBirth}</span></div>
        <div>Email:           <span>{FormData.email}</span></div>
        <div>Address:         <span>{FormData.address}</span></div>
        <div>Message:         <span>{FormData.bigMessage}</span></div>
        <div>message Choice1: <span>{FormData.mChoice1}</span></div>
        <div>message Choice2: <span>{FormData.mChoice2}</span></div>
        <div>male:          <span>{FormData.male}</span></div>
        <div>Female:          <span>{FormData.female}</span></div>
        <div>Checkout Choice1:<span>{FormData.bChoice1}</span></div>
        <div>Checkout Choice2:<span>{FormData.bChoice2}</span></div>
      </section>
      <section className="submitform">
        <img src={formSubmitedImg} alt="Form Submit Image" className='submitImage'></img>
      </section>
    </>
  );
}

export default Submit;