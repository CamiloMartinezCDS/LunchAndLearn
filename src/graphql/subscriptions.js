/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
      id
      name
      owner
      location {
        lat
        lon
      }
      address
      description
      profilePicture {
        bucket
        region
        key
      }
      menu {
        items {
          id
          restaurantId
          name
          price
          ingredients
          serves
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
      id
      name
      owner
      location {
        lat
        lon
      }
      address
      description
      profilePicture {
        bucket
        region
        key
      }
      menu {
        items {
          id
          restaurantId
          name
          price
          ingredients
          serves
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
      id
      name
      owner
      location {
        lat
        lon
      }
      address
      description
      profilePicture {
        bucket
        region
        key
      }
      menu {
        items {
          id
          restaurantId
          name
          price
          ingredients
          serves
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem {
    onCreateMenuItem {
      id
      restaurantId
      name
      price
      ingredients
      serves
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem {
    onUpdateMenuItem {
      id
      restaurantId
      name
      price
      ingredients
      serves
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem {
    onDeleteMenuItem {
      id
      restaurantId
      name
      price
      ingredients
      serves
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile {
    onCreateUserProfile {
      id
      username
      email
      profilePicture {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile {
    onUpdateUserProfile {
      id
      username
      email
      profilePicture {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile {
    onDeleteUserProfile {
      id
      username
      email
      profilePicture {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFriendRequest = /* GraphQL */ `
  subscription OnCreateFriendRequest($owner: String!, $relates: String!) {
    onCreateFriendRequest(owner: $owner, relates: $relates) {
      id
      owner
      relates
      fromId
      toId
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFriendRequest = /* GraphQL */ `
  subscription OnUpdateFriendRequest($owner: String!, $relates: String!) {
    onUpdateFriendRequest(owner: $owner, relates: $relates) {
      id
      owner
      relates
      fromId
      toId
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFriendRequest = /* GraphQL */ `
  subscription OnDeleteFriendRequest($owner: String!, $relates: String!) {
    onDeleteFriendRequest(owner: $owner, relates: $relates) {
      id
      owner
      relates
      fromId
      toId
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation {
    onCreateReservation {
      id
      restaurantId
      attendants
      arrivalDate
      dishes {
        items {
          id
          restaurantId
          name
          price
          ingredients
          serves
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation {
    onUpdateReservation {
      id
      restaurantId
      attendants
      arrivalDate
      dishes {
        items {
          id
          restaurantId
          name
          price
          ingredients
          serves
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation {
    onDeleteReservation {
      id
      restaurantId
      attendants
      arrivalDate
      dishes {
        items {
          id
          restaurantId
          name
          price
          ingredients
          serves
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
