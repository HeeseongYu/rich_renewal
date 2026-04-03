// 메인 카테고리 필터 상품 섹션
function Main_category() {
    return(
        <div className="sc_main_cate py-[40px]">
            <div className="center">
                <div className="tit ps-[20px] py-[10px] mb-[30px] bg-[grey] rounded-tl-[10px] text-white"><h1>Title</h1></div>
                
                <div className="flex gap-[20px] items-start">
                    {/* 카테고리/필터 플로팅 바 */}
                    <div className="main_cate_Bar flex-1 flex flex-col gap-[10px] flex-shrink-0 sticky top-[20px] border border-[black] px-[15px] py-[20px] h-[500px]">
                        <div className="border-b border-[#eee]">
                            <ul>
                                <li className="">
                                  <a className="flex justify-between items-center">
                                    <span className="text-[17px] font-[700] hover:text-red-600">category</span>

                                    {/* 마스킹으로 쉐브론 구현 */}
                                    <span className="w-[40px] h-[40px] transition-all duration-300 bg-black"
                                        style={{
                                            maskImage: "url(/images/icons/chev.svg)",
                                            WebkitMaskImage: "url(/images/icons/chev.svg)",
                                            maskRepeat: "no-repeat",
                                            maskSize: "12px",
                                            maskPosition: "center"
                                        }}
                                    ></span>
                                  </a>      
                                </li>
                            </ul>
                        </div>
                        <div className="border-b border-[#eee]">
                            <ul>
                                <li className="pb-[10px]"><a href="">category</a></li>
                                <li className="pb-[10px]"><a href="">category</a></li>
                                <li className="pb-[10px]"><a href="">category</a></li>
                            </ul>
                        </div>
                        <div className="border-b border-[#eee]">
                            <ul>
                                <li className="pb-[10px]"><a href="">category</a></li>
                                <li className="pb-[10px]"><a href="">category</a></li>
                                <li className="pb-[10px]"><a href="">category</a></li>
                            </ul>
                        </div>
                    </div>       
                    
                    {/* 상품 섹션 (임시) */}
                    <div className="flex-3 md:flex-5 grid grid-cols-3 md:grid-cols-4 gap-[20px]">                
                        {[...Array(15)].map((_, i) => (
                            <div className="">
                                <a href="" className="flex flex-col items-center gap-[10px]">
                                    <div className="thumb "><img src="../images/esset/sampleImg.svg" alt="thumb"/></div>
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
            </div>
        </div>
    );
}
export default Main_category;