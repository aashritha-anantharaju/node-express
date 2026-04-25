const fs= require('fs');
const path= require('path');
const rootDir = require('../utils/rootdir');
const { v4: uuidv4 } = require('uuid');

module.exports = class Home {
    constructor(address, city, pin, country) {
       
        this.address = address;
        this.city = city;
        this.pin = pin;
        this.country = country;
    }

    save() {
         this.id = uuidv4();
        Home.fetchAll(homes => {
            homes.push(this);
            fs.writeFile(path.join(rootDir, 'data', 'home.json'), JSON.stringify(homes), err => {
                console.log(err);
            });
        })
        
    }

    static fetchAll(callback) {
        fs.readFile(path.join(rootDir, 'data', 'home.json'), (err, fileContent) => {
            
            callback(!err ? JSON.parse(fileContent) : []);
        });
    }

};


