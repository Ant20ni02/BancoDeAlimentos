import React from 'react';
import TextHeader from '../components/TextHeader';
import DialogModal from '../components/DialogModal';

function Home() {    
    return (
        <>
            <TextHeader text="Home" />
            <DialogModal title="Test" message="Testing" />
        </>
    );
}

export default Home;
