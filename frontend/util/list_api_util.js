export const fetchList = id => {
    return $.ajax ({
        method: "GET",
        url: '/api/lists'
    })
}