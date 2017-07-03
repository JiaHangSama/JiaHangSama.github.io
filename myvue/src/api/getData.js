import data from '../../data.json';

export default {
    getData(callback) {
        setTimeout(() => callback(data), 100);
    }
}
