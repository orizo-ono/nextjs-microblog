import fs, { readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

// ↓path.join(process.cwd(), "posts");とすることでプロジェクトないのディレクトリ全体を参照している
const postsDirectory = path.join(process.cwd(), "posts");
export default function getPostsData() {
  // fs.readdirSyncとし引数にpostsDirectoryを渡すことでその渡した引数（ディレクトリの中身）を配列として持つことができる
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // 拡張子は必要ないのでreplaceで取り除いている（.mdを第二引数の""で空文字に変換している）
    const id = fileName.replace(/\.md$/, "");
    // まずはパスを取得する！（fileNameにはpostsというディレクトリ内のファイル、パスを取得している）
    const fullPath = path.join(postsDirectory, fileName);
    // マークダウンファイルの中身を文字列として読み取る
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // マークダウンファイルのtitleやthumbnailやdateを取得している
    const matterResult = matter(fileContents);
    // matterResultをスプレッド構文で全て展開する
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContent);

  const blogContent = await remark().use(html).process(matterResult.content);

  const blogContentHTML = blogContent.toString();
  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  };
}
