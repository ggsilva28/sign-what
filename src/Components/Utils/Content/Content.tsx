import './Content.scss'

const Content = (props:any) => {
    return (
        <div className="content">
            {props.children}
        </div>
    )
}

export default Content;