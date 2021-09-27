const { execSync } = require('child_process');

const output = execSync('npm start', { encoding: 'utf-8' });

if (output == 'Something is already running on port 3000.') {
    console.log(output);
} else {
    console.log('not running');
}
window.close();
// console.log('The output is:');
// console.log(output);