import React, { useState } from 'react';
import TextHeader from '../components/TextHeader';
import PortalModal from '../components/Modal/PortalModal';

function Home() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <TextHeader text="Home" />
            <button onClick={() => setShowModal(true)}>Open Modal</button>

            <PortalModal onShow={showModal} onClose={() => setShowModal(false)} title="¡Cuenta creada exitosamente!" > 
                <p>Felicidades, ya puedes comenzar a usar el nuevo sistema del banco de alimentos.</p>
            </PortalModal>
        </>
    );
}

export default Home;
