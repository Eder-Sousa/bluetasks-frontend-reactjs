import React from 'react';

const Spinner = () => 
    <div className="d-flex justify-content-center">
        <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Carregando...</span>
        </div>
    </div>

export default Spinner;