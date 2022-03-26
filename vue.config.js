/* eslint-disable indent */
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/style/Global.scss";
                `,
            },
        },
    },
};
