"use client";
import FadeInPlace from '../components/UI/FadeInPlace';
import Header from "../components/base/Header";
export default function Home() {
  return (
    <div className='body'>
      <Header></Header>
      <div className=" bg-gray-100 ">

      </div>

      {/* Skill */}
      <div className="scroll-section">
        <div className="background-image"></div>
        <div className="max-w-6xl mx-auto p-8">
          {/* <div className="w-full text-left mb-4"> */}
          <FadeInPlace>
            <h2 className='h2-title'>学習技術</h2>
          </FadeInPlace>
          <section className='career-section'>
            <div className="career-image">
              <p className='career-date'>2021-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>大学入学</h3>
              <p className='career-content'>塾に通わずに自分で学習計画を立て、都内の国立大学に現役合格。工学部に所属し、４力学の基礎を学んだ。
              </p>
            </div>
          </section>
          <section className='career-section'>
            <div className="career-image">
              <p className='career-date'>2022-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>Python学習</h3>
              <p className='career-content'>学科の実験で数万行のデータをエクセルで処理することに限界を感じ、Python学習を開始
              </p>
            </div>
          </section>
          <section className='career-section'>
            <div className="career-image">
              <p className='career-date'>2022-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>フロントエンド開発</h3>
              <p className='career-content'>NEXT.jsも勉強し、JSXを採用して安全な開発を心がけました。このサイトもNEXT.jsで構築しており、ページ遷移のあるWebサイトの構築やCSSによるマークアップ技術の習得を経験しました。
              </p>
            </div>
          </section>
          <section className='career-section'>
            <div className="career-image">
              <p className='career-date'>2022-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>Webアプリケーション開発</h3>
              <p className='career-content'>バックエンド開発から始まり、当初はStreamlitやDjangoなどの組み込みUIツールに頼っていました。しかし、フロントエンド開発、HTTP通信、非同期処理を学ぶことで、独自のAPIをフロントエンドに連携させ、フロントエンドからデータベース操作ができるアプリケーションを構築できるようになりました。これにより、Webアプリのアーキテクチャをしっかりと理解することができました。
              </p>
            </div>
          </section>
          <section className='career-section'>
            <div className="career-image">
              <p className='career-date'>2022-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>データ構造とアルゴリズム</h3>
              <p className='career-content'>現在、より高度なプログラムを作成するための最適化手法とアルゴリズムを学んでいます。これらを大学で得たエンジニアリングの知識と組み合わせて、現実世界の問題を解決することを目指しています。また、大きな計算負荷を処理できる効率的なプログラムを作成するために、C++ も学習しています。
              </p>
            </div>
          </section>
          <section className='career-section'>
            <div className="career-image">
              <p className='career-date'>2022-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>工学知識</h3>
              <p className='career-content'>大学では、目標を正確に制御できるPIDなどの制御システムについて学びました。これは、車両の速度維持や空調温度の調節など、社会的課題の解決に応用できます。
              </p>
            </div>
          </section>
        </div>

      </div>
    </div >
  );
}
