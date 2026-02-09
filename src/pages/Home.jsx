
import { resumeData } from "../d/data.js";
import myPhoto from "../images/my_photo.jpg";
import myPhoto2 from "../images/my_photo2.jpg"

export default function Home() {
    return (
        <div className={"homeDiv"}>
            <img src={myPhoto} id = "image1" alt = "This was a photo of me, but it did not load"></img>
            <img src={myPhoto2} id = "image2" alt = "This was a photo of me, but it did not load"></img>
            <h1>{resumeData.name}</h1>
            <ul className={"contacts"}>
                {resumeData.contacts.map((c, i) => <li key={i}>{c}</li>)}
            </ul>

            <h3>{resumeData.title}</h3>

        </div>
    );
}
