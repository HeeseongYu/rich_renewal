const Main_pd_sub = () => {
    return(
        <div className="bg-white even:bg-gray-100 py-[60px]">
            {/* max-w-[768px] md:max-w-[1100px] lg:max-w-[1080px] mx-auto px:5% */}
            <div className="center">
                {/* 섹션별 타이틀(추후 어드민에서 조정?) */}
                <div className="sc_tit">
                    <div className="center text-center">
                        <h1 className="font-bold text-[1.5rem] mb-4 leading-none">선물하기 좋~~다 카더라</h1>
                        <p className="tit_sub font-bold text-[1.2rem] leading-none"><span className="text-red-500">특별</span> 한 당신을 위한 기간제 <span className="text-red-500">특가</span> 할인! 행사품목</p>
                    </div>
                </div>

                {/* 상품 섹션 */}
                <div className="px-0 pt-[60px]">
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-[16px] sm:gap-[20px] md:gap-[30px]">                
                        {[...Array(16)].map((_, i) => (
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
export default Main_pd_sub;

