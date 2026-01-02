function LeftSection({ imageUrl, rightHeading, rightParagraph, firstLink, secondLink, playStoreImage, appleAppStoreImage }) {
    let i;
    let j;
    if (firstLink) {
        j = "fa-solid fa-arrow-right";
    }
    else {
        j = "";
    }
    if (secondLink) {
        i = "fa-solid fa-arrow-right";
    }
    else {
        i = "";
    }
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src={imageUrl} alt="image"></img>
                </div>
                <div className="col-6">
                    <h5 className="mt-3 mb-5">{rightHeading}</h5>
                    <p className="pb-5">{rightParagraph}</p>
                    <div className="row mb-5">
                        <div className="col"><a href="#" style={{ textDecoration: "none" }}>{firstLink}  <i class={j}></i></a></div>
                        <div className="col"><a href="#" style={{ textDecoration: "none" }}>{secondLink} <i class={i}></i></a></div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <a href="#" style={{ textDecoration: 'none' }}><img src={playStoreImage} alt="Play store logo"></img></a>
                        </div>
                        <div className="col">
                            <a href="#" style={{ textDecoration: 'none' }}><img src={appleAppStoreImage} alt="Apple app store logo"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;