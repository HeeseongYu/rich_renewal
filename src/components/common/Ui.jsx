// ui 요소 통합 관리 및 스타일링을 위한 컴포넌트입니다. ===============================================================================

// 더보기버튼
export const MoreBtn = ({link}) => (  
    <div className="more_btn flex items-center justify-center mt-[30px]">
        <a href={link} className="link w-[350px] max-w-[350px] h-[50px] box-border flex flex-row items-center justify-center text-[14px] bg-white border border-[#eee] rounded-sm transition duration-300 hover:border-black">
            <span className="tx box-border font-[500]">더보기</span>
        </a>
    </div>
);


// 상품 아이템
export const Item_card = ({img, name, dc_price, price, badge}) => (     
    <>
        <div className="thumb overflow-hidden rounded-sm"><img src={img} alt="thumb"/></div>
        <span className="text-[0.7rem] sm:text-[13px] text-left font-bold sm:font-[500]">{name}</span>
        
        {/* 상품 할인율/가격과 할인 뱃지의 순서/위치는 md(768px)를 기준으로 변경 */}
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-[3px] md:gap-[5px]">
            <span className="text-[0.7rem] sm:text-[0.85rem] font-[400] text-[#999] px-[1px] leading-none line-through">{dc_price}</span>            
            <div className="price flex items-center gap-[5px]">
                <span className="pd_badge inline-block md:hidden px-[7px] py-[3px] rounded-[3px] bg-[#F59E0B] text-[9px] text-white leading-none">{badge}</span>
                <div>
                    <span className="text-[0.95rem] sm:text-[1.1rem] font-[700] text-[#d70404] leading-none">{price}</span>
                    <span className="text-[0.8rem] sm:text-[0.9rem] font-[500] text-[#d70404] tracking-[-0.6px]">원</span>
                </div>
            </div>
        </div>
        <div className="flex gap-[5px] itmes-center justify-center text-center text-[10px]">
            <span className="">
                <span className="w-[12px] h-[12px] inline-flex items-center justify-center shrink-0 mr-[2px] rounded-full bg-[#dd514c] text-[9px] text-white">P</span>Milage 
            </span>
            + 
            <span className=""> 
                <span className="w-[12px] h-[12px] inline-flex items-center justify-center shrink-0 mr-[2px] rounded-full bg-[#ec4899] text-[9px] text-white">H</span>Heart
            </span>
        </div>
        <span className="pd_badge hidden md:inline-block px-[7px] py-[3px] rounded-[3px] bg-[#F59E0B] text-[9px] text-white leading-none">{badge}</span>
    </>
);


// 메인 가격대/전체검색
import { useState } from 'react';
export const Main_search = () => {
 
    const [selectedIndex, setSelectedIndex] = useState(0);

    const price_range = [
        {range: '전체', link: '#'},
        {range: '1만원 이하', link: '#'},
        {range: '1만원~3만원', link: '#'},
        {range: '3만원~5만원', link: '#'},
        {range: '5만원~7만원', link: '#'},
        {range: '7만원 이상', link: '#'},
    ];

    return(
        <div className="py-[40px] border-b border-[#eee]">
            <div className="center">
                <h1 className="mt-0 md:mt-[24px] lg:mt-0 font-bold text-[20px] sm:text-[1.5rem] leading-none text-center">가격대 별로 둘러보세요!</h1>
                <div className="mx-auto px-[20px] py-[24px] pb-0 md:pb-[24px] w-full sm:w-fit flex flex-col lg:flex-row items-center gap-[20px]">
                    <div className="inline-block text-[13px] w-full lg:w-[200px]">
                        <input type="text" placeholder="검색어 입력" autocomplete="off" className="w-full lg:w-[200px] px-[20px] pb-1 placeholder:text-gray-300 placeholder:font-[500] bg-white border-b-[1.5px] border-black outline-none" />
                    </div>
                    <ul className="w-full grid grid-cols-[repeat(3,2fr)] sm:grid-flow-col sm:grid-rows-1 items-center gap-[6px]">
                        {price_range.map((item, index) => {

                            const isSelected = selectedIndex === index;
                        
                            const selectedBtn = isSelected ? 'bg-black text-white border-[#666] hover:bg-[#666]' : 'bg-white text-[500] hover:bg-gray-100 hover:border-[#666]';

                            return(
                                <li key={index} className={`overflow-hidden rounded-full border border-[#eee] transition duration-300 ${selectedBtn}`}
                                onClick={() => setSelectedIndex(index)}
                                >
                                    <a href={item.link} 
                                       className={`inline-block w-full px-[10px] sm:px-[12px] py-[10px] text-[11px] text-[500] leading-none hover:underline text-center`}
                                       onClick={(e) => e.preventDefault()}
                                    >
                                        {item.range}
                                    </a>
                                </li>
                            );
                        })}
                        
                    </ul>
                    <button className="shrink-0 w-[140px] md:w-[180px] lg:w-[100px] h-[34px] mt-[20px] lg:mt-0 rounded-full text-[15px] text-white font-[500] bg-black cursor-pointer border border-[#666]">검색</button>
                </div>
            </div>
        </div>
    );
};