export default function Job(props){
    return(
        <div>
            <h3>{props.company}</h3>
            <h4>{props.title}</h4>
            <p>{props.date}</p>
            <p>{props.desc}</p>
        </div>

    )
}