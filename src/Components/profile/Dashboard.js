import 'bootstrap/dist/css/bootstrap.min.css' 
import '../Components.css'
import Address from './Address'
import FullName from './FullName'
import ProfilePhoto from './ProfilePhoto'
import UserPosition from './UserPosition'
import UserSkill from './UserSkill'
import UserTasks from './UserTasks'
// React is the Best So far !!!

const Dashboard = () => {

  return (
    <div>
      {/* Dash Header  */}
      <div className="Header">
        <div className="Header-title">
            <h1>Welcome To Panel</h1>
        </div>
        <div className="Header-right-side">
          <div className="date-time">
            <p>Today is : {new Date().toLocaleString("fr-MA", {day : '2-digit', month: 'numeric',year:'numeric'})}</p>
          </div>
        </div>
      </div>
      {/* Main Dash */}
      <div className="Main">
        <div className="Main-Box-Header">
          <div className="ProfileLogo-Dash">
            <ProfilePhoto />
          </div>
          <div className="User-Data">
            <section>
              <FullName />
            </section>
            <section>
              <Address />
            </section>
          </div>
          <div className="User-Info">
            <UserPosition />
          </div>
        </div>
        <div className="UserSkill-Dash">
          <UserSkill />
        </div>
        <div className="UserTasks-Dash">
          <UserTasks />
        </div>
        <h3>In you we trust & Believe. <br /> Make us proud!</h3>
      </div>
    </div>
  )
}

export default Dashboard
