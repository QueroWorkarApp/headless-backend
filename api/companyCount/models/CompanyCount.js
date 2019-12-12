'use strict';

/**
 * Lifecycle callbacks for the `CompanyCount` model.
 */

module.exports = {
  definition: `
    type JobCountInCompany {
      company: [Person]
      jobsCount: Int!
    }
  `,

  query: `
    companyCount(): JobCountInCompany
  `,

  resolver: {
    Query: {
      companyCount: {
        description: 'Returns job count by Company',
        resolver: 'Company.countJobs' // It will use the action `findOne` located in the `Person.js` controller.
      }
    }
  }

};
