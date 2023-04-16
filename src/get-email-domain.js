const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let num = email.indexOf('@')
  let domain
  domain = email.slice(num+1,email.length)
  if(domain.indexOf('@') != -1){
    num = domain.indexOf('@')
    domain = domain.slice(num+1,domain.length)
  }
  return domain
}

module.exports = {
  getEmailDomain
};
