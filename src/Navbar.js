export default function Navbar(){
    return <nav className = "nav">
        <a href = "/" className = "site-title">Suzie Q Kids</a>
        <img src="pi/Users/apra/Documents/suzie-q-kids-website/public/Picture-4.webp"></img>


        <ul>
            <li>
                <a href = "/start-fundraiser">Start Fundraiser</a>
            </li>
            <li>
            <a href="/upload-images">Generate Coloring Book</a>
            </li>
            <li>
            <a href="/logIn">Log In/Sign Up</a>
        
            </li>
        </ul>
    </nav>
}