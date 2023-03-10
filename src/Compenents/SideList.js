function SideList(props){

    const stil = {
        
        margin: '0 10px'
    };

    const hover_btn = {
        className: "btn btn-md btn-primary"
    }

    const normal_btn = {
        className: "btn btn-md btn-dark"
    }


    return (
        <li className="my-2 " style={stil} >
            <a href={"#"} 
                onClick= {props.tiklandiginda}
                className="btn btn-md btn-dark"
                onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                onMouseOut={(e) => Object.assign(e.target, normal_btn)}
                >
                {props.menuElemani}
            </a>
        </li>
    );
}

export default SideList;