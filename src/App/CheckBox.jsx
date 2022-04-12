import img3 from '../images/img3.png'
import TopLayout from "./TopLayout";
import BottomLayout from "./BottomLayout";
import Boy from "../images/Boy.png";
import Girl from "../images/Girl.png";


function CheckBox({ checkBox, dispatch }) {
    function onChange(e) {
        const action = {
            type: e.target.name,
            value: e.target.value,
        }
        dispatch(action);
    }

    return (
        <section className="sectionClass">
            <img src={img3} alt="CheckBox image"></img>
            <main>
                <TopLayout page={3} />
                <section className='checkout-div'>
                    <label>
                        <input type="radio" checked={checkBox.male} onChange={onChange} name="male" value={checkBox.male} />
                        <img src={Boy} alt="Sign Up image" className='checkout-img'   ></img>
                    </label>
                    <label>
                        <input type="radio" checked={checkBox.female} onChange={onChange} name="female" value={checkBox.female} />
                        <img src={Girl} alt="Sign Up image" className='checkout-img'   ></img>
                    </label>
                </section>
                <br />
                <br />
                <input className='checkbox' checked={checkBox.bChoice1} type="checkbox" onChange={onChange} name="bChoice1" value={checkBox.bChoice1} />
                <label className='checkbox-text' htmlFor="choice1">I want to add this option.</label><br />
                <input className='checkbox' checked={checkBox.bChoice2} type="checkbox" onChange={onChange} name="bChoice2" value={checkBox.bChoice2} />
                <label className='checkbox-text' htmlFor="choice2">Let me click on this checkbox and some cool stuf.</label><br />
                <BottomLayout page={["/message", "/submit"]} />
            </main>
        </section>
    );
}

export default CheckBox;