import "./Item.scss";

export const Item = (props: any) => {
    return (
        <div className="item-container">
            {props.children}
        </div>
    )
};
