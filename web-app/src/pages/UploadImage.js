import {useNavigate} from "react-router-dom"
import url from '../config/API';
import uploadImage from './styles/uploadImage.module.css';

function UploadImage() {
    const navigate = useNavigate();

    const convert2base64 = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            addUserData(reader.result.toString());
        };
        reader.readAsDataURL(file);
    };

    const addUserData = async(base64_data)=> {
        const formData = JSON.stringify({ idUser: localStorage.getItem('idUser'), img: base64_data});
        const response = await fetch(url+'updateProfilePicture',{ method: 'PUT',headers: {
            "Content-Type": "application/json",
            'x-access-token' : localStorage.getItem('token'),
            }, body: formData});
        const data = await response.json();
        navigate("/bamx/perfil", { replace: true });
    }
    return (
        <div className={uploadImage.grid}>
            <div className={uploadImage.flex}>
                <input id="fileupload" className="hidden" type="file" onChange={e => convert2base64 (e)} />
                <label htmlFor="fileupload">Subir o cambiar imagen</label>
            </div>
        </div>
    );
}

export default UploadImage;
