export type Result = {
  object: "page";
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Object[];
  last_edited_by: Object[];
  cover: Object[];
  icon: null | string;
  parent: Object[];
  archived: false;
  properties: Properties;
  url: string;
};

export type Project = {
  object: "list";
  results: Result[];
  next_cursor: null;
  has_more: false;
  type: "page";
  page: {};
};

type Properties = {
  태그: {
    id: string;
    type: string;
    multi_select: [
      {
        id: string;
        name: string;
        color: string;
      },
      {
        id: string;
        name: string;
        color: string;
      }
    ];
  };
  작업기간: {
    id: string;
    type: string;
    date: {
      start: string;
      end: string;
      time_zone: null | string;
    };
  };
  깃허브: {
    id: string;
    type: string;
    url: string;
  };
  이름: {
    id: string;
    type: string;
    title: [
      {
        type: string;
        text: {
          content: string;
          link: null | string;
        };
        annotations: {
          bold: boolean;
          italic: boolean;
          strikethrough: boolean;
          underline: boolean;
          code: boolean;
          color: string;
        };
        plain_text: string;
        href: null | string;
      }
    ];
  };
};
