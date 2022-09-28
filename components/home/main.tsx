import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React from "react";
import Animation from "./animation";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["header"])),
    },
  };
}

const Main = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {t("main:AboutMe")}
          <br />
          {/* //className="hidden lg:inline-block" */}
          {t("main:AboutMe_title")}
        </h1>

        <p className="mb-8 leading-relaxed">{t("main:AboutMe_text")}</p>
        <div className="flex justify-center gap-x-2">
          <Link href="/projects">
            <a className="btn-project">{t("main:Main_project")}</a>
          </Link>
          <Link href="https://github.com/gunhoyoon">
            <a className="btn-github">{t("main:Main_github")}</a>
          </Link>
          <Link href="https://velog.io/@gunho1998">
            <a className="btn-velog">{t("main:Main_velog")}</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Main;
