import type { sectionIds } from "../const";

export type SectionId = typeof sectionIds[keyof typeof sectionIds];
