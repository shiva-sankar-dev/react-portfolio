import img1 from '../assets/work_1.png'
import img2 from '../assets/work_2.png'
import img3 from '../assets/work_3.png'
import react_logo from '../assets/react-logo.svg'
import django from '../assets/django.svg'
import python from '../assets/python.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/javascript.svg'


const mywork_data=[
    
    {
        w_no:1,
        work_name:"FashionFoot",
        work_img:img1,
        worked_with:[python, django],
        git_link:"https://fashionfoot-production.up.railway.app/"
    },

    {
        w_no:2,
        work_name:"MOVIEVERSE",
        work_img:img2,
        worked_with:[python, django],
        git_link:"https://movieverse.up.railway.app/"

    },

    {
        w_no:3,
        work_name:"My Portfolio",
        work_img:img3,
        worked_with:[html, css, react_logo],
        git_link:"https://github.com/shiva-sankar-dev/portfolio-react"
    }

]

export default mywork_data