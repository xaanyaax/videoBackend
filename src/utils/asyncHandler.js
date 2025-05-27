//method 2 :>>>>>> PROMISE FORMAT
const asyncHandler = (requestHandler) => {
    return async(req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
}





export {asyncHandler}










//method 1 : >>>
// const asynchandler = (fn) => async(req, res, next) => {
//     try{
//         await fn(req, res, next);
//     }
//     catch(error) {
//         res.status(err.code || 500).json({message: err.message});
//     }
// }