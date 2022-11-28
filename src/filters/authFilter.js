export const validateAuthToken = (req, res, next) => {
    let authToken = req.headers.authorization;
    if(!authToken) res.status(401).json({message: 'Unauthorized'});
    else next();
}