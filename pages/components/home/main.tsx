import Link from "next/link";
import React from "react";
import Animation from "./animation";

const Main = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 윤건호입니다.
          <br className="hidden lg:inline-block" />
          배움을 즐기는 사람
        </h1>
        <p className="mb-8 leading-relaxed">나를 소개하는 텍스트 추가</p>
        <div className="flex justify-center gap-x-2">
          <Link href="/projects">
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </a>
          </Link>
          <Link href="https://github.com/gunhoyoon">
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              깃허브 보러가기
            </a>
          </Link>
          <Link href="https://velog.io/@gunho1998">
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              벨로그 보러가기
            </a>
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
