const NasaInfo = ({nasaData}) => {
    return (
        <div>
            <img src = {nasaData.hdurl}/>
            <span>{nasaData.date}</span>
            <h2>{nasaData.title}</h2>
            <p> {nasaData.explanation} </p>
            
        </div>
    );

};


export default NasaInfo;