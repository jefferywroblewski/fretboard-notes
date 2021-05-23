const fs = require('fs');

class FileSystem {
    /**
     * get a string of the file contents that is located at the path
     * @param {string} path
     * @returns {string} contents of the file
     */
    static readFile(path) {
        return fs.readFileSync(path, 'utf-8');
    }

    /**
     * creates the directory at the path specified
     * if the directory already exists it will ignore it
     * @param path
     */
    static makeDir(path) {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    }

    /**
     * writes the contents of the data to a file at the path
     * If the file already exists it will be replaced with the new data
     * @param {string} path
     * @param {string} data
     */
    static writeDataToFile(path, data) {
        fs.writeFileSync(path, data);
    }
}

module.exports = FileSystem;
