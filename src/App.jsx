import React, { useState } from 'react';
// common
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import Aside from "./components/common/Aside.jsx";

// sections
import Main_category from "./components/sections/main_category.jsx";
import Shorts_section from "./components/sections/Shorts_section.jsx";
import Core_pd from "./components/sections/Core_pd.jsx";
import Main_pd from "./components/sections/Main_pd.jsx";
import Main_pd_sub from "./components/sections/Main_pd_sub.jsx";
import Promo_slide from "./components/sections/Promo_slide.jsx";
import { Main_search } from "./components/common/Ui.jsx";
import Mymall from "./components/sections/Mymall.jsx";
import Rental from "./components/sections/rental.jsx";
import Fortune from "./components/sections/Fortune.jsx";
import Service from "./components/sections/Service.jsx";


function App() {
  // 닫힌 상태
  const [isMenuOpen, setIsOpen] = useState(false);
  return (
    <div className='relative'>
      <Header setIsMenuOpen={setIsOpen} />
      <Aside isOpen={isMenuOpen} setIsOpen={setIsOpen} />

      {/* 숏츠섹션01 */}
      <Shorts_section 
        mode="main" 
        shorts_items={['8EtenokCevQ', 'S4dqxKaozxE', 'WXuOwEyumxo', 'jZOIWmnWsrc']} 
      />

      {/* 주력상품 섹션 */}
      <Core_pd/>
      
      {/* 메인 상품섹션 */}
      <Main_pd/>

      {/* 분양상담페이지 이동 */}
      <Mymall/>

      {/* 기획전 슬라이드 */}
      <Promo_slide/>
      
      {/* 메인 가격대/전체검색 */}
      <Main_search/>      
      
      {/* 숏츠섹션02 */}
      <Shorts_section 
        mode="main_2" 
        shorts_items={['s5xHtgNsP8g', 'VRITJwbpc6c', 'KCnjxyP3FDM', 'geJK4ZmgmWU']} 
      />

      {/* 메인 서브 상품섹션 */}
      <Main_pd_sub/>

      {/* 렌탈 섹션 */}
      <Rental/>

      {/* 오늘의 운세 섹션 */}
      <Fortune/>

      {/* 고객서비스 */}
      <Service/>

      {/* 카테고리 플로팅 바 상품 섹션(전체 리뉴얼 시 적용 예정) */}
      {/* <Main_category/> */}

      <Footer />
    </div>   
  );
}

export default App;
