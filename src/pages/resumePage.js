import resumeImage from '../assets/images/resumeImage.jpeg'

import alumni1 from '../assets/images/alumni1.png'
import alumni2 from '../assets/images/alumni2.png'
import alumni3 from '../assets/images/alumni3.png'
import alumni4 from '../assets/images/alumni4.png'

import projectImg1 from '../assets/images/projectImg1.png'
import projectImg2 from '../assets/images/projectImg2.png'

const ResumePage = () => {
	return (
		<div className="resume_page">
			<div className="container">
				<h1 className="resume_heading">
					→ resume / <span>2021</span>
				</h1>

				<div className="resume_headimg_img">
					<img src={resumeImage} alt="resumeImage" />
				</div>

				{/* Basic Info */}
				<div className="row pb-5">
					<div className="col-lg-4 col-12 order-first order-lg-first pt-2">
						<div className="left">
							<p className="content_heading">Location</p>
							<p className="content">Denmark</p>
							<p className="content">Spain</p>
						</div>
					</div>
					<div className="col-lg-8 col-12 order-last order-lg-first pt-4 pt-lg-0">
						<p className="content">
							I am an Interaction Designer with experience in User Interface, User Experience, Prototyping, and Creative Collaboration.
						</p>
					</div>
					<div className="col-lg-4 col-12 order-first order-lg-first pt-4">
						<div className="left">
							<p className="content_heading">Skills</p>
							<p className="content">Interaction design</p>
							<p className="content">User interface</p>
							<p className="content">User experience</p>
							<p className="content">Visual design</p>
							<p className="content">Prototyping</p>
							<p className="content">Writing</p>
						</div>
					</div>
					<div className="col-lg-8 col-12 order-last order-lg-last pt-4 pt-lg-3">
						<p className="content">
							The people I work with consider me a team player who believes in multidisciplinary environments. I solve problems by
							networking with internal stakeholders, including external customers, to initiate and design human-centric and technically
							feasible solutions.
						</p>
						<p className="content">
							I love networking, knowledge sharing, and writing. I can speak English, Español, Dansk and at the moment I am learning 日本語.
						</p>
					</div>
					<div className="col-lg-4 col-12 order-first order-lg-last pt-4">
						<div className="left">
							<p className="content_heading">Contact</p>
							<p className="content">hola@ramses.work</p>
						</div>
					</div>
					<div className="col-lg-8 col-12 order-last order-lg-last pt-4 pt-lg-3">
						<p className="content">When I am not working, I enjoy playing video games and doing street photography</p>
					</div>
				</div>

				{/*  Work Experience */}
				<div className="work_experience">
					<h1 className="resume_heading">→ work experience</h1>

					<div className="row">
						<div className="col-lg-3 col-12 pt-2">
							<div className="left">
								<p className="content_heading">GAN Integrity</p>
								<p className="content" style={{ opacity: 0.7 }}>
									Copenhagen, Denmark
								</p>
							</div>
						</div>
						<div className="col-lg-9 col-12 pt-lg-0 pt-3">
							<p className="content">
								→ Senior Design Lead · April 2021 ~ Now <br /> Leading the design chapter in the R/D department. Currently focused on
								designing upcoming innovative product features for the compliance field. Managing the design team while maintaining and
								expanding our internal design system.
							</p>
							<p className="content">
								→ Design Lead · March 2020 ~ April 2021 /<span style={{ opacity: 0.7 }}> 1 years 2 months</span> <br /> Designing the vision
								for the product and managing the team to create a consistent integrated solution. Constant collaboration with
								cross-functional teams to design and develop a design system that would become the foundation for the current experience.
							</p>
							<p className="content">
								→ UI Developer @ GAN Integrity · July 2017 ~ March 2020 /<span style={{ opacity: 0.7 }}> 2 years 9 months</span>
								<br /> I designed UI and prototype solutions for a Legal Compliance SaaS product for the world's leading brands through
								discovery processes.
							</p>
						</div>

						<div className="col-lg-3 col-12 pt-5">
							<div className="left pt-4">
								<p className="content_heading">KenTech LTD</p>
								<p className="content" style={{ opacity: 0.7 }}>
									Canary Islands, Spain
								</p>
							</div>
						</div>
						<div className="col-lg-9 col-12 pt-1 pt-lg-5">
							<p className="content pt-2">
								<strong>→ UX/UI Design Developer · December 2015 ~ June 2017 / </strong>{' '}
								<span style={{ opacity: 0.7 }}>1 year 7 months</span> Collaborating closely with in-house and the overseas team to design
								the experience of existing and new products. Developed and designed the UI for cross-platform gambling products (Sportsbook
								and lottery).
							</p>
						</div>

						<div className="col-lg-3 col-12 pt-5">
							<div className="left pt-4">
								<p className="content_heading">Gigit LTD</p>
								<p className="content" style={{ opacity: 0.7 }}>
									United Kingdom
								</p>
							</div>
						</div>
						<div className="col-lg-9 col-12 pt-1 pt-lg-5">
							<p className="content pt-2">
								<strong>→ Lead Designer · April 2013 ~ December 2015 / </strong>
								<span style={{ opacity: 0.7 }}>2 years 9 months</span> Developing the brand guidelines and the user interface design for the
								cross-media B2C product (web, mobile, app, and events).
							</p>
						</div>

						<div className="col-lg-3 col-12 pt-5">
							<div className="left pt-4">
								<p className="content_heading" style={{ lineHeight: '22px' }}>
									University of Las Palmas de Gran Canaria
								</p>
								<p className="content" style={{ opacity: 0.7 }}>
									Canary Islands, Spain
								</p>
							</div>
						</div>
						<div className="col-lg-9 col-12 pt-1 pt-lg-5">
							<p className="content pt-3">
								<strong>→ Interaction Designer · January 2013 ~ December 2015 / </strong>
								<span style={{ opacity: 0.7 }}> 3 years</span> <br /> Worked together with the head department of the institution to
								redesign a user-centered web experience for the main University website.
							</p>

							<p className="content pt-2">
								<strong>→ Teaching Assistant · 2013 ~ 2015</strong> <br />
								Taught HTML/CSS and UI to Industrial Design students and mentored each student on defining, designing, and prototyping a
								SaaS product concept.
							</p>
						</div>

						<div className="col-lg-3 col-12 pt-5">
							<div className="left pt-4">
								<p className="content_heading">Canarias Control</p>
								<p className="content" style={{ opacity: 0.7 }}>
									Canary Islands, Spain
								</p>
							</div>
						</div>
						<div className="col-lg-9 col-12 pt-1 pt-lg-5">
							<p className="content pt-3">
								<strong>→ Industrial Designer · April 2013 ~ December 2015 / </strong>
								<span style={{ opacity: 0.7 }}>4 months</span>
								<br /> Design of the brand, UI, and patent drawings for a sleep tracking product.
							</p>
						</div>
					</div>
				</div>

				{/* Education */}
				<div className="education">
					<h1 className="resume_heading">→ education</h1>

					<div className="row">
						<div className="col-lg-6 col-12 pt-lg-0 pt-5">
							<p className="content_heading">User Experience Design Msc</p>
							<p className="content">2015~2016 @ Universidad Internacional de La Rioja</p>
							<p>
								A Masters Degree focused on User Experience research and User-Centered design. Supervised by Yusef Hassan, I wrote a thesis
								on user experience metrics entitled: “UX Metrics Management Tool.”
							</p>
						</div>
						<div className="col-lg-6 col-12 pt-lg-0 pt-5">
							<p className="content_heading">Industrial Design Engineering</p>
							<p className="content">2008~2013 @ Universidad de Las Palmas de Gran Canaria</p>
							<p className="content_sm">
								A comprehensive study program including industrial design, manufacturing, CAD, corporate identity, and branding topics.
								Wrote an essay on evolutive design and methods of reusing information to create an agile design process.
							</p>
						</div>
					</div>
				</div>

				{/* Certificate */}
				<div className="certificate">
					<h1 className="resume_heading">→ professional certificates</h1>

					<div className="row">
						<div className="col-lg-4 col-12 pt-lg-0 pt-5">
							<p className="content_heading">Foundations in Creative Leadership</p>
							<p className="content">2020 @ IDEO U</p>
							<p>
								Learning how to guide teams into the unknown through experimentation, break down a bold vision into actionable challenges,
								and make adjustments to culture to support creativity.
							</p>
						</div>

						<div className="col-lg-4 col-12 pt-lg-0 pt-5">
							<p className="content_heading">Design Workshops</p>
							<p className="content">2017 @ CIID</p>
							<p>Programming for Designers Service Design Designing Connected Products</p>
						</div>

						<div className="col-lg-4 col-12 pt-lg-0 pt-5">
							<p className="content_heading">Front-end dev for designers</p>
							<p className="content">2016 @ Recrea</p>
							<p>
								Indie course taught by:: Carlos Hdez. Medina and José R. Quevedo. The contents covered the process front-end using
								technologies such as SASS, HAML, JavaScript, and jQuery。
							</p>
						</div>
					</div>
				</div>

				{/* Alumni */}
				<div className="alumni">
					<h1 className="resume_heading">→ alumni</h1>

					<div className="row">
						<div className="col-lg-3 col-12 pt-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<img src={alumni1} alt="alumni1" />
						</div>
						<div className="col-lg-3 col-12 pt-5 pt-lg-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<img src={alumni2} alt="alumni2" />
						</div>
						<div className="col-lg-3 col-12 pt-5 pt-lg-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<img src={alumni3} alt="alumni3" />
						</div>
						<div className="col-lg-3 col-12 pt-5 pt-lg-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<img src={alumni4} alt="alumni4" />
						</div>
					</div>
				</div>

				{/* volunteering */}
				<div className="volunteering">
					<h1 className="resume_heading">→ volunteering</h1>

					<div className="row">
						<div className="col-lg-3 col-12 pt-2">
							<div className="left">
								<p className="content_heading">IDEO U</p>
								<p className="content" style={{ opacity: 0.7 }}>
									Remote
								</p>
							</div>
						</div>
						<div className="col-lg-9 col-12 pt-4 pt-lg-0">
							<p className="content">
								<strong>→ Alumni Coach: Story for Influence · 2021</strong> <br />
								Collaborating with the Teaching Team from IDEO U to support learners during the Story For Influence online course. Offering
								feedback through the learning platform, supporting during the weekly Community Conversations, and assisting learners and
								teachers along their learning journey.
							</p>
						</div>
					</div>
				</div>

				{/* Personal Projects */}
				<div className="projects">
					<h1 className="resume_heading">→ personal projects</h1>

					<div className="row">
						<div className="col-lg-6 col-12">
							<img src={projectImg1} alt="ProjectImg1" />
							<br />
							<br />
							<a className="project_heading" href="https://7reads.vercel.app/" target="_blank" rel="noreferrer">
								7Reads
							</a>
							<p className="content pt-3">A minimal reading browser extension to keep an uncluttered read list of articles.</p>
						</div>
						<div className="col-lg-6 pt-lg-0 pt-5">
							<img src={projectImg2} alt="ProjectImg2" />
							<br />
							<br />
							<a className="project_heading" href="http://skuap.com/" target="_blank" rel="noreferrer">
								Skuap
							</a>
							<p className="content pt-3">
								An online platform for leaders to create high performance teams. Not working on this project at the moment.
							</p>
						</div>
					</div>
				</div>

				<div className="breaker"> – </div>

				{/* Social Links */}
				<div className="social_links">
					<p className="content">
						To discuss projects or opportunities get in touch at <a href="mailto:hola@ramses.work">hola@ramses.work</a> or in any of the
						following social networks:
					</p>

					<div className="links">
						<a href="https://twitter.com/ramsescabello" target="_blank" rel="noreferrer">
							<i class="fab fa-twitter"></i>
						</a>
						<a href="https://www.linkedin.com/in/ramsescabello/" rel="noreferrer" target="_blank">
							<i class="fab fa-linkedin-in"></i>
						</a>
						<a href="https://dribbble.com/ramsescabello" rel="noreferrer" target="_blank">
							<i class="fab fa-dribbble"></i>
						</a>
						<a href="https://www.behance.net/ramsescabello" rel="noreferrer" target="_blank">
							<i class="fab fa-behance"></i>
						</a>
					</div>
				</div>

				<div className="footer">
					<div className="row">
						<div className="col-6">
							<p className="footer_text">💛 Designed, planned & written with love and support from my friends</p>
						</div>
						<div className="col-6" style={{ textAlign: 'right' }}>
							<div className="footer_icons">
								<a href="https://twitter.com/ramsescabello" target="_blank" rel="noreferrer">
									<i class="fab fa-twitter"></i>
								</a>{' '}
								<a href="https://www.linkedin.com/in/ramsescabello/" rel="noreferrer" target="_blank">
									<i class="fab fa-linkedin-in"></i>
								</a>
								<a href="https://dribbble.com/ramsescabello" rel="noreferrer" target="_blank">
									<i class="fab fa-dribbble"></i>
								</a>
								<a href="https://www.behance.net/ramsescabello" rel="noreferrer" target="_blank">
									<i class="fab fa-behance"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResumePage
