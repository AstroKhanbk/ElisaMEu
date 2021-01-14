const User = require('../models/User');

exports.signup = async (req, res, next) => {
  const { name, email } = req.body
  //const profile =  await Profile.create({})
  User.register({ name, email }, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
};

exports.login = (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
};

exports.logout = (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
};

exports.user = (req, res, next) => {
  try {
    // const userData = req.user
    // console.log('aquiii', userData)
    // res.status(201).json({ userData })
    res.send(req.user)
  } catch (error) {
    console.log('Error', error)
  }
}