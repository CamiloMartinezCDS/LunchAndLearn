/* Amplify Params - DO NOT EDIT
	API_LUNCHAPI_FRIENDREQUESTTABLE_ARN
	API_LUNCHAPI_FRIENDREQUESTTABLE_NAME
	API_LUNCHAPI_GRAPHQLAPIIDOUTPUT
	API_LUNCHAPI_MENUITEMTABLE_ARN
	API_LUNCHAPI_MENUITEMTABLE_NAME
	API_LUNCHAPI_RESERVATIONTABLE_ARN
	API_LUNCHAPI_RESERVATIONTABLE_NAME
	API_LUNCHAPI_RESTAURANTTABLE_ARN
	API_LUNCHAPI_RESTAURANTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const region = process.env.REGION;
const dynamodb = new AWS.DynamoDB.DocumentClient();
const FRIEND_REQUEST_TABLE_NAME = process.env.API_LUNCHAPI_FRIENDREQUESTTABLE_NAME;
const RESERVATION_TABLE_NAME = process.env.API_LUNCHAPI_RESERVATIONTABLE_NAME;
const RESTAURANT_TABLE_NAME = process.env.API_LUNCHAPI_RESTAURANTTABLE_NAME;
const MENU_ITEM_TABLE_NAME = process.env.API_LUNCHAPI_MENUITEMTABLE_NAME;
AWS.config.update({ region });

async function fetchRestaurantById(id) {
	let queryParams = {
        TableName: RESTAURANT_TABLE_NAME,
        Key: {
            id,
        }
	}
	console.log('fetchRestaurantById => ', queryParams);
	return dynamodb.get(queryParams).promise();
}

function fetchMyFriends(userId) {
	const checkPreviousInvitation = {
        TableName: FRIEND_REQUEST_TABLE_NAME,
        FilterExpression: "CONTAINS (#relates, :id)",
        ExpressionAttributeValues: {
            ":id": userId,
        },
        ExpressionAttributeNames: {
            "#relates": "relates"
        },
    }
    console.log('fetchMyFriends => ', checkPreviousInvitation);
    return dynamodb.scan(checkPreviousInvitation).promise();
}

function fetchRestaurantDishes(restaurantId) {
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
    console.log('fetchRestaurantDishes => ', checkPreviousInvitation);
    return dynamodb.scan(checkPreviousInvitation).promise();
}

exports.handler = async (event) => {
	const { restaurantId, arrivalDate, dishes } = event.arguments.input;
	let { attendants } = event.arguments.input;
	const userId = event.identity.sub;
	const restaurant = await fetchRestaurantById(restaurantId);
	if (!restaurant.Item) {
		throw new Error('Restaurant not found');
	}
	if (attendants && attendants.length) {
		const myFriends = await fetchMyFriends(userId);
		attendants = attendants.filter(id => myFriends.find(friend => friend === id));
	}
	const availableDishes = await fetchRestaurantDishes(restaurantId);
	const filteredDishes = dishes.filter(dishId => availableDishes.Items.find(dish => dish.id === dishId));
	const now = new Date().toISOString();
	const id = uuidv4();
	const Item = {
		id,
		attendants,
		restaurantId,
		arrivalDate,
		dishes: filteredDishes,
		createdAt: now,
		updatedAt: now,
		__typename: "Reservation",
	};
	const createReservation = {
		TableName: RESERVATION_TABLE_NAME,
		ReturnValues: "ALL_OLD", // put should respond with the new values with "ALL_NEW" but for some 
		Item,
	}
	console.log('createReservation => ', createReservation);
	await dynamodb.put(createReservation).promise();
    return Item;
};
