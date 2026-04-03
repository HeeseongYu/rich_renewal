import React from 'react';
import { header_cate } from './Header';

// 서브메뉴 데이터
const subMenu = {
  "식품": [
    { name: "sample", link: "" },
    { name: "sample", link: "" },
    { name: "샘플입니다.", link: "" },
    { name: "샘플입니다.", link: "" },
  ],
  "화장품, 미용": [
    { name: "sample", link: "" },
    { name: "sample", link: "" },
    { name: "샘플입니다.", link: "" },
    { name: "샘플입니다.", link: "" },
  ]
};

// 아코디언 구현
const Ham_cate = ({cate, sub, isOpen, setIsOpen, isLast}) => {
  // const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    // 리스트를 클릭하면 아코디언이 열리는 onClick 이벤트
    <li className={`border-[#eee] cursor-pointer ${isLast ? "border-none" : "border-b"}`} onClick={setIsOpen}>
      <div className="flex justify-between items-center">
        <span className={`text-[17px] font-[700] hover:text-red-600 ${isOpen ? "text-red-600" : ""}`}>{cate}</span>
        
        {/* 마스킹으로 쉐브론 구현 */}
        <span className={`w-[40px] h-[50px] transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
              style={{
                backgroundColor: isOpen ? "black" : "#e5e7eb",
                maskImage: "url(/images/icons/chev.svg)",
                WebkitMaskImage: "url(/images/icons/chev.svg)",
                maskRepeat: "no-repeat",
                maskSize: "12px",
                maskPosition: "center"
              }}
        ></span>
      </div>      

      {/* 서브메뉴 */}
        <div className= {`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
          <ul className="py-[10px] bg-[#eee] ">
            {sub && sub.map((v, i) =>(
              <li key={i} className="px-[15px]">
                <a href={v.link} className="block py-[5px] w-full h-full text-[14px] text-[#333] font-[500] hover:underline"
                onClick={(e) => e.stopPropagation()}>{v.name}</a>
              </li>
            ))}
          </ul>
        </div>
    </li>
  );
}


const Aside = ({ isOpen, setIsOpen }) => {

  // 현재 열려있는 항목의 index를 저장 (아무것도 없을 시 null)
  const [openIndex, setOpenIndex] = React.useState(null);

  const myMenu = [
    {menu: '마이쇼핑', icon: '/images/icons/mypage.svg', link: '', alt: '마이쇼핑' },
    {menu: '장바구니', icon: '/images/icons/cart_aside.svg', link: '', alt: '장바구니' },
    {menu: '주문배송', icon: '/images/icons/deliver.svg', link: '', alt: '주문배송' },
  ];
  
  const community = [
    {menu: '기획전', link: '' },
    {menu: '기부존', link: '' },
    {menu: '이벤트존', link: '' },
    {menu: '고객센터', link: '' },
    {menu: '뉴스', link: '' },
    {menu: '자유게시판', link: '' },
    {menu: '갤러리', link: '' },
  ];

  return (
    <>
      {/* 배경 오버레이 */}
      <div className={`bglayer fixed inset-0 bg-black/50 cursor-pointer z-[49] transition-opacity duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`} onClick={() => setIsOpen(false)}></div>
      
      {/* 햄버거 메뉴 */}
      <div className={`fixed left-0 top-0 max-w-[430px] w-full h-full overflow-y-auto scrollbar-hide pb-[40px] bg-white z-[50] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
        <div className="px-[15px] md:px-[30px] pb-[20px]">
          
          {/* 헤더 */}
          <div className="flex items-center justify-between py-[15px]">
            <div className="flex justify-start items-center gap-[10px]">
              <a href="#" className="flex items-center text-[18px]">
                <div className="w-[40px] h-[40px] bg-gray-100 rounded-full mr-[10px]"></div>
                <span className="font-bold">유희성님</span>
              </a>
              <a href="#" className="pt-[3px] font-[15px] text-[#333]">로그아웃</a>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-[40px] h-[40px] bg-[url(/images/icons/close.svg)] bg-no-repeat  bg-center bg-size-[14px] cursor-pointer">
            </button>
          </div>

          {/* 아이콘+지갑 */}
          <div className="w-full">
            <ul className="flex justify-between items-center mb-[10px]">
              {myMenu.map((item, index ) => {
                return(
                  <li key={index}>
                    <a href={item.link} className="flex flex-col items-center gap-[15px] px-[10px] py-[5px] md:px-0 md:py-[5px]">
                      <img src={item.icon} className=" h-[22px]" alt={item.alt} />
                      <span className="text-[13px]">{item.menu}</span>
                    </a>
                 </li>
                );
              })}

            </ul>            
            <button className="w-full h-[40px] text-[13px] hover:border hover:border-black text-white hover:text-black bg-black hover:bg-white cursor-pointer">지갑</button>
          </div>
        </div>
        
        {/* 카테고리 아코디언*/}
        <div className="px-[15px] md:px-[30px] py-[20px] border-y-[10px] border-[#f2f2f2]">
            <ul className="">
              {header_cate && header_cate.map((item, index) => (
                <Ham_cate 
                  key={index} 
                  cate={item.cate} 
                  sub={subMenu[item.cate]} 
                  // 열려있는지 여부 확인
                  isOpen={openIndex === index}
                  // 열려있으면 닫기(부모에게 index 전달)
                  setIsOpen={() => setOpenIndex(openIndex === index ? null : index)}
                  // 마지막 인덱스 보더 삭제용 정의
                  isLast={index === header_cate.length - 1}
                />
              ))}
            </ul>
            <button className="w-full h-[40px] mt-[10px] text-[13px] text-[#888] font-[500] border border-[#e5e7eb] hover:text-[#e10000] cursor-pointer">인기별</button>

        </div>
        
        {/* 커뮤니티*/}
        <div className="px-[15px] md:px-[30px] py-[20px]">
          <ul className="grid grid-cols-[repeat(2,1fr)] gap-[15px]">
            
            {community.map((item, index ) => {
              return(
                <li key={index}>
                  <a href={item.link} className="font-bold text-[15px] text-left hover:text-[#e10000]">{item.menu}</a>
                </li>
              );
            })}
            
          </ul>
          {/* cs*/}
        </div>
        <div className="border-t border-[#f2f2f2] px-[15px] md:px-[30px] pt-[20px]">
          <p className="text-[27px] font-semibold leading-none">1660-2842</p>
          <span className="text-[13px] text-[#666]">월~금 : 09:00~18:00</span>            
          <button className="w-full h-[40px] mt-[15px] text-[13px] bg-[#f5f5f5] cursor-pointer">상담문의</button>
        </div>
        
      </div>
    </>
  );
}
export default  Aside; 