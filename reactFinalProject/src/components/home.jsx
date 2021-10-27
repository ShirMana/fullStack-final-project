import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class Home extends Component {
    state = {};
    render() {
        return (
            <div className="container">
                <PageHeader titleText="Real App Home Page"></PageHeader>
                <div className="row">
                    <div className="col-12">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus diam, molestie at turpis sit amet, scelerisque maximus nunc. Vestibulum rutrum mauris et consectetur mollis. Suspendisse nec congue ante, ac viverra magna. Sed eget venenatis lorem, vitae mollis enim. Praesent sollicitudin id lacus ut rhoncus. Maecenas nec erat magna. In hac habitasse platea dictumst. Vivamus cursus vel erat in mollis. Integer viverra diam fermentum, pulvinar mi non, convallis mi.</p>
                        <p>Etiam scelerisque ac felis et lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec lorem in metus bibendum ultricies vel sit amet odio. Nulla vitae mi id sem ullamcorper accumsan. Nunc quis risus arcu. Duis sit amet mattis est, id efficitur felis. Fusce nec gravida tellus. Mauris egestas, dui non accumsan maximus, purus velit pharetra lectus, eu malesuada mauris lacus eu lectus. Vestibulum auctor porttitor augue, finibus mollis nibh faucibus ut.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;