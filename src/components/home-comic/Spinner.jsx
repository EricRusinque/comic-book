import './spinner.css';

export const Spinner = () => {
    return (
      <div className='loader-wrapper'>
        <div className='loader'>
          <div className='loader loader-inner'></div>
        </div>
          <span className='spinner-span'>Cargando...</span>
      </div>
    )
}
