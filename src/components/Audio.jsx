export const Audio = ({id, audioFile}) => {
    console.log(audioFile)
    return (
        <audio>
            <source className="clip" id={id} src={audioFile} type="audio/mpeg" key={audioFile}/>
        </audio>
    )
}