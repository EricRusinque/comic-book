import { useSelector } from 'react-redux';

export const Locations = () => {


    const { locations } = useSelector( state => state.comic);


    return (
      <div  className='issue__container-locations'>
        <h1 className='issue-title'>Locations</h1>
        <div className='issue-images-container'>
        {
             (locations.length === 0)
             ?
             <div className='issue-images-details'>
               <h3>No Locations</h3>
             </div>
             :
             locations.map(({results}) => {
               return (
                 <div className='issue-images-details'  key={results.name}>
                     <img src={ results.image.tiny_url } alt={results.name} />    
                     <p>{results.name}</p>
                 </div>
               )
             }) 
        }
        </div>
      </div>
    )
}
