import glob from "fast-glob";
import * as path from "path";

async function importProject(projectFileNames: any) {
  let { meta, default: component } = await import(
    `src/app/projects/${projectFileNames}`
  );
  return {
    slug: projectFileNames.replace(/(\/content)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllProjects() {
  let projectFileNames = await glob(["*.mdx", "*/content.mdx"], {
    cwd: path.join(process.cwd(), "src/app/projects"),
  });

  let projects = await Promise.all(projectFileNames.map(importProject));
  return projects.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
