
import { resumeData } from "../d/data";

export default function Education() {
    return (
        <div>
            {resumeData.education.map((edu, i) => (
                <div key={i} className={"educationDiv"}>
                    <a href = {edu.link}><h3>{edu.degree}</h3>
                    <h3>{edu.school}</h3>
                    <p>{edu.years}</p></a>
                </div>
            ))}
        </div>
    );
}
