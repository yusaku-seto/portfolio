"use client";
import Link from 'next/link';
import FadeInPlace from '../components/UI/FadeInPlace';
import Header from "../components/base/Header";
export default function About() {
  return (
    <div className='body'>
      <Header></Header>
      <div className=" bg-gray-100 ">

      </div>

      {/* Skill */}
      <div className="scroll-section">
        <div className="background-image"></div>
        <div className="max-w-6xl mx-auto p-8">
          <section>
            <section className='vision-section'>
              <FadeInPlace>
                <h2 className='h2-title'>大切にしていること</h2>
              </FadeInPlace>
              <div className="vision-content">
                <h3 className='vision-title'>知識や経験を社会に還元すること</h3>
                <p className='vision-content'>私は、工学やAIの知識や経験を活用して社会に貢献することを目指しています。これまで、省エネのサポートや誰もが楽しめるコンテンツの提供など、多岐にわたる分野で技術を活用してきました。データ分析でクライアントから高評価を得たり、体験型展示作品で楽しんでいただける様子を見て、やりがいを感じています。
                </p>
              </div>
              <div className="vision-content">
                <h3 className='vision-title'>限られたリソースの中で優先順位を考え、計画的に行動すること</h3>
                <p className='vision-content'>時間やリソースが限られる中で、冷静に状況を判断し、効率的な計画を立てることで成果を最大化することを意識しています。学業やインターン、複数のプロジェクトを同時進行させながら、優先度を明確にして計画的に活動してきました。
                </p>
              </div>
              <div className="vision-content">
                <h3 className='vision-title'>チーム全体がスムーズに動けるように配慮し、協力して成果を出すこと</h3>
                <p className='vision-content'>個人の成果だけでなく、チーム全体での成功を目指しています。自分の役割が他のメンバーに与える影響を意識しながら行動することを大切にしています。特に、自分の作業が他のメンバーの動きに直結する場合には、優先して取り組むことでチーム全体の効率を高めるよう努めてきました。
                </p>
              </div>
              <Link href="/values">詳しくはこちら</Link>
              <a href="/"></a>
            </section>
            {/* <div className="w-full text-left mb-4"> */}
            <FadeInPlace>
              <h2 className='h2-title'>経歴</h2>
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
              <p className='career-date'>2023-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>インターン参画</h3>
              <p className='career-content'>長期インターン開始。機械学習モデルを用いた電力需給シミュレータの開発、展示会対応など幅広い業務を経験させていただいています。
              </p>
            </div>
          </section>
          <section className='career-section'>
            <div className="career-image">
              <p className='career-date'>2023-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>Webアプリケーション開発</h3>
              <p className='career-content'>フロントエンド開発、HTTP通信、非同期処理を学ぶことで、独自のAPIをフロントエンドに連携させ、フロントエンドからデータベース操作ができるアプリケーションを構築できるようになりました。
              </p>
            </div>
          </section>
          <section className='career-section'>
            <div className="career-image">
              <p className='career-date'>2024-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>TOEIC 820点取得</h3>
              <p className='career-content'>苦手な英語学習にも取り組みました。
              </p>
            </div>
          </section>
          <section className='career-section'>
            <div className="career-image">
              <p className='career-date'>2024-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>体験型アート制作</h3>
              <p className='career-content'>学祭で展示するインタラクティブアートのUnity投影部門を開発しました。
              </p>
            </div>
          </section>
          {/* <section className='career-section'>
            <div className="career-image">
              <p className='career-date'>2024-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>データ構造とアルゴリズム</h3>
              <p className='career-content'>現在、より高度なプログラムを作成するための最適化手法とアルゴリズムを学んでいます。これらを大学で得たエンジニアリングの知識と組み合わせて、現実世界の問題を解決することを目指しています。また、大きな計算負荷を処理できる効率的なプログラムを作成するために、C++ も学習しています。
              </p>
            </div>
          </section> */}
          <section className='career-section'>
            <div className="career-image">
              <p className='career-date'>2024-</p>
            </div>
            <div className="career-content">
              <h3 className='career-title'>工学知識</h3>
              <p className='career-content'>大学では、研究活動を通して実際に役に立つ工学の知識を深めています。例えば、PIDなどの制御システムは車両の速度維持や空調温度の調節など、身の回りの制御に活かされています。
              </p>
            </div>
          </section>
        </div>

      </div>
    </div >
  );
}
