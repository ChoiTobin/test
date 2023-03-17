import Header from "../components/Layout/Header"
function Promote(){

    return(
        <>
        <Header/>
        <div className='box0' style={{  height: "80vh"} }>
        <iframe width="300" height="200" 
        src="https://www.youtube.com/embed/Z2O8bo7PUHs" 
        title="한창섭 행안부 차관, 전국 지자체에 현장 중심 안전대책 마련 주문"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        <iframe 
            width="300" height="200" 
            src="https://www.youtube.com/embed/j0o65XHFqMg" 
            title="행안부 채널에서 다시 보고싶은 인플루언서&amp;
            연예인은?! 행안부 인플루언서 101!" 
            frameborder="0" 
            allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" allowfullscreen>
            </iframe>
    
        </div>
        </>


    )

}

export default Promote

