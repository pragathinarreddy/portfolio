import Aos from 'aos'
import React, { useEffect } from 'react'
import "aos/dist/aos.css"


function Main() {
    useEffect(() => {
        Aos.init({
            duration:1000
        })

    },[])
  return (
    <div className='container'>
        <div className='hero_section'>
        <div className='main'>
            <a href='/'  className='portfolio'>Portfolio</a >
            <div className='nav'>
                <a href="#projectsid">Projects</a>
                <a href="#skillsid">Skills</a>
                <a href="#contactid">Education</a>
                <a href="#contactid">Contactme</a>

            </div>
        </div>
            <div id='aboutid' className='about'>
                <img className='about_img' src={"image.svg"} alt="svg_img" />
                <div data-aos="fade-up" className='about_myself'>
                    <div className='name_div'>
                    <h1 className='hi'>Hi, I am </h1>
                    <h1 className='name'>Pragathi Narreddy.</h1>
                    </div>
                    <h2 className='designation'>A Frontend Developer.</h2>
                    <p className='text'>Proficient in  Frontend Development, Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</p>
                </div>
            </div>

        </div>
        <div id='projectsid' className='projects_section'>
            <h1 className='projects'>PROJECTS</h1>
            <div className="projects_list">
                <div data-aos="fade-up" className='list'>
                    <h3 className='list_title'>BLOG APP</h3>
                    <p className='list_desc'>You've read all your free member-only stories, become a member to get unlimited access. Your membership fee supports Casey Botticello and the voices you want to hear more from.</p>
                    <h3 className='list_skills'>
                    ReactJs Material UI TailwindCSS CSS
                    </h3>
                    <a href='https://github.com/pragathinarreddy/Blog_app_hooks' target='blank' className=" list_icon fa-regular fa-share-from-square"></a>
                </div>
                <div data-aos="fade-down" className='list'>
                    <h3 className='list_title'>Live Code Editor</h3>
                    <p  className='list_desc'>You can able to write your HTML and CSS code in this application. The output of the code will be shown in the rightside of the application. </p >
                    <h3  className='list_skills'>HTML CSS JavaScript React.js</h3>
                    <a href='https://github.com/pragathinarreddy/live_code_editor' target='blank' className=" list_icon fa-regular fa-share-from-square"></a>

                </div>
               
                <div data-aos="fade-up" className='list'>
                    <h3 className='list_title'>SHOPPING CART</h3>
                    <p  className='list_desc'>It is a small shopping cart inspired from flipkart, amazon , it will display the all list of products and we can filter the products size wise and sort the prices, we can add the products in cart</p>
                    <h3  className='list_skills'>ReactJs TailwindCSS CSS</h3>
                    <a href='https://github.com/pragathinarreddy/shopping_cart_hooks' target='blank' className=" list_icon fa-regular fa-share-from-square"></a>

                </div>
                
                
            </div>

        </div>

            <h1 id='skillsid' className='projects'>SKILLS</h1>
        <div  className='skills_section'>
            <div className='skill_img_div'>
            <img  data-aos="flip-right" className='skills_img' src="https://portfolio-second.vercel.app/images/git.png" alt="" />
            <img  data-aos="flip-left" className='skills_img' src="https://portfolio-second.vercel.app/images/html.png" alt="" />
            <img  data-aos="flip-right" className='skills_img' src="https://portfolio-second.vercel.app/images/css.png" alt="" />
            <img  data-aos="flip-left" className='skills_img' src="https://portfolio-second.vercel.app/images/sass.png" alt="" />
            <img  data-aos="flip-right" className='skills_img' src="https://portfolio-second.vercel.app/images/tailwindcss.jpg" alt="" />
            <img  data-aos="flip-left" className='skills_img' src="https://portfolio-second.vercel.app/images/js.png" alt="" />
            <img  data-aos="flip-right" className='skills_img' src="https://portfolio-second.vercel.app/images/react.png" alt="" />
            <img  data-aos="flip-left" className='skills_img' src="https://portfolio-second.vercel.app/images/redux.png" alt="" />
            <img  data-aos="flip-right" className='skills_img' src="https://portfolio-second.vercel.app/images/materialui.png" alt="" />

            </div>

        <div className='skills_big_img'>
            <img  src={"image1.svg"} alt="" />

        </div>
        </div>

            <h1  id='contactid' className='projects'>EDUCATION</h1>
        <div  className='education_section'>
            <div className='degree_div'>
                <h2 >DEGREE RECEIVED</h2>
                <img className='university_img' src="https://tse1.mm.bing.net/th?id=OIP.CvD-Lj4DyN24feQ0C4RR3QHaIH&pid=Api&P=0&h=180" alt="university_logo" />
                <h3>Sri Venkateswara University</h3>
                <h4>Masters in Science</h4>
                <h5>I have completed my Masters in Chemistry.</h5>
            </div>
            <div  className='contact_div'>
                <h2>CONTACT</h2>
                <img data-aos="flip-left" className='myimage' src={"myimage.jpg"} alt="" />
        <div className='email_resume_div'>
            <div className='cal_email'>
                <p><i class="fa-solid fa-phone"></i> 9177729319</p>
                <p><i class="fa-solid fa-envelope"></i> pragathinarreddy1998@gmail.com</p>

            </div>
                <div className='hub-in'>
                    <a className='resumeIcon'  href='https://github.com/pragathinarreddy' target='blank'><i className="  fa-brands fa-github"></i> Github</a>
                    <a className='resumeIcon resumeIcon_link' href='https://www.linkedin.com/in/narreddy-pragathi-765969276/' target='blank'><i className="  fa-brands fa-linkedin"></i> LinkedIn</a>

                </div>
                   <div className='resume_btn_div'>
                   <a href='/pragathiresume_new (1).pdf' download={true} className='resume_btn'>
                    <i class="fa-solid fa-cloud-arrow-down"></i> Resume
                    </a>
                   </div>
        </div>

            </div>

        </div>
            <hr />
            <h4 className='footer'>Created by Pragathi Narreddy</h4>



    </div>
  )
}

export default Main