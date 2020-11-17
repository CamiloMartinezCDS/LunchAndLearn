/* Amplify Params - DO NOT EDIT
	API_LUNCHAPI_GRAPHQLAPIIDOUTPUT
	API_LUNCHAPI_MENUITEMTABLE_ARN
	API_LUNCHAPI_MENUITEMTABLE_NAME
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const region = process.env.REGION;
const dynamodb = new AWS.DynamoDB.DocumentClient();
const MENU_ITEM_TABLE_NAME = process.env.API_LUNCHAPI_MENUITEMTABLE_NAME;
AWS.config.update({ region });

// This maybe should be implemented with a query instead of an scan
function scanTable(restaurantId) {
	const checkPreviousInvitation = {
        TableName: MENU_ITEM_TABLE_NAME,
        FilterExpression: "#restaurantId = :id",
        ExpressionAttributeValues: {
            ":id": restaurantId,
        },
        ExpressionAttributeNames: {
            "#restaurantId": "restaurantId"
        },
    }
    return dynamodb.scan(checkPreviousInvitation).promise();
}

exports.handler = async (event) => {
    const { ofRestaurant } = event.arguments;
    const limit = 5;
    const dishes = await scanTable(ofRestaurant);
    const topDishes = dishes.Items.slice(0, limit);
    return topDishes;
};
