import { motion } from "motion/react";
import type { WorkProject } from "@/data/work-projects";

type WorkProjectDetailProps = {
  project: WorkProject;
  onClose: () => void;
};

export function WorkProjectDetail({ project, onClose }: WorkProjectDetailProps) {
  const renderAsset = (asset: WorkProject["images"][number], imageIndex: number) => (
    <figure
      className={`work-project-asset ${asset.width / asset.height < .95 ? "is-portrait" : "is-landscape"}`}
      key={asset.src}
      style={{ "--asset-native-width": `${asset.width}px` } as React.CSSProperties}
    >
      <img
        src={asset.src}
        alt={`${project.title}项目展示 ${imageIndex + 1}`}
        width={asset.width}
        height={asset.height}
        loading={imageIndex < 2 ? "eager" : "lazy"}
        decoding="async"
      />
      <figcaption>{project.index}.{String(imageIndex + 1).padStart(2, "0")}</figcaption>
    </figure>
  );

  return (
    <motion.div
      className="object-viewer work-project-viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .32 }}
    >
      <button className="viewer-backdrop" type="button" onClick={onClose} aria-label={`关闭${project.title}项目`} />
      <motion.article
        className={`work-project-detail is-${project.surface} is-layout-${project.assetLayout ?? "native"}`}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .48, ease: [0.22, 0.7, 0.2, 1] }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.id}-title`}
      >
        <button className="viewer-close work-project-close" type="button" onClick={onClose}>CLOSE ×</button>

        <header className="work-project-header">
          <div className="work-project-heading">
            <span>PROJECT / {project.index}</span>
            <h3 id={`project-${project.id}-title`}>{project.title}</h3>
            {project.englishTitle !== project.title && <p>{project.englishTitle}</p>}
          </div>
          <div className="work-project-meta">
            <span>{[project.category, project.year].filter(Boolean).join(" / ")}</span>
            {project.description && <p>{project.description}</p>}
          </div>
        </header>

        <div className="work-project-artboard">
          {project.sections ? (
            <div className="work-project-case-sections">
              {project.sections.map((section) => (
                <section className={`work-project-case-section is-${section.layout}`} key={section.number}>
                  <header>
                    <span>{section.number}</span>
                    <div><h4>{section.title}</h4><p>{section.chineseTitle}</p></div>
                    <small>{section.description}</small>
                  </header>
                  <div className="work-project-case-assets">
                    {section.imageIndexes.map((imageIndex) => renderAsset(project.images[imageIndex], imageIndex))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="work-project-pages">
              {project.images.map(renderAsset)}
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}
