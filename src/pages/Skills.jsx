import { resumeData } from "../d/data";

export default function Skills() {
    return (
        <>
            <h1>Skills</h1>
        <ul className = "skills">
            {resumeData.skills.map((s, i) => <a href={"https://www.google.com/search?q="+s} target = "_blank" rel="noreferrer"><li key={i}>{s}</li></a>)}

        </ul>
            <h1>Languages</h1>
        <ul className= "languages" >
            {resumeData.languages.map((l, i)=> <li key = {i}>{l}</li>)}
        </ul>
        </>
    );
}
