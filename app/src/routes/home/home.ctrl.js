"use strict"

const home = (req, res) => {
    res.render('./routes/home/index');
};

const login = (req, res) => {
    res.render('./routes/home/login');
};

const join = (req, res) => {
    res.render('./routes/home/join');
};

module.exports = {
    home,
    login,
    join,
}