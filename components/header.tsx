import React from "react";
import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";
import { GetStaticPropsContext, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["header"])),
    },
  };
}

const Header: NextPage = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <h1 className="ml-3 text-xl">{t("header:header_title")}</h1>
            </a>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">
                {t("header:homePage_nav")}
              </a>
            </Link>

            <Link href="/projects">
              <a className="mr-5 hover:text-gray-900">
                {t("header:project_nav")}
              </a>
            </Link>

            <Link href="http://pf.kakao.com/_Uxdqdxj/chat">
              <a className="mr-5 hover:text-gray-900">
                {t("header:contact_nav")}
              </a>
            </Link>
          </nav>

          <DarkModeToggleButton />

          <ul className="display flex gap-x-2 ml-5">
            <li>
              <Link href="" locale="ko">
                <a>ko</a>
              </Link>
            </li>
            <li>
              <Link href="" locale="en">
                <a>en</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
