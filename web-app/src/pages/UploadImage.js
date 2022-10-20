import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"
import url from '../config/API';

function UploadImage() {
    const navigate = useNavigate();
    const [file,setFile] = useState("");

    const setimgfile = (e)=>{
        setFile(e.target.files[0])
    }

    const addUserData = async(e)=>{
        e.preventDefault();

        var formData = new FormData();
        formData.append("img",file)
        //formData.append("idUser",localStorage.getItem('idUser'));

        const response = await fetch(url+'upload-image',{ method: 'POST',headers: {
            "Content-Type":"multipart/form-data",
            'x-access-token' : localStorage.getItem('token'),
            }, body: formData});
        const data = await response.json();
        
    }
    

    return (
        <>
            <div className='container mt-3'>
                <h1>Upload Your Img Here</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Select Your Image</Form.Label>
                        <Form.Control type="file" name='photo' onChange={setimgfile} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={addUserData}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default UploadImage;
