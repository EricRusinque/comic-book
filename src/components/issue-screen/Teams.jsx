import { useSelector } from 'react-redux';

export const Teams = () => {

  const { teams } = useSelector( state => state.comic);


  return (
    <div className='issue__container-teams'>
      <h1 className='issue-title'>Teams</h1>
      <div className='issue-images-container'>
      {
        (teams.length === 0)
        ?
        <div className='issue-images-details'>
          <h3>No Teams</h3>
        </div>
        :
        teams.map(({results}) => {
          return (
            <div className='issue-images-details' key={results.name}>
                <img src={ results.image.tiny_url } alt={results.name} />    
                <p>{results.name}</p>
            </div>
          );
        })
      }
      </div>
    </div>
  )
}
