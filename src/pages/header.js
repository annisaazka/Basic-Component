import './header.css'
import icon1 from '../img/header/1.svg';
import icon2 from '../img/header/2.svg';
import icon3 from '../img/header/3.svg';
import logo from '../img/header/Logo.svg';
import path from '../img/header/Path.svg';



function header() {
  return (
    <div className='Header'>
        <div class='image'>
        <img src={icon1}/>
            <img src={icon2}/>
            <img src={icon3}/>
            <img src={logo} />
            <a>Acne</a>
            <img src={path}/>   
        </div>
    </div>
  );
}

export default header;