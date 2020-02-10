import {
  AccessanalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AccessanalyzerClient";
import { StartResourceScanRequest } from "../models/index";
import {
  deserializeAws_restJson1_1StartResourceScanCommand,
  serializeAws_restJson1_1StartResourceScanCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer
} from "@aws-sdk/types";

export type StartResourceScanCommandInput = StartResourceScanRequest;
export type StartResourceScanCommandOutput = __MetadataBearer;

export class StartResourceScanCommand extends $Command<
  StartResourceScanCommandInput,
  StartResourceScanCommandOutput,
  AccessanalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartResourceScanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessanalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartResourceScanCommandInput, StartResourceScanCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartResourceScanCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1StartResourceScanCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<StartResourceScanCommandOutput> {
    return deserializeAws_restJson1_1StartResourceScanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}