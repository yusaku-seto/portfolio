"use client";
import profileData from '../../public/json/profile.json';
import FadeIn from './components/UI/FadeIn';
import FadeInPlace from './components/UI/FadeInPlace';
import Header from "./components/base/Header";
export default function Home() {
  const { name, biography, activities, skills } = profileData;
  return (
    <div className='body'>
      <Header></Header>
      <div className=" bg-gray-100 ">
        {/* Profile */}
        <div className="max-w-6xl mx-auto p-8">
          <div className="profile">
            <p className='catchphrase'>工学とAIの融合で新たな可能性を拓く</p>
            <p className='catchphrase-sub'>多分野にわたる知識と技術を駆使して社会の課題を解決</p>
            <FadeInPlace>
              <ruby className='name-kanji'>瀬戸優作</ruby>
              <h2 className="name-romaji">
                SETO Yusaku
                <span className='profession'>enginner</span>
              </h2>
              <p className='history'>
                東京農工大学 工学部 機械システム工学科学部4年。2027年修了予定。スマートモビリティ研究拠点・ポンサトーン研究室所属。
                <br />
                国際的研究拠点に身を置き、ヒヤリハットデータベース構築と分析や車両運動力学、制御工学、機械学習・データサイエンスを扱い、安全・快適で持続可能な交通社会の実現に向けて研究に取り組んでいます。
                <br />
                <br />
                インターンでは、Pythonを用いた需要予測モデルの構築やデータ分析を担当し、再生可能エネルギーの需給予測モデルの開発に携わりました。また、執務者の位置情報や生体情報を分析し、集中度を向上させるレコメンド機能の開発にも取り組みました。さらに、展示会対応や営業活動も経験し、チームでの開発を通じてデータ分析やAIの実践的な活用方法を学びました。
                <br />
                <br />
                また、Unity を活用して体験型アートの制作にも取り組みました。学祭では、4次元ベクトルの回転や透視投影といった数学的知識を応用し、多くの来場者に楽しんでいただけるコンテンツを展示しました。この工学とアートを融合させた取り組みを通じて、新しい価値を創出する可能性を実感しました。
                <br />
                <br />
                私は、工学を基盤として、AIやプログラミング、シミュレーション技術、そしてXR技術などの最新技術を統合的に活用し、より良い社会の実現に貢献したいと考えています。これまでの学びと経験を活かし、多様な分野で新しい可能性を切り拓いていきたいと考えています。
              </p>
              {/* <p>工学とAI、XRの融合で社会問題を解決し、技術革新を通じてより良い社会を実現に貢献できることを目指します</p> */}
            </FadeInPlace>
          </div>
        </div>
      </div>

      {/* Skill */}
      <div className="scroll-section">
        <div className="background-image"></div>
        {/* <div className="w-full text-left mb-4"> */}
        <FadeInPlace>
          <h2 className='h2-title'>実務経験</h2>
        </FadeInPlace>
        <div className="experience">
          <section className='experience-item'>
            <div className="experience-image">
              <FadeInPlace>
                <img src="./img/works/AI_model.png" alt="image" />
              </FadeInPlace>
            </div>
            <div className="experience-content">
              <FadeIn>
                <h3 className='experience-title'>機械学習</h3>
                <p className='experience-content'>電力需給最適化サービスの開発において、電力需給予測モデルの構築を担当しました。気象データを基に、家庭や事業所の電力需要や再生可能エネルギー（太陽光・風力）の発電量を予測するモデルを開発。また、研究ではクラスタリングや2値分類を活用し、統計的に有意な分析を行い、データの特徴を抽出することで新たな知見を得ることができました。
                </p>
              </FadeIn>
            </div>
          </section>
          <section className='experience-item reverse'>
            <div className="experience-image">
              <FadeInPlace>
                <img src="./img/works/data_analysis.png" alt="image" />
              </FadeInPlace>
            </div>
            <div className="experience-content">
              <FadeIn>
                <h3 className='experience-title'>データ分析</h3>
                <p className='experience-content'>大手建設会社が提供するアプリ内で、執務者の位置情報や生体情報を分析し、集中度向上を目指したレコメンド機能を開発しました。また、大量データをPythonで効率的に分析し、電力使用状況の可視化や研究データの統計解析を実施。これらの結果を基に、省エネルギー化や新たな発見をサポートしました。
                </p>
              </FadeIn>
            </div>
          </section>
          <section className='experience-item'>
            <div className="experience-image">
              <FadeInPlace>
                <img src="./img/works/lab_streamlit.png" alt="image" />
              </FadeInPlace>
            </div>
            <div className="experience-content">
              <FadeIn>
                <h3 className='experience-title'>簡易WEBアプリ化</h3>
                <p className='experience-content'>Pythonで構築した処理や分析結果をWebアプリに統合し、誰でも直感的にデータを可視化できる環境を提供しました。研究の実験時にもそリアルタイムでデータ処理や比較ができる環境を構築。異常なデータにも迅速に対応できるようになり、研究の効率化にも役立てました。
                </p>
              </FadeIn>
            </div>
          </section>
          <section className='experience-item reverse'>
            <div className="experience-image">
              <FadeInPlace>
                <img src="./img/works/python_object_oriented.png" alt="python object oriented" />
              </FadeInPlace>
            </div>
            <div className="experience-content">
              <FadeIn>
                <h3 className='experience-title'>Pythonによる高品質な開発</h3>
                <p className='experience-content'>関数化やオブジェクト指向設計を導入し、可読性や拡張性を向上を意識しました。安全性と再利用性を高め、効率的かつ保守性の高い開発を実現しました。
                </p>
              </FadeIn>
            </div>
          </section>
          <section className='experience-item'>
            <div className="experience-image">
              <FadeInPlace>
                <img src="./img/works/unity_star.png" alt="image" />
              </FadeInPlace>
            </div>
            <div className="experience-content">
              <FadeIn>
                <a href="/learning">
                  <h3 className='experience-title'>その他の技術</h3>
                  <p className='experience-content'>フロントエンド開発（Next.js）、バックエンド開発（Django REST Framework）、Unityを用いた体験型コンテンツ制作など、多岐にわたる技術を独学で習得しました。新たな分野にも積極的に挑戦しています。
                  </p>
                </a>
              </FadeIn>
            </div>
          </section>
        </div>
      </div>
    </div >
  );
}
