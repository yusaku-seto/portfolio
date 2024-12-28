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
            <p className='catchphrase'>工学とAI、XRの融合でより良い社会を実現したい</p>
            <FadeInPlace>
              <ruby className='name-kanji'>瀬戸優作</ruby>
              <h2 className="name-romaji">
                SETO Yusaku
                <span className='profession'>enginner</span>
              </h2>
              <p className='history'>
                2002.08.08生まれ、東京都出身。東京農工大学スマートモビリティ研究拠点・ポンサトーン研究室所属。国際的研究拠点に身を置き、ヒヤリハットデータベース構築と分析や車両運動力学、制御工学、機械学習・データサイエンスを扱い、安全・快適で持続可能な交通社会の実現に向けて研究に取り組んでいます。
                <br />
                2002.08.08生まれ、東京都出身。東京農工大学スマートモビリティ研究拠点・ポンサトーン研究室所属。国際的研究拠点に身を置き、ヒヤリハットデータベース構築と分析や車両運動力学、制御工学、機械学習・データサイエンスを扱い、安全・快適で持続可能な交通社会の実現に向けて研究に取り組んでいます。
                <br />
                2002.08.08生まれ、東京都出身。東京農工大学スマートモビリティ研究拠点・ポンサトーン研究室所属。国際的研究拠点に身を置き、ヒヤリハットデータベース構築と分析や車両運動力学、制御工学、機械学習・データサイエンスを扱い、安全・快適で持続可能な交通社会の実現に向けて研究に取り組んでいます。
                <br />
                2002.08.08生まれ、東京都出身。東京農工大学スマートモビリティ研究拠点・ポンサトーン研究室所属。国際的研究拠点に身を置き、ヒヤリハットデータベース構築と分析や車両運動力学、制御工学、機械学習・データサイエンスを扱い、安全・快適で持続可能な交通社会の実現に向けて研究に取り組んでいます。
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
                <p className='experience-content'>電力需給最適化サービスの電力需給予測モデルの開発を担当。気象データから家庭や事業所の電力需要や、太陽光・風力などの再生可能エネルギー発電量を予測するモデルを構築しました。
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
                <p className='experience-content'>執務者の位置情報や生体情報を分析し、集中度を向上させるレコメンド機能を開発。また、時系列データを扱い、施設の電力消費データも分析し、効率改善をサポートしました。
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
                <p className='experience-content'>Pythonで構築した処理やデータ分析結果のグラフをWEBアプリに組み込み、誰でも直感的にデータを可視化できる環境を提供。より簡単に処理の実行やデータの比較ができるよう、支援しました。
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
                <p className='experience-content'>関数化やオブジェクト指向設計を導入し、可読性や拡張性を向上。安全性と再利用性を高め、効率的な開発を実現しました。
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
                <h3 className='experience-title'>その他の技術</h3>
                <p className='experience-content'>フロントエンド、バックエンド、Unityなどの技術も学習しています。
                </p>
              </FadeIn>
            </div>
          </section>
        </div>
      </div>
    </div >
  );
}
