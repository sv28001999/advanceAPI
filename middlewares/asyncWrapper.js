const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        console.log("asyncWrap start")
        try {
            console.log("asyncWrap try")
            await fn(req, res, next)
        }
        catch (err) {
            console.log("asyncWrap catch")
            next(err)
        }
    }
}

module.exports = asyncWrapper;

// const fn2 = (fn) => {
//     return async (s, t) => {
//         console.log("First", s, t);
//         try {
//             await fn(a, b);
//         }
//         catch (err) {
//             console.log(err);
//         }
//     }
// }

// const fn1 = fn2(async (a, b) => {
//     console.log("Inside the fn1:", a, b);
// })

// fn1("Shivam", "Dark")