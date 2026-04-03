/* 분양상담페이지(네온사인 영역) */
const Mymall = () => {
    return(
        <div className="sc_Mymall bg-[#0c0c0c]">
            <div className="center px-[5%]! md:px-[15%]! py-[20px]! sm:py-[30px]! bg-[url(./images/esset/벽돌벽2.png)] bg-cover bg-center relative">
                <div className="neon_desc p-[10px] md:p-[12px] text-center text-white rounded-[30px] border-[5px] border-[hotpink] font-[GMarketSans]!">
                    <div className="relative px-[5%] md:px-[10%] py-[10px] sm:py-[20px] rounded-[20px] border-[2px] border-white">
                        <h1 className="text-[0.8rem] sm:text-[1rem] font-light">말도 설명도 필요 없다</h1>
                        <p className="neon_tit px-0 py-[10px] sm:py-[20px] text-white text-[2rem] italic font-bold font-[GMarketSans]! before:mx-auto before:mb-[20px] md:before:mb-[24px] after:mx-auto after:mt-[20px] md:after:mt-[24px]">
                            <span>원클릭</span> 부업
                        </p>
                        <div className="neon_btns">
                            <button className="mx-auto my-0 flex justify-center items-center gap-[5px] text-[1rem] font-normal">
                                <span className="neon_open flex items-center gap-[10px] text-[0.8rem] md:text-[1rem] text-white">문의는 이쪽으로<span className=" font-[Cafe24Decoline]! text-[1.8rem] md:text-[2.2rem] md:text-[2.5rem] font-bold animate-[flicker_2.5s_infinite]">CLICK</span></span>
                                <span className="neon_chev text-[1.3rem]! sm:text-[1.5rem] md:text-[1.8rem] font-[lighter] animate-[flicker_2.5s_infinite]">&gt;&gt;</span>
                            </button>
                        </div>
                        <span className="neon_logo absolute bottom-[20px] right-[20px] w-[8%] sm:w-[10%] animate-[blink_1.5s_infinite]">
                            <img src="./images/logo/logo_tp.svg" className="block w-full" alt="네온 로고" />
                        </span>
                        <span className="neon_star absolute top-[20px] md:top-[30px] left-[20px] md:left-[30px] w-[10%] transform rotate-[-15deg] animate-[blink_1.5s_infinite]">
                            <img src="./images/icons/star_line.svg" alt="별 아이콘"/>
                        </span>
                    </div>
                </div>
             </div>
        </div>
    )
}
export default Mymall;