import TextHeader from '../components/TextHeader';
import ProfileCard from '../components/ProfileCard';
import '../styles/Profile.css';

function Profile() {

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
