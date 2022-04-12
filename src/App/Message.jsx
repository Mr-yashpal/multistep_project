import img2 from '../images/img2.png'
import TopLayout from "./TopLayout";
import BottomLayout from "./BottomLayout";


function Message({ message, dispatch }) {
  function onChange(e) {
    const action = {
      type: e.target.name,
      value: e.target.value,
    }
    dispatch(action);
  }
  return (
    <section className="sectionClass">
      <img src={img2} alt="Message image"></img>
      <main>
        <TopLayout page={2} />
        <small>Message</small>
        <textarea className='textarea' onChange={onChange} name="bigMessage" value={message.bigMessage} >
          
        </textarea>
        {/* <br></br> */}
        <div className='messageChoice'>
        <input type="checkbox" checked={message.mChoice1} onChange={onChange} name="mChoice1" value={message.mChoice1} />
        <label  htmlFor="choice1">The number one choice</label><br />
        <input className='messageChoice1' checked={message.mChoice2} type="checkbox" onChange={onChange} name="mChoice2" value={message.mChoice2}  />
        <label htmlFor="choice2">The number two choice</label><br />
        </div>
        {/* <br />
        <br /> */}
        <BottomLayout  page={["/","/CheckBox"]} />
      </main>
    </section>
  );
}

export default Message;