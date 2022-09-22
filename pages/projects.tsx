import Head from "next/head";
import React, { FC } from "react";
import { Project } from "../models/Projects";
import Layout from "../components/layout";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";

// consolo.log(클라이언트에서 찍히는거)
interface Props {
  projects: Project;
}

const Projects: FC<Props> = ({ projects }) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="flex flex-col items-center jsutify-center min-h-screen px-3 mb-10">
        <Head>
          <title>윤건호 노션 포트폴리오</title>

          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="ml-8 text-4xl font-bold sm:text-6xl">
          {t("project:project_total")}
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>

        <div className="grid gird-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
          {projects.results.length > 0 &&
            projects.results.map((project) => (
              <ProjectItem data={project} key={project.id} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

// export async function getStaticProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale as string, ["home"])),
//     },
//   };
// }

// 빌드 타임에 호출
// 서버쪽에서 찍히는거
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects: Project = await res.json();

  // const projectNames = projects.results
  //   .map((project, i) => {
  //     const value = project.properties.이름.title[0]?.plain_text;
  //     return `프로젝트 ${projects.results.length - i} : ${value ? value : ""}`;
  //     //      return `${value ? value : ""}`;
  //   })
  //   .reverse();
  // projectNames 으로 한번에 넘겼을 때 map + 없는 값 까지 고려해서 작성한 로직
  console.log(projects);

  return {
    props: {
      projects,
      ...(await serverSideTranslations(locale as string, [
        "home",
        "header",
        "footer",
        "project",
      ])),
    },
  };
}

// 포스트맨에서 데이터 받아온거랑 같은 구조임
// 헤더에 관련 정보넣고 , 토큰 변수로 뺸거 넣어주고, 데이테 베이스 아이디 넣어줘서

// 이 이후에 포스트맨에서 쿼리 응답으로 나온 데이터를 가지고 jsonformatter 라는 곳에서
// 어떻게 파싱할 수 있는지 볼 수 있음
// 각 results 들 안에 id들만 끄집어내면 됨
