import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileLogo from '../img/ProfilePhoto.png'


const ProfilePhoto = () => {
  return (
    <div>
      <div className='ProfileLogo'>
        <img src={ProfileLogo} alt="Your ProfileLogo"/>
      </div>
    </div>
  )
}

export default ProfilePhoto
