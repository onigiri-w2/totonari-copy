import Step from './Step'

export default function Steps() {
  return (
    <div className="lg:flex">
      <Step
        step={1}
        title="本サイトにエントリー"
        descriptionComponent={<Step1 />}
        isFirst={true}
        isLast={false}
      />
      <Step
        step={2}
        title="審査員との面談・対話"
        descriptionComponent={<Step2 />}
        isFirst={false}
        isLast={false}
      />
      <Step
        step={3}
        title="同性メンバーとの顔合わせ"
        descriptionComponent={<Step3 />}
        isFirst={false}
        isLast={false}
      />
      <Step
        step={4}
        title="2泊3日の共同生活スタート"
        descriptionComponent={<Step4 />}
        isFirst={false}
        isLast={true}
      />
    </div>
  )
}

const Step1 = () => {
  return (
    <div>
      <p>まずは本サイトのエントリーボタンより応募をお願いいたします。</p>
      <p>応募条件は以下の通りです。</p>
      <ul className="mt-3">
        <li>・ 20代～30代 </li>
        <li>・ 恋人/配偶者がいないこと</li>
      </ul>
    </div>
  )
}
const Step2 = () => {
  return (
    <div>
      <p>
        本人確認書類をご提出いただいたのち、totonari運営事務局との面談（審査）を実施いたします。恋愛の悩みや課題についても、ぜひ対話させてください。
      </p>
    </div>
  )
}
const Step3 = () => {
  return (
    <div>
      <p>
        審査に通過し、参加確定した方は同日程に参加予定の同性メンバーと事前顔合わせを行います。
      </p>
    </div>
  )
}
const Step4 = () => {
  return (
    <div>
      <p>
        いよいよ共同生活のスタートです！ミッションをクリアしながらそれぞれの「人となり」を知っていきましょう。
      </p>
    </div>
  )
}

