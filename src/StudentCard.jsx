import ProfilePicture from "./assets/sukuna.jpg"

function StudentCard(){
    return(
        <div className="card">
            <img className="card-image" src={ProfilePicture} alt="Profile Picture"></img>
            <p className="card-name">Marc Vash Cane</p>
            <address className="card-email">fidzaccheus@gmail.com</address>
        </div>
    );
}

export default StudentCard