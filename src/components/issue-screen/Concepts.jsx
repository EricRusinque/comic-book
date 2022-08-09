import { useSelector } from 'react-redux';

export const Concepts = () => {
    const { concepts } = useSelector( state => state.comic);


    return (

      <div className='issue__container-concepts'>
        <h1 className='issue-title'>Concepts</h1>
        <div className='issue-images-container'>
            {
              (concepts.length === 0)
              ?
              <div className='issue-images-details'>
                <h3>No Concepts</h3>
              </div>
              :
              concepts.map(({results}) => {
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
