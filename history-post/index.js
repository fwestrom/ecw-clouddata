module.exports = function(context, request) {
    context.log('clouddata|history-post| request:', request);
    context.done(null, {
        response: {
            status: 200,
            body: {
                request: request,
            },
        },
    });
};
