export default function Project(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <a href={props.github}>Github Link</a>
        </div>
    )
}