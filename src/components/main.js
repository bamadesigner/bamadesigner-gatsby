import React from "react"

const Main = ({ children }) => {
    return (
        <div id="body">
            <div id="main">
                <div className="container">
                    <main id="content">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Main