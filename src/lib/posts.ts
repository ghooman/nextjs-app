import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src", "posts");
// postsDirectory = 'src/posts'

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  // fileNames = ['pre-rendering.md', 'ssg-ssr.md']

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    // id = 'pre-rendering', 'ssg-ssr'
    const fullPath = path.join(postsDirectory, fileName);
    // fullPath = 'src/posts/pre-rendering.md', 'src/posts/ssg-ssr.md'
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
