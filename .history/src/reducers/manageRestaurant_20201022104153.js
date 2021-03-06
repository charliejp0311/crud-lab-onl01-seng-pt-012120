import cuid from 'cuid';
import { combineReducers } from "redux";

//not working lab says combine reducers
// export default function manageRestaurants(state = {
//     restaurants: [],
//     reviews: [],
// }, action) {
//     switch (action.type) {
//         case "ADD_RESTAURANT":
//             const restaurant = {id: cuid(), text: action.restaurant.text}
//             return{
//                 ...state,
//                 restaurants:[
//                     ...state.restaurants, 
//                     restaurant]};
    
//         default:
//             return state;
//     }

// }

function restaurantReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {id:cuid(), ...action.text}
            console.log(restaurant)
            return state.concat(restaurant);

        case 'DELETE_RESTAURANT':
            return state.filter(restaurant=>restaurant.id!==action.id);
    
        default:
            return state;
    }
}

function reviewReducer(state = [], action){
    switch (action.type) {
        case 'ADD_REVIEW':
            const review = {id: cuid(), text: action.text}
            return [...state, review];
    
        case 'DELETE_RESTAURANT':
            return state.filter(review=>review.restaurantId!==action.id);
        case 'DELETE_REVIEW':
            return state.filter(review=>review.id!==action.id);
        default:
            return state;
    }
}

export default combineReducers({
    restaurants: restaurantReducer,
    reviews: reviewReducer,
})
