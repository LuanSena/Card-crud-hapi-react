module.exports = [
    {
        method: 'GET',
        path: '/v1/card',
        handler: require('../handlers/card/list')
    },
    {
        method: 'GET',
        path: '/v1/card/{cardId}',
        handler: require('../handlers/card/read')
    },
    {
        method: 'POST',
        path: '/v1/card',
        handler: require('../handlers/card/create')
    },
    {
        method: 'DELETE',
        path: '/v1/card/{cardId}',
        handler: require('../handlers/card/delete')
    },
    {
        method: 'PATCH',
        path: '/v1/card/{cardId}',
        handler: require('../handlers/card/update')
    },
    {
        method: 'GET',
        path: '/v1/hello/{name}',
        handler: (request, h) => {
            return h.response('Hello, ' + encodeURIComponent(request.params.name) + '!').code(202);
        }
    }
];