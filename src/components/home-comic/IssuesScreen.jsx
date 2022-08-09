import { useSelector } from 'react-redux';
import { useIssues } from '../../hooks/useIssues';
import { IssueCard, GridList, Spinner, IssuesModal } from './index';
import './issues-screen.css';	




export const IssuesScreen = () => {

    const a = useIssues();

    const {grid, comics, loading} = useSelector( state => state.comics); 

    return (
        <div>
                <div className='change-order'>
                    <h3>Issues</h3>
                    <GridList/>
                </div>
                <div className={ (grid) ? 'comic-grid-container' : 'comic-list-container'}> 
                {
                    loading 
                    ?
                    <Spinner/>
                    :
                    comics.map( issue => {
                        return (
                            <IssueCard key={ issue.id } {...issue} />
                        );
                    })
                }
            <IssuesModal/>

         </div>    
        </div>      
        
            
    )
}
