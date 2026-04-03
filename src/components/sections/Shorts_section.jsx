const Shorts_section = ({ mode = 'main', shorts_items = [] }) => {


    // 모드별 스타일+구성요소 배열
    const SHORTS_MODE = {
        main:{
            sectionId: 'shorts_section',
            bg: "bg-white",
            grad: "from-gray-50 to-gray-100",
            placeholder: [
                { title: '함께 성장할', subtitle: '파트너를 찾습니다', label: 'AD SPACE', icon: '🤝' },
                { title: '새로운 기회', subtitle: '여기서 시작하세요', label: 'AD SPACE', icon: '🚀' }
            ]                
        },
        main_2:{
            sectionId: 'shorts_section_2',
            bg: "bg-gray-100",
            grad: "from-gray-50 to-gray-100",
            placeholder: [
                { title: '함께 성장할', subtitle: '파트너를 찾습니다', label: 'AD SPACE', icon: '🤝' },
                { title: '새로운 기회', subtitle: '여기서 시작하세요', label: 'AD SPACE', icon: '🚀' }
            ]                
        },
        sharezone:{
            sectionId: 'shorts_section_sharezone',
            bg: "bg-gray-100",
            sectionTitle: '함께 만드는 기부 문화, <br class="md:hidden block"><span class="text-[#fc8f27] mr-[1px]">리치나눔</span>이 시작합니다',
            grad: "from-orange-50 to-amber-100",
            placeholder: [
                // { title: '유기동물 보호', subtitle: '작은 관심이<br>큰 사랑이 됩니다', label: 'COMING SOON', icon: '🐾' },
                { title: '주거환경 개선', subtitle: '따뜻한 보금자리 만들기', label: 'COMING SOON', icon: '🏠' },
                { title: '나눔 활동', subtitle: '곧 다양한 활동으로 찾아뵐게요', label: 'COMING SOON', icon: '💝' }
            ]                
        },
    };

    // 모드 할당
    const mode_on = SHORTS_MODE[mode] || SHORTS_MODE.main;

    //비디오 판별
    const isLocalVideo = (url) => /\.(mp4|webm|mov|ogg)$/i.test(url);   
    
    //항상 영상+플레이스홀더 4개 배치
    // 숏츠영상 배열
    const videos = shorts_items.map(url =>({url, isVideo: true}));

    const display = [...videos, ...mode_on.placeholder].slice(0, 4);

    //유튜브와 로컬비디오의 경로 구분
    const isYoutube = (url) => !url.includes('.') && !url.includes('/');

    return (
        <div className={`${mode_on.bg} border-t border-gray-100`}>
            {/* 모드별 아이디 구분 */}
            <div id={mode_on.sectionId} className="max-w-[1280px] mx-auto px-[5%] sm:px-[10%] pb-12 sm:pb-16 py-12 sm:py-16">

                {/* 타이틀이 있는 모드일 시만 타이틀 출력(나눔존) */}
                {mode === 'sharezone' && mode_on.sectionTitle && (
                    <div className="text-center py-8 sm:py-12">
                        <h2 className="text-xl sm:text-2xl font-bold text-black" 
                            dangerouslySetInnerHTML={{ __html: mode_on.sectionTitle }}>
                        </h2>
                    </div>
                )}

                {/* 숏츠 그리드 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {display.map((item, idx) => (
                        <div key={idx} className="aspect-[9/16] w-full h-full rounded-[10px] overflow-hidden">                                
                            {/* 로컬 또는 유튜브 영상 배치 */}
                            {item.isVideo ? (
                                <div className="w-full h-full relative">
                                    {isLocalVideo(item.url) ? (
                                        <video
                                            src={item.url.startsWith('/') ? item.url : `/${item.url}#t=0.1`}
                                            className="w-full h-full object-cover"
                                            loop muted playsInline
                                        />
                                    ) : (
                                        <iframe
                                            src={`https://www.youtube.com/embed/${item.url}?controls=0&playsinline=1`}
                                            className="w-full h-full border-none"
                                            title={`video-frame-${idx}`}
                                        />                                           
                                    )}
                                </div>
                            ) : (                                
                                // 플레이스홀더
                                <div className="relative w-full h-full  rounded-[2rem] bg-gray-900 p-[2px] sm:p-[3px] shadow-xl overflow-hidden">
                                    <div className={`w-full h-full rounded-[1.8rem] sm:rounded-[1.8rem] bg-gradient-to-b ${mode_on.grad} flex flex-col items-center justify-center relative`}>
                                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5  rounded-full"></div>
                                        <div className="text-center px-4">
                                        <div className="text-5xl mb-3">{item.icon}</div>
                                        <div className="text-gray-400 text-xs mb-2 tracking-widest">{item.label}</div>
                                        <div className="text-gray-800 text-lg font-bold mb-1">{item.title}</div>
                                        <div className="text-gray-500 text-xs leading-relaxed" 
                                            dangerouslySetInnerHTML={{ __html: item.subtitle }}></div>
                                        </div>
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-900 rounded-full"></div>
                                    </div>
                                </div>
                            )}
                                
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shorts_section;