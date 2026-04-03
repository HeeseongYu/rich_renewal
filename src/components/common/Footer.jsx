function Footer() {
    return(
        <footer className="bg-black pb-[30px]">
            <div className="center flex flex-col gap-[30px]">
                <div className="py-5 border-b-1 border-[#222]">
                    <ul className="flex gap-[15px] text-white text-[13px]">
                        <li><a href="" className="">이용안내</a></li>
                        <li><a href="" className="">개인정보처리방침</a></li>
                        <li><a href="" className="">이용약관</a></li>
                        <li><a href="" className="">상담문의</a></li>
                    </ul>                    
                </div>
                <div className="flex flex-col max-w-[600px]">
                    <div className="mb-[10px] font-bold text-white leading-none">
                        리치
                        <span className="richN relative text-[#fc8f27] italic text-[1.5rem] mr-[2px] leading-none">
                            <img src="../images/logo/share_sm.svg" className="absolute w-[10px] top-[-1px] right-[-5px]" alt="나눔" />
                            N
                        </span>
                        포인트
                    </div>
                    <div className="flex items-center flex-start flex-wrap gap-x-[15px] gap-y-[5px] text-[#888] text-[12px] break-keep">
                        <div>상호명 : (주)픽플로우</div>
                        <div>대표자 : 양태희</div>
                        <div className="font-bold text-[12px] sm:text-[1rem]">고객센터 : 1660-2842</div>
                        <div className="font-bold text-[12px] sm:text-[1rem]">운영시간 : 월~금/09:00~18:00</div>
                        <div className="font-bold text-[12px] sm:text-[1rem]">이메일 : pickflow25@naver.com</div>
                        <div>팩스 : 0504-026-6795</div>
                        <div>통신판매업 신고번호 : 제2025-서울강남-06699호</div>
                        <div>사업자 등록번호 : <a href="#none" onclick="window.open('http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=5528703455', 'communicationViewPopup', 'width=750, height=700;'); return false;" class="btn_info">552-87-03455</a></div>
                        <div>개인정보처리 책임자 : 김동규</div>
                        <div>주소 : 서울특별시 강남구 선릉로100길 30, B1층 930호</div>
                        <div className="font-bold text-[1rem] py-[8px]">채무지급보증 안내
                            <p className="mt-[8px] font-normal text-[12px]">당사는 고객님이 현금 결제한 금액에 대해 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
                        </div>
                        <div className="w-[100%]">Hosting by NAVER CLOUD</div>
                        <div className="flex-1 copyright pt-[20px]">© 리치N포인트. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;