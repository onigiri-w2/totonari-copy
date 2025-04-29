import clsx from "clsx";
import type { TopPageNavItem } from "../types";
import { sectionIds } from "@/const";
import { scrollTo } from "@/app/(top)/functions";
import { useMenuContext } from "../context";
import { usePathname, useRouter } from "next/navigation";

const navs: TopPageNavItem[] = [
  { title: 'Concept', subtitle: 'コンセプト', id: sectionIds.concept },
  { title: 'Price', subtitle: '料金について', id: sectionIds.price },
  { title: 'Scene', subtitle: '体験利用シーン', id: sectionIds.scene },
  { title: 'Review', subtitle: '参加者の声', id: sectionIds.review },
  { title: 'Service', subtitle: 'サービス内容', id: sectionIds.service },
  { title: 'Schedule', subtitle: '実施スケジュール', id: sectionIds.schedule },
  { title: 'Feature', subtitle: 'totonariの特徴', id: sectionIds.feature },
  { title: 'FAQ', subtitle: 'よくある質問', id: sectionIds.faq },
]

export default function TopPageNav() {
  const itemRows = organizeItemsIntoRows(navs, 2);
  const pathname = usePathname();
  const router = useRouter();
  const { closeMenuOverlay } = useMenuContext();

  const handleClickItem = (item: TopPageNavItem) => {
    if (pathname === '/') {
      closeMenuOverlay();
      scrollTo(item.id);
    } else {
      router.push('/');
      closeMenuOverlay();
      setTimeout(() => {
        scrollTo(item.id);
      }, 50);
    }
  }

  return (
    <div className="space-y-[20px] md:space-y-[44px]">
      {itemRows.map((row, rowIndex) => {
        return (
          <div key={`row-${rowIndex}`} className="flex" >
            {row.map((item, columnIndex) => {
              const isFirstColumn = columnIndex === 0;

              return (
                <div
                  key={`item-${rowIndex}-${columnIndex}`}
                  className={clsx(
                    'flex flex-1 justify-start pl-[44px] md:pl-[64px] lg:pl-0',
                    isFirstColumn && 'lg:min-w-[270px] lg:max-w-[270px]',
                  )}
                >
                  <NavItem item={item} onClick={() => handleClickItem(item)} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

type NavItemProps = {
  item: TopPageNavItem;
  onClick: () => void;
}
function NavItem({ item, onClick }: NavItemProps) {
  return (
    <div
      className="cursor-pointer transition duration-300 hover:opacity-60 active:opacity-60 space-y-[8px]"
      onClick={onClick}
    >
      <p className="tracking-100 font-cabin font-medium text-[17px] md:text-[24px] md:font-normal leading-none">
        {item.title}
      </p>
      <p className="text-[10px] md:text-[12px] tracking-40 md:font-light leading-none">
        {item.subtitle}
      </p>
    </div>
  );
}

// ヘルパー関数 - 名前のタイプミスを修正
const organizeItemsIntoRows = (menuItems: TopPageNavItem[], itemsPerRow: number) => {
  const rows = [];
  for (let i = 0; i < menuItems.length; i += itemsPerRow) {
    rows.push(menuItems.slice(i, i + itemsPerRow));
  }
  return rows;
};
