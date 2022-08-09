import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faThList, faTh } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { gridList } from "../../actions/comics";
import './grid-list.css';
export const GridList = () => {

    const dispatch = useDispatch();
    
    const { grid } =  useSelector( state => state.comics);

    const handleChange = ( value ) => {
        dispatch(gridList(value));
    }


  return (
      
        <div className={ (grid) ?  'change__container-true change__container'  : 'change__container'}>
                            
            <FontAwesomeIcon 
                className='navbar-changes-icons list'
                icon={ faThList } 
                onClick= { () =>  handleChange(false) }
            />
            <FontAwesomeIcon 
                className='navbar-changes-icons grid'
                icon={ faTh } 
                onClick={ () =>  handleChange(true) }
            />
        </div>
  )
}
