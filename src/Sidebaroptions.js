
import "./Sidebaroption.css";

function Sidebaroptions({text,Icon}){
    return(
        <div className="Sidebaroption">
            <Icon/>
            <h2>{text}</h2>
        </div>
    );
}

export default Sidebaroptions;