
import { resumeData } from "../d/data";

export default function Education() {
    return (
        <div>
            {resumeData.education.map((edu, i) => (
                <a href = {edu.link}>
                    <div key={i} className={"educationDiv"}>
                        <h3>{edu.degree}</h3>
                        <h3>{edu.school}</h3>
                        <p>{edu.years}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}
