import React, { Component } from "react";
import "./About.css";
import profile_picture from "../assets/profile_picture.JPG";

export default class About extends Component {
	render() {
		return (
			<div>
				<div>
					<div className="split left">
						<div className="centered">
							<img
								className="profile_image"
								src={profile_picture}
								alt="Profile Pic"
							/>
						</div>
					</div>
					<div className="split right">
						<div className="centered">
							<div className="name_title">Andrey Fernandez</div>
							<div className="brief_description">
								Hello! My name is Andrey Fernandez. I discovered my passion for
								programming creating fun games with Scratch in elementary
								school. I am excited by the limitless creative potential of
								coding and aspire to develop mobile and web applications that
								positively impact the lives of others. I envision myself
								leveraging technology to address societal challenges and empower
								underserved communities like my native East Harlem, NYC. My goal
								is to contribute meaningfully to a tech-driven future that
								everyone can benefit from. In my free time, I find joy running,
								exploring nature, playing basketball, and hosting NBA game watch
								parties with friends over Zoom.
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
