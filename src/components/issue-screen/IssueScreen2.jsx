import React from 'react'

export const IssueScreen2 = () => {
  return (
    <div>
         {

          loading
          ?
          <div className='loader__container'>
            <Spinner />
          </div>
          :
            <>
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
            </>
      }

    </div>
  )
}
