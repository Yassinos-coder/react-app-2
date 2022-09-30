import 'bootstrap/dist/css/bootstrap.min.css' 
import '../Components.css'

const UserSkill = () => {
  return (
    <>
        <div className="UserSkill">
            <div className="Skill">
                <h3>Skill Progress Bar</h3>
                <p>DevOps:</p>
                <div className="DevOps">
                    <p></p>
                    <div className="DevOpsSkill">
                        <p className='SkillLevel'>80%</p>
                    </div>
                </div>
                <p>FullStackJs:</p>
                <div className="FullStackJs">
                    <p></p>
                    <div className="FullStackJs_Skill">
                        <p className='FullStackJs_SkillLevel'>75%</p>
                    </div>
                </div>
                <p>Team Leading:</p>
                <div className="TeamLeading">
                    <p></p>
                    <div className="TeamLeading_Skill">
                        <p className='TeamLeading_SkillLevel'>95%</p>
                    </div>
                </div>
                <p>Communication Skills:</p>
                <div className="CommunicationSkills">
                    <p></p>
                    <div className="CommunicationSkills_Skill">
                        <p className='CommunicationSkills_SkillLevel'>60%</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserSkill