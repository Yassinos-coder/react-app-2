import 'bootstrap/dist/css/bootstrap.min.css' 
import '../Components.css'
import Address from './Address'
import FullName from './FullName'
import ProfilePhoto from './ProfilePhoto'
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
          <div className="Data-User">
            <section>
              <FullName />
            </section>
            <section>
              <Address />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
