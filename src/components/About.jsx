import User from "./User";
import UserClass from "./UseClass";
const About = () => {
    return(
        <div>
            <h1>About US</h1>
            <h2>Learning React Course</h2>
            {/* <User name = "sudheer" location = "RCPM"/> */}
            <UserClass name = "Vegulla" location = "RCPM" />
        </div>
    )
}

export default About;