"use client";
import Link from 'next/link';
import Header from '../components/base/Header';
import FadeIn from '../components/UI/FadeIn';
import FadeInPlace from '../components/UI/FadeInPlace';
export default function Profile() {
  return (
    <div className='body'>
      <Header></Header>
      <section className="about-section" id="about">
        <FadeInPlace>
          <h2 className='h2-title'>学習した技術</h2>
        </FadeInPlace>
        <div className="experience">
          <div className="experience-item">
            <div className="experience-image">
              <FadeInPlace>
                <img src="./img/data_analysis.JPG" alt="大学での学び" />
              </FadeInPlace>
            </div>
            <div className="experience-content">
              <FadeIn>
                <h3>XR技術</h3>
                <p>Unity を勉強し、XR テクノロジーを探求するためのシンプルなゲームを開発しました。私の目標は、XR とエンジニアリングを組み合わせて、現実世界の実験の代替として役立つ安全な研究環境を作成することです</p>
              </FadeIn>
            </div>
          </div>
          <div className="experience-item reverse">
            <div className="experience-image">
              <FadeInPlace>
                <img src="./img/backend.png" alt="backend" />
              </FadeInPlace>
            </div>
            <div className="experience-content">
              <FadeIn>
                <h3>バックエンド開発</h3>
                <p>Django を使用して、MySQL や PostgreSQL などのデータベースを統合する方法や API を構築する方法を学びました。Python の強みを活かして、他のプラットフォームとやり取りできるサービスを作成することに重点を置きました。</p>
              </FadeIn>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-image">
              <FadeInPlace>
                <img src="./img/frontend.png" alt="機械学習ゼミ" />
              </FadeInPlace>
            </div>
            <div className="experience-content">
              <FadeIn>
                <h3>フロントエンド開発</h3>
                <p>NEXT.jsも勉強し、JSXを採用して安全な開発を心がけました。このサイトもNEXT.jsで構築しており、ページ遷移のあるWebサイトの構築やCSSによるマークアップ技術の習得を経験しました。</p>
              </FadeIn>
            </div>
          </div>
          <div className="experience-item reverse">
            <div className="experience-image">
              <FadeInPlace>
                <img src="./img/gourmet_app.png" alt="趣味" />
              </FadeInPlace>
            </div>
            <div className="experience-content">
              <FadeIn>
                <h3>Webアプリケーション開発</h3>
                <p>バックエンド開発から始まり、当初はStreamlitやDjangoなどの組み込みUIツールに頼っていました。しかし、フロントエンド開発、HTTP通信、非同期処理を学ぶことで、独自のAPIをフロントエンドに連携させ、フロントエンドからデータベース操作ができるアプリケーションを構築できるようになりました。これにより、Webアプリのアーキテクチャをしっかりと理解することができました。</p>
              </FadeIn>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-image">
              <FadeInPlace>
                <img src="./img/data_analysis.JPG" alt="機械学習ゼミ" />
              </FadeInPlace>
            </div>
            <div className="experience-content">
              <FadeIn>
                <h3>データ構造とアルゴリズム</h3>
                <p>現在、より高度なプログラムを作成するための最適化手法とアルゴリズムを学んでいます。これらを大学で得たエンジニアリングの知識と組み合わせて、現実世界の問題を解決することを目指しています。また、大きな計算負荷を処理できる効率的なプログラムを作成するために、C</p>
              </FadeIn>
            </div>
          </div>
          <div className="experience-item reverse">
            <div className="experience-image">
              <FadeInPlace>
                <img src="./img/data_analysis.JPG" alt="趣味" />
              </FadeInPlace>
            </div>
            <div className="experience-content">
              <FadeIn>
                <h3>工学知識</h3>
                <p>大学では、目標を正確に制御できるPIDなどの制御システムについて学びました。これは、車両の速度維持や空調温度の調節など、社会的課題の解決に応用できます。</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>


      {/* Skill */}
      <div className="scroll-section">


        <Link href={"https://iibc.cloudcerts.jp/viewer/cert/5aJemlWBgNAqgu68NgOA5VmIbVAVQ8JRavpo91x8eARGGuWro41Qv5gTdYq1eRJw"}>TOEIC820点：証明書</Link>
      </div>
    </div>

  );
};
