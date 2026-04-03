// ui 요소 통합 관리 및 스타일링을 위한 컴포넌트입니다.
export const MoreBtn = ({link}) => {  
    <div className="more_btn flex items-center justify-center mt-[30px]">
        <a href={link} className="link w-[350px] max-w-[350px] h-[50px] box-border flex flex-row items-center justify-center text-[14px] bg-white border border-[#eee] rounded-sm transition duration-300 hover:border-black">
            <span className="tx box-border font-[500]">더보기</span>
        </a>
    </div>
};