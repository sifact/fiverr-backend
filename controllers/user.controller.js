import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
    // find user in database
    const user = await User.findById(req.params.id);

    if (req.userId !== user._id.toString()) {
        return next(createError(404, "You can delete only your account!"));
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("Your account has been deleted successfully...");
};
