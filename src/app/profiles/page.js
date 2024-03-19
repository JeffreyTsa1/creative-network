import React from 'react'
import './styles.css'


const profile = {
    name: "John Doe",
    bio: "I am a person",
    location: "New York",
    email: "",
    wechat: "",
    phone: "",
    linkedin: "",
    instagram: "",
    twitter: "",
    facebook: "",
    interests: "",
    hashtags: ["#shanghai", "#film"],
    clips: [
        {
            "Name": "Clip 1",
            "Description": "This is a clip",
            "URL": "https://media.istockphoto.com/id/1470902366/video/lion-walking-in-field-of-tranquil-golden-wildlife-reserve-at-sunrise.mp4?s=mp4-640x640-is&k=20&c=7WdS-LRhPK1IDl63O9p6zNFzMviiaCgxUSeGr_1pQx4=",
        },
        //Give me more of these clips
        {
            "Name": "Clip 2",
            "Description": "Surfer riding and turning with spray on blue ocean wave, surfing ocean lifestyle, extreme sports, slow motion",
            "URL": "https://media.istockphoto.com/id/1140675444/video/young-surfer-ripping-gnarly-turn.mp4?s=mp4-640x640-is&k=20&c=Y8S6HPimKxeMPx8DPAbqrjayjLvxlkScIuNO5lkcLXM=",
        },
        {
            "Name": "Clip 3",
            "Description": "Woman Japanese ethnicity, sharing her thoughts and emotion at the therapy, led by the female psychotherapist",
            "URL": "https://media.istockphoto.com/id/1489067560/video/woman-japanese-ethnicity-at-the-therapy.mp4?s=mp4-640x640-is&k=20&c=SKc0KSEqeSHgA5FxGCQ60h7zI1-JEMqN1KlxTBoixvQ=",
        },
        {
            "Name": "Clip 4",
            "Description": "Iconic view from Accademia Bridge (Italian: Ponte dell'Accademia) on Grand Canal (Canal Grande) in Venice. Santa Maria Della Salute and historic houses are illuminated by the first warm morning light. Italy - Europe.",
            "URL": "https://media.istockphoto.com/id/1472991361/video/venice-canala-grande-and-santa-maria-della-salute.mp4?s=mp4-640x640-is&k=20&c=jswYtIw6qV_Pk7puU9QTy3ikynaQD0nw2uXsGgz0rbE=",
        },
        {
            "Name": "Clip 3",
            "Description": "Glass exploding",
            "URL": "https://media.istockphoto.com/id/1473973347/video/glass-exploding.mp4?s=mp4-640x640-is&k=20&c=yZExFRyu3I-pgQovweHxP7kh9cLC4LK5dt7JPp8CrXo=",
        },
        {
            "Name": "Clip 3",
            "Description": "Giraffes walking in a row in grassy field below dramatic sunset sky on nature reserve at sunset,Maasai Mara National Reserve,Kenya,Africa.Shot in 8K Resolution - RED V-RAPTOR 8K VV",
            "URL": "https://media.istockphoto.com/id/1471847063/video/giraffes-walking-in-a-row-below-dramatic-sunrise-sky-on-nature-reserve.mp4?s=mp4-640x640-is&k=20&c=19dPSd0WceynkBrIvE39tIBliYd8VaCPK1zPa5j0O48=",
        },
        {
            "Name": "Clip 3",
            "Description": "Slow motion beautiful lion walking in field of tranquil,golden wildlife reserve at sunset,Maasai Mara National Reserve,Kenya,Africa.Shot in 8K Resolution - RED V-RAPTOR 8K VV",
            "URL": "https://media.istockphoto.com/id/1470902366/video/lion-walking-in-field-of-tranquil-golden-wildlife-reserve-at-sunrise.mp4?s=mp4-640x640-is&k=20&c=7WdS-LRhPK1IDl63O9p6zNFzMviiaCgxUSeGr_1pQx4=",
        },
    ]

}



const page = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Arial'
    
    }}>
        {/* <h1></h1> */}
        <div>
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>

        </div>
            <h2> Clips </h2>
        <div className='grid-layout'>
            {
                profile.clips.map((clip) => {
                    return (
                        <div className='box'>
                            <iframe width="400" height="250" src={clip.URL} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <h2>{clip.Name}</h2>
                            <p>{clip.Description}</p>
                        </div>
                )})
            
            }
        </div>

    </div>
  )
}

export default page