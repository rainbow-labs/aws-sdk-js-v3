import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { CreateSubnetGroupRequest, CreateSubnetGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSubnetGroupCommand,
  serializeAws_json1_1CreateSubnetGroupCommand,
} from "../protocols/Aws_json1_1";

export interface CreateSubnetGroupCommandInput extends CreateSubnetGroupRequest {}
export interface CreateSubnetGroupCommandOutput extends CreateSubnetGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a new subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, CreateSubnetGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, CreateSubnetGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new CreateSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateSubnetGroupCommand extends $Command<
  CreateSubnetGroupCommandInput,
  CreateSubnetGroupCommandOutput,
  DAXClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSubnetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DAXClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSubnetGroupCommandInput, CreateSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "CreateSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSubnetGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSubnetGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSubnetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSubnetGroupCommandOutput> {
    return deserializeAws_json1_1CreateSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}