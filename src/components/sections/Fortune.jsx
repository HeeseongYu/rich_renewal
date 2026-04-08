import React, { useState, useEffect } from 'react';

const Fortune = () => {

    const [active, setActive] = useState(0);
    const [fortuneData, setFortuneData] = useState(null);

    const animals = [
        {ko: "쥐", en: "rat"}, {ko: "소", en: "cow"}, {ko: "호랑이", en: "tiger"},
        {ko: "토끼", en: "rabbit"}, {ko: "용", en: "dragon"}, {ko: "뱀", en: "snake"},
        {ko: "말", en: "horse"}, {ko: "양", en: "sheep"}, {ko: "원숭이", en: "monkey"},
        {ko: "닭", en: "chicken"}, {ko: "개", en: "dog"}, {ko: "돼지", en: "pig"}
    ];

    const today = new Date();
    const dateStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

   
    return (
        <div className="sc_fortune mb-[40px]">
            <div className="center">
                
                <h1 className='mb-[30px] text-center text-[1.2rem] md:text-[1.5rem] font-bold text-[#333]'>🔮<span className="date">{dateStr}</span>의 띠별 운세</h1>

                <ul className="animal_list grid grid-cols-6 gap-[3px] border-b-[#eee] mb-[10px] md:hidden">                        
                    {animals.map((item, i) => (                                           
                        <li key={i} 
                            // 클릭한 요소에 active 클래스 추가
                            className={`animal_item ${active === i ? 'active text-white font-[400] bg-[sandybrown] border-[2px] border-[#db873e]'  : 'text-[#666] font-weight-500 border-[lightgray]'} 
                            block md:hidden p-[8px] border-t-[1.5px] border-b-[1px] border-l-[1.5px] border-r-[2px] rounded-t-[8px] rounded-b-[0px] text-[13px] text-center cursor-pointer`}
                            onClick={() => setActive(i)}
                        >
                            {item.ko}띠
                        </li>
                    ))}

                </ul>

                <div className="fortune_list block md:grid md:grid-cols-3 md:gap-[20px]">
                    {animals.map((item, i) => (
                        <dl key={item.en} 
                            className={`fortune relative md:static flex-col md:flex-row items-center md:gap-[20px] border border-[lightgray] rounded-[16px] py-[10px] px-[20px] shadow-md
                                ${active === i 
                                ? 'active flex w-full top-0 left-0 ' 
                                : 'hidden md:flex'} `}
                        >
                            <div className="animal flex flex-col justify-center items-center gap-[5px] mb-[10px] md:mb-0">
                                <img 
                                    className="h-[40px]"
                                    src={` /images/esset/fortune/${item.en}.svg`}
                                    alt={`${item.ko}띠`}
                                />
                                <dt className='text-[13px] text-[#666] font-bold'>{item.ko}띠</dt>
                            </div>
                            <dd className='inline-flex justify-center items-center flex-1  md:m-0 text-center md:text-left text-[13px] text-[#666]'>운세 데이터</dd>
                        </dl>
                    ))}
                </div>
            </div>
        </div> 
    )
}
export default Fortune;
