import React from "react";
const Header = (props) => {
    return ( 
        <div className="header-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand">{props.title}</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;