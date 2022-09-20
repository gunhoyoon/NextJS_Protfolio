import React, { FC } from "react";
import { Result } from "../../models/Projects";
import Image from "next/image";

interface Props {
  data: Result;
}

const ProjectItem: FC<Props> = ({ data }) => {
  const title = data.properties.이름.title[0]?.plain_text;
  const gitghub = data.properties.깃허브.url;
  const date = data.properties.작업기간.date;
  console.log(date);
  const Img = data.cover.external.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select;

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={Img}
        alt="cover Image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      {/* 이미지 태그를 사용하려면 w h 를 같이 사용해야된다 */}
      {/* next js에서 외부에서 이미지나 데이터를 가지고 오려면 해당 도메인에 대한 데이터가 설정이 되어있어야한다. */}
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>

        <a href={gitghub}>깃허브 보러가기</a>

        <dl>
          <dt>작업기간</dt>
          <dd>{`${date.start} ~ ${date.end}`}</dd>
        </dl>

        <div className="flex items-start mt-2">
          {tags.map((tag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 "
              // 라이트 모드일땐 bg-sky-200 다크모드일땐 dark:bg-sky-700
              key={tag.id}
            >
              {/* h1 = 태그의 대한 css */}
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
