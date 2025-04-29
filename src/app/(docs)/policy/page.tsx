import SiteDocsLayout from '../_components/DocsLayout'
import Body from './body.mdx'
import styles from "../markdown_style.module.css"
import { Metadata } from 'next';


export default function PolicyPage() {
  return (
    <SiteDocsLayout title="プライバシーポリシー">
      <div className={styles.container}>
        <Body />
      </div>
      <div className="mt-[8px]">
        <p>株式会社camelia</p>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="w-[70px]">E-Mail</td>
              <td className="w-[30px]">：</td>
              <td>info@camelia-inc.com</td>
            </tr>
            <tr>
              <td className="w-[70px]">宛先</td>
              <td className="w-[30px]">：</td>
              <td>管理部</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-[32px]">以上</p>
    </SiteDocsLayout>
  )
}
export const metadata: Metadata = {
  title: "プライバシーポリシー | totonari",
  description: "totonariのプライバシーポリシーページです",
};



