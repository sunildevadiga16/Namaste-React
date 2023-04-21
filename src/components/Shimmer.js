const Shimmer = () => {
    return (
        <>
            <div className="container card-parent" data-testid="shimmer">

                {Array(8)
                    .fill("")
                    .map((e, index) => {
                        return (
                            <div className="card-parent-shimmer" key={index}>
                                <div className="shimmer" >Loading......</div>
                            </div>
                        )
                    }
                    )}

            </div>
        </>
    );
}

export default Shimmer;