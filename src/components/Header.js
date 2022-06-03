import React, {useState} from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux';


function Header() {

    const [closeWrapper, setCloseWrapper] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="tesla" />
      </a>
      <Menu>
      {/* {cars && cars.map((car, index)=>{
                <a href="#">{car}</a>      
            })} */}
          <a href="#">Model S</a>                
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
        
      </Menu>
      
      <RightMenu>        
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>          
          <CustomMenu  onClick={()=> setCloseWrapper(true)}/>        
      </RightMenu>
        <BurgerMenu show = {closeWrapper}>
            <CloseWrapper>
                <CustomClose onClick={()=> setCloseWrapper(false)}/>
            </CloseWrapper>  
            {/* data not coming */}
            {/* {cars && cars.map((car, index)=>{
                <li key={index}>
                <a href="#">{car}</a>      
                </li>                
            })}           */}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade Inventory</a></li>
            <li><a href="#">Cyber Truck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Models</a></li>
            <li><a href="#">Solar Panels</a></li>
            <li><a href="#">Accounts</a></li>
            <li><a href="#">Settings</a></li>
        </BurgerMenu>     
    </Container>
  );
}

export default Header;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content : space-between;
  padding: 0 20px;
  z-index : 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width : 768px) {
      display : none;
  }
`;

const RightMenu = styled.div`
    display : flex;
    align-items : center;
    a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right : 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
    cursor : pointer;
`

const BurgerMenu = styled.div`
    position : fixed;
    top : 0;
    bottom : 0;
    right : 0;
    background : white;
    list-style-type: none;
    width : 270px;
    padding : 20px;
    opacity : 0.85;
    display : flex;
    flex-direction : column;
    text-align : start;
    transform : ${props => props.show ? 'translate(0)' : 'translate(100%)'};
    transition : transform 0.3s;
    li {
        padding : 15px 0 ;
        border-bottom : 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight : 600;
        }
    }
`

const CloseWrapper = styled.div`
    display : flex;
    justify-content : flex-end;
`

const CustomClose = styled(CloseIcon)`
    cursor : pointer;
`