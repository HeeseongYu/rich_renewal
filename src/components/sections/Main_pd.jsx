const Main_pd = () => {
    return(
        <div className="bg-[#FAF4F6]  pb-[50px]">
            {/* max-w-[768px] md:max-w-[1100px] lg:max-w-[1080px] mx-auto px:5% */}
            <div className="center">
                {/* 강추상품 배너 */}
                <picture className="w-full">
                    <source media="(max-width: 768px)"
                            srcSet="images/banners/알뜰마켓_봄버전_반응형.png"/>
                    <img src="images/banners/알뜰마켓_봄버전.png" className="w-full h-auto block" alt="알뜰마켓배너" loading="lazy"/>
                </picture>

                {/* 상품 섹션 */}
                <div className="py-[40px]">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-[16px] sm:gap-[20px] md:gap-[30px]">                
                        {[...Array(15)].map((_, i) => (
                            <div className="">
                                <a href="" className="flex flex-col items-center gap-[10px]">
                                    <div className="thumb overflow-hidden rounded-sm"><img src="../images/esset/sampleImg.svg" alt="thumb"/></div>
                                    <span className="text-[13px] text-left font-500">상품 이름입니다. 상품 이름입니다. 상품 이름입니다.</span>
                                    <p className="text-center text-[1.1rem] font-[500] leading-none"> price</p>
                                    <div className="flex gap-[5px] itmes-center justify-center text-center text-[10px]">
                                        <span className="">
                                            <span className="w-[12px] h-[12px] inline-flex items-center justify-center shrink-0 mr-[2px] rounded-full bg-[#dd514c] text-[9px] text-white">P</span>Milage 
                                        </span>
                                        + 
                                        <span className=""> 
                                            <span className="w-[12px] h-[12px] inline-flex items-center justify-center shrink-0 mr-[2px] rounded-full bg-[#ec4899] text-[9px] text-white">H</span>Heart
                                        </span>
                                    </div>
                                    <span className="px-[3px] py-[3px] rounded-[3px] bg-[#F59E0B] text-[9px] text-white">badge</span>
                                </a>
                            </div>
                        ))}
                    </div>       
                </div>
                <div className="more_btn flex items-center justify-center mt-[30px]">
                    <a href="" className="link w-[350px] max-w-[350px] h-[50px] box-border flex flex-row items-center justify-center text-[14px] bg-white border border-[#eee] rounded-sm transition duration-300 hover:border-black">
                        <span className="tx box-border font-[500]">더보기</span>
                    </a>
                </div>
            </div>
        </div>  
    );
}
export default Main_pd;

