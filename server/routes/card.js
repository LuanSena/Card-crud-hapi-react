module.exports = [
    // {
    //     method: 'GET',
    //     path: '/card',
    //     handler: require('../handlers/card/list')
    // },
    // {
    //     method: 'GET',
    //     path: '/card/{cardId}',
    //     handler: require('../handlers/card/read')
    // },
    // {
    //     method: 'POST',
    //     path: '/card',
    //     handler: require('../handlers/card/create')
    // },
    // {
    //     method: 'DELETE',
    //     path: '/card/{cardId}',
    //     handler: require('../handlers/card/delete')
    // },
    // {
    //     method: 'PATCH',
    //     path: '/card/{cardId}',
    //     handler: require('../handlers/card/update')
    // },
    {
        method: 'GET',
        path: '/hello/{name}',
        handler: (request, h) => {
    
            return h.response('Hello, ' + encodeURIComponent(request.params.name) + '!').code(202);
        }
    }
];