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
          <section>
            <section className='vision-section'>
              <FadeInPlace>
                <h2 className='h2-title'>大切にしていること</h2>
              </FadeInPlace>
              <div className="vision-content">
                <h3 className='vision-title'>知識や経験を社会に還元すること</h3>
                <p className='vision-content'>私は、自分の専門知識を社会の課題解決に役立てることを目指しています。
                  例えば、工学の知識を活かして電力業界でAIを用いた省エネサポートを行ったり、数学や物理の知識を応用してUnityでアート展示を制作したりと、多岐にわたる取り組みを行ってきました。これらの活動を通じて、「目的を見据え、自分が提供できる価値を最大限発揮する」という姿勢を大切にしています。さらに、AIやシミュレーション技術を用いたプロジェクトでは、工学という古典的な学問と最新技術を融合することで、新たな価値を創造する可能性を感じています。

                  限られた時間やリソースの中で最大の成果を出すためには、冷静な判断と計画性が不可欠です。
                  私は、自分の能力や状況を客観的に評価し、優先順位を明確にした計画を立てることで、効率的に行動することを心がけています。たとえば、大学で学業とインターンを両立させながらTOEICで820点を取得した経験や、複数のプロジェクトを同時進行し、それぞれで求められる成果を出した経験があります。これらの成功は、限られたリソースを有効活用する計画性によって支えられたものです。
                  私は、個人の成果と共に、チーム全体での成功を重視しています。
                  誰かの作業が完了しないと次に進めないような状況を避けるためにタスクの優先順位を調整したり、他のメンバーがスムーズに作業を進められるよう環境を整えることを意識しています。これにより、チーム全体が効率的に動ける環境を作り、協力して大きな成果を上げることを目指しています。特に、AIやシミュレーションのプロジェクトでは、異なる専門性を持つメンバーとの協力が不可欠であり、その中で全体の調和を図ることが重要だと感じています。
                  これらの価値観を基に、私は常に目標に向かって計画的かつ柔軟に行動し、個人としてもチームとしても社会に貢献できる成果を追求しています。これからもこの姿勢を大切にし、新たな挑戦に積極的に取り組んでいきたいと考えています。
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
