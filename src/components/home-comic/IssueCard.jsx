import './issue-card.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { IssuesModal } from './IssuesModal';
import { useModal } from '../../hooks/useModal';


export const IssueCard = ({image, name, issue_number, id,date_added }) => {

    const {grid} = useSelector( state => state.comics);

    const { openComicModal } = useModal({image,name, id});
    
    return (
         <div className={ (grid) ? 'issue-card-grid-container' :'issue-card-list-container' }>   
           <div onClick={ () => openComicModal() } className= { (grid)? 'issue-image-grid-container' : 'issue-image-list-container'}>
                <img src={image.original_url } alt={ name } className={(grid) ? 'issue-grid-image' : 'issue-list-image'} />
                <div className={(grid) ? 'issue-details-grid' : 'issue-details-list'}>
                    <h3>{(name) ? name + `: #${issue_number}` : `Volumen: #${issue_number}` }</h3>
                    <span >{date_added}</span>
                </div>     
           </div>
           <div className={ (grid) ? 'preview-grid-container' : 'preview-list-container'}>
                <Link to={`/issue/${ id }`} className='preview-list' /* className='preview-grid' */>
                        More...
                </Link>
           </div>
        </div>
              
    )
}
