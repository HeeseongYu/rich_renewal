import { MoreBtn,Item_card } from '../common/Ui';
const Main_pd_sub = () => {
    return(
        <div className="bg-white odd:bg-gray-100 py-[60px]">
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
                                    <Item_card 
                                        key={i}
                                        img="../images/esset/sampleImg.svg" 
                                        name={`상품 ${i + 1}번입니다.`} 
                                        price="00,000" 
                                        dc_price="00,000"
                                        badge="할인"
                                    />  
                                </a>
                            </div>
                        ))}
                    </div>       
                </div>
                
                {/* 더보기버튼 */}
                <MoreBtn/>
            </div>
        </div>  
    );
}
export default Main_pd_sub;

