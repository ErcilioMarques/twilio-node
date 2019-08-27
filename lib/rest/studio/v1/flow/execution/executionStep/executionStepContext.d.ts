/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V1 = require('../../../../V1');
import { SerializableClass } from '../../../../../../interfaces';

/**
 * Initialize the ExecutionStepContextList
 *
 * @param version - Version of the resource
 * @param flowSid - Flow Sid.
 * @param executionSid - Execution Sid.
 * @param stepSid - Step Sid.
 */
declare function ExecutionStepContextList(version: V1, flowSid: string, executionSid: string, stepSid: string): ExecutionStepContextListInstance;

interface ExecutionStepContextListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ExecutionStepContextContext;
  /**
   * Constructs a execution_step_context
   */
  get(): ExecutionStepContextContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface ExecutionStepContextPayload extends ExecutionStepContextResource, Page.TwilioResponsePayload {
}

interface ExecutionStepContextResource {
  account_sid: string;
  context: object;
  execution_sid: string;
  flow_sid: string;
  step_sid: string;
  url: string;
}

interface ExecutionStepContextSolution {
  executionSid?: string;
  flowSid?: string;
  stepSid?: string;
}


declare class ExecutionStepContextContext {
  /**
   * Initialize the ExecutionStepContextContext
   *
   * @param version - Version of the resource
   * @param flowSid - Flow Sid.
   * @param executionSid - Execution Sid.
   * @param stepSid - Step Sid.
   */
  constructor(version: V1, flowSid: string, executionSid: string, stepSid: string);

  /**
   * fetch a ExecutionStepContextInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ExecutionStepContextInstance) => any): Promise<ExecutionStepContextInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class ExecutionStepContextInstance extends SerializableClass {
  /**
   * Initialize the ExecutionStepContextContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - Flow Sid.
   * @param executionSid - Execution Sid.
   * @param stepSid - Step Sid.
   */
  constructor(version: V1, payload: ExecutionStepContextPayload, flowSid: string, executionSid: string, stepSid: string);

  private _proxy: ExecutionStepContextContext;
  accountSid: string;
  context: object;
  executionSid: string;
  /**
   * fetch a ExecutionStepContextInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ExecutionStepContextInstance) => any): void;
  flowSid: string;
  stepSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class ExecutionStepContextPage extends Page<V1, ExecutionStepContextPayload, ExecutionStepContextResource, ExecutionStepContextInstance> {
  /**
   * Initialize the ExecutionStepContextPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ExecutionStepContextSolution);

  /**
   * Build an instance of ExecutionStepContextInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ExecutionStepContextPayload): ExecutionStepContextInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ExecutionStepContextContext, ExecutionStepContextInstance, ExecutionStepContextList, ExecutionStepContextListInstance, ExecutionStepContextPage, ExecutionStepContextPayload, ExecutionStepContextResource, ExecutionStepContextSolution }
