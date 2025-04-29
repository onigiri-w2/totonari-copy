import Footer from "@/components/Footer"
import headerStyles from "@/components/Header/styles.module.css"
import DocsHeader from "./DocsHeader"

type Props = {
  children: React.ReactNode
  title: string
}
export default function SiteDocsLayout({ children, title }: Props) {
  return (
    <div className="bg-secondary text-primary">
      <div className="fixed inset-x-0 top-0 z-10">
        <DocsHeader />
      </div>
      <div className={headerStyles["page-header-height"]} />
      <main className="site-container pt-[36px]">
        <article className="mx-auto w-full max-w-[620px]">
          <h1 className="text-center text-[23px] font-semibold">
            {title}
          </h1>
          <div className="mt-[36px]">
            {children}
          </div>
        </article>
      </main>
      <div className="mt-[120px]">
        <Footer />
      </div>
    </div>
  )
}
