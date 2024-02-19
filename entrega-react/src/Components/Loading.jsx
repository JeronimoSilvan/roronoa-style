

const Loading = () => {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;