import React from 'react';

function Footer (){
    var year = new Date().getFullYear();
    return (
        <footer>
            <p>copyright &#169; {year}</p>
        </footer>
    )
}

export default Footer;