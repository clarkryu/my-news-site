export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              뉴스라인365
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition-colors">정치</a>
              <a href="#" className="hover:text-gray-300 transition-colors">경제</a>
              <a href="#" className="hover:text-gray-300 transition-colors">사회</a>
              <a href="#" className="hover:text-gray-300 transition-colors">문화</a>
              <a href="#" className="hover:text-gray-300 transition-colors">국제</a>
            </nav>
          </div>
        </div>
      </header>

      {/* 속보 배너 */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <span className="bg-white text-red-600 px-2 py-1 text-xs font-bold rounded mr-3">
              속보
            </span>
            <div className="animate-pulse">
              정부, 새로운 경제정책 발표 예정... 상세 내용은 곧 업데이트됩니다.
            </div>
          </div>
        </div>
      </div>

      {/* 메인 뉴스 섹션 */}
      <main className="container mx-auto px-4 py-8">
        {/* 주요 뉴스 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">
            오늘의 주요 뉴스
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 뉴스 카드 1 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">이미지 준비중</span>
              </div>
              <div className="p-4">
                <span className="text-sm text-red-600 font-semibold">정치</span>
                <h3 className="text-lg font-bold mt-2 mb-2 line-clamp-2">
                  국정감사 주요 쟁점, 여야 공방 격화
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  국정감사가 시작되면서 여야 간 주요 정책을 둘러싼 공방이 격화되고 있습니다. 특히 경제정책과 민생법안을 중심으로...
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>뉴스라인365</span>
                  <span>2시간 전</span>
                </div>
              </div>
            </article>

            {/* 뉴스 카드 2 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">이미지 준비중</span>
              </div>
              <div className="p-4">
                <span className="text-sm text-blue-600 font-semibold">경제</span>
                <h3 className="text-lg font-bold mt-2 mb-2 line-clamp-2">
                  코스피 상승세 지속, 외국인 순매수 증가
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  국내 증시가 연일 상승세를 보이며 코스피 지수가 상승했습니다. 외국인 투자자들의 순매수가 증가하면서...
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>뉴스라인365</span>
                  <span>3시간 전</span>
                </div>
              </div>
            </article>
            {/* 뉴스 카드 3 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">이미지 준비중</span>
              </div>
              <div className="p-4">
                <span className="text-sm text-green-600 font-semibold">사회</span>
                <h3 className="text-lg font-bold mt-2 mb-2 line-clamp-2">
                  교육부 새 학기 방역 지침 발표
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  교육부가 새 학기를 맞아 학교 방역 지침을 업데이트했습니다. 학생들의 안전한 학습환경 조성을 위한...
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>뉴스라인365</span>
                  <span>4시간 전</span>
                </div>
              </div>
            </article>

            {/* 뉴스 카드 4 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">이미지 준비중</span>
              </div>
              <div className="p-4">
                <span className="text-sm text-purple-600 font-semibold">문화</span>
                <h3 className="text-lg font-bold mt-2 mb-2 line-clamp-2">
                  부산국제영화제 개막, 화제작 집중 조명
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  제29회 부산국제영화제가 성대하게 개막했습니다. 올해는 특히 아시아 영화의 다양성을 보여주는...
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>뉴스라인365</span>
                  <span>5시간 전</span>
                </div>
              </div>
            </article>

            {/* 뉴스 카드 5 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">이미지 준비중</span>
              </div>
              <div className="p-4">
                <span className="text-sm text-orange-600 font-semibold">국제</span>
                <h3 className="text-lg font-bold mt-2 mb-2 line-clamp-2">
                  미국 대선 후보들 TV 토론 일정 확정
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  오는 미국 대통령 선거를 앞두고 주요 후보들의 TV 토론 일정이 확정되었습니다. 경제정책을 중심으로...
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>뉴스라인365</span>
                  <span>6시간 전</span>
                </div>
              </div>
            </article>

            {/* 뉴스 카드 6 */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">이미지 준비중</span>
              </div>
              <div className="p-4">
                <span className="text-sm text-indigo-600 font-semibold">IT</span>
                <h3 className="text-lg font-bold mt-2 mb-2 line-clamp-2">
                  AI 기술 발전, 새로운 일자리 창출 기대
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  인공지능 기술의 급속한 발전으로 새로운 형태의 일자리가 창출되고 있습니다. 전문가들은 이러한 변화가...
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>뉴스라인365</span>
                  <span>7시간 전</span>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* 분야별 뉴스 섹션들 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* 정치 뉴스 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-red-700 border-l-4 border-red-700 pl-3">
              정치 뉴스
            </h3>
            <div className="space-y-4">
              <article className="flex gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-600">이미지</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                    여야 원내대표 회동, 민생법안 처리 방안 논의
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    여야 원내대표가 만나 현안 처리를 위한 협력방안을 모색했습니다.
                  </p>
                  <span className="text-xs text-gray-500">1시간 전</span>
                </div>
              </article>
              
              <article className="flex gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-600">이미지</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                    지방자치단체 예산안 국정감사 쟁점 부상
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    각 지자체의 예산 집행 과정에서 투명성 논란이 제기되고 있습니다.
                  </p>
                  <span className="text-xs text-gray-500">3시간 전</span>
                </div>
              </article>
            </div>
          </section>

          {/* 경제 뉴스 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-blue-700 border-l-4 border-blue-700 pl-3">
              경제 뉴스
            </h3>
            <div className="space-y-4">
              <article className="flex gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-600">이미지</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                    중소기업 지원 정책 확대, 일자리 창출 효과 기대
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    정부가 중소기업 지원을 위한 새로운 정책을 발표했습니다.
                  </p>
                  <span className="text-xs text-gray-500">2시간 전</span>
                </div>
              </article>
              
              <article className="flex gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-600">이미지</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                    글로벌 반도체 수요 증가, 국내 기업 수혜 전망
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    AI 붐으로 인한 반도체 수요 급증이 지속되고 있습니다.
                  </p>
                  <span className="text-xs text-gray-500">4시간 전</span>
                </div>
              </article>
            </div>
          </section>

          {/* 사회 뉴스 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-green-700 border-l-4 border-green-700 pl-3">
              사회 뉴스
            </h3>
            <div className="space-y-4">
              <article className="flex gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-600">이미지</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                    전국 초중고 2학기 개학, 새로운 교육과정 적용
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    새 학기부터 디지털 교육과정이 본격 도입됩니다.
                  </p>
                  <span className="text-xs text-gray-500">5시간 전</span>
                </div>
              </article>
              
              <article className="flex gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-600">이미지</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                    의료진 파업 사태, 환자 피해 최소화 방안 모색
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    의료계와 정부 간 대화를 통한 해결책 마련이 시급합니다.
                  </p>
                  <span className="text-xs text-gray-500">6시간 전</span>
                </div>
              </article>
            </div>
          </section>

          {/* 문화 뉴스 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-purple-700 border-l-4 border-purple-700 pl-3">
              문화 뉴스
            </h3>
            <div className="space-y-4">
              <article className="flex gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-600">이미지</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                    K-콘텐츠 해외 진출 확대, 문화 수출 증가세
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    드라마와 음악을 중심으로 한류 열풍이 지속되고 있습니다.
                  </p>
                  <span className="text-xs text-gray-500">7시간 전</span>
                </div>
              </article>
              
              <article className="flex gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-600">이미지</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                    전국 박물관 특별전시 잇달아 개최
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    가을을 맞아 다양한 문화예술 전시가 관람객들을 기다립니다.
                  </p>
                  <span className="text-xs text-gray-500">8시간 전</span>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 회사 정보 */}
            <div>
              <h3 className="text-xl font-bold mb-4">뉴스라인365</h3>
              <p className="text-sm text-gray-300 mb-4">
                신뢰할 수 있는 뉴스, 정확한 정보전달<br />
                365일 연중무휴 뉴스 서비스
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  📺
                </a>
              </div>
            </div>

            {/* 바로가기 */}
            <div>
              <h4 className="font-semibold mb-4">바로가기</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">정치</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">경제</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">사회</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">문화</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">국제</a></li>
              </ul>
            </div>

            {/* 서비스 */}
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">뉴스레터 구독</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">모바일 앱</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">RSS 피드</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">광고 문의</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">제휴 문의</a></li>
              </ul>
            </div>

            {/* 고객센터 */}
            <div>
              <h4 className="font-semibold mb-4">고객센터</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>📞 02-1234-5678</li>
                <li>📧 news@newsline365.co.kr</li>
                <li>🏢 서울특별시 중구 세종대로</li>
                <li>⏰ 평일 09:00 - 18:00</li>
              </ul>
            </div>
          </div>

          {/* 저작권 정보 */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 뉴스라인365. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">청소년보호정책</a>
              <a href="#" className="hover:text-white transition-colors">책임한계와법적고지</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}