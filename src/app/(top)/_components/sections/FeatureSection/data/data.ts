import feature1SpPc from './feature1.sppc.webp'
import feature2SpPc from './feature2.sppc.webp'
import feature3SpPc from './feature3.spcp.webp'
import feature1Tb from './feature1.tb.webp'
import feature2Tb from './feature2.tb.webp'
import feature3Tb from './feature3.tb.webp'

export const data = [
  {
    title: '参加者の事前審査制を採用',
    description: '全参加候補者に対して面談・審査を実施し、通過した人のみ参加可能です。学歴・職業等の情報に加え、お人柄や参加動機などを確認させていただきます。' + '\u0020'.repeat(4) + '\u3000'.repeat(5),
    img: {
      sp: feature1SpPc,
      tb: feature1Tb,
      pc: feature1SpPc,
    }
  },
  {
    title: '安心・安全のフォロー体制',
    description: '共有スペースには見守りカメラを設置。運営によるチェックを定期的に行っております。\n期間中不安なことなどがあれば、いつでもオンライン面談や電話などが可能です。',
    img: {
      sp: feature2SpPc,
      tb: feature2Tb,
      pc: feature2SpPc,
    }
  },
  {
    title: '非日常を感じられる体験',
    description: '年齢と職業を非公開にしたコミュニケーションや協力して行うミッションなど、恋愛リアリティショーのような非日常の体験を通して、特別な親睦が深められます。' + '\u3000'.repeat(3),
    img: {
      sp: feature3SpPc,
      tb: feature3Tb,
      pc: feature3SpPc,
    }
  }
]
