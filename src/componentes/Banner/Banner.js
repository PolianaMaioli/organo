import './Banner.css'


function Banner() {
    return (
        //class é uma palavra reservada do JavaScript para classes, então, como estamos trabalhando com React vamos usar className.
        <header className="banner"> 
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>

        
    )

}

export default Banner
