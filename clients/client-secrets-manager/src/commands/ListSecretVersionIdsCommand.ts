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

import { ListSecretVersionIdsRequest, ListSecretVersionIdsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSecretVersionIdsCommand,
  serializeAws_json1_1ListSecretVersionIdsCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface ListSecretVersionIdsCommandInput extends ListSecretVersionIdsRequest {}
export interface ListSecretVersionIdsCommandOutput extends ListSecretVersionIdsResponse, __MetadataBearer {}

/**
 * <p>Lists the versions for a secret. </p>
 *          <p>To list the secrets in the account, use <a>ListSecrets</a>.</p>
 *          <p>To get the secret value from <code>SecretString</code> or <code>SecretBinary</code>,
 *       call <a>GetSecretValue</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:ListSecretVersionIds</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html#awssecretsmanager-actions-as-permissions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ListSecretVersionIdsCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ListSecretVersionIdsCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new ListSecretVersionIdsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecretVersionIdsCommandInput} for command's `input` shape.
 * @see {@link ListSecretVersionIdsCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class ListSecretVersionIdsCommand extends $Command<
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSecretVersionIdsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSecretVersionIdsCommandInput, ListSecretVersionIdsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "ListSecretVersionIdsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecretVersionIdsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSecretVersionIdsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSecretVersionIdsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSecretVersionIdsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSecretVersionIdsCommandOutput> {
    return deserializeAws_json1_1ListSecretVersionIdsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
