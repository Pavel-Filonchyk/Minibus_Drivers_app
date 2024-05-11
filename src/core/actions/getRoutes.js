const getRoutes = (data) => {
    return {
        type: 'GET-ROUTES',
        payload: data
    } 
}

export {
    getRoutes
}