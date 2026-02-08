
import { resumeData } from "../d/data.js";

export default function Home() {
    return (
        <div className={"homeDiv"}>

            <h1>{resumeData.name}</h1>
            <ul className={"contacts"}>
                {resumeData.contacts.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
            <h3>{resumeData.title}</h3>

        </div>
    );
}
