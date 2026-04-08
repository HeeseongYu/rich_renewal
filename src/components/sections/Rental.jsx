const Rental = () => {

    const rental_list = [
        {img: '/images/thumbs/smartphone.png', status:'보러가기', link: '#', alt: '핸드폰' },
        {img: '/images/thumbs/coway.png', status:'보러가기', link: '#', alt: '정수기' },
        {img: '/images/thumbs/trade.png', status:'준비중입니다.', link: '#', alt: '수출연계문의' }
    ];



    return (
        <div className="sc_rental bg-gray-100 even:bg-white py-[60px]">
            <div className="center">
                <div className="sc_tit mb-12">
                    <div className="center text-center">
                        <h1 className="font-bold text-[1.5rem]">
                            <span className="block">핸드폰, 렌탈, 수출연계문의도</span>
                            <span className="block sm:inline-block">리치<span className="text-[#fc8f27]">나눔</span>에서!</span>
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {rental_list.map((item, index) => (                   
                        <div key={index} className="block bg-gray-100 aspect-square shadow-md border border-solid border-gray-300">
                            <a href={item.link} className="block">
                                <div className="object-cover overflow-hidden">
                                    <img src={item.img} alt={item.alt} className="block hover:scale-[1.05] transition duration-300" loading="lazy" />                
                                </div>
                                <div className="bg-white p-2 sm:p-3">
                                    <h1 className="text-[13px] text-[#666] font-bold text-right">{item.status}</h1>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Rental;