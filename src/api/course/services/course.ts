/**
 * course service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::course.course', ({ strapi }) => ({
  async getByName(name: string) {
    return await strapi.entityService.findMany('api::course.course', {
      filters: {
        name: {
          $contains: name
        }
      }
    });
  },
}));
