/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { ExecutionStepContextList } from './executionStep/executionStepContext';
import { ExecutionStepContextListInstance } from './executionStep/executionStepContext';
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the ExecutionStepList
 *
 * @param version - Version of the resource
 * @param flowSid - Flow Sid.
 * @param executionSid - Execution Sid.
 */
declare function ExecutionStepList(version: V1, flowSid: string, executionSid: string): ExecutionStepListInstance;

interface ExecutionStepListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ExecutionStepContext;
  /**
   * Streams ExecutionStepInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ExecutionStepListInstanceEachOptions, callback?: (item: ExecutionStepInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a execution_step
   *
   * @param sid - Step Sid.
   */
  get(sid: string): ExecutionStepContext;
  /**
   * Retrieve a single target page of ExecutionStepInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ExecutionStepPage) => any): Promise<ExecutionStepPage>;
  /**
   * Lists ExecutionStepInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ExecutionStepListInstanceOptions, callback?: (error: Error | null, items: ExecutionStepInstance[]) => any): Promise<ExecutionStepInstance[]>;
  /**
   * Retrieve a single page of ExecutionStepInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ExecutionStepListInstancePageOptions, callback?: (error: Error | null, items: ExecutionStepPage) => any): Promise<ExecutionStepPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface ExecutionStepListInstanceEachOptions {
  callback?: (item: ExecutionStepInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ExecutionStepListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ExecutionStepListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ExecutionStepPayload extends ExecutionStepResource, Page.TwilioResponsePayload {
}

interface ExecutionStepResource {
  account_sid: string;
  context: object;
  date_created: Date;
  date_updated: Date;
  execution_sid: string;
  flow_sid: string;
  links: string;
  name: string;
  sid: string;
  transitioned_from: string;
  transitioned_to: string;
  url: string;
}

interface ExecutionStepSolution {
  executionSid?: string;
  flowSid?: string;
}


declare class ExecutionStepContext {
  /**
   * Initialize the ExecutionStepContext
   *
   * @param version - Version of the resource
   * @param flowSid - Flow Sid.
   * @param executionSid - Execution Sid.
   * @param sid - Step Sid.
   */
  constructor(version: V1, flowSid: string, executionSid: string, sid: string);

  /**
   * fetch a ExecutionStepInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ExecutionStepInstance) => any): Promise<ExecutionStepInstance>;
  stepContext: ExecutionStepContextListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class ExecutionStepInstance extends SerializableClass {
  /**
   * Initialize the ExecutionStepContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - Flow Sid.
   * @param executionSid - Execution Sid.
   * @param sid - Step Sid.
   */
  constructor(version: V1, payload: ExecutionStepPayload, flowSid: string, executionSid: string, sid: string);

  private _proxy: ExecutionStepContext;
  accountSid: string;
  context: object;
  dateCreated: Date;
  dateUpdated: Date;
  executionSid: string;
  /**
   * fetch a ExecutionStepInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ExecutionStepInstance) => any): void;
  flowSid: string;
  links: string;
  name: string;
  sid: string;
  /**
   * Access the stepContext
   */
  stepContext(): ExecutionStepContextListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  transitionedFrom: string;
  transitionedTo: string;
  url: string;
}


declare class ExecutionStepPage extends Page<V1, ExecutionStepPayload, ExecutionStepResource, ExecutionStepInstance> {
  /**
   * Initialize the ExecutionStepPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ExecutionStepSolution);

  /**
   * Build an instance of ExecutionStepInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ExecutionStepPayload): ExecutionStepInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ExecutionStepContext, ExecutionStepInstance, ExecutionStepList, ExecutionStepListInstance, ExecutionStepListInstanceEachOptions, ExecutionStepListInstanceOptions, ExecutionStepListInstancePageOptions, ExecutionStepPage, ExecutionStepPayload, ExecutionStepResource, ExecutionStepSolution }
