'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var Page = require('../../../../base/Page');
var ParticipantList = require('./participant').ParticipantList;
var values = require('../../../../base/values');

var CompletedPage;
var CompletedList;
var CompletedInstance;
var CompletedContext;

/**
 * Initialize the CompletedPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 *
 * @returns CompletedPage
 */
function CompletedPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(CompletedPage.prototype, Page.prototype);
CompletedPage.prototype.constructor = CompletedPage;

/**
 * Build an instance of CompletedInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns CompletedInstance
 */
CompletedPage.prototype.getInstance = function getInstance(payload) {
  return new CompletedInstance(
    this._version,
    payload
  );
};


/**
 * Initialize the CompletedList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns CompletedList
 */
function CompletedList(version) {
  function CompletedListInstance(sid) {
    return CompletedListInstance.get(sid);
  }

  CompletedListInstance._version = version;
  // Path Solution
  CompletedListInstance._solution = {};
  CompletedListInstance._uri = _.template(
    '/Conversations/Completed' // jshint ignore:line
  )(CompletedListInstance._solution);
  /**
   * Streams CompletedInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         list() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} opts.callback - A callback function to process records
   */
  CompletedListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists CompletedInstance records from the API as a list.
   *
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  CompletedListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of CompletedInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of CompletedInstance
   */
  CompletedListInstance.page = function page() {
    var params = values.of({
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return CompletedPage(
      this._version,
      response
    );
  };

  return CompletedListInstance;
}


/**
 * Initialize the CompletedContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {CompletedContext}
 */
function CompletedInstance(version, payload) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    duration: payload.duration, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    startTime: payload.start_time, // jshint ignore:line,
    endTime: payload.end_time, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {};
}

_.extend(CompletedInstance.prototype, InstanceResource.prototype);
CompletedInstance.prototype.constructor = CompletedInstance;

Object.defineProperty(CompletedInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Access the participants
 *
 * @returns participants
 */
CompletedInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};

module.exports = {
  CompletedPage: CompletedPage,
  CompletedList: CompletedList,
  CompletedInstance: CompletedInstance,
  CompletedContext: CompletedContext
};