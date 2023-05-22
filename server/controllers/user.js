//to get user...we would have a id in the params...using that we find the user in our database...and we send back the User
//to get user friends... the same procedure...we would access the User using id in params...now we need to access the Friends array of the User and send back the array
//friend list previously had only the Ids of the friends...we need to update it to have information about the friends...so we look for each of the friend's id in the database and add them to the list

//For add/remove friends...we will have id and friendid in the params...now we get the user->friends list..now we check for the friend in the friend list ... if present we update the list with filtering out the friend's id (also friend's->freinds list and filter out current user)....else add the friend's id

import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
