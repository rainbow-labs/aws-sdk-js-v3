import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateFileSystemAliasesCommandInput,
  AssociateFileSystemAliasesCommandOutput,
} from "../commands/AssociateFileSystemAliasesCommand";
import {
  CancelDataRepositoryTaskCommandInput,
  CancelDataRepositoryTaskCommandOutput,
} from "../commands/CancelDataRepositoryTaskCommand";
import { CopyBackupCommandInput, CopyBackupCommandOutput } from "../commands/CopyBackupCommand";
import { CreateBackupCommandInput, CreateBackupCommandOutput } from "../commands/CreateBackupCommand";
import {
  CreateDataRepositoryTaskCommandInput,
  CreateDataRepositoryTaskCommandOutput,
} from "../commands/CreateDataRepositoryTaskCommand";
import { CreateFileSystemCommandInput, CreateFileSystemCommandOutput } from "../commands/CreateFileSystemCommand";
import {
  CreateFileSystemFromBackupCommandInput,
  CreateFileSystemFromBackupCommandOutput,
} from "../commands/CreateFileSystemFromBackupCommand";
import {
  CreateStorageVirtualMachineCommandInput,
  CreateStorageVirtualMachineCommandOutput,
} from "../commands/CreateStorageVirtualMachineCommand";
import { CreateVolumeCommandInput, CreateVolumeCommandOutput } from "../commands/CreateVolumeCommand";
import {
  CreateVolumeFromBackupCommandInput,
  CreateVolumeFromBackupCommandOutput,
} from "../commands/CreateVolumeFromBackupCommand";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "../commands/DeleteBackupCommand";
import { DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput } from "../commands/DeleteFileSystemCommand";
import {
  DeleteStorageVirtualMachineCommandInput,
  DeleteStorageVirtualMachineCommandOutput,
} from "../commands/DeleteStorageVirtualMachineCommand";
import { DeleteVolumeCommandInput, DeleteVolumeCommandOutput } from "../commands/DeleteVolumeCommand";
import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "../commands/DescribeBackupsCommand";
import {
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput,
} from "../commands/DescribeDataRepositoryTasksCommand";
import {
  DescribeFileSystemAliasesCommandInput,
  DescribeFileSystemAliasesCommandOutput,
} from "../commands/DescribeFileSystemAliasesCommand";
import {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "../commands/DescribeFileSystemsCommand";
import {
  DescribeStorageVirtualMachinesCommandInput,
  DescribeStorageVirtualMachinesCommandOutput,
} from "../commands/DescribeStorageVirtualMachinesCommand";
import { DescribeVolumesCommandInput, DescribeVolumesCommandOutput } from "../commands/DescribeVolumesCommand";
import {
  DisassociateFileSystemAliasesCommandInput,
  DisassociateFileSystemAliasesCommandOutput,
} from "../commands/DisassociateFileSystemAliasesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput } from "../commands/UpdateFileSystemCommand";
import {
  UpdateStorageVirtualMachineCommandInput,
  UpdateStorageVirtualMachineCommandOutput,
} from "../commands/UpdateStorageVirtualMachineCommand";
import { UpdateVolumeCommandInput, UpdateVolumeCommandOutput } from "../commands/UpdateVolumeCommand";
import {
  ActiveDirectoryBackupAttributes,
  ActiveDirectoryError,
  AdministrativeAction,
  AdministrativeActionFailureDetails,
  Alias,
  AssociateFileSystemAliasesRequest,
  AssociateFileSystemAliasesResponse,
  Backup,
  BackupBeingCopied,
  BackupFailureDetails,
  BackupInProgress,
  BackupNotFound,
  BackupRestoring,
  BadRequest,
  CancelDataRepositoryTaskRequest,
  CancelDataRepositoryTaskResponse,
  CompletionReport,
  CopyBackupRequest,
  CopyBackupResponse,
  CreateBackupRequest,
  CreateBackupResponse,
  CreateDataRepositoryTaskRequest,
  CreateDataRepositoryTaskResponse,
  CreateFileSystemFromBackupRequest,
  CreateFileSystemFromBackupResponse,
  CreateFileSystemLustreConfiguration,
  CreateFileSystemOntapConfiguration,
  CreateFileSystemRequest,
  CreateFileSystemResponse,
  CreateFileSystemWindowsConfiguration,
  CreateOntapVolumeConfiguration,
  CreateStorageVirtualMachineRequest,
  CreateStorageVirtualMachineResponse,
  CreateSvmActiveDirectoryConfiguration,
  CreateVolumeFromBackupRequest,
  CreateVolumeFromBackupResponse,
  CreateVolumeRequest,
  CreateVolumeResponse,
  DataRepositoryConfiguration,
  DataRepositoryFailureDetails,
  DataRepositoryTask,
  DataRepositoryTaskEnded,
  DataRepositoryTaskExecuting,
  DataRepositoryTaskFailureDetails,
  DataRepositoryTaskFilter,
  DataRepositoryTaskNotFound,
  DataRepositoryTaskStatus,
  DeleteBackupRequest,
  DeleteBackupResponse,
  DeleteFileSystemLustreConfiguration,
  DeleteFileSystemLustreResponse,
  DeleteFileSystemRequest,
  DeleteFileSystemResponse,
  DeleteFileSystemWindowsConfiguration,
  DeleteFileSystemWindowsResponse,
  DeleteStorageVirtualMachineRequest,
  DeleteStorageVirtualMachineResponse,
  DeleteVolumeOntapConfiguration,
  DeleteVolumeOntapResponse,
  DeleteVolumeRequest,
  DeleteVolumeResponse,
  DescribeBackupsRequest,
  DescribeBackupsResponse,
  DescribeDataRepositoryTasksRequest,
  DescribeDataRepositoryTasksResponse,
  DescribeFileSystemAliasesRequest,
  DescribeFileSystemAliasesResponse,
  DescribeFileSystemsRequest,
  DescribeFileSystemsResponse,
  DescribeStorageVirtualMachinesRequest,
  DescribeStorageVirtualMachinesResponse,
  DescribeVolumesRequest,
  DescribeVolumesResponse,
  DisassociateFileSystemAliasesRequest,
  DisassociateFileSystemAliasesResponse,
  DiskIopsConfiguration,
  FileSystem,
  FileSystemEndpoint,
  FileSystemEndpoints,
  FileSystemFailureDetails,
  FileSystemMaintenanceOperation,
  FileSystemNotFound,
  Filter,
  IncompatibleParameterError,
  IncompatibleRegionForMultiAZ,
  InternalServerError,
  InvalidDestinationKmsKey,
  InvalidExportPath,
  InvalidImportPath,
  InvalidNetworkSettings,
  InvalidPerUnitStorageThroughput,
  InvalidRegion,
  InvalidSourceKmsKey,
  LifecycleTransitionReason,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  LustreFileSystemConfiguration,
  MissingFileSystemConfiguration,
  MissingVolumeConfiguration,
  NotServiceResourceError,
  OntapFileSystemConfiguration,
  OntapVolumeConfiguration,
  ResourceDoesNotSupportTagging,
  ResourceNotFound,
  SelfManagedActiveDirectoryAttributes,
  SelfManagedActiveDirectoryConfiguration,
  SelfManagedActiveDirectoryConfigurationUpdates,
  ServiceLimitExceeded,
  SourceBackupUnavailable,
  StorageVirtualMachine,
  StorageVirtualMachineFilter,
  StorageVirtualMachineNotFound,
  SvmActiveDirectoryConfiguration,
  SvmEndpoint,
  SvmEndpoints,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TieringPolicy,
  UnsupportedOperation,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateFileSystemLustreConfiguration,
  UpdateFileSystemOntapConfiguration,
  UpdateFileSystemRequest,
  UpdateFileSystemResponse,
  UpdateFileSystemWindowsConfiguration,
  UpdateOntapVolumeConfiguration,
  UpdateStorageVirtualMachineRequest,
  UpdateStorageVirtualMachineResponse,
  UpdateSvmActiveDirectoryConfiguration,
  UpdateVolumeRequest,
  UpdateVolumeResponse,
  Volume,
  VolumeFilter,
  VolumeNotFound,
  WindowsAuditLogConfiguration,
  WindowsAuditLogCreateConfiguration,
  WindowsFileSystemConfiguration,
} from "../models/models_0";

export const serializeAws_json1_1AssociateFileSystemAliasesCommand = async (
  input: AssociateFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateFileSystemAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelDataRepositoryTaskCommand = async (
  input: CancelDataRepositoryTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelDataRepositoryTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CopyBackupCommand = async (
  input: CopyBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CopyBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopyBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBackupCommand = async (
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataRepositoryTaskCommand = async (
  input: CreateDataRepositoryTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateDataRepositoryTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDataRepositoryTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFileSystemCommand = async (
  input: CreateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileSystem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFileSystemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFileSystemFromBackupCommand = async (
  input: CreateFileSystemFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFileSystemFromBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStorageVirtualMachineCommand = async (
  input: CreateStorageVirtualMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStorageVirtualMachineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVolumeCommand = async (
  input: CreateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVolumeFromBackupCommand = async (
  input: CreateVolumeFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateVolumeFromBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVolumeFromBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFileSystemCommand = async (
  input: DeleteFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteFileSystem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFileSystemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteStorageVirtualMachineCommand = async (
  input: DeleteStorageVirtualMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteStorageVirtualMachineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVolumeCommand = async (
  input: DeleteVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBackupsCommand = async (
  input: DescribeBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeBackups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBackupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDataRepositoryTasksCommand = async (
  input: DescribeDataRepositoryTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDataRepositoryTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFileSystemAliasesCommand = async (
  input: DescribeFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileSystemAliases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFileSystemAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFileSystemsCommand = async (
  input: DescribeFileSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileSystems",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFileSystemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStorageVirtualMachinesCommand = async (
  input: DescribeStorageVirtualMachinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStorageVirtualMachinesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeVolumesCommand = async (
  input: DescribeVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeVolumes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeVolumesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateFileSystemAliasesCommand = async (
  input: DisassociateFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateFileSystemAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateFileSystemCommand = async (
  input: UpdateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateFileSystem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateFileSystemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateStorageVirtualMachineCommand = async (
  input: UpdateStorageVirtualMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateStorageVirtualMachineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVolumeCommand = async (
  input: UpdateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateFileSystemAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFileSystemAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateFileSystemAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateFileSystemAliasesResponse(data, context);
  const response: AssociateFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateFileSystemAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFileSystemAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CancelDataRepositoryTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDataRepositoryTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelDataRepositoryTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelDataRepositoryTaskResponse(data, context);
  const response: CancelDataRepositoryTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelDataRepositoryTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDataRepositoryTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DataRepositoryTaskEnded":
    case "com.amazonaws.fsx#DataRepositoryTaskEnded":
      response = {
        ...(await deserializeAws_json1_1DataRepositoryTaskEndedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DataRepositoryTaskNotFound":
    case "com.amazonaws.fsx#DataRepositoryTaskNotFound":
      response = {
        ...(await deserializeAws_json1_1DataRepositoryTaskNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CopyBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CopyBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopyBackupResponse(data, context);
  const response: CopyBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopyBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      response = {
        ...(await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleRegionForMultiAZ":
    case "com.amazonaws.fsx#IncompatibleRegionForMultiAZ":
      response = {
        ...(await deserializeAws_json1_1IncompatibleRegionForMultiAZResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDestinationKmsKey":
    case "com.amazonaws.fsx#InvalidDestinationKmsKey":
      response = {
        ...(await deserializeAws_json1_1InvalidDestinationKmsKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRegion":
    case "com.amazonaws.fsx#InvalidRegion":
      response = {
        ...(await deserializeAws_json1_1InvalidRegionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSourceKmsKey":
    case "com.amazonaws.fsx#InvalidSourceKmsKey":
      response = {
        ...(await deserializeAws_json1_1InvalidSourceKmsKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SourceBackupUnavailable":
    case "com.amazonaws.fsx#SourceBackupUnavailable":
      response = {
        ...(await deserializeAws_json1_1SourceBackupUnavailableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBackupResponse(data, context);
  const response: CreateBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupInProgress":
    case "com.amazonaws.fsx#BackupInProgress":
      response = {
        ...(await deserializeAws_json1_1BackupInProgressResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      response = {
        ...(await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateDataRepositoryTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataRepositoryTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDataRepositoryTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataRepositoryTaskResponse(data, context);
  const response: CreateDataRepositoryTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataRepositoryTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataRepositoryTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DataRepositoryTaskExecuting":
    case "com.amazonaws.fsx#DataRepositoryTaskExecuting":
      response = {
        ...(await deserializeAws_json1_1DataRepositoryTaskExecutingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFileSystemResponse(data, context);
  const response: CreateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveDirectoryError":
    case "com.amazonaws.fsx#ActiveDirectoryError":
      response = {
        ...(await deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidExportPath":
    case "com.amazonaws.fsx#InvalidExportPath":
      response = {
        ...(await deserializeAws_json1_1InvalidExportPathResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidImportPath":
    case "com.amazonaws.fsx#InvalidImportPath":
      response = {
        ...(await deserializeAws_json1_1InvalidImportPathResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNetworkSettings":
    case "com.amazonaws.fsx#InvalidNetworkSettings":
      response = {
        ...(await deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPerUnitStorageThroughput":
    case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput":
      response = {
        ...(await deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.fsx#MissingFileSystemConfiguration":
      response = {
        ...(await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateFileSystemFromBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemFromBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFileSystemFromBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFileSystemFromBackupResponse(data, context);
  const response: CreateFileSystemFromBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFileSystemFromBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemFromBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveDirectoryError":
    case "com.amazonaws.fsx#ActiveDirectoryError":
      response = {
        ...(await deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      response = {
        ...(await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNetworkSettings":
    case "com.amazonaws.fsx#InvalidNetworkSettings":
      response = {
        ...(await deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPerUnitStorageThroughput":
    case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput":
      response = {
        ...(await deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.fsx#MissingFileSystemConfiguration":
      response = {
        ...(await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateStorageVirtualMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageVirtualMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStorageVirtualMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStorageVirtualMachineResponse(data, context);
  const response: CreateStorageVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStorageVirtualMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageVirtualMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveDirectoryError":
    case "com.amazonaws.fsx#ActiveDirectoryError":
      response = {
        ...(await deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVolumeResponse(data, context);
  const response: CreateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingVolumeConfiguration":
    case "com.amazonaws.fsx#MissingVolumeConfiguration":
      response = {
        ...(await deserializeAws_json1_1MissingVolumeConfigurationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      response = {
        ...(await deserializeAws_json1_1StorageVirtualMachineNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateVolumeFromBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVolumeFromBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateVolumeFromBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVolumeFromBackupResponse(data, context);
  const response: CreateVolumeFromBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVolumeFromBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVolumeFromBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      response = {
        ...(await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingVolumeConfiguration":
    case "com.amazonaws.fsx#MissingVolumeConfiguration":
      response = {
        ...(await deserializeAws_json1_1MissingVolumeConfigurationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      response = {
        ...(await deserializeAws_json1_1StorageVirtualMachineNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBackupResponse(data, context);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupBeingCopied":
    case "com.amazonaws.fsx#BackupBeingCopied":
      response = {
        ...(await deserializeAws_json1_1BackupBeingCopiedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BackupInProgress":
    case "com.amazonaws.fsx#BackupInProgress":
      response = {
        ...(await deserializeAws_json1_1BackupInProgressResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      response = {
        ...(await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BackupRestoring":
    case "com.amazonaws.fsx#BackupRestoring":
      response = {
        ...(await deserializeAws_json1_1BackupRestoringResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFileSystemResponse(data, context);
  const response: DeleteFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteStorageVirtualMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageVirtualMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteStorageVirtualMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteStorageVirtualMachineResponse(data, context);
  const response: DeleteStorageVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteStorageVirtualMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageVirtualMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      response = {
        ...(await deserializeAws_json1_1StorageVirtualMachineNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteVolumeResponse(data, context);
  const response: DeleteVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      response = {
        ...(await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBackupsResponse(data, context);
  const response: DescribeBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      response = {
        ...(await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      response = {
        ...(await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeDataRepositoryTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataRepositoryTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDataRepositoryTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDataRepositoryTasksResponse(data, context);
  const response: DescribeDataRepositoryTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDataRepositoryTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataRepositoryTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DataRepositoryTaskNotFound":
    case "com.amazonaws.fsx#DataRepositoryTaskNotFound":
      response = {
        ...(await deserializeAws_json1_1DataRepositoryTaskNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeFileSystemAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFileSystemAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFileSystemAliasesResponse(data, context);
  const response: DescribeFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFileSystemAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeFileSystemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFileSystemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFileSystemsResponse(data, context);
  const response: DescribeFileSystemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFileSystemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeStorageVirtualMachinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageVirtualMachinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStorageVirtualMachinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStorageVirtualMachinesResponse(data, context);
  const response: DescribeStorageVirtualMachinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStorageVirtualMachinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageVirtualMachinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      response = {
        ...(await deserializeAws_json1_1StorageVirtualMachineNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeVolumesResponse(data, context);
  const response: DescribeVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      response = {
        ...(await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateFileSystemAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFileSystemAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateFileSystemAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateFileSystemAliasesResponse(data, context);
  const response: DisassociateFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateFileSystemAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFileSystemAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotServiceResourceError":
    case "com.amazonaws.fsx#NotServiceResourceError":
      response = {
        ...(await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
      response = {
        ...(await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.fsx#ResourceNotFound":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotServiceResourceError":
    case "com.amazonaws.fsx#NotServiceResourceError":
      response = {
        ...(await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
      response = {
        ...(await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.fsx#ResourceNotFound":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotServiceResourceError":
    case "com.amazonaws.fsx#NotServiceResourceError":
      response = {
        ...(await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
      response = {
        ...(await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.fsx#ResourceNotFound":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFileSystemResponse(data, context);
  const response: UpdateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      response = {
        ...(await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.fsx#MissingFileSystemConfiguration":
      response = {
        ...(await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateStorageVirtualMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStorageVirtualMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateStorageVirtualMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateStorageVirtualMachineResponse(data, context);
  const response: UpdateStorageVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateStorageVirtualMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStorageVirtualMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      response = {
        ...(await deserializeAws_json1_1StorageVirtualMachineNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVolumeResponse(data, context);
  const response: UpdateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      response = {
        ...(await deserializeAws_json1_1BadRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      response = {
        ...(await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingVolumeConfiguration":
    case "com.amazonaws.fsx#MissingVolumeConfiguration":
      response = {
        ...(await deserializeAws_json1_1MissingVolumeConfigurationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      response = {
        ...(await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1ActiveDirectoryErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActiveDirectoryError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ActiveDirectoryError(body, context);
  const contents: ActiveDirectoryError = {
    name: "ActiveDirectoryError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BackupBeingCopiedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupBeingCopied> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BackupBeingCopied(body, context);
  const contents: BackupBeingCopied = {
    name: "BackupBeingCopied",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BackupInProgressResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupInProgress> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BackupInProgress(body, context);
  const contents: BackupInProgress = {
    name: "BackupInProgress",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BackupNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BackupNotFound(body, context);
  const contents: BackupNotFound = {
    name: "BackupNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BackupRestoringResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupRestoring> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BackupRestoring(body, context);
  const contents: BackupRestoring = {
    name: "BackupRestoring",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BadRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BadRequest(body, context);
  const contents: BadRequest = {
    name: "BadRequest",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DataRepositoryTaskEndedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataRepositoryTaskEnded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataRepositoryTaskEnded(body, context);
  const contents: DataRepositoryTaskEnded = {
    name: "DataRepositoryTaskEnded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DataRepositoryTaskExecutingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataRepositoryTaskExecuting> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataRepositoryTaskExecuting(body, context);
  const contents: DataRepositoryTaskExecuting = {
    name: "DataRepositoryTaskExecuting",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DataRepositoryTaskNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataRepositoryTaskNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataRepositoryTaskNotFound(body, context);
  const contents: DataRepositoryTaskNotFound = {
    name: "DataRepositoryTaskNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FileSystemNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileSystemNotFound(body, context);
  const contents: FileSystemNotFound = {
    name: "FileSystemNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IncompatibleParameterErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleParameterError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncompatibleParameterError(body, context);
  const contents: IncompatibleParameterError = {
    name: "IncompatibleParameterError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IncompatibleRegionForMultiAZResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleRegionForMultiAZ> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncompatibleRegionForMultiAZ(body, context);
  const contents: IncompatibleRegionForMultiAZ = {
    name: "IncompatibleRegionForMultiAZ",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDestinationKmsKeyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDestinationKmsKey> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDestinationKmsKey(body, context);
  const contents: InvalidDestinationKmsKey = {
    name: "InvalidDestinationKmsKey",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidExportPathResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExportPath> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidExportPath(body, context);
  const contents: InvalidExportPath = {
    name: "InvalidExportPath",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidImportPathResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidImportPath> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidImportPath(body, context);
  const contents: InvalidImportPath = {
    name: "InvalidImportPath",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidNetworkSettingsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNetworkSettings> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNetworkSettings(body, context);
  const contents: InvalidNetworkSettings = {
    name: "InvalidNetworkSettings",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPerUnitStorageThroughput> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPerUnitStorageThroughput(body, context);
  const contents: InvalidPerUnitStorageThroughput = {
    name: "InvalidPerUnitStorageThroughput",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRegionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRegion> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRegion(body, context);
  const contents: InvalidRegion = {
    name: "InvalidRegion",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidSourceKmsKeyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSourceKmsKey> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSourceKmsKey(body, context);
  const contents: InvalidSourceKmsKey = {
    name: "InvalidSourceKmsKey",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MissingFileSystemConfigurationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingFileSystemConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MissingFileSystemConfiguration(body, context);
  const contents: MissingFileSystemConfiguration = {
    name: "MissingFileSystemConfiguration",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MissingVolumeConfigurationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingVolumeConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MissingVolumeConfiguration(body, context);
  const contents: MissingVolumeConfiguration = {
    name: "MissingVolumeConfiguration",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotServiceResourceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotServiceResourceError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotServiceResourceError(body, context);
  const contents: NotServiceResourceError = {
    name: "NotServiceResourceError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDoesNotSupportTagging> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceDoesNotSupportTagging(body, context);
  const contents: ResourceDoesNotSupportTagging = {
    name: "ResourceDoesNotSupportTagging",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFound(body, context);
  const contents: ResourceNotFound = {
    name: "ResourceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceLimitExceeded(body, context);
  const contents: ServiceLimitExceeded = {
    name: "ServiceLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SourceBackupUnavailableResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceBackupUnavailable> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SourceBackupUnavailable(body, context);
  const contents: SourceBackupUnavailable = {
    name: "SourceBackupUnavailable",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1StorageVirtualMachineNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageVirtualMachineNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1StorageVirtualMachineNotFound(body, context);
  const contents: StorageVirtualMachineNotFound = {
    name: "StorageVirtualMachineNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperation(body, context);
  const contents: UnsupportedOperation = {
    name: "UnsupportedOperation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1VolumeNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VolumeNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1VolumeNotFound(body, context);
  const contents: VolumeNotFound = {
    name: "VolumeNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AlternateDNSNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AssociateFileSystemAliasesRequest = (
  input: AssociateFileSystemAliasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Aliases !== undefined &&
      input.Aliases !== null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
  };
};

const serializeAws_json1_1BackupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CancelDataRepositoryTaskRequest = (
  input: CancelDataRepositoryTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TaskId !== undefined && input.TaskId !== null && { TaskId: input.TaskId }),
  };
};

const serializeAws_json1_1CompletionReport = (input: CompletionReport, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1CopyBackupRequest = (input: CopyBackupRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.CopyTags !== undefined && input.CopyTags !== null && { CopyTags: input.CopyTags }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.SourceBackupId !== undefined &&
      input.SourceBackupId !== null && { SourceBackupId: input.SourceBackupId }),
    ...(input.SourceRegion !== undefined && input.SourceRegion !== null && { SourceRegion: input.SourceRegion }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateBackupRequest = (input: CreateBackupRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VolumeId !== undefined && input.VolumeId !== null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1CreateDataRepositoryTaskRequest = (
  input: CreateDataRepositoryTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
    ...(input.Paths !== undefined &&
      input.Paths !== null && { Paths: serializeAws_json1_1DataRepositoryTaskPaths(input.Paths, context) }),
    ...(input.Report !== undefined &&
      input.Report !== null && { Report: serializeAws_json1_1CompletionReport(input.Report, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1CreateFileSystemFromBackupRequest = (
  input: CreateFileSystemFromBackupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemTypeVersion !== undefined &&
      input.FileSystemTypeVersion !== null && { FileSystemTypeVersion: input.FileSystemTypeVersion }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LustreConfiguration !== undefined &&
      input.LustreConfiguration !== null && {
        LustreConfiguration: serializeAws_json1_1CreateFileSystemLustreConfiguration(
          input.LustreConfiguration,
          context
        ),
      }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
      }),
    ...(input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.WindowsConfiguration !== undefined &&
      input.WindowsConfiguration !== null && {
        WindowsConfiguration: serializeAws_json1_1CreateFileSystemWindowsConfiguration(
          input.WindowsConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1CreateFileSystemLustreConfiguration = (
  input: CreateFileSystemLustreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoImportPolicy !== undefined &&
      input.AutoImportPolicy !== null && { AutoImportPolicy: input.AutoImportPolicy }),
    ...(input.AutomaticBackupRetentionDays !== undefined &&
      input.AutomaticBackupRetentionDays !== null && {
        AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
      }),
    ...(input.CopyTagsToBackups !== undefined &&
      input.CopyTagsToBackups !== null && { CopyTagsToBackups: input.CopyTagsToBackups }),
    ...(input.DailyAutomaticBackupStartTime !== undefined &&
      input.DailyAutomaticBackupStartTime !== null && {
        DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
      }),
    ...(input.DataCompressionType !== undefined &&
      input.DataCompressionType !== null && { DataCompressionType: input.DataCompressionType }),
    ...(input.DeploymentType !== undefined &&
      input.DeploymentType !== null && { DeploymentType: input.DeploymentType }),
    ...(input.DriveCacheType !== undefined &&
      input.DriveCacheType !== null && { DriveCacheType: input.DriveCacheType }),
    ...(input.ExportPath !== undefined && input.ExportPath !== null && { ExportPath: input.ExportPath }),
    ...(input.ImportPath !== undefined && input.ImportPath !== null && { ImportPath: input.ImportPath }),
    ...(input.ImportedFileChunkSize !== undefined &&
      input.ImportedFileChunkSize !== null && { ImportedFileChunkSize: input.ImportedFileChunkSize }),
    ...(input.PerUnitStorageThroughput !== undefined &&
      input.PerUnitStorageThroughput !== null && { PerUnitStorageThroughput: input.PerUnitStorageThroughput }),
    ...(input.WeeklyMaintenanceStartTime !== undefined &&
      input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1CreateFileSystemOntapConfiguration = (
  input: CreateFileSystemOntapConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomaticBackupRetentionDays !== undefined &&
      input.AutomaticBackupRetentionDays !== null && {
        AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
      }),
    ...(input.DailyAutomaticBackupStartTime !== undefined &&
      input.DailyAutomaticBackupStartTime !== null && {
        DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
      }),
    ...(input.DeploymentType !== undefined &&
      input.DeploymentType !== null && { DeploymentType: input.DeploymentType }),
    ...(input.DiskIopsConfiguration !== undefined &&
      input.DiskIopsConfiguration !== null && {
        DiskIopsConfiguration: serializeAws_json1_1DiskIopsConfiguration(input.DiskIopsConfiguration, context),
      }),
    ...(input.EndpointIpAddressRange !== undefined &&
      input.EndpointIpAddressRange !== null && { EndpointIpAddressRange: input.EndpointIpAddressRange }),
    ...(input.FsxAdminPassword !== undefined &&
      input.FsxAdminPassword !== null && { FsxAdminPassword: input.FsxAdminPassword }),
    ...(input.PreferredSubnetId !== undefined &&
      input.PreferredSubnetId !== null && { PreferredSubnetId: input.PreferredSubnetId }),
    ...(input.RouteTableIds !== undefined &&
      input.RouteTableIds !== null && {
        RouteTableIds: serializeAws_json1_1RouteTableIds(input.RouteTableIds, context),
      }),
    ...(input.ThroughputCapacity !== undefined &&
      input.ThroughputCapacity !== null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime !== undefined &&
      input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1CreateFileSystemRequest = (input: CreateFileSystemRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemType !== undefined &&
      input.FileSystemType !== null && { FileSystemType: input.FileSystemType }),
    ...(input.FileSystemTypeVersion !== undefined &&
      input.FileSystemTypeVersion !== null && { FileSystemTypeVersion: input.FileSystemTypeVersion }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LustreConfiguration !== undefined &&
      input.LustreConfiguration !== null && {
        LustreConfiguration: serializeAws_json1_1CreateFileSystemLustreConfiguration(
          input.LustreConfiguration,
          context
        ),
      }),
    ...(input.OntapConfiguration !== undefined &&
      input.OntapConfiguration !== null && {
        OntapConfiguration: serializeAws_json1_1CreateFileSystemOntapConfiguration(input.OntapConfiguration, context),
      }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
      }),
    ...(input.StorageCapacity !== undefined &&
      input.StorageCapacity !== null && { StorageCapacity: input.StorageCapacity }),
    ...(input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.WindowsConfiguration !== undefined &&
      input.WindowsConfiguration !== null && {
        WindowsConfiguration: serializeAws_json1_1CreateFileSystemWindowsConfiguration(
          input.WindowsConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1CreateFileSystemWindowsConfiguration = (
  input: CreateFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveDirectoryId !== undefined &&
      input.ActiveDirectoryId !== null && { ActiveDirectoryId: input.ActiveDirectoryId }),
    ...(input.Aliases !== undefined &&
      input.Aliases !== null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) }),
    ...(input.AuditLogConfiguration !== undefined &&
      input.AuditLogConfiguration !== null && {
        AuditLogConfiguration: serializeAws_json1_1WindowsAuditLogCreateConfiguration(
          input.AuditLogConfiguration,
          context
        ),
      }),
    ...(input.AutomaticBackupRetentionDays !== undefined &&
      input.AutomaticBackupRetentionDays !== null && {
        AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
      }),
    ...(input.CopyTagsToBackups !== undefined &&
      input.CopyTagsToBackups !== null && { CopyTagsToBackups: input.CopyTagsToBackups }),
    ...(input.DailyAutomaticBackupStartTime !== undefined &&
      input.DailyAutomaticBackupStartTime !== null && {
        DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
      }),
    ...(input.DeploymentType !== undefined &&
      input.DeploymentType !== null && { DeploymentType: input.DeploymentType }),
    ...(input.PreferredSubnetId !== undefined &&
      input.PreferredSubnetId !== null && { PreferredSubnetId: input.PreferredSubnetId }),
    ...(input.SelfManagedActiveDirectoryConfiguration !== undefined &&
      input.SelfManagedActiveDirectoryConfiguration !== null && {
        SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfiguration(
          input.SelfManagedActiveDirectoryConfiguration,
          context
        ),
      }),
    ...(input.ThroughputCapacity !== undefined &&
      input.ThroughputCapacity !== null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime !== undefined &&
      input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1CreateOntapVolumeConfiguration = (
  input: CreateOntapVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.JunctionPath !== undefined && input.JunctionPath !== null && { JunctionPath: input.JunctionPath }),
    ...(input.SecurityStyle !== undefined && input.SecurityStyle !== null && { SecurityStyle: input.SecurityStyle }),
    ...(input.SizeInMegabytes !== undefined &&
      input.SizeInMegabytes !== null && { SizeInMegabytes: input.SizeInMegabytes }),
    ...(input.StorageEfficiencyEnabled !== undefined &&
      input.StorageEfficiencyEnabled !== null && { StorageEfficiencyEnabled: input.StorageEfficiencyEnabled }),
    ...(input.StorageVirtualMachineId !== undefined &&
      input.StorageVirtualMachineId !== null && { StorageVirtualMachineId: input.StorageVirtualMachineId }),
    ...(input.TieringPolicy !== undefined &&
      input.TieringPolicy !== null && {
        TieringPolicy: serializeAws_json1_1TieringPolicy(input.TieringPolicy, context),
      }),
  };
};

const serializeAws_json1_1CreateStorageVirtualMachineRequest = (
  input: CreateStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveDirectoryConfiguration !== undefined &&
      input.ActiveDirectoryConfiguration !== null && {
        ActiveDirectoryConfiguration: serializeAws_json1_1CreateSvmActiveDirectoryConfiguration(
          input.ActiveDirectoryConfiguration,
          context
        ),
      }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RootVolumeSecurityStyle !== undefined &&
      input.RootVolumeSecurityStyle !== null && { RootVolumeSecurityStyle: input.RootVolumeSecurityStyle }),
    ...(input.SvmAdminPassword !== undefined &&
      input.SvmAdminPassword !== null && { SvmAdminPassword: input.SvmAdminPassword }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateSvmActiveDirectoryConfiguration = (
  input: CreateSvmActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.NetBiosName !== undefined && input.NetBiosName !== null && { NetBiosName: input.NetBiosName }),
    ...(input.SelfManagedActiveDirectoryConfiguration !== undefined &&
      input.SelfManagedActiveDirectoryConfiguration !== null && {
        SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfiguration(
          input.SelfManagedActiveDirectoryConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1CreateVolumeFromBackupRequest = (
  input: CreateVolumeFromBackupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.OntapConfiguration !== undefined &&
      input.OntapConfiguration !== null && {
        OntapConfiguration: serializeAws_json1_1CreateOntapVolumeConfiguration(input.OntapConfiguration, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateVolumeRequest = (input: CreateVolumeRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.OntapConfiguration !== undefined &&
      input.OntapConfiguration !== null && {
        OntapConfiguration: serializeAws_json1_1CreateOntapVolumeConfiguration(input.OntapConfiguration, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VolumeType !== undefined && input.VolumeType !== null && { VolumeType: input.VolumeType }),
  };
};

const serializeAws_json1_1DataRepositoryTaskFilter = (
  input: DataRepositoryTaskFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1DataRepositoryTaskFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1DataRepositoryTaskFilters = (
  input: DataRepositoryTaskFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DataRepositoryTaskFilter(entry, context);
    });
};

const serializeAws_json1_1DataRepositoryTaskFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DataRepositoryTaskPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DeleteBackupRequest = (input: DeleteBackupRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
  };
};

const serializeAws_json1_1DeleteFileSystemLustreConfiguration = (
  input: DeleteFileSystemLustreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FinalBackupTags !== undefined &&
      input.FinalBackupTags !== null && { FinalBackupTags: serializeAws_json1_1Tags(input.FinalBackupTags, context) }),
    ...(input.SkipFinalBackup !== undefined &&
      input.SkipFinalBackup !== null && { SkipFinalBackup: input.SkipFinalBackup }),
  };
};

const serializeAws_json1_1DeleteFileSystemRequest = (input: DeleteFileSystemRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
    ...(input.LustreConfiguration !== undefined &&
      input.LustreConfiguration !== null && {
        LustreConfiguration: serializeAws_json1_1DeleteFileSystemLustreConfiguration(
          input.LustreConfiguration,
          context
        ),
      }),
    ...(input.WindowsConfiguration !== undefined &&
      input.WindowsConfiguration !== null && {
        WindowsConfiguration: serializeAws_json1_1DeleteFileSystemWindowsConfiguration(
          input.WindowsConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1DeleteFileSystemWindowsConfiguration = (
  input: DeleteFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FinalBackupTags !== undefined &&
      input.FinalBackupTags !== null && { FinalBackupTags: serializeAws_json1_1Tags(input.FinalBackupTags, context) }),
    ...(input.SkipFinalBackup !== undefined &&
      input.SkipFinalBackup !== null && { SkipFinalBackup: input.SkipFinalBackup }),
  };
};

const serializeAws_json1_1DeleteStorageVirtualMachineRequest = (
  input: DeleteStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.StorageVirtualMachineId !== undefined &&
      input.StorageVirtualMachineId !== null && { StorageVirtualMachineId: input.StorageVirtualMachineId }),
  };
};

const serializeAws_json1_1DeleteVolumeOntapConfiguration = (
  input: DeleteVolumeOntapConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FinalBackupTags !== undefined &&
      input.FinalBackupTags !== null && { FinalBackupTags: serializeAws_json1_1Tags(input.FinalBackupTags, context) }),
    ...(input.SkipFinalBackup !== undefined &&
      input.SkipFinalBackup !== null && { SkipFinalBackup: input.SkipFinalBackup }),
  };
};

const serializeAws_json1_1DeleteVolumeRequest = (input: DeleteVolumeRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.OntapConfiguration !== undefined &&
      input.OntapConfiguration !== null && {
        OntapConfiguration: serializeAws_json1_1DeleteVolumeOntapConfiguration(input.OntapConfiguration, context),
      }),
    ...(input.VolumeId !== undefined && input.VolumeId !== null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1DescribeBackupsRequest = (input: DescribeBackupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupIds !== undefined &&
      input.BackupIds !== null && { BackupIds: serializeAws_json1_1BackupIds(input.BackupIds, context) }),
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeDataRepositoryTasksRequest = (
  input: DescribeDataRepositoryTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1DataRepositoryTaskFilters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TaskIds !== undefined &&
      input.TaskIds !== null && { TaskIds: serializeAws_json1_1TaskIds(input.TaskIds, context) }),
  };
};

const serializeAws_json1_1DescribeFileSystemAliasesRequest = (
  input: DescribeFileSystemAliasesRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFileSystemsRequest = (
  input: DescribeFileSystemsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileSystemIds !== undefined &&
      input.FileSystemIds !== null && {
        FileSystemIds: serializeAws_json1_1FileSystemIds(input.FileSystemIds, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeStorageVirtualMachinesRequest = (
  input: DescribeStorageVirtualMachinesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1StorageVirtualMachineFilters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StorageVirtualMachineIds !== undefined &&
      input.StorageVirtualMachineIds !== null && {
        StorageVirtualMachineIds: serializeAws_json1_1StorageVirtualMachineIds(input.StorageVirtualMachineIds, context),
      }),
  };
};

const serializeAws_json1_1DescribeVolumesRequest = (input: DescribeVolumesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1VolumeFilters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.VolumeIds !== undefined &&
      input.VolumeIds !== null && { VolumeIds: serializeAws_json1_1VolumeIds(input.VolumeIds, context) }),
  };
};

const serializeAws_json1_1DisassociateFileSystemAliasesRequest = (
  input: DisassociateFileSystemAliasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Aliases !== undefined &&
      input.Aliases !== null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
  };
};

const serializeAws_json1_1DiskIopsConfiguration = (input: DiskIopsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops }),
    ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
  };
};

const serializeAws_json1_1DnsIps = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1FileSystemIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1RouteTableIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SelfManagedActiveDirectoryConfiguration = (
  input: SelfManagedActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsIps !== undefined &&
      input.DnsIps !== null && { DnsIps: serializeAws_json1_1DnsIps(input.DnsIps, context) }),
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.FileSystemAdministratorsGroup !== undefined &&
      input.FileSystemAdministratorsGroup !== null && {
        FileSystemAdministratorsGroup: input.FileSystemAdministratorsGroup,
      }),
    ...(input.OrganizationalUnitDistinguishedName !== undefined &&
      input.OrganizationalUnitDistinguishedName !== null && {
        OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
      }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates = (
  input: SelfManagedActiveDirectoryConfigurationUpdates,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsIps !== undefined &&
      input.DnsIps !== null && { DnsIps: serializeAws_json1_1DnsIps(input.DnsIps, context) }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1StorageVirtualMachineFilter = (
  input: StorageVirtualMachineFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && {
        Values: serializeAws_json1_1StorageVirtualMachineFilterValues(input.Values, context),
      }),
  };
};

const serializeAws_json1_1StorageVirtualMachineFilters = (
  input: StorageVirtualMachineFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1StorageVirtualMachineFilter(entry, context);
    });
};

const serializeAws_json1_1StorageVirtualMachineFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StorageVirtualMachineIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TaskIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TieringPolicy = (input: TieringPolicy, context: __SerdeContext): any => {
  return {
    ...(input.CoolingPeriod !== undefined && input.CoolingPeriod !== null && { CoolingPeriod: input.CoolingPeriod }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateFileSystemLustreConfiguration = (
  input: UpdateFileSystemLustreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoImportPolicy !== undefined &&
      input.AutoImportPolicy !== null && { AutoImportPolicy: input.AutoImportPolicy }),
    ...(input.AutomaticBackupRetentionDays !== undefined &&
      input.AutomaticBackupRetentionDays !== null && {
        AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
      }),
    ...(input.DailyAutomaticBackupStartTime !== undefined &&
      input.DailyAutomaticBackupStartTime !== null && {
        DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
      }),
    ...(input.DataCompressionType !== undefined &&
      input.DataCompressionType !== null && { DataCompressionType: input.DataCompressionType }),
    ...(input.WeeklyMaintenanceStartTime !== undefined &&
      input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1UpdateFileSystemOntapConfiguration = (
  input: UpdateFileSystemOntapConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomaticBackupRetentionDays !== undefined &&
      input.AutomaticBackupRetentionDays !== null && {
        AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
      }),
    ...(input.DailyAutomaticBackupStartTime !== undefined &&
      input.DailyAutomaticBackupStartTime !== null && {
        DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
      }),
    ...(input.FsxAdminPassword !== undefined &&
      input.FsxAdminPassword !== null && { FsxAdminPassword: input.FsxAdminPassword }),
    ...(input.WeeklyMaintenanceStartTime !== undefined &&
      input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1UpdateFileSystemRequest = (input: UpdateFileSystemRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
    ...(input.LustreConfiguration !== undefined &&
      input.LustreConfiguration !== null && {
        LustreConfiguration: serializeAws_json1_1UpdateFileSystemLustreConfiguration(
          input.LustreConfiguration,
          context
        ),
      }),
    ...(input.OntapConfiguration !== undefined &&
      input.OntapConfiguration !== null && {
        OntapConfiguration: serializeAws_json1_1UpdateFileSystemOntapConfiguration(input.OntapConfiguration, context),
      }),
    ...(input.StorageCapacity !== undefined &&
      input.StorageCapacity !== null && { StorageCapacity: input.StorageCapacity }),
    ...(input.WindowsConfiguration !== undefined &&
      input.WindowsConfiguration !== null && {
        WindowsConfiguration: serializeAws_json1_1UpdateFileSystemWindowsConfiguration(
          input.WindowsConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1UpdateFileSystemWindowsConfiguration = (
  input: UpdateFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditLogConfiguration !== undefined &&
      input.AuditLogConfiguration !== null && {
        AuditLogConfiguration: serializeAws_json1_1WindowsAuditLogCreateConfiguration(
          input.AuditLogConfiguration,
          context
        ),
      }),
    ...(input.AutomaticBackupRetentionDays !== undefined &&
      input.AutomaticBackupRetentionDays !== null && {
        AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
      }),
    ...(input.DailyAutomaticBackupStartTime !== undefined &&
      input.DailyAutomaticBackupStartTime !== null && {
        DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
      }),
    ...(input.SelfManagedActiveDirectoryConfiguration !== undefined &&
      input.SelfManagedActiveDirectoryConfiguration !== null && {
        SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates(
          input.SelfManagedActiveDirectoryConfiguration,
          context
        ),
      }),
    ...(input.ThroughputCapacity !== undefined &&
      input.ThroughputCapacity !== null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime !== undefined &&
      input.WeeklyMaintenanceStartTime !== null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1UpdateOntapVolumeConfiguration = (
  input: UpdateOntapVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.JunctionPath !== undefined && input.JunctionPath !== null && { JunctionPath: input.JunctionPath }),
    ...(input.SecurityStyle !== undefined && input.SecurityStyle !== null && { SecurityStyle: input.SecurityStyle }),
    ...(input.SizeInMegabytes !== undefined &&
      input.SizeInMegabytes !== null && { SizeInMegabytes: input.SizeInMegabytes }),
    ...(input.StorageEfficiencyEnabled !== undefined &&
      input.StorageEfficiencyEnabled !== null && { StorageEfficiencyEnabled: input.StorageEfficiencyEnabled }),
    ...(input.TieringPolicy !== undefined &&
      input.TieringPolicy !== null && {
        TieringPolicy: serializeAws_json1_1TieringPolicy(input.TieringPolicy, context),
      }),
  };
};

const serializeAws_json1_1UpdateStorageVirtualMachineRequest = (
  input: UpdateStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveDirectoryConfiguration !== undefined &&
      input.ActiveDirectoryConfiguration !== null && {
        ActiveDirectoryConfiguration: serializeAws_json1_1UpdateSvmActiveDirectoryConfiguration(
          input.ActiveDirectoryConfiguration,
          context
        ),
      }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.StorageVirtualMachineId !== undefined &&
      input.StorageVirtualMachineId !== null && { StorageVirtualMachineId: input.StorageVirtualMachineId }),
    ...(input.SvmAdminPassword !== undefined &&
      input.SvmAdminPassword !== null && { SvmAdminPassword: input.SvmAdminPassword }),
  };
};

const serializeAws_json1_1UpdateSvmActiveDirectoryConfiguration = (
  input: UpdateSvmActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SelfManagedActiveDirectoryConfiguration !== undefined &&
      input.SelfManagedActiveDirectoryConfiguration !== null && {
        SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates(
          input.SelfManagedActiveDirectoryConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1UpdateVolumeRequest = (input: UpdateVolumeRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.OntapConfiguration !== undefined &&
      input.OntapConfiguration !== null && {
        OntapConfiguration: serializeAws_json1_1UpdateOntapVolumeConfiguration(input.OntapConfiguration, context),
      }),
    ...(input.VolumeId !== undefined && input.VolumeId !== null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1VolumeFilter = (input: VolumeFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1VolumeFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1VolumeFilters = (input: VolumeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1VolumeFilter(entry, context);
    });
};

const serializeAws_json1_1VolumeFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1VolumeIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1WindowsAuditLogCreateConfiguration = (
  input: WindowsAuditLogCreateConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditLogDestination !== undefined &&
      input.AuditLogDestination !== null && { AuditLogDestination: input.AuditLogDestination }),
    ...(input.FileAccessAuditLogLevel !== undefined &&
      input.FileAccessAuditLogLevel !== null && { FileAccessAuditLogLevel: input.FileAccessAuditLogLevel }),
    ...(input.FileShareAccessAuditLogLevel !== undefined &&
      input.FileShareAccessAuditLogLevel !== null && {
        FileShareAccessAuditLogLevel: input.FileShareAccessAuditLogLevel,
      }),
  };
};

const deserializeAws_json1_1ActiveDirectoryBackupAttributes = (
  output: any,
  context: __SerdeContext
): ActiveDirectoryBackupAttributes => {
  return {
    ActiveDirectoryId: __expectString(output.ActiveDirectoryId),
    DomainName: __expectString(output.DomainName),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_1ActiveDirectoryError = (output: any, context: __SerdeContext): ActiveDirectoryError => {
  return {
    ActiveDirectoryId: __expectString(output.ActiveDirectoryId),
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1AdministrativeAction = (output: any, context: __SerdeContext): AdministrativeAction => {
  return {
    AdministrativeActionType: __expectString(output.AdministrativeActionType),
    FailureDetails:
      output.FailureDetails !== undefined && output.FailureDetails !== null
        ? deserializeAws_json1_1AdministrativeActionFailureDetails(output.FailureDetails, context)
        : undefined,
    ProgressPercent: __expectInt32(output.ProgressPercent),
    RequestTime:
      output.RequestTime !== undefined && output.RequestTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RequestTime)))
        : undefined,
    Status: __expectString(output.Status),
    TargetFileSystemValues:
      output.TargetFileSystemValues !== undefined && output.TargetFileSystemValues !== null
        ? deserializeAws_json1_1FileSystem(output.TargetFileSystemValues, context)
        : undefined,
    TargetVolumeValues:
      output.TargetVolumeValues !== undefined && output.TargetVolumeValues !== null
        ? deserializeAws_json1_1Volume(output.TargetVolumeValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AdministrativeActionFailureDetails = (
  output: any,
  context: __SerdeContext
): AdministrativeActionFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AdministrativeActions = (output: any, context: __SerdeContext): AdministrativeAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AdministrativeAction(entry, context);
    });
};

const deserializeAws_json1_1Alias = (output: any, context: __SerdeContext): Alias => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1Aliases = (output: any, context: __SerdeContext): Alias[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Alias(entry, context);
    });
};

const deserializeAws_json1_1AssociateFileSystemAliasesResponse = (
  output: any,
  context: __SerdeContext
): AssociateFileSystemAliasesResponse => {
  return {
    Aliases:
      output.Aliases !== undefined && output.Aliases !== null
        ? deserializeAws_json1_1Aliases(output.Aliases, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Backup = (output: any, context: __SerdeContext): Backup => {
  return {
    BackupId: __expectString(output.BackupId),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DirectoryInformation:
      output.DirectoryInformation !== undefined && output.DirectoryInformation !== null
        ? deserializeAws_json1_1ActiveDirectoryBackupAttributes(output.DirectoryInformation, context)
        : undefined,
    FailureDetails:
      output.FailureDetails !== undefined && output.FailureDetails !== null
        ? deserializeAws_json1_1BackupFailureDetails(output.FailureDetails, context)
        : undefined,
    FileSystem:
      output.FileSystem !== undefined && output.FileSystem !== null
        ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
        : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    Lifecycle: __expectString(output.Lifecycle),
    OwnerId: __expectString(output.OwnerId),
    ProgressPercent: __expectInt32(output.ProgressPercent),
    ResourceARN: __expectString(output.ResourceARN),
    ResourceType: __expectString(output.ResourceType),
    SourceBackupId: __expectString(output.SourceBackupId),
    SourceBackupRegion: __expectString(output.SourceBackupRegion),
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
    Volume:
      output.Volume !== undefined && output.Volume !== null
        ? deserializeAws_json1_1Volume(output.Volume, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BackupBeingCopied = (output: any, context: __SerdeContext): BackupBeingCopied => {
  return {
    BackupId: __expectString(output.BackupId),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1BackupFailureDetails = (output: any, context: __SerdeContext): BackupFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1BackupInProgress = (output: any, context: __SerdeContext): BackupInProgress => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1BackupNotFound = (output: any, context: __SerdeContext): BackupNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1BackupRestoring = (output: any, context: __SerdeContext): BackupRestoring => {
  return {
    FileSystemId: __expectString(output.FileSystemId),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Backups = (output: any, context: __SerdeContext): Backup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Backup(entry, context);
    });
};

const deserializeAws_json1_1BadRequest = (output: any, context: __SerdeContext): BadRequest => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CancelDataRepositoryTaskResponse = (
  output: any,
  context: __SerdeContext
): CancelDataRepositoryTaskResponse => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    TaskId: __expectString(output.TaskId),
  } as any;
};

const deserializeAws_json1_1CompletionReport = (output: any, context: __SerdeContext): CompletionReport => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    Format: __expectString(output.Format),
    Path: __expectString(output.Path),
    Scope: __expectString(output.Scope),
  } as any;
};

const deserializeAws_json1_1CopyBackupResponse = (output: any, context: __SerdeContext): CopyBackupResponse => {
  return {
    Backup:
      output.Backup !== undefined && output.Backup !== null
        ? deserializeAws_json1_1Backup(output.Backup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateBackupResponse = (output: any, context: __SerdeContext): CreateBackupResponse => {
  return {
    Backup:
      output.Backup !== undefined && output.Backup !== null
        ? deserializeAws_json1_1Backup(output.Backup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDataRepositoryTaskResponse = (
  output: any,
  context: __SerdeContext
): CreateDataRepositoryTaskResponse => {
  return {
    DataRepositoryTask:
      output.DataRepositoryTask !== undefined && output.DataRepositoryTask !== null
        ? deserializeAws_json1_1DataRepositoryTask(output.DataRepositoryTask, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateFileSystemFromBackupResponse = (
  output: any,
  context: __SerdeContext
): CreateFileSystemFromBackupResponse => {
  return {
    FileSystem:
      output.FileSystem !== undefined && output.FileSystem !== null
        ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateFileSystemResponse = (
  output: any,
  context: __SerdeContext
): CreateFileSystemResponse => {
  return {
    FileSystem:
      output.FileSystem !== undefined && output.FileSystem !== null
        ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateStorageVirtualMachineResponse = (
  output: any,
  context: __SerdeContext
): CreateStorageVirtualMachineResponse => {
  return {
    StorageVirtualMachine:
      output.StorageVirtualMachine !== undefined && output.StorageVirtualMachine !== null
        ? deserializeAws_json1_1StorageVirtualMachine(output.StorageVirtualMachine, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateVolumeFromBackupResponse = (
  output: any,
  context: __SerdeContext
): CreateVolumeFromBackupResponse => {
  return {
    Volume:
      output.Volume !== undefined && output.Volume !== null
        ? deserializeAws_json1_1Volume(output.Volume, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateVolumeResponse = (output: any, context: __SerdeContext): CreateVolumeResponse => {
  return {
    Volume:
      output.Volume !== undefined && output.Volume !== null
        ? deserializeAws_json1_1Volume(output.Volume, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataRepositoryConfiguration = (
  output: any,
  context: __SerdeContext
): DataRepositoryConfiguration => {
  return {
    AutoImportPolicy: __expectString(output.AutoImportPolicy),
    ExportPath: __expectString(output.ExportPath),
    FailureDetails:
      output.FailureDetails !== undefined && output.FailureDetails !== null
        ? deserializeAws_json1_1DataRepositoryFailureDetails(output.FailureDetails, context)
        : undefined,
    ImportPath: __expectString(output.ImportPath),
    ImportedFileChunkSize: __expectInt32(output.ImportedFileChunkSize),
    Lifecycle: __expectString(output.Lifecycle),
  } as any;
};

const deserializeAws_json1_1DataRepositoryFailureDetails = (
  output: any,
  context: __SerdeContext
): DataRepositoryFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTask = (output: any, context: __SerdeContext): DataRepositoryTask => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime)))
        : undefined,
    FailureDetails:
      output.FailureDetails !== undefined && output.FailureDetails !== null
        ? deserializeAws_json1_1DataRepositoryTaskFailureDetails(output.FailureDetails, context)
        : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    Paths:
      output.Paths !== undefined && output.Paths !== null
        ? deserializeAws_json1_1DataRepositoryTaskPaths(output.Paths, context)
        : undefined,
    Report:
      output.Report !== undefined && output.Report !== null
        ? deserializeAws_json1_1CompletionReport(output.Report, context)
        : undefined,
    ResourceARN: __expectString(output.ResourceARN),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1DataRepositoryTaskStatus(output.Status, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    TaskId: __expectString(output.TaskId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTaskEnded = (
  output: any,
  context: __SerdeContext
): DataRepositoryTaskEnded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTaskExecuting = (
  output: any,
  context: __SerdeContext
): DataRepositoryTaskExecuting => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTaskFailureDetails = (
  output: any,
  context: __SerdeContext
): DataRepositoryTaskFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTaskNotFound = (
  output: any,
  context: __SerdeContext
): DataRepositoryTaskNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTaskPaths = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DataRepositoryTasks = (output: any, context: __SerdeContext): DataRepositoryTask[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataRepositoryTask(entry, context);
    });
};

const deserializeAws_json1_1DataRepositoryTaskStatus = (
  output: any,
  context: __SerdeContext
): DataRepositoryTaskStatus => {
  return {
    FailedCount: __expectLong(output.FailedCount),
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    SucceededCount: __expectLong(output.SucceededCount),
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

const deserializeAws_json1_1DeleteBackupResponse = (output: any, context: __SerdeContext): DeleteBackupResponse => {
  return {
    BackupId: __expectString(output.BackupId),
    Lifecycle: __expectString(output.Lifecycle),
  } as any;
};

const deserializeAws_json1_1DeleteFileSystemLustreResponse = (
  output: any,
  context: __SerdeContext
): DeleteFileSystemLustreResponse => {
  return {
    FinalBackupId: __expectString(output.FinalBackupId),
    FinalBackupTags:
      output.FinalBackupTags !== undefined && output.FinalBackupTags !== null
        ? deserializeAws_json1_1Tags(output.FinalBackupTags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteFileSystemResponse = (
  output: any,
  context: __SerdeContext
): DeleteFileSystemResponse => {
  return {
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    LustreResponse:
      output.LustreResponse !== undefined && output.LustreResponse !== null
        ? deserializeAws_json1_1DeleteFileSystemLustreResponse(output.LustreResponse, context)
        : undefined,
    WindowsResponse:
      output.WindowsResponse !== undefined && output.WindowsResponse !== null
        ? deserializeAws_json1_1DeleteFileSystemWindowsResponse(output.WindowsResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteFileSystemWindowsResponse = (
  output: any,
  context: __SerdeContext
): DeleteFileSystemWindowsResponse => {
  return {
    FinalBackupId: __expectString(output.FinalBackupId),
    FinalBackupTags:
      output.FinalBackupTags !== undefined && output.FinalBackupTags !== null
        ? deserializeAws_json1_1Tags(output.FinalBackupTags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteStorageVirtualMachineResponse = (
  output: any,
  context: __SerdeContext
): DeleteStorageVirtualMachineResponse => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    StorageVirtualMachineId: __expectString(output.StorageVirtualMachineId),
  } as any;
};

const deserializeAws_json1_1DeleteVolumeOntapResponse = (
  output: any,
  context: __SerdeContext
): DeleteVolumeOntapResponse => {
  return {
    FinalBackupId: __expectString(output.FinalBackupId),
    FinalBackupTags:
      output.FinalBackupTags !== undefined && output.FinalBackupTags !== null
        ? deserializeAws_json1_1Tags(output.FinalBackupTags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteVolumeResponse = (output: any, context: __SerdeContext): DeleteVolumeResponse => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    OntapResponse:
      output.OntapResponse !== undefined && output.OntapResponse !== null
        ? deserializeAws_json1_1DeleteVolumeOntapResponse(output.OntapResponse, context)
        : undefined,
    VolumeId: __expectString(output.VolumeId),
  } as any;
};

const deserializeAws_json1_1DescribeBackupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBackupsResponse => {
  return {
    Backups:
      output.Backups !== undefined && output.Backups !== null
        ? deserializeAws_json1_1Backups(output.Backups, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeDataRepositoryTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataRepositoryTasksResponse => {
  return {
    DataRepositoryTasks:
      output.DataRepositoryTasks !== undefined && output.DataRepositoryTasks !== null
        ? deserializeAws_json1_1DataRepositoryTasks(output.DataRepositoryTasks, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFileSystemAliasesResponse = (
  output: any,
  context: __SerdeContext
): DescribeFileSystemAliasesResponse => {
  return {
    Aliases:
      output.Aliases !== undefined && output.Aliases !== null
        ? deserializeAws_json1_1Aliases(output.Aliases, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFileSystemsResponse = (
  output: any,
  context: __SerdeContext
): DescribeFileSystemsResponse => {
  return {
    FileSystems:
      output.FileSystems !== undefined && output.FileSystems !== null
        ? deserializeAws_json1_1FileSystems(output.FileSystems, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeStorageVirtualMachinesResponse = (
  output: any,
  context: __SerdeContext
): DescribeStorageVirtualMachinesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    StorageVirtualMachines:
      output.StorageVirtualMachines !== undefined && output.StorageVirtualMachines !== null
        ? deserializeAws_json1_1StorageVirtualMachines(output.StorageVirtualMachines, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeVolumesResponse = (
  output: any,
  context: __SerdeContext
): DescribeVolumesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Volumes:
      output.Volumes !== undefined && output.Volumes !== null
        ? deserializeAws_json1_1Volumes(output.Volumes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DisassociateFileSystemAliasesResponse = (
  output: any,
  context: __SerdeContext
): DisassociateFileSystemAliasesResponse => {
  return {
    Aliases:
      output.Aliases !== undefined && output.Aliases !== null
        ? deserializeAws_json1_1Aliases(output.Aliases, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DiskIopsConfiguration = (output: any, context: __SerdeContext): DiskIopsConfiguration => {
  return {
    Iops: __expectLong(output.Iops),
    Mode: __expectString(output.Mode),
  } as any;
};

const deserializeAws_json1_1DnsIps = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1FileSystem = (output: any, context: __SerdeContext): FileSystem => {
  return {
    AdministrativeActions:
      output.AdministrativeActions !== undefined && output.AdministrativeActions !== null
        ? deserializeAws_json1_1AdministrativeActions(output.AdministrativeActions, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DNSName: __expectString(output.DNSName),
    FailureDetails:
      output.FailureDetails !== undefined && output.FailureDetails !== null
        ? deserializeAws_json1_1FileSystemFailureDetails(output.FailureDetails, context)
        : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    FileSystemType: __expectString(output.FileSystemType),
    FileSystemTypeVersion: __expectString(output.FileSystemTypeVersion),
    KmsKeyId: __expectString(output.KmsKeyId),
    Lifecycle: __expectString(output.Lifecycle),
    LustreConfiguration:
      output.LustreConfiguration !== undefined && output.LustreConfiguration !== null
        ? deserializeAws_json1_1LustreFileSystemConfiguration(output.LustreConfiguration, context)
        : undefined,
    NetworkInterfaceIds:
      output.NetworkInterfaceIds !== undefined && output.NetworkInterfaceIds !== null
        ? deserializeAws_json1_1NetworkInterfaceIds(output.NetworkInterfaceIds, context)
        : undefined,
    OntapConfiguration:
      output.OntapConfiguration !== undefined && output.OntapConfiguration !== null
        ? deserializeAws_json1_1OntapFileSystemConfiguration(output.OntapConfiguration, context)
        : undefined,
    OwnerId: __expectString(output.OwnerId),
    ResourceARN: __expectString(output.ResourceARN),
    StorageCapacity: __expectInt32(output.StorageCapacity),
    StorageType: __expectString(output.StorageType),
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    VpcId: __expectString(output.VpcId),
    WindowsConfiguration:
      output.WindowsConfiguration !== undefined && output.WindowsConfiguration !== null
        ? deserializeAws_json1_1WindowsFileSystemConfiguration(output.WindowsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FileSystemEndpoint = (output: any, context: __SerdeContext): FileSystemEndpoint => {
  return {
    DNSName: __expectString(output.DNSName),
    IpAddresses:
      output.IpAddresses !== undefined && output.IpAddresses !== null
        ? deserializeAws_json1_1OntapEndpointIpAddresses(output.IpAddresses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FileSystemEndpoints = (output: any, context: __SerdeContext): FileSystemEndpoints => {
  return {
    Intercluster:
      output.Intercluster !== undefined && output.Intercluster !== null
        ? deserializeAws_json1_1FileSystemEndpoint(output.Intercluster, context)
        : undefined,
    Management:
      output.Management !== undefined && output.Management !== null
        ? deserializeAws_json1_1FileSystemEndpoint(output.Management, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FileSystemFailureDetails = (
  output: any,
  context: __SerdeContext
): FileSystemFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1FileSystemMaintenanceOperations = (
  output: any,
  context: __SerdeContext
): (FileSystemMaintenanceOperation | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1FileSystemNotFound = (output: any, context: __SerdeContext): FileSystemNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1FileSystems = (output: any, context: __SerdeContext): FileSystem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FileSystem(entry, context);
    });
};

const deserializeAws_json1_1IncompatibleParameterError = (
  output: any,
  context: __SerdeContext
): IncompatibleParameterError => {
  return {
    Message: __expectString(output.Message),
    Parameter: __expectString(output.Parameter),
  } as any;
};

const deserializeAws_json1_1IncompatibleRegionForMultiAZ = (
  output: any,
  context: __SerdeContext
): IncompatibleRegionForMultiAZ => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDestinationKmsKey = (
  output: any,
  context: __SerdeContext
): InvalidDestinationKmsKey => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidExportPath = (output: any, context: __SerdeContext): InvalidExportPath => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidImportPath = (output: any, context: __SerdeContext): InvalidImportPath => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidNetworkSettings = (output: any, context: __SerdeContext): InvalidNetworkSettings => {
  return {
    InvalidRouteTableId: __expectString(output.InvalidRouteTableId),
    InvalidSecurityGroupId: __expectString(output.InvalidSecurityGroupId),
    InvalidSubnetId: __expectString(output.InvalidSubnetId),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidPerUnitStorageThroughput = (
  output: any,
  context: __SerdeContext
): InvalidPerUnitStorageThroughput => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRegion = (output: any, context: __SerdeContext): InvalidRegion => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidSourceKmsKey = (output: any, context: __SerdeContext): InvalidSourceKmsKey => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LifecycleTransitionReason = (
  output: any,
  context: __SerdeContext
): LifecycleTransitionReason => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LustreFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): LustreFileSystemConfiguration => {
  return {
    AutomaticBackupRetentionDays: __expectInt32(output.AutomaticBackupRetentionDays),
    CopyTagsToBackups: __expectBoolean(output.CopyTagsToBackups),
    DailyAutomaticBackupStartTime: __expectString(output.DailyAutomaticBackupStartTime),
    DataCompressionType: __expectString(output.DataCompressionType),
    DataRepositoryConfiguration:
      output.DataRepositoryConfiguration !== undefined && output.DataRepositoryConfiguration !== null
        ? deserializeAws_json1_1DataRepositoryConfiguration(output.DataRepositoryConfiguration, context)
        : undefined,
    DeploymentType: __expectString(output.DeploymentType),
    DriveCacheType: __expectString(output.DriveCacheType),
    MountName: __expectString(output.MountName),
    PerUnitStorageThroughput: __expectInt32(output.PerUnitStorageThroughput),
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

const deserializeAws_json1_1MissingFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): MissingFileSystemConfiguration => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MissingVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): MissingVolumeConfiguration => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1NetworkInterfaceIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1NotServiceResourceError = (
  output: any,
  context: __SerdeContext
): NotServiceResourceError => {
  return {
    Message: __expectString(output.Message),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_1OntapEndpointIpAddresses = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1OntapFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): OntapFileSystemConfiguration => {
  return {
    AutomaticBackupRetentionDays: __expectInt32(output.AutomaticBackupRetentionDays),
    DailyAutomaticBackupStartTime: __expectString(output.DailyAutomaticBackupStartTime),
    DeploymentType: __expectString(output.DeploymentType),
    DiskIopsConfiguration:
      output.DiskIopsConfiguration !== undefined && output.DiskIopsConfiguration !== null
        ? deserializeAws_json1_1DiskIopsConfiguration(output.DiskIopsConfiguration, context)
        : undefined,
    EndpointIpAddressRange: __expectString(output.EndpointIpAddressRange),
    Endpoints:
      output.Endpoints !== undefined && output.Endpoints !== null
        ? deserializeAws_json1_1FileSystemEndpoints(output.Endpoints, context)
        : undefined,
    PreferredSubnetId: __expectString(output.PreferredSubnetId),
    RouteTableIds:
      output.RouteTableIds !== undefined && output.RouteTableIds !== null
        ? deserializeAws_json1_1RouteTableIds(output.RouteTableIds, context)
        : undefined,
    ThroughputCapacity: __expectInt32(output.ThroughputCapacity),
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

const deserializeAws_json1_1OntapVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): OntapVolumeConfiguration => {
  return {
    FlexCacheEndpointType: __expectString(output.FlexCacheEndpointType),
    JunctionPath: __expectString(output.JunctionPath),
    OntapVolumeType: __expectString(output.OntapVolumeType),
    SecurityStyle: __expectString(output.SecurityStyle),
    SizeInMegabytes: __expectInt32(output.SizeInMegabytes),
    StorageEfficiencyEnabled: __expectBoolean(output.StorageEfficiencyEnabled),
    StorageVirtualMachineId: __expectString(output.StorageVirtualMachineId),
    StorageVirtualMachineRoot: __expectBoolean(output.StorageVirtualMachineRoot),
    TieringPolicy:
      output.TieringPolicy !== undefined && output.TieringPolicy !== null
        ? deserializeAws_json1_1TieringPolicy(output.TieringPolicy, context)
        : undefined,
    UUID: __expectString(output.UUID),
  } as any;
};

const deserializeAws_json1_1ResourceDoesNotSupportTagging = (
  output: any,
  context: __SerdeContext
): ResourceDoesNotSupportTagging => {
  return {
    Message: __expectString(output.Message),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_1ResourceNotFound = (output: any, context: __SerdeContext): ResourceNotFound => {
  return {
    Message: __expectString(output.Message),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_1RouteTableIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SelfManagedActiveDirectoryAttributes = (
  output: any,
  context: __SerdeContext
): SelfManagedActiveDirectoryAttributes => {
  return {
    DnsIps:
      output.DnsIps !== undefined && output.DnsIps !== null
        ? deserializeAws_json1_1DnsIps(output.DnsIps, context)
        : undefined,
    DomainName: __expectString(output.DomainName),
    FileSystemAdministratorsGroup: __expectString(output.FileSystemAdministratorsGroup),
    OrganizationalUnitDistinguishedName: __expectString(output.OrganizationalUnitDistinguishedName),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1ServiceLimitExceeded = (output: any, context: __SerdeContext): ServiceLimitExceeded => {
  return {
    Limit: __expectString(output.Limit),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SourceBackupUnavailable = (
  output: any,
  context: __SerdeContext
): SourceBackupUnavailable => {
  return {
    BackupId: __expectString(output.BackupId),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1StorageVirtualMachine = (output: any, context: __SerdeContext): StorageVirtualMachine => {
  return {
    ActiveDirectoryConfiguration:
      output.ActiveDirectoryConfiguration !== undefined && output.ActiveDirectoryConfiguration !== null
        ? deserializeAws_json1_1SvmActiveDirectoryConfiguration(output.ActiveDirectoryConfiguration, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Endpoints:
      output.Endpoints !== undefined && output.Endpoints !== null
        ? deserializeAws_json1_1SvmEndpoints(output.Endpoints, context)
        : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    LifecycleTransitionReason:
      output.LifecycleTransitionReason !== undefined && output.LifecycleTransitionReason !== null
        ? deserializeAws_json1_1LifecycleTransitionReason(output.LifecycleTransitionReason, context)
        : undefined,
    Name: __expectString(output.Name),
    ResourceARN: __expectString(output.ResourceARN),
    RootVolumeSecurityStyle: __expectString(output.RootVolumeSecurityStyle),
    StorageVirtualMachineId: __expectString(output.StorageVirtualMachineId),
    Subtype: __expectString(output.Subtype),
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    UUID: __expectString(output.UUID),
  } as any;
};

const deserializeAws_json1_1StorageVirtualMachineNotFound = (
  output: any,
  context: __SerdeContext
): StorageVirtualMachineNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1StorageVirtualMachines = (
  output: any,
  context: __SerdeContext
): StorageVirtualMachine[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StorageVirtualMachine(entry, context);
    });
};

const deserializeAws_json1_1SubnetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SvmActiveDirectoryConfiguration = (
  output: any,
  context: __SerdeContext
): SvmActiveDirectoryConfiguration => {
  return {
    NetBiosName: __expectString(output.NetBiosName),
    SelfManagedActiveDirectoryConfiguration:
      output.SelfManagedActiveDirectoryConfiguration !== undefined &&
      output.SelfManagedActiveDirectoryConfiguration !== null
        ? deserializeAws_json1_1SelfManagedActiveDirectoryAttributes(
            output.SelfManagedActiveDirectoryConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1SvmEndpoint = (output: any, context: __SerdeContext): SvmEndpoint => {
  return {
    DNSName: __expectString(output.DNSName),
    IpAddresses:
      output.IpAddresses !== undefined && output.IpAddresses !== null
        ? deserializeAws_json1_1OntapEndpointIpAddresses(output.IpAddresses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SvmEndpoints = (output: any, context: __SerdeContext): SvmEndpoints => {
  return {
    Iscsi:
      output.Iscsi !== undefined && output.Iscsi !== null
        ? deserializeAws_json1_1SvmEndpoint(output.Iscsi, context)
        : undefined,
    Management:
      output.Management !== undefined && output.Management !== null
        ? deserializeAws_json1_1SvmEndpoint(output.Management, context)
        : undefined,
    Nfs:
      output.Nfs !== undefined && output.Nfs !== null
        ? deserializeAws_json1_1SvmEndpoint(output.Nfs, context)
        : undefined,
    Smb:
      output.Smb !== undefined && output.Smb !== null
        ? deserializeAws_json1_1SvmEndpoint(output.Smb, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TieringPolicy = (output: any, context: __SerdeContext): TieringPolicy => {
  return {
    CoolingPeriod: __expectInt32(output.CoolingPeriod),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1UnsupportedOperation = (output: any, context: __SerdeContext): UnsupportedOperation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateFileSystemResponse = (
  output: any,
  context: __SerdeContext
): UpdateFileSystemResponse => {
  return {
    FileSystem:
      output.FileSystem !== undefined && output.FileSystem !== null
        ? deserializeAws_json1_1FileSystem(output.FileSystem, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateStorageVirtualMachineResponse = (
  output: any,
  context: __SerdeContext
): UpdateStorageVirtualMachineResponse => {
  return {
    StorageVirtualMachine:
      output.StorageVirtualMachine !== undefined && output.StorageVirtualMachine !== null
        ? deserializeAws_json1_1StorageVirtualMachine(output.StorageVirtualMachine, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateVolumeResponse = (output: any, context: __SerdeContext): UpdateVolumeResponse => {
  return {
    Volume:
      output.Volume !== undefined && output.Volume !== null
        ? deserializeAws_json1_1Volume(output.Volume, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    LifecycleTransitionReason:
      output.LifecycleTransitionReason !== undefined && output.LifecycleTransitionReason !== null
        ? deserializeAws_json1_1LifecycleTransitionReason(output.LifecycleTransitionReason, context)
        : undefined,
    Name: __expectString(output.Name),
    OntapConfiguration:
      output.OntapConfiguration !== undefined && output.OntapConfiguration !== null
        ? deserializeAws_json1_1OntapVolumeConfiguration(output.OntapConfiguration, context)
        : undefined,
    ResourceARN: __expectString(output.ResourceARN),
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    VolumeId: __expectString(output.VolumeId),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_json1_1VolumeNotFound = (output: any, context: __SerdeContext): VolumeNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Volumes = (output: any, context: __SerdeContext): Volume[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Volume(entry, context);
    });
};

const deserializeAws_json1_1WindowsAuditLogConfiguration = (
  output: any,
  context: __SerdeContext
): WindowsAuditLogConfiguration => {
  return {
    AuditLogDestination: __expectString(output.AuditLogDestination),
    FileAccessAuditLogLevel: __expectString(output.FileAccessAuditLogLevel),
    FileShareAccessAuditLogLevel: __expectString(output.FileShareAccessAuditLogLevel),
  } as any;
};

const deserializeAws_json1_1WindowsFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): WindowsFileSystemConfiguration => {
  return {
    ActiveDirectoryId: __expectString(output.ActiveDirectoryId),
    Aliases:
      output.Aliases !== undefined && output.Aliases !== null
        ? deserializeAws_json1_1Aliases(output.Aliases, context)
        : undefined,
    AuditLogConfiguration:
      output.AuditLogConfiguration !== undefined && output.AuditLogConfiguration !== null
        ? deserializeAws_json1_1WindowsAuditLogConfiguration(output.AuditLogConfiguration, context)
        : undefined,
    AutomaticBackupRetentionDays: __expectInt32(output.AutomaticBackupRetentionDays),
    CopyTagsToBackups: __expectBoolean(output.CopyTagsToBackups),
    DailyAutomaticBackupStartTime: __expectString(output.DailyAutomaticBackupStartTime),
    DeploymentType: __expectString(output.DeploymentType),
    MaintenanceOperationsInProgress:
      output.MaintenanceOperationsInProgress !== undefined && output.MaintenanceOperationsInProgress !== null
        ? deserializeAws_json1_1FileSystemMaintenanceOperations(output.MaintenanceOperationsInProgress, context)
        : undefined,
    PreferredFileServerIp: __expectString(output.PreferredFileServerIp),
    PreferredSubnetId: __expectString(output.PreferredSubnetId),
    RemoteAdministrationEndpoint: __expectString(output.RemoteAdministrationEndpoint),
    SelfManagedActiveDirectoryConfiguration:
      output.SelfManagedActiveDirectoryConfiguration !== undefined &&
      output.SelfManagedActiveDirectoryConfiguration !== null
        ? deserializeAws_json1_1SelfManagedActiveDirectoryAttributes(
            output.SelfManagedActiveDirectoryConfiguration,
            context
          )
        : undefined,
    ThroughputCapacity: __expectInt32(output.ThroughputCapacity),
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};