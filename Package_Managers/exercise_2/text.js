const figlet = require('figlet');

const generateText = () => { 
    const result = figlet.textSync('Frontend Bootcamp', {
        font: '3D-ASCII',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        };
    });
    return result;
};

module.exports = generateText;
