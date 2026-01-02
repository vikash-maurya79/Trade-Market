function RightSection({ leftHeading, leftParagraph, leftLink, rightImageUrl }) {
    let i="";
    if(leftLink){
        i="fa-solid fa-arrow-right";
    }
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-6 console">
                    <h5 className="mb-3">{leftHeading}</h5>
                    <p className="mt-3 mb-3">{leftParagraph}</p>
                    <a href="#" style={{
                        textDecoration:
                            'none'
                    }}>{leftLink} <i class={i}></i></a>
                </div>
                <div className="col-6">
                    <img src={rightImageUrl} ></img>
                </div>
            </div>
        </div>
    );
}

export default RightSection;