import "./Item.scss";

const Item = (props: any) => {
    return (
        <div className="item-container">
            {props.children}
        </div>
    )
};

export default Item