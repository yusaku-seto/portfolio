"use client";
import FadeInPlace from '../components/UI/FadeInPlace';
import Header from "../components/base/Header";
export default function Values() {
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
                <h3 className='vision-title'>計画性</h3>
                <p className='vision-content'>私が最も大切にしていることは、優先順位を明確にし、計画を立てて効率的に行動することです。この考え方は、私の高校生時代からの軸であり、さまざまな経験において支えになりました。大学受験時には、限られた時間の中で自分の得意分野と課題を見極め、塾に通わずに独学で国立理系大学に現役合格することができました。大学入学後も2年の前期には27単位を取得し、GPA 3.92/4という成績を収めることができました。また、3年時にはインターンや複数のプロジェクトと並行してTOEICで820点を取得し、自分のスキルを着実に高めてきました。
                  <br />
                  私は、多岐にわたる知識と経験を社会に還元することを目指しています。これまで、電力業界ではAIを活用して電力需給予測モデルを構築し、省エネをサポートするシステムを開発しました。また、数学や物理の知識を応用し、Unityを使ったアート展示を制作。来場者が楽しめる体験型コンテンツを提供し、技術が持つ可能性を体感していただきました。このように、古典的な工学の知識と最新のAIやプログラミング技術を融合させることで、さまざまな分野で新しい価値を生み出すことを心がけています。

                  さらに、エンジニアとしての役割にとどまらず、展示会対応などの営業活動にも参加してきました。また、チームでプロジェクトを進める際には、自分の作業が他のメンバーに与える影響を意識し、優先すべきタスクに集中することで、チーム全体の効率を高めるよう努めています。
                  <br />
                  これまでの経験を通じて学んだのは、個人の知識やスキルを高めるだけでなく、それを活かして周囲や社会にどのように貢献できるかを常に考えることの大切さです。私は、自分の専門知識や技術を使って社会の課題解決に役立てると同時に、チームやプロジェクト全体がより良い成果を上げられるように尽力していきたいと考えています。
                </p>
              </div>
              <a href="/about">戻る</a>
            </section>
          </section>
        </div>

      </div>
    </div >
  );
}
