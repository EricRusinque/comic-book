import React from 'react'
import Modal from 'react-modal'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import './issuesmodal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, 0%)',
  },
};

Modal.setAppElement('#root');

export const IssuesModal = () => {
  
  const { modalOpen, comic} = useSelector( state => state.modal);

    const { closeComicModal } = useModal();
    const closeModal = () => {
      closeComicModal();
    }

  return (
    <Modal
        isOpen={ modalOpen }
        onRequestClose={closeModal}
        style={customStyles}
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={200}
    >
             {
                (comic?.image?.original_url)       ?
                  <div className='modal-details-container'>
                    <div className="details-containers">
                    <div>
                      <h1>Characters</h1>
                      <span>Click in See More...</span>
                    </div>
                    <div>
                      <h1>Teams</h1>
                      <span>Click in See More...</span>
                    </div>
                    <div>
                      <h1>Locations</h1>
                      <span>Click in See More...</span>
                    </div>
                    <div>
                      <h1>Concepts</h1>
                      <span>Click in See More...</span>
                      </div>
                      <button className='see-more'>
                        <Link  to={`/issue/${ comic.id }`} onClick={closeComicModal}>
                          See More...
                        </Link>                          
                       </button>              
                      </div>
                    <img src={comic?.image?.original_url} alt="" />
                  </div>
                  :
                <h2>Uppss, something has happened</h2>
                  
              }
    </Modal>
    )
}
