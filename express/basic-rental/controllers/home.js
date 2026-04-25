const Home = require('../models/home');

exports.addHome = (req, res, next) => {
    const { address, city, pin, country } = req.body;
    const home = new Home(address, city, pin, country);
    home.save();
    res.redirect('/');
}

exports.getHomes = (req, res, next) => {
    Home.fetchAll(homes => {
        res.send(homes);
    });
}

exports.getHomeDetails =(req,res,next)=>{
    const id = req.params.id;
    Home.fetchAll(homes => {
        const home = homes.find(home => home.id === id);
        res.send(home);
    });

}
