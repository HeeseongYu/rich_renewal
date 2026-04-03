const core_list = [
    {item: '코스모어플러스', info:'페이스 필름 세트', img:'겔팩_주력.png', alt: '코스모어플러스 겔팩', link:''},
    {item: '잇츠', info:'그린샐러드', img:'그린샐러드_주력.png', alt: '잇츠 그린샐러드', link:''},
    {item: '더블랙', info:'72시간 저온 숙성김', img:'더블랙김_주력.png', alt: '더블랙 김', link:''},
    {item: '한둘아', info:'한정식 잡채', img:'잡채_주력.png', alt: '한둘아 잡채', link:''}
];

const Core_pd = () => {
    return(
        <>
            {/* 주력상품 섹션 */}
            <div className=" md:pt-[30px] mb-[15px] md:pb-[40px] lg:py-[40px]">  
                <div className="center flex flex-col lg:flex-row gap-3 lg:gap-[30px]">
                    <div className="lg:flex-1 border-box pt-0 lg:pt-[10px]">
                        <h1 className="lg:block text-[1rem] md:text-[1.1rem] text-[gray]">리치나눔 <p className="inline-block lg:block ml-[10px] lg:ml-0 text-[1.5rem] lg:text-[2rem] font-[700] text-black">BEST<span className="ml-[5px] md:ml-[10px] lg:ml-0 text-[1.5rem] lg:text-[1.2rem] md:text-[1.5rem]">상품</span></p></h1>
                        <div className="longArrow hidden lg:inline-block relative w-[200px] h-[1px] bg-black ml-[5px] align-middle"
                        ></div>
                    </div>
                    <div className=" flex-[4.5] border-box grid grid-cols-2 md:grid-cols-4 gap-[10px] md:gap-[1%]">
                        {core_list.map((core_list,index) => (
                            <div key={index} className="corePd aspect-square md:aspect-[4/5] bg-gray-100 relative transition-none md:transition-all duration-200  hover:translate-none md:hover:translate-y-[-10px]">
                                <a href={core_list.link} className="relative block w-full h-full cursor-pointer overflow-hidden">
                                    <img src={`images/esset/corePd/${core_list.img}`} className="absolute md:static top-[50%] md:top-0 translate-y-[-50%] md:translate-none block w-full" alt={core_list.alt} />
                                    <div className="p-[12px] absolute right-0 bottom-0 text-right text-white z-10 md:z-0">
                                        <span className="text-[1.1rem] md:text-[1.3rem] font-[500]">{core_list.item}</span>
                                        <p className="text-[0.8rem] md:text-[1rem] font-thin">{core_list.info}</p>                            
                                    </div>
                                </a>
                            </div>                    
                        ))}
                    </div>
                </div>
            </div>
            {/* 공구상품 섹션 */}
            <div className="border-0 pb-[40px]">
                <div className="center flex flex-col flex-col-reverse md:flex-row justify-between   gap-3 md:gap-[30px]">
                    <div className="coBuy_thumb flex-5 lg:flex-3 aspect-[5/2] lg:aspect-[3/1] overflow-hidden">
                        <a href="" className="block w-full h-full">
                            <img src="images/banners/공동구매섹션.png" className="w-full h-full object-cover" alt="" />
                        </a>  
                    </div>
                    <div className="coBuy_tit text-left md:text-right flex flex-row md:flex-col items-end justify-start md:justify-center lg:block flex-2 lg:flex-1 border-box pt-[10px]">
                        <h1 className=" text-[1rem] md:text-[1.1rem] text-[gray]">같이 사자!<p className="inline-block md:block ml-[10px] md:ml-0 text-[1.5rem] lg:text-[2rem] font-[700] text-black">공동구매 상품</p></h1>
                        <div className="longArrow relative hidden md:inline-block w-full lg:w-[80%] h-[1px] bg-black align-middle ml-0"></div>
                    </div>
                </div>
            </div>        
        </>
 
    );
}
export default Core_pd;

