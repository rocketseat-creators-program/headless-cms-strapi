/**
 * course controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::course.course', ({ strapi }) => ({
  async getByName(ctx) {
    try {
      const namePathParam = ctx.request.params.name
      console.log('ctx.request.params', ctx.request.params.name)
      const entries = await strapi.service("api::course.course").getByName(namePathParam)
      const emailParams = {
        "to": "contato@ismaelnascimento.com",
        "subject": "Simple test from controller",
        "message": JSON.stringify(entries)
      }
      await strapi.plugin('email').service('email').send(emailParams)
      ctx.body = entries;
    } catch (err) {
      ctx.status = 400;
      ctx.body = err;
    }
  },
}));
