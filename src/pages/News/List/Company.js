import React from 'react';

// css 추가
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Componets/CSS/company.CSS';
import Footer from '../../../footer/Footer.js'; 
import Popular_News from '../Componets/JS/Popular_News.js';
import Header from '../../../header/Header.js';

const Company = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="container">
          <div className="container px-4 py-5">

            <h3 className="fw-bold">국내 기업</h3>
            <h2 className="pb-2 border-bottom"></h2>

            <a href="../news_view.html" className="list-group-item list-group-item-action">
              <div className="row row-cols-1 align-items-md-center g-5 py-5">
                <div className="d-flex flex-column align-items-start gap-2">
                  <img src="./companyImages/image12.jpg" width="1200" height="500" className="img-thumbnail" alt="뉴스1 썸네일" /> <br />

                  <h3 className="fw-bold">네오위즈, ‘P의 거짓’ 판매량 100만장 돌파 소식에 주가 ‘훈풍’</h3>
                  <p className="text-muted">네오위즈가 신작 ‘P의 거짓’ 누적 판매량이 100만장을 돌파했다는 소식에 강세 마감했다.
                    17일 네오위즈는 전거래일 대비 15.76% 오른 2만7550원에 장을 마쳤다. 이날 거래량은 252만주를 넘겼다. 전일 거래량은 17만주 가량이었다. 네오위즈홀딩스도 12.74% 오른 2만1950원에 마감했다.</p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <Popular_News />
      <section className="container mt-4">
        <div className="row my-5">
          <a href="../news_view.html" className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./companyImages/image1.jpg" className="img-fluid" alt="뉴스1 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">유인촌의 문체부, 콘텐츠업계 지원확대…K-콘텐츠펀드 52% 증액</div>
                <p className="company-content">문화체육관광부는 13일 한국벤처투자와 함께 2024년 '케이(K)-콘텐츠 펀드' 관련업계 간담회를…</p>
                <p className="company-mediaCompany">머니투데이</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./companyImages/image2.jpg" className="img-fluid" alt="뉴스2 썸네일" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">위밋모빌리티-제주로지틱스, 제주도 당일 배송 '제주오늘' 선봬</div>
                <p className="company-content">모빌리티 테크기업 위밋모빌리티는 물류기업 제주로지스틱스는 협력 지난 11일부터 제주도 …</p>
                <p className="company-mediaCompany">뉴스1</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./companyImages/image3.jpg" className="img-fluid" alt="뉴스3 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">대전상의-PoSEP, 네트워크 기반 기술혁신 사업 설명회 열어</div>
                <p className="company-content">대전상공회의소와 과학기술연결플랫폼사회적협동조합(PoSEP)은 12일 상의회관 4층 회…</p>
                <p className="company-mediaCompany">뉴시스</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./companyImages/image4.jpg" className="img-fluid" alt="뉴스4 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">"스타트업 해외진출 지원"…중진공, 글로벌기업 인피니언과 맞손</div>
                <p className="company-content">중소벤처기업진흥공단(중진공)이 전력 시스템 및 사물인터넷(IoT) 분야 글로벌 기업인…</p>
                <p className="company-mediaCompany">머니투데이</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./companyImages/image5.jpg" className="img-fluid" alt="뉴스5 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">유한킴벌리, 김천공장 새 티슈 설비 가동…연산 20만t으로 확대</div>
                <p className="company-content">유한킴벌리가 김천공장에 새로운 첨단 티슈 설비를 준공하고 본격 가동에 들어간다고 13…</p>
                <p className="company-mediaCompany">연합뉴스</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./companyImages/image6.jpg" className="img-fluid" alt="뉴스6 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">KCC, 美에 車 보수용 컬러센터 설립…"글로벌 경쟁력 강화"</div>
                <p className="company-content">글로벌 응용소재 화학기업 KCC가 미국에 자동차보수용 리피니쉬 페인트(Refinish Paint) 컬러… </p>
                <p className="company-mediaCompany">아시아경제</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./companyImages/image7.png" className="img-fluid" alt="뉴스7 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">글로벌 콘텐츠 번역가 플랫폼 토투스, 누적 지급 수익 25억원 돌파</div>
                <p className="company-content">콘텐츠 번역가 플랫폼 ‘토투스’가 작업자들에 2023년 상반기 지급한 누적 수익이 25억원 …</p>
                <p className="company-mediaCompany">매일경제</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./companyImages/image8.jpg" className="img-fluid" alt="뉴스8 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">CJ대한통운 인도 자회사 CJ다슬, '타타모터스'와 물류 파트너십 '맞손'</div>
                <p className="company-content">CJ대한통운이 인도 자동차 제조사 타타모터스(TATA Motors)와의 물류 파트너십을 강화 … </p>
                <p className="company-mediaCompany">파이낸셜뉴스</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./companyImages/image9.jpg" className="img-fluid" alt="뉴스9 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">기후위기 해법 찾는 클라이밋 테크 스타트업 서밋, 19~21일 개최</div>
                <p className="company-content">임팩트 투자사 소풍벤처스가 오는 19~21일 제주에서 기후기술과 인공지능(AI for fightin… </p>
                <p className="company-mediaCompany">머니투데이</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./companyImages/image10.jpg" className="img-fluid" alt="뉴스10 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">페이히어, 日 진출 첫발…'500글로벌' 프로그램 선정</div>
                <p className="company-content">핀테크 스타트업 페이히어(대표 박준기)는 미국 실리콘밸리 기반 벤처캐피털(VC) 500글로… </p>
                <p className="company-mediaCompany">아시아경제</p>
              </div>
            </div>
          </a>

          <div style={{ whiteSpace: 'pre-line' }}>
            <span style={{ display: 'inline-block', width: '100%' }}></span>
            <span style={{ display: 'inline-block', width: '100%' }}></span>
            <span style={{ display: 'inline-block', width: '100%' }}></span>
          </div>

          <div className="pagination-wrap d-flex justify-content-center">
            <nav aria-label="Page navigation example" className="pagination-nav">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item"><a className="page-link" href="#">6</a></li>
                <li className="page-item"><a className="page-link" href="#">7</a></li>
                <li className="page-item"><a className="page-link" href="#">8</a></li>
                <li className="page-item"><a className="page-link" href="#">9</a></li>
                <li className="page-item"><a className="page-link" href="#">10</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  )
}
export default Company;