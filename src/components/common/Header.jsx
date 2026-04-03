 // 헤더 하단 카테고리
export const header_cate = [
    {cate: '식품', link: ''},
    {cate: '화장품, 미용', link: ''},
    {cate: '생활/건강', link: ''},
    {cate: '생활가전', link: ''},
    {cate: '여행', link: ''},
    {cate: '패션소품', link: ''},
    {cate: '가구/인테리어', link: ''},
    {cate: '휴대폰', link: ''},
];

const Header = ({ setIsMenuOpen }) => {
    //기획전 메뉴
    const promos = [
        { name: '1인가구', emoji: '🏠', link: '#' },
        { name: '다이어트', emoji: '🥗', link: '#' },
        { name: '반려동물', emoji: '🐾', link: '#' },
        { name: '해외인기상품', emoji: '🌍', link: '#' },
    ];
    
    // 헤더 우측 메뉴
    const header_right = [
        {name: 'lang', img: '/images/icons/google_translate.png', link: '', alt: '번역' },
        {name: '홈', img: '/images/icons/home.svg', link: '', alt: '홈',  hideOnMb: true},
        {name: '나의 지갑', img: '/images/icons/wallet.svg', link: '', alt: '나의 지갑' },
        {name: '장바구니', img: '/images/icons/cart.svg', link: '', alt: '장바구니' },
        {name: '검색', img: '/images/icons/search.svg', link: '', alt: '검색' },
        {name: '햄버거', type: 'ham' },
    ];
   
    return (
        <header className="py-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] bg-white border-b border-[#eee] sticky top-0 z-48">
            <div className="header-upper flex justify-between items-center flex-wrap xl:flex-nowrap !px-[5%] xl:!px-[100px]">
                <div className="header-left flex md:hidden lg:flex icons-center gap-4 w-full xl:w-1/3 order-3 xl:order-1 flex-shrink-0 mt-[5px] xl:mt-0">
                    <div onClick={() => setIsMenuOpen(true)} className="ham hidden md:block w-[40px] h-[40px] bg-[#fc8f27] rounded-[5px]">
                        <a href="#" className="mask-[url(/images/icons/header_slide.svg)] bg-white mask-cover mask-center mask-no-repeat mask-size-[22px] w-full h-full block"></a>
                    </div>
                    <ul className="gnb-left flex items-center gap-4">
                        <li className="hidden md:flex"><a href="">기획전</a></li>
                        <li className="hidden md:flex"><a href="">기부존</a></li>
                        <li className="flex md:hidden"><button className="text-[10px] px-[10px] py-[5px] rounded-[5px] bg-[#7B0525] font-bold text-white">홍보하기</button></li>
                    </ul>
                </div>
                <div className="header-logo order-1 xl:order-2 w-[120px] sm:w-[160px] md:w-[180px] xl:w-[220px] mb-[10px] sm:mb-[10px] xl:mb-[10px]">
                    <a href="#" className="h-[50px]">
                        <img src="../images/logo/텍스트로고_thic.png" alt="로고" />
                    </a>
                </div>
                <div className="header-right flex items-center gap-[10px] xl:w-1/3 order-2 xl:order-3 xl:flex-none justify-end">
                    <button className="hidden md:flex text-[10px] px-[10px] py-[5px] rounded-[5px] bg-[#7B0525] font-bold text-white">홍보하기</button>
                    <ul className="gnb-right flex gap-[3px] text-[8px] md:text-[10px]">
                        
                        {header_right.map((item, index) => {
                            
                            // 햄버거 메뉴의 순서가 마지막일 시     
                            const isLast = index === header_right.length -1;
                            
                            return(
                            <li key={index}
                                // 모바일시 홈 아이콘 숨기기 
                                className={`${item.hideOnMb ? 'hidden lg:flex' : 'inline-block'}`}
                            >
                                {isLast ? (
                                    // 햄버거                                        
                                    <div onClick={() => setIsMenuOpen(true)} className="ham w-[35px] h-[35px] md:w-[40px] md:h-[40px] bg-[#fc8f27] rounded-[5px] rotate-[180deg] block lg:hidden"> 
                                        <a href={item.link} className="mask-[url(/images/icons/header_slide.svg)] bg-white mask-cover mask-center mask-no-repeat mask-size-[18px] md:mask-size-[22px] w-full h-full block">  
                                        </a>

                                    </div>
                
                                ):(
                                 // 앞 메뉴들
                                    <a href={item.link} className="flex flex-col justify-center items-center gap-[3px] w-[30px] h-[35px] md:w-[40px] md:h-[40px]" >
                                        <img src={item.img} className="w-[22px] sm:w-[25px]" alt={item.img} />
                                        {item.name}
                                    </a>
                                )}
                            </li>
                            );
                        })}                           
                    </ul>
                </div>
            </div>

            <div className="header-bottom !px-[5%] xl:!px-[100px] xl:mt-[10px] mt-[15px]">
                <div className="flex gap-4 !mx-0 overflow-x-auto overflow-y-hidden flex-nowrap whitespace-nowrap scrollbar-hide">
                    <ul className="explain-link">
                        <li>
                            <a className="mb-[10px] font-bold leading-none py-[10px]">
                                리치<span className="richN relative text-[#fc8f27] italic text-[1.2rem] mr-[2px] leading-none"><img src="/images/logo/share_sm.svg" className="absolute w-[9px] top-0 right-[-4px]" alt="나눔" />N</span>몰이란?
                            </a>
                        </li>
                    </ul>            
                    <ul className="gnb-promo flex gap-4">
                        {promos.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className="font-[1rem] font-bold">{item.emoji} {item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <ul className="gnb-bottom flex gap-5 font-[1rem] font-bold text-[#666]">
                        {header_cate.map((item,index) => (
                            <li key={index}>
                                <a href={item.link}>{item.cate}</a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;  