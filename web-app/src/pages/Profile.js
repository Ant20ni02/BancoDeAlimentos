import TextHeader from '../components/TextHeader';
import ProfileCard from '../components/ProfileCard';
import '../styles/Profile.css';
import useTabTitle from '../custom-hooks/useTabTitle';

function Profile() {
    useTabTitle("BAMX - Perfil");

    return (
        <>
            <TextHeader text="Perfil" />
            <div className="Profile">
                <ProfileCard />
                {/* //TODO: Feature 'Update profile' */}
            </div>
        </>
    );
}

export default Profile;