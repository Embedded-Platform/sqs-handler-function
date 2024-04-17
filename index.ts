console.log('Loading function');
import {Handler, SQSEvent} from 'aws-lambda';

export const handler: Handler = async (event: SQSEvent): Promise<string> => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    for (const { messageId, body } of event.Records) {
        console.log('SQS message %s: %j', messageId, body);
    }
    return `Successfully processed ${event.Records.length} messages.`;
};
