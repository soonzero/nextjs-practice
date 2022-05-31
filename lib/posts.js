import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // /posts 폴더 아래의 파일들 가져오기
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // 파일명을 id 값으로 활용하기 위해 파일명에서 '.md' 확장자 제거
    const id = fileName.replace(/\.md$/, "");

    // 마크다운 파일을 문자열로 읽어 들이기
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // gray-matter 이용하여 포스트의 메타데이터 파싱하기
    const matterResult = matter(fileContents);

    // 데이터와 id 묶기
    return {
      id,
      ...matterResult.data,
    };
  });
  // 날짜를 기준으로 정렬하기
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
