import Body from './body.mdx'
import SiteDocsLayout from '../_components/DocsLayout'

import styles from "../markdown_style.module.css"
import { Metadata } from 'next'

export default function SctlPage() {
  return (
    <SiteDocsLayout title="特定商取引法に基づく表示">
      <div className={styles.container}>
        <Body />
      </div>
    </SiteDocsLayout>
  )
}

export const metadata: Metadata = {
  title: "特定商取引法に基づく表示 | totonari",
  description: "totonariの特定商取引法に基づく表示ページです",
};
