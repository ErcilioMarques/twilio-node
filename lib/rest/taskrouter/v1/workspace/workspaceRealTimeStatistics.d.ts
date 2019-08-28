/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the WorkspaceRealTimeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 */
declare function WorkspaceRealTimeStatisticsList(version: V1, workspaceSid: string): WorkspaceRealTimeStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 */
interface WorkspaceRealTimeStatisticsInstanceFetchOptions {
  taskChannel?: string;
}

interface WorkspaceRealTimeStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkspaceRealTimeStatisticsContext;
  /**
   * Constructs a workspace_real_time_statistics
   */
  get(): WorkspaceRealTimeStatisticsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface WorkspaceRealTimeStatisticsPayload extends WorkspaceRealTimeStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkspaceRealTimeStatisticsResource {
  account_sid: string;
  activity_statistics: string[];
  longest_task_waiting_age: number;
  longest_task_waiting_sid: string;
  tasks_by_priority: string;
  tasks_by_status: string;
  total_tasks: number;
  total_workers: number;
  url: string;
  workspace_sid: string;
}

interface WorkspaceRealTimeStatisticsSolution {
  workspaceSid?: string;
}


declare class WorkspaceRealTimeStatisticsContext {
  /**
   * Initialize the WorkspaceRealTimeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, workspaceSid: string);

  /**
   * fetch a WorkspaceRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkspaceRealTimeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkspaceRealTimeStatisticsInstance) => any): Promise<WorkspaceRealTimeStatisticsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class WorkspaceRealTimeStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkspaceRealTimeStatisticsContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, payload: WorkspaceRealTimeStatisticsPayload, workspaceSid: string);

  private _proxy: WorkspaceRealTimeStatisticsContext;
  accountSid: string;
  activityStatistics: string[];
  /**
   * fetch a WorkspaceRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkspaceRealTimeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkspaceRealTimeStatisticsInstance) => any): void;
  longestTaskWaitingAge: number;
  longestTaskWaitingSid: string;
  tasksByPriority: string;
  tasksByStatus: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  totalTasks: number;
  totalWorkers: number;
  url: string;
  workspaceSid: string;
}


declare class WorkspaceRealTimeStatisticsPage extends Page<V1, WorkspaceRealTimeStatisticsPayload, WorkspaceRealTimeStatisticsResource, WorkspaceRealTimeStatisticsInstance> {
  /**
   * Initialize the WorkspaceRealTimeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkspaceRealTimeStatisticsSolution);

  /**
   * Build an instance of WorkspaceRealTimeStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkspaceRealTimeStatisticsPayload): WorkspaceRealTimeStatisticsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WorkspaceRealTimeStatisticsContext, WorkspaceRealTimeStatisticsInstance, WorkspaceRealTimeStatisticsList, WorkspaceRealTimeStatisticsListInstance, WorkspaceRealTimeStatisticsPage, WorkspaceRealTimeStatisticsPayload, WorkspaceRealTimeStatisticsResource, WorkspaceRealTimeStatisticsSolution }
