const Service = () => {
    
    const styles = {
        dl: "flex flex-col justify-start items-stretch text-center flex-1 px-[10px] py-[25px] lg:px-[10px] lg:py-[30px] xl:px-[15px] xl:py-[50px] box-border gap-[15px] lg:gap-[20px] xl:gap-[40px] hover:bg-[#fafafa] cursor",
        dt: "flex flex-col justify-center items-center gap-[5px] flex-wrap text-[13px] leading-none",
        iconBox: "mb-[15px] flex justify-center items-center flex-col",
        titEn: "text-[17px] font-[700] text-black",
        titKo: "text-[#999] font-[500]",
        smTxt:"text-[13px] text-[#888]"
    }
    
    return (
        <div className="sc_Service overflow-hidden py-[60px]">
            <div className="center ">
                <div className="flex flex-col md:flex-row justify-start content-stretch items-stretch border-t-[1px] border-[2px] border-[#eee] box-border">
                    <dl className={styles.dl}>
                        <dt className={styles.dt}>
                            <div className={styles.iconBox}><img src="/images/icons/cs_order.svg" className="h-[40px]" alt="주문배송조회"/></div>
                            <div className={styles.titEn}>ORDER</div>
                            <div className={styles.titKo}>주문조회</div>
                        </dt>
                        <dd className={styles.smTxt}>
                            <a href="" className="btn_order h-[40px] px-[30px] py-0 box-border inline-flex flex-row justify-center items-center rounded-[100px] bg-white font-[500] text-black border border-[#222] transition-all duration-300 ease-out hover:bg-[#222] hover:text-white">나의 주문/배송조회</a>
                        </dd>
                    </dl>
                    <dl className={`${styles.dl} border-l border-[#eee]`}>
                        <dt className={styles.dt}>
                            <div className={styles.iconBox}><img src="/images/icons/cs_service.svg" className="h-[40px]" alt="고객센터"/></div>
                            <div className={styles.titEn}><a href="https://pf.kakao.com/_FIxnRX/chat">SERVICE</a></div>
                            <div className={styles.titKo}>고객센터</div>
                        </dt>
                        <dd className={styles.smTxt}>
                            <a href="tel:"
                            className="tel relative text-[21px] text-black font-[700] leading-none whitespace-nowrap">1660-2842</a>
                            <div className="open_time mt-[5px] text-[#888] leading[1.4] wrap-break-word break-keep whitespace-normal">월~금 : 09:00~18:00</div>
                        </dd>
                    </dl>
                    <dl className={`${styles.dl} border-l border-[#eee]`}>
                        <dt className={styles.dt}>
                            <div className={styles.iconBox}><img src="/images/icons/cs_bank.svg" className="h-[40px]" alt="무통장 안내"/></div>
                            <div className={styles.titEn}>BANK</div>
                            <div className={styles.titKo}>입금안내</div>
                        </dt>
                        <dd className={styles.smTxt}>
                            <ul className="bank_list flex flex-col justify-center items-center gap-[5px]">
                                <li>
                                    {/* 관리자로부터 데이터 */}
                                    신한은행 140-015-558480
                                    <br/>
                                    {/* 관리자로부터 데이터 */}
                                    (주)픽플로우
                                </li>
                            </ul>
                        </dd>
                    </dl>  
                </div>
            </div>
        </div>


    );
}
export default Service; 




