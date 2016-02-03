/**
 * Created by rhett on 2/2/16.
 */
'use strict';


function ifCheck (check, string) {
  // check to throw error
  if (check || check instanceof Error) {
    // if string is function, forward check to handler
    if (typeof string === 'function') {
      string(check);

    } else {

      // attach string to existing error stack and message
      if (check instanceof Error && typeof string === 'string') {
        check.message = string + ' :: ' + check.message;
      }

      // throw error
      throw check instanceof Error ? check : new Error(string);
    }
  }
}

function ifNotCheck (check, string) {
  ifCheck(check instanceof Error ? check : !check, string);
}


module.exports = {
  'if'   : ifCheck,
  'ifNot': ifNotCheck
};
