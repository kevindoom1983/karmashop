import React, { Component } from 'react';

class NewsLetter extends Component {

    constructor(props) {
        super(props);
       
        
    }

    render() {
        return (
            <div className="col-lg-4  col-md-6 col-sm-6">
				<div className="single-footer-widget">
					<h6>Newsletter</h6>
					<p>Stay update with our latest</p>
					<div className="" id="mc_embed_signup">
						<form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
							method="get" className="form-inline">
								<div className="d-flex flex-row">
								<input className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
									required="" type="email"/>
									<button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
								</div>
								<div className="info"></div>
						</form>
					</div>
				</div>
			</div>
            
           
        );
	}
	
    
   

   
}

export default NewsLetter;