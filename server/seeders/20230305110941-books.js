'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books',[
      {
        name: 'God Tsunami',
        author: 'Peter Tsukahira',
        year_published: 2003
      },
      {
        name: 'Zero To One',
        author: 'Peter Thiel',
        year_published: 2001
      },
      {
        name: 'Founders At Work',
        author: 'Jessica Livingston',
        year_published: 2000
      },
      {
        name: 'Ephesians',
        author: 'Paul of Tarsus',
        year_published: 1062
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  }
};
