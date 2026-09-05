export type PortfolioSection = "home" | "about" | "work" | "life" | "ai" | "contact";

type ArchiveNavigationProps = {
  active: PortfolioSection;
};

const items = [
  { id: "home", label: "首页", english: "HOME" },
  { id: "about", label: "关于我", english: "ABOUT" },
  { id: "work", label: "作品案例", english: "WORK" },
  { id: "life", label: "我的人生支点", english: "MY PILLARS" },
  { id: "ai", label: "AI创意", english: "AI CREATIVE" },
  { id: "contact", label: "联系我", english: "CONTACT" },
] as const;

export function ArchiveNavigation({ active }: ArchiveNavigationProps) {
  return (
    <nav className="archive-tabs" aria-label="作品集导航">
      {items.map((item) => (
        <a
          className={`archive-tab ${item.id === active ? "is-active" : ""}`}
          href={`#${item.id}`}
          key={item.id}
          aria-current={item.id === active ? "page" : undefined}
        >
          <span>{item.label}</span>
          <small>{item.english}</small>
        </a>
      ))}
    </nav>
  );
}
