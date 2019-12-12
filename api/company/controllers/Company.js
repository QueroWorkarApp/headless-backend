'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
    async countJobs() {
        const qtd =1;
        let itens = [];
        let cnt   = 0;
        itens = await strapi.query('company').model.find().then( data => {
            const e = strapi.query('job').model.where( { 'company': data }).countDocuments( ).fetch();
            console.log( "e", e );
            itens.push({
                company: data,
                jobsCount: cnt
            });

            return itens;
        });

        console.log( "hello", itens );
        return itens;
    }
};
