import { useRef } from "react";

const Promo_slide = () => {
    
    // 기획전 타이틀 
    const promotion=[
        {num: '1.', name: '건강 챙겨!', emoji: '💪🏻', link:''},
        {num: '2.', name: '예뻐지자!', emoji: '✨', link:''}
    ];
    
    // useRef를 사용한 컨테이너 그랩 앤 드래그
    // 드래그에 필요한 값들을 기록할 Ref(새로고침+초기화 방지)
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    
    // 마우스를 눌렀을 때
    const handleMouseDown = (e) => {
        // 버블링 방지
        if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
           e.preventDefault(); 
        }
        
        isDown.current =  true; 
        const slider = e.currentTarget;
        // 클릭 지점의 가로 위치 - 컨테이너의 왼쪽 여백
        startX.current = e.pageX - slider.offsetLeft;
        // 클릭 순간의 스크롤 위치 저장       
        scrollLeft.current = slider.scrollLeft;
    };

    // 마우스가 컨테이너를 벗어났을 때 
    const handleMouseUpOrLeave = () => {
        isDown.current = false;  
    };
    
    //마우스를 움직이는 중
    const handleMouseMove = (e) => {
        if (!isDown.current) return; //클릭하지 않으면 작동하지 않음
        e.preventDefault();
        const slider = e.currentTarget;
        
        const x = e.pageX - slider.offsetLeft; //현재 마우스 위치
        const walk = (x- startX.current) * 2; //이동거리 계산하여 2배속 이동

        slider.scrollLeft = scrollLeft.current - walk;       
    };

    return(
        <div className="border-b border-[#eee] py-[50px]">
            <div className="center">
                <div className="flex flex-col gap-[30px]">
                    {promotion.map((promotion,index)=>(
                        <div key={index} className="">
                            <div className="flex flex-row justify-between items-center mb-[20px]">                       
                                <h1 className="text-[1.5rem] font-bold leading-none">
                                    <span className="text-[2rem] font-bold text-[#e14a4f] mr-[5px] ">{promotion.num}</span>
                                    {promotion.name} {promotion.emoji}
                                </h1>
                                <a href={promotion.link} className="text-[14px] font-[500] hover:underline">더보기</a>
                            </div>
                            <div
                                onMouseDown={handleMouseDown}
                                onMouseLeave={handleMouseUpOrLeave}
                                onMouseUp={handleMouseUpOrLeave}
                                onMouseMove={handleMouseMove}
                                className="custom_scroll overflow-hidden overflow-x-auto flex flex-row gap-[20px] pb-[30px] select-none touch-pan-x"
                                style={{
                                    userSelect: 'none', 
                                    WebkitUserSelect: 'none',
                                    WebkitUserDrag: 'none'
                                }}
                            >
                                {[...Array(10)].map((_, i) => (
                                    <div className="">
                                        <a href="" className="flex flex-col items-center gap-[10px] max-w-[180px] w-[140px] md:w-[180px]"
                                            onDragStart={(e) => e.preventDefault()}
                                        >
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
                    ))} 
                </div>             
            </div>
        </div>
        
    );
}
export default Promo_slide;