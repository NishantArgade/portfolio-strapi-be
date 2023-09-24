'use strict';

/**
 * my-bio service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-bio.my-bio');
