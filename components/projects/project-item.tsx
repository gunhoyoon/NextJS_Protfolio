import React, { FC } from "react";
import { Project, Result } from "../../models/Projects";
import Projects from "../../pages/projects";

interface Props {
  data: Result;
}

const ProjectItem: FC<Props> = ({ data }) => {
  const title = data.properties.이름.title[0]?.plain_text;
  const gitghub = data.properties.깃허브.url;
  const date = data.properties.작업기간.date;
  console.log(date);
  return (
    <div className="flex-col p-6 m-3  bg-slate-700 rounded-md">
      <h1>{title}</h1>
      <a href={gitghub}>깃허브 보러가기</a>
      <dl>
        <dt>
          작업기간
          <dd>{`${date.start} ~ ${date.end}`}</dd>
        </dt>
      </dl>
    </div>
  );
};

export default ProjectItem;
