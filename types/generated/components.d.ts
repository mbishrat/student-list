import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeStudentList extends Schema.Component {
  collectionName: 'components_home_student_lists';
  info: {
    displayName: 'student-list';
    description: '';
  };
  attributes: {
    student: Attribute.String;
    age: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.student-list': HomeStudentList;
    }
  }
}
