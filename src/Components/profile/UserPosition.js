import 'bootstrap/dist/css/bootstrap.min.css'
import { faFacebook, faDiscord,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserPosition = () => {
  return (
    <>
        <div className="UserPosition">
            <p>Occuped Postion : Senior Developer</p>
            <p>Team : Team Scorpion</p>
            <FontAwesomeIcon className='Font-icons faFacebook' icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon className='Font-icons faDiscord' icon={faDiscord}></FontAwesomeIcon>
            <FontAwesomeIcon className='Font-icons faTwitter' icon={faTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon className='Font-icons faLinkedin' icon={faLinkedin}></FontAwesomeIcon>
        </div>
    </>
  )
}

export default UserPosition
