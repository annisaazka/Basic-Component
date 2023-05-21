import './sidebar.css'
import icon1 from '../img/sidebar/Icon.svg';
import icon2 from '../img/sidebar/Icon2.svg';
import logo from '../img/sidebar/Logo.svg';



function sidebar() {
  return (
    <div className='Sidebar'>
        <div class='images'>
            <img src={logo}/> <br></br>
            <h4>PAGES</h4>
            <div class="icon-with-text">
                <img src={icon1}/>
                <a href="/" class="icon-text">Products</a>
            </div>
            <div class="icon-with-text">
                <img src={icon2}/>
                <a href="/users" class="icon-text">Users</a>
            </div>
        </div>
    </div>
  );
}

export default sidebar;