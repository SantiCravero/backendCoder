import userModel from "../models/MongoDB/userModel.js";

export const findUsers = async () => {
    try {
        return await userModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

export const findUserById = async (id) => {
    try {
        return await userModel.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const findUserByEmail = async (email) => {
    try {
        const user = await userModel.findOne({ email: email });
        return user
    } catch (error) {
        throw new Error(error);
    }
}

export const createUser = async (user) => {
    try {
        const newUser = await userModel.create(user);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteUserById = async (id) => {
    try {
        const users = await userModel.findByIdAndRemove(id)
        return users
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteUserByEmail = async (email) => {
    try {
      return await userModel.findOneAndDelete({ email: email })
    } catch (error) {
      throw new Error(error);
    }
}

export const updateUser = async (id, info) => {
    try {
        return await userModel.findByIdAndUpdate(id, info);
    } catch (error) {
        throw new Error(error);
    }
}

export const findInactiveUsers = async (dateTimeLimit) => {
    try {
      const users = await userModel.find({ last_connection: { $lt: dateTimeLimit } })
      return users
    } catch (error) {
      throw new Error(error)
    }
  }
  
  export const delInactiveUser = async (dateTimeLimit) => {
    try {
      return await userModel.deleteMany({ last_connection: { $lt: dateTimeLimit } })
    } catch (error) {
      throw new Error(error)
    }
  }