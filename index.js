/**
 * Created by rhett on 2/2/16.
 */
'use strict';


function ifCheck (check, string, func) {
  if (typeof string === 'function' && !func) {
    func = string;
    string = null;
  }

  // check to throw error
  if (check || check instanceof Error) {
    // attach string to existing error stack and message
    if (check instanceof Error && typeof string === 'string') {
      check.message = string + ' :: ' + check.message;
    }

    var err = check instanceof Error
      ? check
      : new Error(string)
    ;

    if (typeof func === 'function') {
      func(check);
    } else {
      // throw error
      throw err;
    }
  }
}

function ifNotCheck (check, string, func) {
  ifCheck(check instanceof Error ? check : !check, string, func);
}


module.exports = {
  'if':    ifCheck,
  'ifNot': ifNotCheck
};
