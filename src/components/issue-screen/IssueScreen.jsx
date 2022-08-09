import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useIssue } from '../../hooks/useIssue';
import { Teams,Spinner,Character, Concepts, Locations } from './index';
import './issue-screen.css';

export const IssueScreen = () => {

  const navigate = useNavigate();
  const { loading, comic } = useSelector( state => state.comic);
  const a = useIssue()
  const handleReturn = () => {
    navigate(-1);
  }

  return (
    <>
      {
          loading
          ?
          <div className='loader__issue-container'>
            <Spinner />
          </div>
          :
          <div className='issue__container'>
            <div className='issue__details'>
                <Character/>
                <Teams/>
                <Locations/>
                <Concepts/>
              <a 
                onClick={handleReturn}
                className='return__btn'
              >
                Return
              </a> 
            </div>
            <div className='issue__image-container'>
              {
                (comic.image)
                  ?
                  <img src={comic.image.original_url} alt="" />
                  :
                <h2>Uppss, something has happened</h2>
                  
              }
            </div>
          </div> 
      }

      </>
  )
}
