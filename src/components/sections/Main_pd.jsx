import { MoreBtn,Item_card } from '../common/Ui';

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
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[16px] sm:gap-[20px] md:gap-[30px]">                
                        {[...Array(15)].map((_, i) => (
                            <div className="mb-[20px] md:mb-0">
                                <a href="#" className="flex flex-col items-center gap-[10px]">
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
export default Main_pd;