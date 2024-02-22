const theme = require('../_data/theme.json'); // replace './theme' with the path to your theme file

describe('all values in theme object are not empty', () => {
  function checkValues(obj, path = '') {
    for (let key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      if (typeof obj[key] === 'object') {
        checkValues(obj[key], newPath);
      } else {
        test(`value at '${newPath}' is not empty`, () => {
          expect(obj[key]).not.toBe('');
        });
      }
    }
  }

  checkValues(theme);
});