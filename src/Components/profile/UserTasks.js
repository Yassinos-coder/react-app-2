import 'bootstrap/dist/css/bootstrap.min.css' 
import '../Components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faCheck } from '@fortawesome/free-solid-svg-icons'

const UserTasks = () => {
  return (
    <>
        <div className="UserTasks">
            <h3>To Do</h3>
            <div className="UserTask-p">
                <p>{"->"} Oversee Database Migration with "Team Data".
                    <FontAwesomeIcon className='Font-icons-Tasks faCheck' icon={faCheck} />
                    <FontAwesomeIcon className='Font-icons-Tasks faPaperClick' icon={faPaperclip} />
                </p>

            </div>
            <div className="UserTask-p">
                <p>{"->"} Approve Release Build ver(101.158.1.0).
                    <FontAwesomeIcon className='Font-icons-Tasks faCheck' icon={faCheck} />
                    <FontAwesomeIcon className='Font-icons-Tasks faPaperClick' icon={faPaperclip} />
                </p>
            </div>
            <div className="UserTask-p">
                <p>{"->"} Meeting with Staff at 15:30PM.
                    <FontAwesomeIcon className='Font-icons-Tasks faCheck' icon={faCheck} />
                    <FontAwesomeIcon className='Font-icons-Tasks faPaperClick' icon={faPaperclip} />
                </p>
            </div>
            <div className="UserTask-p">
                <p>{"->"} Meeting with junior javascript teams.
                    <FontAwesomeIcon className='Font-icons-Tasks faCheck' icon={faCheck} />
                    <FontAwesomeIcon className='Font-icons-Tasks faPaperClick' icon={faPaperclip} />
                </p>
            </div>
        </div>
    </>
  )
}

export default UserTasks