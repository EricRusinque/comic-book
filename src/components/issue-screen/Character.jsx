import { useSelector } from 'react-redux';

export const Character = () => {

   const { characters } = useSelector( state => state.comic);

   return ( 
      <div className='issue__container-characters'>
        <h1 className='issue-title'>Characters</h1>
        <div className='issue-images-container'>
        {
          (characters.length === 0)
          ?
          <div>
            <h3>No Characters</h3>
          </div>
          :
          characters.map(({results}) => {
            return (
              <div className='issue-images-details' key={results.name}>
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
