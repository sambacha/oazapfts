/**
 * @file
 * @licnese
 * @exports
 * @version
 */

import * as Zgres from 'zgres/lib/runtime';
import * as QS from 'zgres/lib/runtime/query';

export const defaults: Zgres.RequestOpts = {
  baseUrl: '/',
};

const zgres = Zgres.runtime(defaults);

export const servers = {};
