export const fetchList = id => {
    debugger
    return $.ajax ({
        method: "GET",
        url: `/api/lists/${id}`,
        error: err => console.log(err)
    })
}